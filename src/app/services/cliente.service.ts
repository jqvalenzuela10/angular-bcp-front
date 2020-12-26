import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {  }

  getEndpoint(api:string) {
    return `${environment.BASE_URL.CLIENTES}${api}`;
  }

  getCuentasBancarias( id:number ) {
    return this.http.get(this.getEndpoint(`/cuentas/${id}`));
  }

}
