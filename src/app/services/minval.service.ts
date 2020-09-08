import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinvalService {

  constructor() { }


  min_value():string {
    var date_timestamp = Date.now() +300000
    var date = new Date(date_timestamp)
    var year = String(date.getFullYear())
    var month=String(((date.getMonth()+1)>=10)? date.getMonth()+1 : '0' + (date.getMonth()+1))  
    var day= String(((date.getDate())>=10)? date.getDate() : '0' + (date.getDate()))
    var hour = String(((date.getHours())>=10)? date.getHours() : '0' + date.getHours());
    var minute = String(((date.getMinutes())>=10)? date.getMinutes() : '0' + date.getMinutes());
    var result = year+"-"+month+"-"+day+"T"+hour+":"+minute
    return result 
  }
}
