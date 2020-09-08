import pandas as pd
import os
os.chdir('D:\Downloads_2')
print(os.getcwd())
import zstandard as zstd
import json
import lzma
import bz2
import sys
import csv
import time
from datetime import datetime
import logging
from textblob import TextBlob
logging.basicConfig(format='%(asctime)s - %(levelname)s: %(message)s',
                    level=logging.INFO,datefmt='%Y-%m-%d %H:%M:%S',filename="log_data.log")
arr = os.listdir()


def bitcoin_date():
    #insert bitcoin price data
    df = pd.read_csv("bitstamp.csv")
    dates = []
    minute = []
    hour = []
    day = []
    month = []
    year = []

    for i in range(len(df["Timestamp"])):
        dates.append(datetime.fromtimestamp(df["Timestamp"][i]))
        year.append(datetime.fromtimestamp(df["Timestamp"][i]).year)
        month.append(datetime.fromtimestamp(df["Timestamp"][i]).month)
        day.append(datetime.fromtimestamp(df["Timestamp"][i]).day)
        hour.append(datetime.fromtimestamp(df["Timestamp"][i]).hour)
        minute.append(datetime.fromtimestamp(df["Timestamp"][i]).minute)

    dt = df["Weighted_Price"]
    dp = df["Timestamp"]
    df = pd.concat([dt, dp], axis=1)

    df.insert(0, "Minute", minute, True)
    df.insert(0, "Hour", hour, True)
    df.insert(0, "Day", day, True)
    df.insert(0, "Month", month, True)
    df.insert(0, "Year", year, True)

    df = df.dropna(subset=['Weighted_Price'])

    df.to_csv('bitcoin_date.csv', index=False)


def ethereum_date():
    #insert ethereum price data
    df = pd.read_csv("ETH_1min.csv")
    dates = []
    minute = []
    hour = []
    day = []
    month = []
    year = []


    for i in range(len(df["Unix Timestamp"])):
        datum = datetime.fromtimestamp((df["Unix Timestamp"][i]) / 1000)
        dates.append(datum)
        year.append(datum.year)
        month.append(datum.month)
        day.append(datum.day)
        hour.append(datum.hour)
        minute.append(datum.minute)

    dt = df

    dt['Weighted_Price'] = df["Open"]
    dp = df
    dp["Timestamp"] = df["Unix Timestamp"] / 1000
    df = pd.concat([dt, dp], axis=1)

    df.insert(0, "Minute", minute, True)
    df.insert(0, "Hour", hour, True)
    df.insert(0, "Day", day, True)
    df.insert(0, "Month", month, True)
    df.insert(0, "Year", year, True)

    df = df.dropna(subset=['Weighted_Price'])

    df = df[["Year", "Month", "Day", "Hour", "Minute", "Weighted_Price"]]
    df.to_csv('ethereum_date.csv', index=False)

#Use bitcoin_date and ethereum_date here
#adds hour before at each time.
def create_hour_earlier(input,output):
    df = pd.read_csv(input)
    hour = 1
    starting =[]
    ending=[]
    for i in range(len(df['Hour'])):

        if hour !=df['Hour'][i]:
            year=df['Year'][i]
            month=df['Month'][i]
            day=df['Day'][i]
            hour=df['Hour'][i]
            if hour != df['Hour'][i]:
                hour = df['Hour'][i]
            timing = datetime.datetime(year=year, month=month, day=day, hour=hour)
            after = str(int(time.mktime(timing.timetuple())-3600))
            timing =datetime.datetime(year=year, month=month, day=day, hour=hour)
            before = str(int(time.mktime(timing.timetuple())))
        else:
            pass
        starting.append(after)
        ending.append(before)

    df.insert(7, "Start", starting, True)
    df.insert(8, "End", ending, True)


    df.to_csv(output,index=False)

# Initially the idea was to combine all submissions so I could circumvent IBM API calls limit (combine_submissions and formatting)
# but eventually chose to use Python sentiment analyser


