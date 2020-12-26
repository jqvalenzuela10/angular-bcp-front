import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosDepositosComponent } from './pagos-depositos.component';

describe('PagosDepositosComponent', () => {
  let component: PagosDepositosComponent;
  let fixture: ComponentFixture<PagosDepositosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosDepositosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosDepositosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
