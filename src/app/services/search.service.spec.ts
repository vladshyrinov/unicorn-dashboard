import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import searchMock from './search.request.mock';

let service: SearchService;
let http: HttpTestingController;
let keyword: string;
let apiUrl: string;
let pageSize: number;

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    keyword = 'angular';
    apiUrl = `https://api.stackexchange.com/2.2/search?pagesize=10&order=desc&sort=activity&site=stackoverflow&intitle=${keyword}`;
  });

  beforeEach(inject([SearchService, HttpTestingController], (_service: SearchService, _http: HttpTestingController) => {
    service = _service;
    http = _http;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data on successful request', () => {
    service.search(keyword).subscribe((response) => {
      expect(response).toEqual(searchMock.items);
    });

    const req = http.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(searchMock);
  });

  it('should return null on failure', () => {
    service.search(keyword).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = http.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(null, { status: 400, statusText: 'BadRequest' });
  });

  it('should have pointed out the page size in url', () => {
    pageSize = 5;
    apiUrl = apiUrl.replace(`pagesize=10`, `pagesize=${pageSize}`);

    service.search(keyword, pageSize).subscribe(() => { });

    http.expectOne(apiUrl);
  });
});
