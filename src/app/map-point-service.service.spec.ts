import { TestBed, inject } from '@angular/core/testing';

import { MapPointServiceService } from './map-point-service.service';

describe('MapPointServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapPointServiceService]
    });
  });

  it('should be created', inject([MapPointServiceService], (service: MapPointServiceService) => {
    expect(service).toBeTruthy();
  }));
});
