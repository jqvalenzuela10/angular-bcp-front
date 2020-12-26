import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNotificacionesComponent } from './config-notificaciones.component';

describe('ConfigNotificacionesComponent', () => {
  let component: ConfigNotificacionesComponent;
  let fixture: ComponentFixture<ConfigNotificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigNotificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
