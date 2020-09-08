import { TestBed } from '@angular/core/testing';

import { MinvalService } from './minval.service';

describe('MinvalService', () => {
  let service: MinvalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinvalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })
  
  
  it('Is getting a datetime', async () => {
    let result = await service.min_value();
    expect(result).toEqual(jasmine.any(String))
  ;
});

})