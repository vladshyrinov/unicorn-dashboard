import { TestBed, inject } from '@angular/core/testing';

import { WeatherDataService } from './weather-data.service';

describe('WeatherdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherDataService]
    });
  });

  it('should ...', inject([WeatherDataService], (service: WeatherDataService) => {
    expect(service).toBeTruthy();
  }));
});
