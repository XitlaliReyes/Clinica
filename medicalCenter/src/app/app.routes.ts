import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { DoctoresComponent } from './doctores/doctores.component';

export const routes: Routes = [
    {path: 'home',component: HomeComponent},
    {path: 'citas',component: CitasComponent},
    {path: 'doctores',component: DoctoresComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

