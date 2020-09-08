import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from '../login/login.page';


describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {

  
    const storage = new Storage({         // Define Storage
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    });  
    TestBed.configureTestingModule({
        imports: [IonicModule.forRoot(),IonicStorageModule.forRoot(),RouterTestingModule.withRoutes([
            { path: 'login', component: LoginPage}
        ])]

      
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
