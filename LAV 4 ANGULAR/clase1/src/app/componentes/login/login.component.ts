import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { PaginaErrorComponent } from '../pagina-error/pagina-error.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, BienvenidoComponent, PaginaErrorComponent, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nombre: string = '';
  clave: string = '';
resultado: boolean = false;
  submitForm() {
 
    const usuario = new Usuario(this.nombre, this.clave);
  }

  login() {
    if (this.nombre === 'santi' && this.clave === '123') {
      this.resultado = true;
    } else {
      this.resultado = false;
    }
  }
}
