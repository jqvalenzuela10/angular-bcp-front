import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) {

  }

  getEndpoint(api:string) {
    return `${environment.BASE_URL.CLIENTES}${api}`;
  }

  verificarCuenta(numero:string) {
    return this.http.get(this.getEndpoint(`/cuentas/numero/${numero}`));
  }

  obtenerCuentaById(id:number) {
    return this.http.get(this.getEndpoint(`/cuentas/codigo/${id}`));
  }

  realizarTransferencia(transferencia:Transferencia) {
    return this.http.post(this.getEndpoint(`/transacciones`), transferencia);
  }

  obtenerTransaccionesByIdCliente(id:number){
    console.log('id '+id)
   
  }
}
