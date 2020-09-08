import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import axios from 'axios'
import { Storage } from '@ionic/storage';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  constructor(private storage: Storage) { }


  
  async predict_api(ibm_prediction_time,crypto){
    try{
    var year = parseInt(ibm_prediction_time.substr(0,4))
    if (ibm_prediction_time.charAt(5) == '0')
    {var month = parseInt(ibm_prediction_time.charAt(6))}
    else {
    var month = parseInt(ibm_prediction_time.substr(5,6))}
    
    if (ibm_prediction_time.charAt(8) == '0')
    {var day = parseInt(ibm_prediction_time.charAt(9))}
    else {
    var day = parseInt(ibm_prediction_time.substr(8,9))}
  
    if (ibm_prediction_time.charAt(11) == '0')
    {var hour = parseInt(ibm_prediction_time.charAt(12))}
    else {
    var hour = parseInt(ibm_prediction_time.substr(11,12))}
  
    if (ibm_prediction_time.charAt(14) == '0')
    {var minute = parseInt(ibm_prediction_time.charAt(15))}
    else {
    var minute = parseInt(ibm_prediction_time.substr(14,15))}
    
    var array_values = [year,month,day,hour,minute,0,0,0]
      
    
    // Paste your Watson Machine Learning service apikey here
    
    // Use this code as written to get an access token from IBM Cloud REST API
    //
    var array_values_string = [[year,month,day,hour,minute,0,0,0]].toString()
    var apikey = ''
    var mlinstance = ''
    if (crypto == 'btc'){  
      apikey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX';
      mlinstance = "XXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
    else { 
      apikey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXX'
      mlinstance = "XXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
    var url     = "https://cors-anywhere.herokuapp.com/https://iam.bluemix.net/oidc/token"
    var IBM_Cloud_IAM_uid = "bx";
    var IBM_Cloud_IAM_pwd = "bx";
    var data = "apikey=" + apikey + "&grant_type=urn:ibm:params:oauth:grant-type:apikey"
    let axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Access-Control-Allow-Origin": "*",
      "Authorization" : "Basic " + btoa( IBM_Cloud_IAM_uid + ":" + IBM_Cloud_IAM_pwd ) },
    }
      
    var res = await axios.post( url, data,axiosConfig )
    let axiosConfigresult = {
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : "Bearer " + res.data.access_token ,
        "Access-Control-Allow-Origin": "*",
        'ML-Instance-ID': mlinstance,
      }
    }
  const payload = '{"input_data": [{"fields": ["Year", "Month", "Day", "Hour", "Minute", "Tot_subjectivity", "Tot_polarity", "Tot_submissions"], "values":[['+array_values_string+']]}]}';

  if (crypto=='btc') {
    var scoring_url = await axios.post("https://cors-anywhere.herokuapp.com/https://eu-gb.ml.cloud.ibm.com/v4/deployments/XXXXXXXXXXXXXXXXXXXXXXXXXXX/predictions  ",payload,axiosConfigresult)}
  else{ 
    var scoring_url = await axios.post("https://cors-anywhere.herokuapp.com/https://eu-gb.ml.cloud.ibm.com/v4/deployments/XXXXXXXXXXXXXXXXXXXXXXXXXXX/predictions",payload,axiosConfigresult)}
  return {"prediction_ibm":String(scoring_url.data.predictions[0].values[0][0]),'time':array_values}
}

catch{  
  var userID = await this.storage.get('token')
  let res = await axios.get('https://nodemrbosch.azurewebsites.net/api/error',{params:{userID:userID,type:crypto,time:Date.now()}});
}}}
