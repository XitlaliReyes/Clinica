import { Component } from '@angular/core';
import { CitasService } from '../citas.service';
import { Cita } from '../cita.modle';

@Component({
  selector: 'app-reporte-citas',
  standalone: true,
  imports: [],
  templateUrl: './reporte-citas.component.html',
  styleUrl: './reporte-citas.component.css'
})
export class ReporteCitasComponent {

    citas!: Cita[];

    constructor(private citasService: CitasService) {
      this.citas = this.citasService.getCitas();
    }
}
