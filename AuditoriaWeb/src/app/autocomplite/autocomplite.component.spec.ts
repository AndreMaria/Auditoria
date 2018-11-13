import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompliteComponent } from './autocomplite.component';

describe('AutocompliteComponent', () => {
  let component: AutocompliteComponent;
  let fixture: ComponentFixture<AutocompliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
