import { TestBed } from '@angular/core/testing';

import { Api1serviceService } from './api1service.service';

describe('Api1serviceService', () => {
  let service: Api1serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api1serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
