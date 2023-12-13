import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsploraProgettoComponent } from './esplora-progetto.component';

describe('EsploraProgettoComponent', () => {
  let component: EsploraProgettoComponent;
  let fixture: ComponentFixture<EsploraProgettoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsploraProgettoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsploraProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
