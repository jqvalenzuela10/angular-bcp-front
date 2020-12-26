import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferResumenOpeComponent } from './transfer-resumen-ope.component';

describe('TransferResumenOpeComponent', () => {
  let component: TransferResumenOpeComponent;
  let fixture: ComponentFixture<TransferResumenOpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferResumenOpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferResumenOpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
