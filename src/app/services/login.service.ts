import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ConnectionService } from './connection.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  

  constructor( private storage: Storage, private router: Router
    ) { }

async check_token() {

    var res = await this.storage.get('token') 
    
    if (res ==null){this.router.navigate(['login'])}
  else {return true}     
;

           }
          
          
async logout(){
  await this.storage.set('token',null)
      this.router.navigate(['login']);

}          
          }