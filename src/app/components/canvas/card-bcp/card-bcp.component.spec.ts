import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBCPComponent } from './card-bcp.component';

describe('CardBCPComponent', () => {
  let component: CardBCPComponent;
  let fixture: ComponentFixture<CardBCPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBCPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
