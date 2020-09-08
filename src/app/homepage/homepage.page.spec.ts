import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { Predictions } from '../btc/btc.page';
import { configure, getLogger } from "log4js";
import { GraphsService } from '../services/graphs.service';


import { HomepagePage } from './homepage.page';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from '../login/login.page';
describe('HomepagePage', function()  {
  let component: HomepagePage;
  let alertctrl = AlertController
  let comp: HomepagePage
  var predictions: Predictions[] = [];
let graphs = GraphsService

  let fixture: ComponentFixture<HomepagePage>;

  beforeEach(async(() => {
    
    
    const storage = new Storage({         // Define Storage
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    });  
    // component = new HomepagePage(storage, new graphs);
    TestBed.configureTestingModule({
      
      declarations: [ HomepagePage ],
      imports: [IonicModule.forRoot(),IonicStorageModule.forRoot(),RouterTestingModule.withRoutes([
        { path: 'login', component: LoginPage}
    ])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomepagePage);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  }));

  it('should create', async () => {

    expect(component).toBeTruthy();
  });
  
  it('should load storage', async() =>{
    let result = await component.load()
    expect( await result).toBeTruthy();
});
it('should load everything before displaying', async() => {
  let result = await component.ionViewDidEnter()
  expect(await result.done).toBe(true);
});

  
  it('initialises with a title of Home', () => {
    expect(component['title']).toEqual('Home');
  });
  describe('For the chart with predictions ', function()  {

    // it('The storage is working', async () => {



    //   let storage = await component.load();
      
    //   expect(await storage).toBeGreaterThan(1);  })


    it('The x-axis is an array from Binance', async () => {
      let mock_pred =  [{
        price: 10000,
        day_month: "8/6, 22",
        timestamp: 1596744570670,
        type: 'Btc'
        
      },  {
        price: 1100,
        day_month: "8/7, 13",
        timestamp: 1596799824868,
        type: 'Btc'
        
      }]


      let chart = await component.get_hist_price(mock_pred);

      
      expect(chart.time.length).toBe(2);  })})
      

describe('The Price API from Binance ', function()  {


  it('Is getting a price', async () => {
    let result = await component.getprice();
    
    expect((await result).price_btc).toEqual(jasmine.any(Number));  })
  
    it('allows buying', async () => {
      let result = await component.buy();
      
      expect(await result).toEqual(undefined)})
      
    it('allows selling', async () => {
      let result = await component.sell();
      
      expect(await result).toEqual(undefined)})
  });})


