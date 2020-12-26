import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/interfaces/cliente.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { CuentaBancaria } from 'src/app/models/cuentas.bancarias';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cliente: cliente;
  cuentasBancarias: CuentaBancaria[]
  constructor(private authService: AuthService, private clienteService: ClienteService, private router: Router) { 
    
    if (authService.getCliente() !== null) {
      this.cliente = JSON.parse(authService.getCliente());
      console.log('cliente')
      console.log(this.cliente)
      console.log(this.cliente.codCli)
      clienteService.getCuentasBancarias(this.cliente.codCli)
                .subscribe( (data) => {
                  
                  this.cuentasBancarias = data as CuentaBancaria[]
                  console.log(this.cuentasBancarias);
                  

                  }, (err) => {
                    console.log(err);
                    
                  }
                );
      
    } else {
      this.router.navigateByUrl("/login");
    }

  }

  ngOnInit(): void {
    
  }



}
