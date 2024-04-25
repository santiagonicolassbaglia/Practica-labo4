import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export  class BienvenidoComponent {

  private router = inject(Router);
 

  ngOnInit(): void {

  }

  logout() {
    this.router.navigateByUrl('login');
  }



}
