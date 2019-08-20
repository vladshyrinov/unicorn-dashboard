import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContainerComponent } from './info-container.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { SearchService } from '../../services/search.service';
import searchMock from '../../services/search.request.mock';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherDataService } from '../../services/weather-data.service';

describe('InfoContainerComponent', () => {
  let component: InfoContainerComponent;
  let fixture: ComponentFixture<InfoContainerComponent>;
  let de: DebugElement;
  let ne: HTMLElement;
  let searchService: SearchService;
  let searchSpy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoContainerComponent],
      imports: [HttpClientTestingModule],
      providers: [SearchService, WeatherDataService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContainerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    ne = de.nativeElement;

    searchService = TestBed.get(SearchService);

    component.container = { title: 'Angular2', type: 2 };
    component.resultData = searchMock.items;
    searchSpy = spyOn(searchService, 'search').and.returnValue(of(searchMock.items));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call the search service with the initialization', () => {
    expect(searchSpy).toHaveBeenCalledWith(component.container.title.toLowerCase(), undefined);
  });

  it('should (not) have the update bell button', () => {
    let updateBell = de.query(By.css('.update-bell'));
    expect(updateBell).not.toBeNull();

    component.container = { title: 'Weather', type: 3 };
    fixture.detectChanges();

    updateBell = de.query(By.css('.update-bell'));
    expect(updateBell).toBeNull();
  });

  it('should set the bell and change inscription from OFF to ON and back for angular 2 container', () => {
    const updateBell = de.query(By.css('.update-bell'));
    const updateBellInsSpan = updateBell.query(By.css('span'));
    expect(component.bellInscription).toEqual('OFF');
    expect(updateBellInsSpan.classes.green).not.toBeTruthy();

    updateBell.nativeElement.click();
    fixture.detectChanges();
    expect(component.bellInscription).toEqual('ON');
    expect(updateBellInsSpan.classes.green).toBeTruthy();

    updateBell.nativeElement.click();
    fixture.detectChanges();
    expect(component.bellInscription).toEqual('OFF');
    expect(updateBellInsSpan.classes.green).not.toBeTruthy();

  });

  it('should show sorry message if there was no data', () => {
    component.resultData = null;
    fixture.detectChanges();

    const messageElem = de.query(By.css('.info-container p'));
    expect(messageElem.nativeElement.innerText).toEqual('Sorry, es gibt momentan keine verfügbare Daten');
  });

});
