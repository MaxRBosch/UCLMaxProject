import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ModalController, NavController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import {Validators, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let modalController: ModalController;
  let navCtrl: NavController;
  let forms: FormsModule;
  let forming: ReactiveFormsModule;
  beforeEach(async(() => {
    
    const storage = new Storage({         // Define Storage
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    });  
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),IonicStorageModule.forRoot(),FormsModule, ReactiveFormsModule,RouterTestingModule.withRoutes([
        { path: 'login', component: LoginPage}
    ])]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should allow login', async() => {
  //   let result = await component.login({'email':'bosch.max@gmail.com'})
  //   expect(await result.login).toBe('success');
  // });
  // it('should allow registration', async() => {
  //   let result = await component.register({'email':'test@gmail.com','username':'test'})
  //   expect(await result.register).toBe('success');
  // });
  
  
  
  it('initialises with a title of Login', () => {
    expect(component['title']).toEqual('Login');
  });
});
