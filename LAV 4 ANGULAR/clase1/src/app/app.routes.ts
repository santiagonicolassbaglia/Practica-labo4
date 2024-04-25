import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
 
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';

export const routes: Routes = [

    {path: 'bienvenida',
    loadComponent :() => {
        return import('./componentes/bienvenido/bienvenido.component').then(m => m.BienvenidoComponent)
    } 
     },
      
        
        {path: 'login', component: LoginComponent},
        {  path: '', redirectTo: '/login', pathMatch: 'full' },
        {  path: '**', component: PaginaErrorComponent }
        

    
 


];
