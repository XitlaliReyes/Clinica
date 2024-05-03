import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AcercaComponent } from './acerca/acerca.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { AltaCitaComponent } from './citas/alta-cita/alta-cita.component';
import { ReporteCitasComponent } from './citas/reporte-citas/reporte-citas.component';


export const routes: Routes = [
    {path: 'home',component: HomeComponent},
    // {path: '**', pathMatch: 'full', redirectTo: 'home'}
    {path: 'acerca', component: AcercaComponent},
    {path: 'doctores',component: DoctoresComponent},
    {path: 'alta-cita',component: AltaCitaComponent},
    {path: 'alta-cita/:nombre',component: AltaCitaComponent},
    {path: 'reporte-cita',component: ReporteCitasComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

