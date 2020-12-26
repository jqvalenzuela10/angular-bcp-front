import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Notificacion } from '../models/notificacion.model';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private http: HttpClient) {

  }

  getEndpoint(api:string) {
    return `${environment.BASE_URL.CLIENTES}${api}`;
  }

  generarNotificacion( notificacion: Notificacion ) {
    return this.http.post(this.getEndpoint(`/notificaciones`), notificacion);
  }
  obtenerNotificacion() {
    return this.http.get(this.getEndpoint(`/notificaciones`));
  }
}
