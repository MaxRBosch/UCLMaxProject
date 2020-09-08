import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import {PredictionsService} from '../services/predictions.service'

import { BtcPage } from './btc.page';
import { MinvalService } from '../services/minval.service';
import { LoginService } from '../services/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from '../login/login.page';
import axios from 'axios'
import Mockadapter from 'axios-mock-adapter'

describe('BtcPage', () => {
  let component: BtcPage;
  let fixture: ComponentFixture<BtcPage>;
  let alertctrl = AlertController
  let ibmmodel = PredictionsService
  let valService= MinvalService
  let login =  LoginService
  let test = RouterTestingModule


  beforeEach(async(() => {
    const storage = new Storage({         // Define Storage
      
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    });    
    
    // component = new BtcPage(storage, new alertctrl, new ibmmodel, new valService ,'new login(storage,Router)';
    TestBed.configureTestingModule({

      declarations: [ BtcPage ],
      imports: [IonicModule.forRoot(),IonicStorageModule.forRoot(),RouterTestingModule.withRoutes([
        { path: 'login', component: LoginPage}
    ])]
    }).compileComponents();

    fixture = TestBed.createComponent(BtcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a good link with the model', async() =>{
    let result = await component.predict_ibm()
    expect( await result.val).toEqual([0,0,0]);
  });
  it('should predict', async() =>{
    let result = await component.show_prediction(100,[5,5,5,5])
    expect( await result.val.length).toBe(4);
  });
 
  it('should load storage', async() =>{
    let result = await component.load()
    expect( await result).toBeTruthy();
});

// it('should correctly store predictions in the database', async(done) => {
//   var mocking = new Mockadapter(axios)
//   mocking.onGet('/database',{params:{userID:5,type:'btc',time:Date.now(),value:123456}}).reply(200)
//   let res = await axios.get('/database',{params:{userID:5,type:'btc',time:Date.now(),value:123456}});
//   let result = await component.save(123456)
//   expect(await res.status).toBe(200)})

it('should load everything before displaying', async() => {
  let result = await component.ionViewDidEnter()
  expect(await result.done).toBe(true);
});
it('should load a graph with 500 elements on the axis', async() =>{
  let result = await component.get_hist_price()
  expect( await result.length).toEqual(500);
});

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;



//   it('Is getting a price from Binance', async (done) => {
//     let result = await component.getprice();
    
//     expect((await result).price_btc).toEqual(jasmine.any(Number));  })
  
  
  })



  