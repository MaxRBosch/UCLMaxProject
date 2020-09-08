import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import axios from 'axios'
import { Storage } from '@ionic/storage';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { Predictions } from '../btc/btc.page';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import Swal from 'sweetalert2'
import { element } from 'protractor';
import { GraphsService } from '../services/graphs.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {@ViewChild("lineCanvas") lineCanvas: any;
  loaded = 'init'
  time :any
  public title: string = "Home";

  
  public predictions: Predictions[] = [];
 
  private lineChart: Chart;
price:number;
chart_numb:number;
bitcoin:Bitcoin[]=[]
ethereum:Ethereum[]=[]
dollars:Dollars[]=[]
bitcoin_display:any
ethereum_display:any
dollars_display:any
glob_price_btc:number;
glob_price_eth:number;
display_graph:any;
public logged_in_wait: boolean 





  constructor(private storage: Storage, private graphs: GraphsService, private login: LoginService
    ) { }
    load(): Promise<boolean> {
      return new Promise((resolve) => {
        this.storage.get('predictions_btc').then((predictions) => {
          if(predictions != null){
            this.predictions = predictions;             
          }           
        });
        
          resolve(true);
          return})
      ;   
    }
    load_porto(): Promise<boolean> {
      this.get_chart(this.dollars,'Dollars')
      return new Promise((resolve) => {
        this.storage.get('ethereum').then((ethereum) => {
  
          if(ethereum != null){
            this.ethereum = ethereum;
           
            
          }else{this.ethereum = [{amount:0,timestamp:Date.now(),actual_price:0}];
           }
           this.ethereum_display = this.ethereum[this.ethereum.length - 1].amount

        });
          this.storage.get('dollars').then((dollars) => {
    
            if(dollars != null){
              this.dollars = dollars;

            }else{this.dollars = [{amount:0,timestamp:Date.now()}
           ]

         }
         this.dollars_display = this.dollars[this.dollars.length - 1].amount

          });

        this.storage.get('bitcoin').then((bitcoin) => {
          if(bitcoin != null){
            this.bitcoin = bitcoin;

           
            
            
            
          }else{this.bitcoin = [{amount:0,timestamp:Date.now(),actual_price:0}]
            }

            this.bitcoin_display = this.bitcoin[this.bitcoin.length - 1].amount


          resolve(true);
          return})
      });  
    }
  ngOnInit() {  
this.isLoggedin()
      this.getprice();
       this.load();
       
    
    
    


  }
  
  async isLoggedin(){ this.logged_in_wait = await this.login.check_token();
    }
  
    

  
  
  async ionViewDidEnter () {
    
    await this.isLoggedin()

    await this.load();
    await this.load_porto();
    await this.get_chart(this.dollars,'Dollars')


    return {'done':true}
  }
  

  async getprice() {
    var price_eth :number
    var price_btc :number
    try {
      var url_btc = "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m";
      var url_eth = "https://api.binance.com/api/v1/klines?symbol=ETHUSDT&interval=1m"
      const btc = await axios.get(url_btc)
      const eth = await axios.get(url_eth)
      if (btc.data.length != 0 && eth.data.length != 0){
        this.loaded = 'yes'
        }
      else {this.loaded='no'}
      this.time = new Date(btc.data[btc.data.length-1][0]).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
      price_btc = Math.floor(btc.data[btc.data.length-1][1])
      price_eth = Math.floor(eth.data[eth.data.length-1][1])

      //These global variables are declared so they display the price but they are not used for any other functions.
      this.glob_price_btc = price_btc
      this.glob_price_eth = price_eth
      
      return {'price_btc':price_btc,'price_eth':price_eth}
    }
    catch { this.loaded = 'no';
      return
    }
  }


  async get_chart(currency,stringcurrency){
    setInterval(async() =>{  this.getprice()},60000);    
    // let values = await this.get_hist_price(this.predictions)
    this.display_graph = stringcurrency
    this.lineChart = await this.display_crypto_btc(currency,stringcurrency)
    
    // this.lineChart = await this.graphs.display_crypto_btc(this.ethereum)
  }


  async display_crypto_btc(values,currency){
    var hist_time:any =[]
    var pred_price:any =[]
    var hist_price:any =[]
    var j 
    for (j = 0; j < values.length; j++) {
      var date = new Date(values[j].timestamp);
      var month = date.getMonth() +1; 
      var day =date.getDate(); 
      var hour = date.getHours(); 
      hist_time.push( day +"/"+month+"-"+hour )
      pred_price.push(values[j].amount)
    }
    if (values.length ==1)
    {hist_time = ["Make some purchases first!",];
      pred_price=[0,1]}
   
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: hist_time,
       
        datasets: [

          
          {
            label: currency,
            fill: true,
            backgroundColor: "rgb(5, 156, 45, 1)",
            borderColor: "rgba(220, 220, 220, 1)",
            borderCapStyle: "butt",
            borderDash: [],
            barPercentage: 1,
            

            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(220, 220, 220, 0.5)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: pred_price,
            spanGaps: false,
            datalabels:{
            display:false},
            
          }       
         ]
      },
    
      options: {  maintainAspectRatio: false, 
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
                maxTicksLimit: 4,
                autoSkip: true,
          maxRotation: 0,
          minRotation: 0
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
                min: Math.floor(Math.min(...pred_price)),
                max: Math.floor(Math.max(...pred_price)),
                maxTicksLimit: 2,
               
                
            },
            gridLines: {
              borderDash: [8, 4],
              color: "#348632",
              display: false
          },
        }]
      },    
      legend: {
        display: false,
        position:'bottom',
        labels:
        {boxWidth:10,
          usePointStyle:false}
      }
      }});
     return this.lineChart
  
  }





  async get_hist_price(predictions){

   var hist_time:any =[]
   var hist_price:any =[]
   var pred_price:any =[]
   var url = "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1h";
  const res = await axios.get(url)
  
  var j;
  for (j = 0; j < predictions.length; j++) {
    var date = new Date(predictions[j].timestamp);
    var month = date.getMonth() +1; 
    var day =date.getDate(); 
    var hour = date.getHours(); 
    hist_time.push( day +"/"+month+"-"+hour+":00" )
    pred_price.push(predictions[j].price)
    var i;
    for (i = 0; i < res.data.length; i++) {
      var date_api = new Date(res.data[i][0])
      if (date_api.getMonth()+1 == month && date_api.getDate() == day && date_api.getHours() == hour){
        hist_price.push(Math.floor(res.data[i][1]))}}
    
      
    }
   
  
  
  return {'time':hist_time,'hist_price':hist_price,'pred_price':pred_price}}


