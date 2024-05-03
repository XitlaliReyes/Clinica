import { Injectable } from '@angular/core';
import { Doctor } from '../doctor';
import { DOCTORES } from '../misdoctores';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private misdoctores: Doctor[] = DOCTORES;
  constructor() { }

  getDoctores(): Doctor[] {
    return this.misdoctores;
  }

  getUnDoctor(id: number): Doctor {
    return this.misdoctores[id];
  }

  searchUnDoctor(nombre: string): number {

    return this.misdoctores.findIndex(doctor => doctor.nombre === nombre);
  }    
}
