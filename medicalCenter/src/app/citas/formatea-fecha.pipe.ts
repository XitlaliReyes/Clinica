import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateaFecha',
  standalone: true
})
export class FormateaFechaPipe implements PipeTransform {

  transform(fechaTransformar: Date): string {
    return fechaTransformar.toString().split('T')[0].replace(/-/g, '/');
  }

}
