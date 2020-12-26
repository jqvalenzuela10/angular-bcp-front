import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthModel } from 'src/app/models/auth.model';
import { cliente } from 'src/app/interfaces/cliente.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  auth: AuthModel = new AuthModel();
  cliente: cliente;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  onFocus(event) {
    let parent = event.srcElement.parentNode.parentNode;

    parent.classList.add('focus');
  }

  onBlur(event) {
    let parent = event.srcElement.parentNode.parentNode;

    if (event.srcElement.value == "") {
      parent.classList.remove('focus');
    }
  }

  onKeyUp(event) {
    let pwd = event.srcElement.value;
    const showpwd = document.querySelector('.showpwd');

    if (event.srcElement.value != "") {
      if (showpwd.classList.contains('d-none')) {
        showpwd.classList.remove('d-none');
      } else {
        showpwd.classList.add('d-block');
      }
    } else {
      if (showpwd.classList.contains('d-block')) {
        showpwd.classList.remove('d-block');
      } else {
        showpwd.classList.add('d-none');
      }
    }
  }

  showPassword(event) {
    const showpwd = document.querySelector('.showpwd');
    const pwd = document.querySelector('#pwd');

    if (showpwd.classList.contains('fa-eye-slash')) {
      showpwd.classList.remove('fa-eye-slash');
      showpwd.classList.add('fa-eye');

      pwd.setAttribute('type', 'password');
    } else {
      showpwd.classList.remove('fa-eye');
      showpwd.classList.add('fa-eye-slash');

      pwd.setAttribute('type', 'text');
    }
  }

  ingresar(login: NgForm) {

    const { dni, password } = this.auth;
    this.authService.login(this.auth).subscribe(
      (data: cliente) => {

        if (dni == data.dni) {
          this.cliente = data;
          localStorage.setItem("cliente", JSON.stringify(this.cliente));
          this.router.navigateByUrl("/app/home");
        } else {
          Swal.fire({
            title: 'Error al autenticar, ingrese un dni correcto',
            icon: 'warning',
            confirmButtonText: 'Ok'
          });
        }

      }, (err) => console.log(err)
    );
  }

}