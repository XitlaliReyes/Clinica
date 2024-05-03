import { Component } from '@angular/core';
import { Cita } from '../cita.modle';
import { Doctor } from '../../doctor';
import { CitasService } from '../citas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta-cita',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-cita.component.html',
  styleUrl: './alta-cita.component.css'
})
export class AltaCitaComponent {
  cita!: Cita;
  doctores!: Doctor[];

  constructor(private citasService: CitasService){}

  ngOnInit(){
    this.cita = this.citasService.nuevaCita();
    this.doctores = this.citasService.getDoctores();
    console.log(this.doctores);
  }

  nuevaCita():void{
    this.citasService.agregarCita(this.cita);
    this.cita = this.citasService.nuevaCita();
  }

}
