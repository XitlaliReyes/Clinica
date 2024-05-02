import { Component, OnInit } from '@angular/core';
import { Miembros, MiembrosDesarrollo } from './miembros.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent implements OnInit {
  miembrosEquipo: Miembros[] = [];
  miembrosEquipoDesarrollo: MiembrosDesarrollo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cargarMiembrosEquipo();
    this.cargarMiembrosEquipoDesarrollo();
  }

  cargarMiembrosEquipo() {
    this.miembrosEquipo = [
      {
        nombre: 'Dra. Felicia Pérez',
        rol: 'Médico Cirujano',
        especialidad: 'Cirugía Cardiotorácica',
        telefono: '88-123-456-789',
        imagenUrl: 'assets/img_miembrosEquipo/doc3.jpg'
      },
      {
        nombre: 'Dra. María González',
        rol: 'Pediatra',
        especialidad: 'Pediatría Neonatal',
        telefono: '88-987-654-321',
        imagenUrl: 'assets/img_miembrosEquipo/doc2.jpg'
      },
      {
        nombre: 'Dr. Carlos Rodríguez',
        rol: 'Oncólogo',
        especialidad: 'Oncología Pediátrica',
        telefono: '88-555-555-555',
        imagenUrl: 'assets/img_miembrosEquipo/doc1.jpg'
      }
    ];
  }

  cargarMiembrosEquipoDesarrollo() {
    this.miembrosEquipoDesarrollo = [
      {
        nombre: 'Uriel Ulises Acosta Olvera',
        imagenUrl: 'assets/img_miembrosEquipo/uriel.jpeg'

      },
      {
        nombre: 'Juan Pablo de Luna de la Serna',
        imagenUrl: 'assets/img_miembrosEquipo/deluna.jpeg'

      },
      {
        nombre: 'Valeria Nuñez de Lira',
        imagenUrl: 'assets/img_miembrosEquipo/valeria.jpeg'

      },
      {
        nombre: 'Johan Ronaldo Martinez Ramirez',
        imagenUrl: 'assets/img_miembrosEquipo/rony.jpeg'

      },
      {
        nombre: 'Xitlali Sarahi Reyes Reyes',
        imagenUrl: 'assets/img_miembrosEquipo/xitlali.jpeg'

      }
    ];
  }
  
}
