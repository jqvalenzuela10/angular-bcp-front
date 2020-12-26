import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioDolaresComponent } from './cambio-dolares.component';

describe('CambioDolaresComponent', () => {
  let component: CambioDolaresComponent;
  let fixture: ComponentFixture<CambioDolaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioDolaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioDolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
