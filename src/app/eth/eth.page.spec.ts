import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { EthPage } from './eth.page';
import { AlertController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import {PredictionsService} from '../services/predictions.service'
import { LoginPage } from '../login/login.page';
import axios from 'axios'
import Mockadapter from 'axios-mock-adapter'
describe('EthPage', async() => {
  let component: EthPage;
  let fixture: ComponentFixture<EthPage>;
  let alertctrl = AlertController
  let ibmmodel = PredictionsService
  let test = RouterTestingModule


  beforeEach(async(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000
    
    const storage = new Storage({         // Define Storage
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    });  
    // component = new EthPage(storage, new alertctrl, new ibmmodel);

    TestBed.configureTestingModule({
      


      declarations: [ EthPage ],
      imports: [IonicModule.forRoot(),IonicStorageModule.forRoot(),RouterTestingModule.withRoutes([
        { path: 'login', component: LoginPage}
    ])]
    }).compileComponents();

    fixture = TestBed.createComponent(EthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async() => {
    expect(component).toBeTruthy();
  });

  // it('should correctly store predictions in the database', async() => { 
  //   let result = await component.save(123456)
  //   var mocking = new Mockadapter(axios)

  //   mocking.onGet('/database',{params:{userID:5,type:'eth',
  //   time:Date.now(),value:123456}}).reply(200)

  //   let res = await axios.get('/database',{params:{userID:5,type:'eth',
  //   time:Date.now(),value:123456}});

  //   expect(await res.status).toBe(200)});


  it('should load everything before displaying', async() => {
    let result = await component.ionViewDidEnter()
    expect(await result.done).toBe(true);
  });

  it('should load storage', async() =>{
    let result = await component.load()
    expect( await result).toBeTruthy();
});

it('should predict', async() =>{
  let result = await component.show_prediction(100,[5,5,5,5])
  expect( await result.val.length).toBe(4);
});

it('should load a graph with 500 elements on the axis', async() =>{
  let result = await component.get_hist_price()
  expect( await result.length).toEqual(500);
});

it('should have a good link with the model', async() =>{
  let result = await component.predict_ibm()
  expect( await result.val).toEqual([0,0,0]);
});



describe('The Price API from Binance ', function()  {


  it('Is getting a price', async () => {
    let result = await component.getprice();
    
    expect((await result).price_eth).toEqual(jasmine.any(Number));  })})})