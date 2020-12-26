import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFocus(event) {
    let parent = event.srcElement.parentNode.parentNode;

    parent.classList.add('focus');
  }

  onBlur(event) {
    let parent = event.srcElement.parentNode.parentNode;

    if(event.srcElement.value == "") {
      parent.classList.remove('focus');
    }
  }

  onKeyUp(event) {
    let pwd = event.srcElement.value;
    const showpwd = document.querySelector('.showpwd');
    
    if (event.srcElement.value != "") {
      if(showpwd.classList.contains('d-none')) {
        showpwd.classList.remove('d-none');
      } else {
        showpwd.classList.add('d-block');
      }
    } else {
      if(showpwd.classList.contains('d-block')) {
        showpwd.classList.remove('d-block');
      } else {
        showpwd.classList.add('d-none');
      }
    }
  }

  showPassword(event) {
    const showpwd = document.querySelector('.showpwd');
    const pwd = document.querySelector('#pwd');

    if(showpwd.classList.contains('fa-eye-slash')) {
      showpwd.classList.remove('fa-eye-slash');
      showpwd.classList.add('fa-eye');
  
      pwd.setAttribute('type','password');
    } else {
      showpwd.classList.remove('fa-eye');
      showpwd.classList.add('fa-eye-slash');
  
      pwd.setAttribute('type','text');
    }
  }
  
  registrar() {
    this.router.navigate(['/app/home']);
  }
}
