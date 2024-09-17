import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: '**', redirectTo: '/' }  // Ruta comodín que redirige cualquier ruta no definida a /home

];