# def combine_submissions(input):
#     dt = pd.read_csv(input).fillna("")
#
#     for i in range(len(df['Year'])-1):
#         if df.iloc[i,1] == df.iloc[i+1,1] and df.iloc[i,2] == df.iloc[i+1,2] and df.iloc[i,3] == df.iloc[i+1,3]\
#             and df.iloc[i,4] == df.iloc[i+1,4]:
#             df.iloc[i+1,8] = str(df.iloc[i,8])+";;"+str(df.iloc[i+1,8])
#             df.iloc[i+1,9] = str(df.iloc[i,9])+";;"+str(df.iloc[i+1,9])
#     dt.columns = ['Year', 'Month', 'Day', 'Hour', 'Minute', 'Price', 'Timestamp', 'sentiment_before_hour',
#                           'sentiment_at_hour']
#
#     # concat is good but I still cannot merge because I first have to create the sentiment for every hour, then I can merge
#     # now we have 2 submissions at minute 41 so we get errors when we merge
#     dt = dt.merge(df, how="left",
#                   left_on=['sentiment_before_hour', 'sentiment_at_hour', 'Year', 'Month', 'Day', 'Hour', 'Minute',
#                            'Timestamp'],
#                   right_on=['sentiment_before_hour', 'sentiment_at_hour', 'Year', 'Month', 'Day', 'Hour', 'Minute',
#                             'Timestamp'])
# df.to_csv('ibm_tone.csv')
#
#
# def formatting(input,output):
#     df = pd.read_csv(input).fillna("")
#
#     count = 0
#     val =''
#     replaced=''
#     before_dict ={}
#     for j in range(len(df['After'])):
#         for i in df.columns:
#             if i =='After' or i =='Before':
#                 continue
#             replaced = df[i][j].replace('.',"")
#             replaced = replaced.replace('?', "")
#             replaced = replaced.replace('!', "")
#             val = val+replaced
#
#         before_dict[str(df['Before'][j])]=val
#         val = ''
#         count +=1
#     df = pd.DataFrame.from_dict(before_dict, orient='index')
#     output = output + ".csv"
#
#     df.to_csv(output)

def bz2_reader(input,output):
    #bz2 decompressor
    dictio={}
    #track bad data
    count_created = 0
    count_created_utc = 0
    count_good = 0
    count_bad = 0
    with bz2.open(input, "rt") as bz_file:
        for line in bz_file:
            label = line.rstrip('\n')

            object = json.loads(label)
            try:

                if object['subreddit'] == 'CryptoCurrency':
                    timing = datetime.fromtimestamp(object['created_utc'])
                    year = timing.year
                    month = timing.month
                    day = timing.day
                    hour = timing.hour
                    minute = timing.minute
                    sentiment_time = datetime(year=year, month=month, day=day, hour=hour)
                    after = int(time.mktime(sentiment_time.timetuple()))
                    before = after - 3600
                    dictio[object['created_utc']] = [year, month, day, hour, minute, before, after,
                                                     object['title'], object['selftext']]
                    count_good += 1
                    count_created_utc += 1
            except:
                try:

                    if object['subreddit'] == 'CryptoCurrency':
                        timing = datetime.fromtimestamp(object['created'])
                        year = timing.year
                        month = timing.month
                        day = timing.day
                        hour = timing.hour
                        minute = timing.minute
                        sentiment_time = datetime(year=year, month=month, day=day, hour=hour)
                        after = int(time.mktime(sentiment_time.timetuple()))
                        before = after - 3600
                        dictio[object['created']] = [year, month, day, hour, minute, before, after,
                                                     object['title'], object['selftext']]
                        count_good += 1
                        count_created += 1
                except:
                    count_bad += 1

        df = pd.DataFrame.from_dict(dictio, orient='index',
                                    columns=['year', 'month', 'day', 'hour', 'minute',
                                             'sentiment_before_hour', 'sentiment_at_hour', 'title', 'selftext'])
        df.index.name = 'timestamp'
        output = output + ".csv"
        df.to_csv(output)
        print('Done with %s' % output)
        logging.info('Done with %s, %d good submissions, %d errors, %d created, %d created_utc' % (
        output, count_good, count_bad, count_created, count_created_utc))


