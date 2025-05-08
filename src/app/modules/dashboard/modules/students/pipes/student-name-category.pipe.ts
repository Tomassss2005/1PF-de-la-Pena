import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'StudentNameCategory',
  standalone: false
})
export class StudentNameCategoryPipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {
    return value.nombre + ' - ' + value.apellido;
  }

}