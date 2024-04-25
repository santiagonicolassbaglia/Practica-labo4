import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../app/componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from '../app/componentes/bienvenido/bienvenido.component';
 import { PaginaErrorComponent } from '../app/componentes/pagina-error/pagina-error.component';
 import { Usuario } from '../app/clases/usuario';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet , LoginComponent, BienvenidoComponent,  PaginaErrorComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase1';
  num1: number = 0;
  num2: number = 0;
  promedio: number = 0;
  usuario: Usuario = new Usuario('usuario', 'contraseña');

  Promedio() {
    this.promedio = (this.num1 + this.num2) / 2;
  }

  Limpiar() {
    this.num1 = 0;
    this.num2 = 0;
    this.promedio = 0;
  }

 

    



 
}





 