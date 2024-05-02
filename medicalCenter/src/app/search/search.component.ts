import { Component } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  nombreh: string = "";
  indice: number = 0;

  miDoctor: Doctor = {

    nombre : "",
    img : "",
    especialidad : ""
  };

}
