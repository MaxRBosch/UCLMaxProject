import { TestBed } from '@angular/core/testing';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { PredictionsService } from './predictions.service';

describe('PredictionsService', () => {
  let service: PredictionsService;

  beforeEach(() => {
    const storage = new Storage({         // Define Storage
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    });  
    TestBed.configureTestingModule({imports: [IonicStorageModule.forRoot()]});
    service = TestBed.inject(PredictionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
 
// it('Is getting a good connection with the IBM eth model with 1 digit', async () => {
//   var year = "2021"
//   var month="08"  
//   var day= "08"
//   var hour = "08"
//   var minute = "08"
//   var result = year+"-"+month+"-"+day+"T"+hour+":"+minute
//   let res = await service.predict_api(result,'eth');
//   console.log(res)
//   expect(res.prediction_ibm).toEqual(jasmine.any(String))
// ;


// })


// it('Is getting a good connection with the IBM eth model with 2 digits', async () => {
//   var year = "2021"
//   var month="10"  
//   var day= "18"
//   var hour = "18"
//   var minute = "18"
//   var result = year+"-"+month+"-"+day+"T"+hour+":"+minute
//   let res = await service.predict_api(result,'eth');
//   console.log(res)
//   expect(res.prediction_ibm).toEqual(jasmine.any(String))
// ;


// })


// it('Is getting a good connection with the IBM btc model with 2 digits', async () => {
//   var year = "2021"
//   var month="10"  
//   var day= "18"
//   var hour = "18"
//   var minute = "18"
//   var result = year+"-"+month+"-"+day+"T"+hour+":"+minute
//   let res = await service.predict_api(result,'btc');
//   console.log(res)
//   expect(res.prediction_ibm).toEqual(jasmine.any(String))
// ;


// })

// it('Is getting a good connection with the IBM btc model with 1 digit', async () => {
//   var year = "2021"
//   var month="08"  
//   var day= "08"
//   var hour = "08"
//   var minute = "08"
//   var result = year+"-"+month+"-"+day+"T"+hour+":"+minute
//   let res = await service.predict_api(result,'btc');
//   console.log(res)
//   expect(res.prediction_ibm).toEqual(jasmine.any(String))
// ;


// })




})
