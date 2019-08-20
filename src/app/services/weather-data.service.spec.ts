import { TestBed, inject } from '@angular/core/testing';

import { WeatherDataService } from './weather-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherDataService]
    });
  });

  it('should ...', inject([WeatherDataService], (service: WeatherDataService) => {
    expect(service).toBeTruthy();
  }));
});
