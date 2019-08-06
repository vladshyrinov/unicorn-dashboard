import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEntryComponent } from './info-entry.component';

describe('InfoEntryComponent', () => {
  let component: InfoEntryComponent;
  let fixture: ComponentFixture<InfoEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
