import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private http: HttpClient) { }

  getEndpoint(api:string) {
    return `${environment.BASE_URL.CLIENTES}${api}`;
  }

  getTransaccionesByIdCuenta(id:number){
    return this.http.get("http://localhost:8080/api/transacciones/historial/"+id);
  }
}
