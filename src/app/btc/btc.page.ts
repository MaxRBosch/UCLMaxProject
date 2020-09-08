import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import axios from 'axios'
import { Storage } from '@ionic/storage';
import Swal from 'sweetalert2'
import {PredictionsService} from '../services/predictions.service'
 

import { findLast } from '@angular/compiler/src/directive_resolver';
import { AlertController } from '@ionic/angular';
import { MinvalService } from '../services/minval.service';
import { environment } from 'src/environments/environment.prod';
import { RegistrationService } from '../services/registration.service';
import { LoginService } from '../services/login.service';
import { Protection } from '../services/protection.service';

//  these imports are done to get rid of the TS warning -ts-file-is-part-of-the-typescript-compilation-but

@Component({
  selector: 'app-btc',
  templateUrl: './btc.page.html',
  styleUrls: ['./btc.page.scss'],
})
export class BtcPage implements OnInit {

  @ViewChild("lineCanvas") lineCanvas: any;
  private lineChart: Chart;
  public loaded: string = 'init';

  public predictions: Predictions[] = [];
  public rendered: string = 'rendered';
  min_predict_value:string;
time:any;
price:number;
hist_time:any =[]
hist_price:any =[]
pred_price:any =[]
pred_time:any =[]
ibm_prediction_time:string
public logged_in_wait: boolean




constructor(private storage: Storage, private alertCtrl: AlertController, private ibmmodel: PredictionsService, public valService: MinvalService,public login: LoginService

  ) { }
    load(): Promise<boolean> {

      

      return new Promise((resolve) => {
  
        this.storage.get('predictions_btc').then((predictions) => {
  
          if(predictions != null){
            this.predictions = predictions;
           
            
            
            
          }
  
          resolve(true);
  
        });
  
      });
    }
  ngOnInit() {  
    this.isLoggedin()

    this.min_predict_value = this.valService.min_value()

    
    
     this.getprice();
    
    
    


  }
  async isLoggedin(){ this.logged_in_wait = await this.login.check_token()}



async save(prediction) {
  this.hist_time =[]
  this.hist_price =[]
  this.pred_price =[]
  this.pred_time =[]
 await this.storage.set('predictions_btc', this.predictions);
 var userID = await this.storage.get('token')
 
 await this.load();
  
 await this.get_hist_price();
 await this.get_chart();
 if (userID = null){userID = 39}

 let res = await axios.get('https://nodemrbosch2.azurewebsites.net/api/addprediction',{params:{userID:userID,type:'btc',time:Date.now(),value:prediction}});

}

  async get_chart(){
    setInterval(async() =>{ await this.getprice()},60000); 
    

   


    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: this.hist_time,
       
        datasets: [
          {
            fill: true,
            label: "Actual price",
            lineTension: 0.3,
            backgroundColor: "rgb(5, 156, 45, 0.6)",
            borderColor: "rgba(220, 220, 220, 1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(220, 220, 220, 0.5)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.hist_price,
            spanGaps: false,
            
            
            datalabels: {
              color: 'black',
              align: 'end',
              display: false

              
              	
          }
          },{
            label: "Prediction",
            data: this.pred_price,
            borderWidth: 0.4,
            pointRadius: 5,
            backgroundColor: "purple",
            borderColor: "purple",
            pointBackgroundColor: "purple",
            pointBorderColor: "white",
            pointHoverBackgroundColor: "purple",
            pointHoverBorderColor: "purple",
            type: 'scatter',
            datalabels: {
              
              color: 'black',
              align: 'left',
              display: 'auto'
              
              	
          }
         }]
      },options: {  maintainAspectRatio: false, 
        responsive: true, 
        title: {
          display: false,
          text: 'Bitcoin price ($) in 2020'
      },
        scales: {
          xAxes: [{
              distribution : 'series',
              display: true,
              ticks: {fontSize: 10,
                maxTicksLimit: 4.1,
                    },
              scaleLabel: {
                  display: false,
                  labelString: "Date",
              },
              gridLines: {
                borderDash: [8, 4],
                color: "#348632",
                display: false
            },
          }]
          ,
          yAxes: [{
            ticks: {
                min: Math.floor(Math.min((Math.min(...this.hist_price)),(Math.min(Math.min.apply(0, this.pred_price.filter(Boolean)))))/1000)*1000,
                max: Math.ceil(Math.max((Math.max(...this.hist_price)),(Math.max(...this.pred_price)))/1000)*1000,
               
          maxTicksLimit: ((Math.ceil(Math.max((Math.max(...this.hist_price)),(Math.max(...this.pred_price)))/1000))-(Math.floor(Math.min((Math.min(...this.hist_price)),(Math.min(Math.min.apply(0, this.pred_price.filter(Boolean)))))/1000)))+2,
          
            },
            gridLines: {
              borderDash: [8, 4],
              color: "#348632",
              display: false
          },
        }]
      },    
      legend: {
        display: true,
        position:'bottom',
        labels:
        {boxWidth:10,
          usePointStyle:true}
      }
      }
      
    });

  }
  // async ionViewWillEnter (){
    

  // }
 async ionViewDidEnter () {
  await this.isLoggedin()

  await this.load();
await this.get_hist_price();
await this.get_chart() 
return {'done':true}
  
}

