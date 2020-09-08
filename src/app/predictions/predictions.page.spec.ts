import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';



import { PredictionsPage } from './predictions.page';
import { LoginPage } from '../login/login.page';

describe('PredictionsPage', () => {
  let component: PredictionsPage;
  let alertctrl = AlertController

  let fixture: ComponentFixture<PredictionsPage>;

  beforeEach(async(() => {
    
    const storage = new Storage({         // Define Storage
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    });  
    // component = new PredictionsPage(storage, new alertctrl);
    TestBed.configureTestingModule({

      
      declarations: [ PredictionsPage ],
      imports: [IonicModule.forRoot(),IonicStorageModule.forRoot(),RouterTestingModule.withRoutes([
        { path: 'login', component: LoginPage}
    ])]
    }).compileComponents();

    fixture = TestBed.createComponent(PredictionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load everything before displaying', async() => {
    let result = await component.ionViewDidEnter()
    expect(await result.done).toBe(true);
  });
  
  it('should load storage', async() =>{
    let result = await component.load()
    expect( await result).toBeTruthy();
});

it('should delete ethereum', async() =>{
  let result = await component.delete_item({'price':3,'day_month':'1-2','timestamp':12345678,'type':'eth'},'eth')
  expect( await result.index).toBeGreaterThanOrEqual(0);
});

it('should delete bitcoin', async() =>{
  let result = await component.delete_item({'price':3,'day_month':'1-2','timestamp':12345678,'type':'btc'},'btc')
  expect( await result.index).toBeGreaterThanOrEqual(0);
});
});
