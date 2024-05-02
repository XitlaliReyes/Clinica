import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { AcercaComponent } from './acerca/acerca.component';
import { DoctoresComponent } from './doctores/doctores.component';

export const routes: Routes = [
    {path: 'home',component: HomeComponent},
    {path: 'citas',component: CitasComponent},
    // {path: '**', pathMatch: 'full', redirectTo: 'home'}
    {path: 'acerca', component: AcercaComponent},
    {path: 'doctores',component: DoctoresComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