async get_hist_price()
{
  
  var url = "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1h";
  const res = await axios.get(url)
  
  var i;
  var options = {
    hour12: false,hour:'numeric',day: 'numeric',month: 'numeric',
};
for (i = 0; i < res.data.length; i++) {

  
  this.hist_time.push(new Date(res.data[i][0]).toLocaleDateString('nl', options));
  this.hist_price.push(Math.floor(res.data[i][1]))
  this.pred_price.push(0)
  // this.pred_time.push(new Date(res.data[i][0]).toLocaleDateString('en', options))

}
var j;

for (j = 0; j < this.predictions.length; j++) {
  
  if (this.hist_time.includes(this.predictions[j].day_month)){
    
    this.pred_price[(this.hist_time.indexOf(this.predictions[j].day_month))] = this.predictions[j].price

}}
return {'length':this.pred_price.length}
}





async predict_ibm(){
  try{
  var year = parseInt(this.ibm_prediction_time.substr(0,4))

  }
  catch{Swal.fire('Please select a date and time for your prediction'); return{'val':[0,0,0]}}

  // Paste your Watson Machine Learning service apikey here
  
  // Use this code as written to get an access token from IBM Cloud REST API
  //
  Swal.fire('Please hold on while we are getting your prediction')
  Swal.showLoading()
   const res = await (await this.ibmmodel.predict_api(this.ibm_prediction_time,'btc')).prediction_ibm
   var array_values = await (await this.ibmmodel.predict_api(this.ibm_prediction_time,'btc')).time

if (res != null){
await this.show_prediction(res,array_values)
}else{Swal.fire({
  icon: 'error',
  title: 'The model is currently down',
text:'We have logged your error and will resolve it as soon as possible'})
    }
    return{'val':[0,0,0]}
  }
  

async show_prediction(prediction,array_values){
  var mins = array_values[4]
  mins >=10? mins = String(mins) : mins = '0' + String(mins)
  

  Swal.fire({
    title: 'You predicted 1 bitcoin to be ' + parseInt(prediction).toString()+' dollars in '+String(array_values[2])+"-"+String(array_values[1])+"-"+String(array_values[0])+" at "+String(array_values[3])+":"+mins,
    text: 'Do you want to save this prediction?',
    imageUrl: "../../assets/img/ML.png",
  imageWidth: 288,
  imageHeight: 162,
    showCloseButton: false,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:'Save',
    cancelButtonText:'Cancel',
    }).then(async (result) => {
      if (result.value){

        
  var options = {
    hour12: false,hour:'numeric',day: 'numeric',month: 'numeric',
}
var now = new Date().toLocaleDateString('nl', options)
var hour = String(((array_values[3])>=10)? array_values[3] : '0' + (array_values[3]));

var time = new Date().getTime()
  this.predictions.push({
    price: parseInt(prediction),
    day_month: String(array_values[2])+"-"+String(array_values[1])+" "+hour,
    timestamp: time,
    type: "Btc"
  });
  await this.save(prediction);
  return {'val':array_values}





  }})
  return {'val':array_values}
}




  
async getprice()
{

  this.min_predict_value = this.valService.min_value()

  try{

  var url = "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m";
  const res = await axios.get(url)
 

  
  if (res.data.length != 0){
    this.loaded = 'yes'}
    else {this.loaded='no'}
  // this.time = new Date(res.data[res.data.length-1][0]).toLocaleString()

  this.price = Math.floor(res.data[res.data.length-1][1])
  return {"price_btc":this.price}

  }
  catch {this.loaded = 'no';return}
  
}
}
export interface Predictions {
  price: number;
  day_month: any;
  timestamp: number;
  type: string;
  
}