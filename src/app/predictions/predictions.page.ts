import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Predictions } from '../btc/btc.page';
import { AlertController } from '@ionic/angular';
import { LoginPage } from '../login/login.page'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.page.html',
  styleUrls: ['./predictions.page.scss'],
})
export class PredictionsPage implements OnInit {
  public predictions_btc: Predictions[] = [];
  public predictions_eth: Predictions[] = [];
  public logged_in_wait: boolean


  public title: string = "Predictions";
  public loaded: boolean = false;
  headers = ["day_month", "price"];
  headers_2 = ["Day-Month Hour", "Price"];



  constructor(private storage: Storage, private alertCtrl: AlertController, public login: LoginService
    ) { }
  load(): Promise<boolean> {

    return new Promise((resolve) => {

      this.storage.get('predictions_btc').then((predictions_btc) => {

        if(predictions_btc != null){
          this.predictions_btc = predictions_btc;
         

          
          
        }
        


        
        

      });
      this.storage.get('predictions_eth').then((predictions_eth) => {

        if(predictions_eth != null){
          this.predictions_eth = predictions_eth;
         
          
          
          
        }
        this.loaded = true;
        resolve(true);})
        
    
    });
    
    
  }


  delete_item(prediction,thing) {

if (thing == 'eth'){ let index = this.predictions_eth.indexOf(prediction);
  if(index > -1){   

    this.predictions_eth.splice(index, 1);
    this.storage.set('predictions_eth', this.predictions_eth);
    return {'index':index}
  }
  else{
    return{'index':0}}
}
else {    let index = this.predictions_btc.indexOf(prediction);

    if(index > -1){
      this.predictions_btc.splice(index, 1);
      this.storage.set('predictions_btc', this.predictions_btc);
      return {'index':index}
    }
    else{
      return{'index':0}}
 
  }}
  
  
  
  
  async isLoggedin(){ this.logged_in_wait = await this.login.check_token()}



  ngOnInit() {
    

this.isLoggedin()
this.load();
    
  }

  
  async ionViewDidEnter () {
    
    await this.isLoggedin()
  return{'done':true}}
}
