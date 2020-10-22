/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Resource.serviceService } from './resource.service.service';

describe('Service: Resource.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Resource.serviceService]
    });
  });

  it('should ...', inject([Resource.serviceService], (service: Resource.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
