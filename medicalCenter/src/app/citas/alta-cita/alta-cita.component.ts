import { Component } from '@angular/core';
import { Cita } from '../cita.modle';
import { Doctor } from '../../doctor';
import { CitasService } from '../citas.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-cita',
  standalone: true,
  imports: [FormsModule, ButtonModule, CalendarModule, DropdownModule, InputNumberModule, FloatLabelModule, CommonModule],
  templateUrl: './alta-cita.component.html',
  styleUrl: './alta-cita.component.css'
})
export class AltaCitaComponent {
  cita!: Cita;
  consultas!: Cita[];
  doctores!: Doctor[];
  porParametro: boolean = false;
  valor= false;

  constructor(private citasService: CitasService, public activatedRoute: ActivatedRoute){
    this.consultas = this.citasService.getCitas();
  }
  
  ngOnInit(){
    this.cita = this.citasService.nuevaCita();
    this.doctores = this.citasService.getDoctores();
    
    this.activatedRoute.params.subscribe(params => {
    // Por default siempre entra a la ruta tenga o no parametros
    // Sin embargo, al no haber nombre en la ruta, no se asigna el nombre del doctor
      if(params['nombre'] != null){
        this.cita.doctor = params['nombre'];
        this.porParametro = true;
      }
    });
  }

  nuevaCita():void{
    this.citasService.agregarCita(this.cita);
    this.cita = this.citasService.nuevaCita();
  }

  horariosDisponibles: string[] = [
    '10:00 - 10:30 AM',
    '10:30 - 11:00 AM',
    '11:00 - 11:30 AM',
    '11:30 - 12:00 PM',
    '12:00 - 12:30 PM',
    '12:30 - 1:00 PM',
    '1:00 - 1:30 PM',
    '1:30 - 2:00 PM',
  ];


}