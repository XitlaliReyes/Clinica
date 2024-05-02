import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css',
})
export class CitasComponent {
  appointmentForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      doctorName: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      generalConditions: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.appointmentForm.valid) {
      // Aquí podrías guardar la cita en LocalStorage o enviarla al backend
      console.log('Formulario válido:', this.appointmentForm.value);
    } else {
      console.error('Formulario inválido. Revise los campos.');
    }
  }
}