def zst_reader(input,output):
    dictio = {}
    count_good = 0
    count_bad = 0
    count_created = 0
    count_created_utc =0
    with open(input, 'rb') as fh:
        dctx = zstd.ZstdDecompressor()
        count = 0
        with dctx.stream_reader(fh) as reader:
            previous_line = ""
            while True:
                chunk = reader.read(16777216)
                if not chunk:
                    break
                string_data = chunk.decode('utf-8')
                lines = string_data.split("\n")
                for i, line in enumerate(lines[:-1]):
                    if i == 0:
                        line = previous_line + line
                    object = json.loads(line)
                    #count +=1
                    try:
                        if object['subreddit'] =='CryptoCurrency':
                            timing = datetime.fromtimestamp(object['created_utc'])
                            year = timing.year
                            month = timing.month
                            day = timing.day
                            hour = timing.hour
                            minute = timing.minute
                            sentiment_time = datetime(year=year, month=month, day=day, hour=hour)
                            after = int(time.mktime(sentiment_time.timetuple()))
                            before = after - 3600
                            dictio[object['created_utc']] = [year, month, day, hour, minute, before, after,
                                                             object['title'], object['selftext']]
                            count_good += 1
                            count_created_utc += 1
                    except:
                        try:

                            if object['subreddit'] == 'CryptoCurrency':
                                timing = datetime.fromtimestamp(object['created'])
                                year = timing.year
                                month = timing.month
                                day = timing.day
                                hour = timing.hour
                                minute = timing.minute
                                sentiment_time = datetime(year=year, month=month, day=day, hour=hour)
                                after = int(time.mktime(sentiment_time.timetuple()))
                                before = after - 3600
                                dictio[object['created']] = [year, month, day, hour, minute, before, after,
                                                                 object['title'], object['selftext']]
                                count_good += 1
                                count_created += 1
                        except:
                            count_bad += 1



                    # do something with the object here
                previous_line = lines[-1]
            df = pd.DataFrame.from_dict(dictio, orient='index',columns = ['year', 'month', 'day', 'hour', 'minute', 'sentiment_before_hour', 'sentiment_at_hour', 'title', 'selftext'])
            df.index.name = 'timestamp'

            output = output + ".csv"

            df.to_csv(output)
            print('Done with %s' % output)
            logging.info('Done with %s, %d good submissions, %d errors, %d created, %d created_utc' % (output, count_good, count_bad, count_created,count_created_utc))

def xz_reader(input,output):
    dictio = {}
    count_good = 0
    count_bad = 0
    count_created = 0
    count_created_utc = 0
    obj = lzma.LZMAFile(input, mode="rb")
    previous_line = ""
    while True:
        chunk = obj.read(16777216)
        if not chunk:
            break
        string_data = chunk.decode('utf-8')
        lines = string_data.split("\n")
        for i, line in enumerate(lines[:-1]):
            if i == 0:
                line = previous_line + line
            object = json.loads(line)
            try:
                if object['subreddit'] == 'CryptoCurrency':
                    timing = datetime.fromtimestamp(object['created_utc'])
                    year = timing.year
                    month = timing.month
                    day = timing.day
                    hour = timing.hour
                    minute = timing.minute
                    sentiment_time = datetime(year=year, month=month, day=day, hour=hour)
                    after = int(time.mktime(sentiment_time.timetuple()))
                    before = after - 3600
                    dictio[object['created_utc']] = [year, month, day, hour, minute, before, after,
                                                     object['title'], object['selftext']]
                    count_good += 1
                    count_created_utc += 1
            except:
                try:

                    if object['subreddit'] == 'CryptoCurrency':
                        timing = datetime.fromtimestamp(object['created'])
                        year = timing.year
                        month = timing.month
                        day = timing.day
                        hour = timing.hour
                        minute = timing.minute
                        sentiment_time = datetime(year=year, month=month, day=day, hour=hour)
                        after = int(time.mktime(sentiment_time.timetuple()))
                        before = after - 3600
                        dictio[object['created']] = [year, month, day, hour, minute, before, after,
                                                     object['title'], object['selftext']]
                        count_good += 1
                        count_created += 1
                except:
                    count_bad += 1

            # if count % 1000 == 0:
            #     print(count)

        previous_line = lines[-1]
    df = pd.DataFrame.from_dict(dictio, orient='index',
                                columns=['year', 'month', 'day', 'hour', 'minute', 'sentiment_before_hour',
                                         'sentiment_at_hour', 'title', 'selftext'])
    df.index.name = 'timestamp'
    output = output + ".csv"

    df.to_csv(output)

    print('Done with %s' % output)
    logging.info('Done with %s, %d good submissions, %d errors, %d created, %d created_utc' % (
    output, count_good, count_bad, count_created, count_created_utc))

def decompress_all(arr):
    for i in arr:
        if i.endswith(".zst"):
            if "RS_2020" in i:
                input = i
                output = i.replace(".zst",'')
                zst_reader (input,output)
            else:
                pass
        if i.endswith(".bz2"):
            input = i
            output = i.replace(".bz2", '')
            bz2_reader(input, output)
        if i.endswith(".xz"):
            input = i
            output = i.replace(".xz", '')
            xz_reader(input, output)



