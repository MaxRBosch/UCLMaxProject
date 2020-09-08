import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import axios from 'axios'
import { Storage } from '@ionic/storage';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { Predictions } from '../btc/btc.page';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Validators, FormBuilder, FormGroup, MinLengthValidator } from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

import Swal from 'sweetalert2'
import { element } from 'protractor';
import { GraphsService } from '../services/graphs.service';
import { ModalController, NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { find } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loaded = 'init'
  public title: string = "Login";

  
  public predictions: Predictions[] = [];
  @ViewChild("lineCanvas") lineCanvas: any;
  private lineChart: Chart;
// price:number;
private regi : FormGroup;
private logi : FormGroup


// glob_price_btc:number;
// glob_price_eth:number;
//  https://ionicthemes.com/tutorials/about/forms-and-validation-in-ionic


messages = {
  'username': [
      { type: 'required', message: 'Username is needed.' },
      { type: 'minlength', message: 'Username must be at least 4 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 15 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],

  'email':[
    { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email must be at least 4 characters long.' },
      { type: 'maxlength', message: 'Email cannot be more than 40 characters long.' },
      { type: 'email', message: 'You have to register a valid email.'},
      
  ],
  'password':[
    { type: 'required', message: 'A password is required.' },
      { type: 'minlength', message: 'Email must be at least 4 characters long.' },
      { type: 'maxlength', message: 'Email cannot be more than 15 characters long.' },
      
  ]
  
  }
// https://gist.github.com/guillefd/dc50900569f289b7533ed7c752fc2174

  constructor(private modalController: ModalController, private storage: Storage, private router: Router, 

    private loginService: LoginService,
    private navCtrl: NavController,
    // private alertService: AlertService, 
    private formBuilder: FormBuilder ) {  
      this.regi = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(15),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
    email: ['' ,[Validators.required, Validators.minLength(4),Validators.maxLength(40),Validators.email]],
    password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]] 
  }), this.logi = this.formBuilder.group({
    email: [''],
    password:[''] 
  });
}

  async login(details){
    try{
      Swal.fire('Logging you in')
      Swal.showLoading()
      let res = await axios.get('https://nodemrbosch.azurewebsites.net/api/checklogin',{params: {email: details.email}});
      try{
        if (await bcrypt.compare(details.password,res.data[0].password))   {
          this.storage.set('token', res.data[0].userID)
          // Resets the form    
          this.logi.reset()
          Swal.close()
          this.router.navigate(['/homepage'])      
        }
        else {
          this.logi.reset()
          Swal.fire({
            icon: 'error',
            title: 'That password is incorrect!'})}}
      catch {
        this.logi.reset();
        Swal.fire({
          icon: 'error',
          title: 'An account with that email does not exist!'})
        }
      }
    catch {
      Swal.fire({
      icon: 'error',
      title: 'You have no active internet connection'})


          
          return {'login':'success'}
        }
        return {'login':'success'}
      }

  
  async isLoggedin(){ 
  
  if (await this.loginService.check_token()==true){

    this.router.navigate(['homepage'])
  }}


async register(details) {
  try{
  let res = await axios.get('https://nodemrbosch.azurewebsites.net/api/getaccounts');
  var j
var usernames = []
var emails = []
  for (j = 0; j < res.data.length; j++){
usernames.push(res.data[j].username)
emails.push(res.data[j].email)}
var duplicate = 0

if (usernames.includes(details.username)) {duplicate +=1}
if (emails.includes(details.email)) {duplicate +=2}

if (duplicate ==1) {
  this.regi.reset()

  Swal.fire({
  icon: 'error',
  title: 'An account with that username already exists'})}
if (duplicate ==2) {
  this.regi.reset()
  Swal.fire({
    icon: 'error',
    title:'An account with that email adress already exists'})}
if (duplicate ==3) {
  this.regi.reset()

  Swal.fire({
    icon: 'error',
    title:'An account with that username and that email adress already exists'})}


    if (duplicate == 0){
try{
 const vali = await axios.get('https://nodemrbosch.azurewebsites.net/api/registeruser', {params: details})

if (vali.status==200){
  Swal.fire({
    icon: 'success',
    title:'Welcome '+details.username+' you have successfully registered!'})
  this.regi.reset()}
}
catch{
  this.regi.reset()
  Swal.fire('There was an error with your registration, please try some different parameters')
  return {'register':'success'}
}


}}
catch{

  Swal.fire({
    icon: 'error',
    title: 'You have no active internet connection'
  })
  return {'register':'success'}
}
return {'register':'success'}}


  ngOnInit() {
    this.isLoggedin()
    // this.getprice()
// this.startup()



  }

  // async startup(){
  //   setInterval(async() =>{  this.getprice()},60000);    
  // }
  // async getprice()
  // {
  //   var price_eth :number
  //   var price_btc :number
  //   try{
  //   var url_btc = "https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1m";
  //   var url_eth = "https://api.binance.com/api/v1/klines?symbol=ETHUSDT&interval=1m"
  //   const btc = await axios.get(url_btc)
  //   const eth = await axios.get(url_eth)

  //   if (btc.data.length != 0 && eth.data.length != 0){
  //     this.loaded = 'yes'}
  //     else {this.loaded='no'}
  //   this.time = new Date(btc.data[btc.data.length-1][0]).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  //   price_btc = Math.floor(btc.data[btc.data.length-1][1])
  //   price_eth = Math.floor(eth.data[eth.data.length-1][1])

  //   //These global variables are declared so they display the price but they are not used for any other functions.
  //   this.glob_price_btc = price_btc
  //   this.glob_price_eth = price_eth

   

  //   return {'price_btc':price_btc,'price_eth':price_eth}

  //   }
  //   catch {this.loaded = 'no';
  //   return}
    
  
  // }

  
}
