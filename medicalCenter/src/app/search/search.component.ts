import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../shared/doctor.service';
import { UndoctorComponent } from "../undoctor/undoctor.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [UndoctorComponent]
})
export class SearchComponent {

  nombred: string = "";
  indice: number = 0;

  miDoctor: Doctor = {

    cedula: "",
    nombre: "",
    img: "",
    titulo: "",
    universidad: "",
    especialidad: "",
    lugarEspecialidad: "",
    areasExperiencia: [],
    costoconsulta: 0
  };

  constructor(private doctorService: DoctorService, private activatedRoute: ActivatedRoute) { 
    
    this.activatedRoute.params.subscribe(params => {
      // console.log("Estoy en el search");
      // console.log(params);
      this.nombred = params['nombred'];
      
      this.indice = this.doctorService.searchUnDoctor(this.nombred);
      if(this.indice != -1){

        this.miDoctor = this.doctorService.getUnDoctor(this.indice);
      }
    });
  }


  
}
