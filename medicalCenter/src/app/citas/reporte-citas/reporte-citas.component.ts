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
    fechaActual!: Date;

    constructor(private citasService: CitasService) {
      this.citas = this.citasService.getCitas();
      this.fechaActual = new Date();
    }

    fechaPosterior(fechaCita: Date): any {
      // Por alguna razón desconocida aunque se pase como tipo Date, se tienen que convertir a Date
      // Para poder usar "getTime()" y hacer la comparacion correcta de las citas a tiempo correcto
      // y asi filtrarlas de las citas que ya pasaron
      let fechaCitaDate = new Date(fechaCita);
      return fechaCitaDate.getTime() > this.fechaActual.getTime();
    }


}
