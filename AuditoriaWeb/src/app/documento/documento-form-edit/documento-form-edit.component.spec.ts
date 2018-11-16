import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoFormEditComponent } from './documento-form-edit.component';

describe('DocumentoFormEditComponent', () => {
  let component: DocumentoFormEditComponent;
  let fixture: ComponentFixture<DocumentoFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentoFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