async buy(){

  try{
    // this is just to test the connection and throw an error when there is none
    var test = await axios.get('https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m')

  let prices = await this.getprice()

  Swal.fire({
    title: 'Do you want to buy Bitcoin or Ethereum?',
    icon: 'info',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:'Bitcoin',
    cancelButtonText:'Ethereum',
  }).then(async (result) => {
    if (result.value) { 
      const{value: buying} = await Swal.fire({
        title: 'One Bitcoin is currently $'+ prices.price_btc+ ', how many would you like to buy?',
        input: 'number',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'}}})      
      if (buying) {
        Swal.fire({
          title: 'Are you sure you want to buy '+buying+" Bitcoin for $"+ prices.price_btc*Number(buying)+'?', 
    showCloseButton: false,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:'Yes',
    cancelButtonText: 'No'}
      ).then(async (result) =>{
          this.bitcoin.push({amount:this.bitcoin[this.bitcoin.length - 1].amount+Number(buying)
            ,timestamp:Date.now(),actual_price: prices.price_btc});
          this.dollars.push({amount:this.dollars[this.dollars.length - 1].amount-prices.price_btc*Number(buying),
            timestamp:Date.now()});
          await this.storage.set('bitcoin', this.bitcoin);
          await this.storage.set('dollars', this.dollars);
          await this.load_porto();
          return {'dollars':this.dollars[this.dollars.length - 1].amount,
          'bitcoin':this.bitcoin[this.bitcoin.length - 1].amount} })
      }
    } 
    else if (result.dismiss == Swal.DismissReason.cancel){ const{value: buying} = await Swal.fire({
      title: 'One Ethereum is currently $'+ prices.price_eth+ ', how many would you like to buy?',
      input: 'number',
      showCancelButton: true,
      showCloseButton: false,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'}}}) 
if (buying) {
      Swal.fire({
        title: 'Are you sure you want to buy '+buying+" Ethereum for $"+ prices.price_eth*Number(buying)+'?',
       
  showCloseButton: false,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    'Yes',
  cancelButtonText:
    'No'
        
      }).then(async (result) =>{this.ethereum.push({amount: this.ethereum[this.ethereum.length - 1].amount+Number(buying), timestamp:Date.now(),actual_price: prices.price_eth});
        this.dollars.push({amount: this.dollars[this.dollars.length - 1].amount -  prices.price_eth*Number(buying),timestamp:Date.now()})

        await this.storage.set('ethereum', this.ethereum);
        await this.storage.set('dollars', this.dollars);
        await this.load_porto(); 
        return {'dollars':this.dollars[this.dollars.length - 1].amount,'ethereum':this.ethereum[this.ethereum.length - 1].amount} 

      })
      return}
    return}
  })
} catch{

  Swal.fire({
    icon: 'error',
    title: 'You have no active internet connection'})

}


}
  

async sell(){
try{
      // this is just to test the connection and throw an error when there is none

  var test = await axios.get('https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m')
  let prices = await this.getprice();
  
  Swal.fire({
    title: 'Do you want to sell Bitcoin or Ethereum?',
    icon: 'info',
   
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      'Bitcoin',
    cancelButtonText:
      'Ethereum',
  }).then(async (result) => {
    if (result.value) { 
      const{value: buying} = await Swal.fire({
        title: 'One Bitcoin is currently $'+ prices.price_btc+ '. You have '+this.bitcoin[this.bitcoin.length - 1].amount+' bitcoin, how many would you like to sell?',
        input: 'number',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
         
        }
      })      
      if (buying) {
        
        Swal.fire({
          title: 'Are you sure you want to sell '+buying+" Bitcoin for $"+ prices.price_btc*Number(buying)+'?',
         
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      'Yes',
    cancelButtonText:
      'No'
          
        }).then(async (result) =>{this.bitcoin.push({amount:this.bitcoin[this.bitcoin.length - 1].amount-Number(buying),timestamp:Date.now(),actual_price: prices.price_btc});
          this.dollars.push({amount:this.dollars[this.dollars.length - 1].amount +  prices.price_btc*Number(buying),timestamp:Date.now()});

          await this.storage.set('bitcoin', this.bitcoin);
          await this.storage.set('dollars', this.dollars);
          await this.load_porto(); 
          return {'dollars':this.dollars[this.dollars.length - 1].amount,'bitcoin':this.bitcoin[this.bitcoin.length - 1].amount} 

        })
      }
    } 
    else if (result.dismiss == Swal.DismissReason.cancel){ 
      
      const{value: buying} = await Swal.fire({
      title: 'One Ethereum is currently $'+ prices.price_eth+ '. You have '+this.ethereum[this.ethereum.length - 1].amount+ ' ethereum, how many would you like to sell?',
      input: 'number',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
        

      }
    }) 
    if (buying) {
      Swal.fire({
        title: 'Are you sure you want to sell '+buying+" Ethereum for $"+ prices.price_eth*Number(buying)+'?',
       
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    'Yes',
  cancelButtonText:
    'No'
        
      }).then(async (result) =>{this.ethereum.push({amount:this.ethereum[this.ethereum.length - 1].amount-Number(buying),timestamp:Date.now(),actual_price: prices.price_eth});
        this.dollars.push({amount:this.dollars[this.dollars.length - 1].amount +  prices.price_eth*Number(buying),timestamp:Date.now()});

        await this.storage.set('ethereum', this.ethereum);
        await this.storage.set('dollars', this.dollars);
        await this.load_porto(); 
        return {'dollars':this.dollars[this.dollars.length - 1].amount,'ethereum':this.ethereum[this.ethereum.length - 1].amount} 

      })
    return}return
    }})}
  
    catch{

      Swal.fire({
        icon: 'error',
        title: 'You have no active internet connection'})
  
    }
  
  
  }
    
  
  }

  export interface Bitcoin {
    amount: number;
    timestamp: number;
    actual_price:number
  }

  
  export interface Ethereum {
    amount: number;
    timestamp: number;
    actual_price:number
  }

  
  export interface Dollars {
    amount: number;
    timestamp: number;
  }