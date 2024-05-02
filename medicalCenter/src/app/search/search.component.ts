import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  nombred: string = "";
  indice: number = 0;

  miDoctor: Doctor = {

    nombre : "",
    img : "",
    especialidad : ""
  };

  constructor(private doctorService: DoctorService, private activatedRoute: ActivatedRoute) { 
    
    this.activatedRoute.params.subscribe(params => {
      this.nombred = params['nombred'];
      this.indice = this.doctorService.searchUnDoctor(this.nombred);
      console.log("Estoy en el buscador");
      if(this.indice != -1){

        this.miDoctor = this.doctorService.getUnDoctor(this.indice);
      }
    });
  }


  
}
