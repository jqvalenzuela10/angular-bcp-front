import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDepositosComponent } from './transfer-depositos.component';

describe('TransferDepositosComponent', () => {
  let component: TransferDepositosComponent;
  let fixture: ComponentFixture<TransferDepositosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferDepositosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDepositosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
