import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }
  
  getEndpoint(api:string) {
    return `${environment.BASE_URL.CLIENTES}${api}`;
  }

  login(user:any) {
    return this.http.post(this.getEndpoint('/clientes/autenticar'), user);
  }

  getCliente() {
    return localStorage.getItem('cliente');
  }

}