def combine_data(input_price):
    frames = []
    # df is al submission data with sentiment analysis

    for i in arr:
        if i.endswith(".csv"):
            if "RS_" in i:
                dt = pd.read_csv(i)
                dt.columns = ['Timestamp','Year','Month','Day','Hour','Minute','sentiment_before_hour','sentiment_at_hour','Title','Selftext']


                frames.append(dt)
            else:
                pass
    df = pd.concat(frames)
    df["Text"] = ""
    df['Polarity']=0
    df['Subjectivity'] = 0
    df=df.fillna('')
    for i in range(len(df['Selftext'])):

        if df.iloc[i,9] == '[deleted]' or df.iloc[i,9] == '':
            df.iloc[i,10] = str(df.iloc[i,8])
        else:
            df.iloc[i, 10] = str(df.iloc[i,8]) +". " +str(df.iloc[i,9])
        df.iloc[i,11] = TextBlob(df.iloc[i,10]).sentiment.polarity
        df.iloc[i,12] = TextBlob(df.iloc[i,10]).sentiment.subjectivity
    # output from create_hour_earlier
    dt = pd.read_csv(input_price)
    dt = dt[(dt['Year']==2015) | (dt['Year']==2016) | (dt['Year']==2017) | (dt['Year']==2018) | (dt['Year'] ==2019) |  (dt['Year']==2020)]

    #In order to conver to numpy

    df = df.dropna(subset=['Timestamp','Year','Month','Day','Hour','Minute'])
    df['Timestamp'] = pd.to_numeric(df['Timestamp'], errors='coerce')
    df['Polarity'] = pd.to_numeric(df['Polarity'], errors='coerce')
    df['Subjectivity'] = pd.to_numeric(df['Subjectivity'], errors='coerce')
    df.Month = df.Month.astype(int)
    df.Day = df.Day.astype(int)
    df.Hour = df.Hour.astype(int)
    df.Minute = df.Minute.astype(int)
    df.sentiment_before_hour = df.sentiment_before_hour.astype(int)
    df.sentiment_at_hour = df.sentiment_at_hour.astype(int)
    df.Polarity = df.Polarity.astype(float)
    df.Subjectivity = df.Subjectivity.astype(float)

    #set time
    now = time.time()
    #set pointers
    old_dt = dt
    trigger = 0
    count = 0
    df = df[["Timestamp","Polarity",'Subjectivity']]
    dt = dt[["Timestamp"]]
    dt['Tot_polarity'] = 0.0
    dt['Tot_subjectivity'] = 0.0
    dt['Tot_submissions'] = 0.0

    submissions = df.to_numpy()
    prices = dt.to_numpy()

    print(submissions)
    print('starting numpy')
    print(prices)
    for i in range(len(prices)):
        if i % 100000 == 0:
            print("We are at row %d after %f seconds" % (i, (time.time() - now)))
            print("We estimate to need another %f seconds for another %f rows" % (((1/((i+0.1)/(2300000))) * (time.time() - now)), (2300000 - i)))
        for j in range(trigger,len(submissions)):
            if submissions[j][0]-prices[i][0] >= 3600.0:
                break
            if submissions[j][0] - prices[i][0] >= 0.0:
                count += 1
                if count ==1:
                    trigger = j
            else:
                continue
            prices[i][1] += submissions[j][1]
            prices[i][2] += submissions[j][2]
            prices[i][3] += 1

    dataset = pd.DataFrame(prices, columns=["Timestamp", "Tot_polarity", 'Tot_subjectivity', 'Tot_submissions'])
    dataset = dataset.merge(old_dt, on='Timestamp', copy=False)
    dataset.to_csv('final_index.csv')

    dataset.to_csv('final.csv',index=False)



        # SLOWCODE
    # for i in range(len(dt['Timestamp'])):
    #     count = 0
    #
    #     if i % 1000 == 0:
    #         print("We are at row %d after %f seconds" % (i, (time.time() - now)))
    #         print("We estimate to need %f minutes for another %f rows" % (
    #         ((230000 / (i + 0.1)) * (time.time() - now)) / 60, (230000 - i)))
    #
        # for j in range(trigger,len(df['Selftext'])):
        #
        #     if df.iloc[j,0] -dt.iloc[i,6] >= 3600.0:
        #         break
        #     if df.iloc[j,0] -dt.iloc[i,6] >= 0.0:
        #         count += 1
        #         if count == 1:
        #             trigger = j
        #     else:
        #         continue
        #
        #
        #
        #
        #
        #
        #     dt.iloc[i,11] += 1
        #     dt.iloc[i,9] += df.iloc[j,11]
        #     dt.iloc[i,10] += df.iloc[j,12]
        #
        #


