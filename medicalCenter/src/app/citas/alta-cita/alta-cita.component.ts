import { Component } from '@angular/core';
import { Cita } from '../cita.modle';
import { Doctor } from '../../doctor';
import { CitasService } from '../citas.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  porParametro: boolean = false;

  constructor(private citasService: CitasService, public activatedRoute: ActivatedRoute){}
  
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

}
