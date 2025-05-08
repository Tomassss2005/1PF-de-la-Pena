import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-users-table',
  standalone: false,
  templateUrl: './students-table-component.html',
  styles: ``
})
export class StudentsTableComponent {

  //Contiene un listado de id para cada columna
  displayedColumns: string[] = ['id', 'nombre', 'nota', 'curso', 'acciones'];

  //Datos de la tabla 
  @Input()
  dataSource: Student[] = [];

  @Output()
  deleteStudent = new EventEmitter<number>();

  @Output()
  editStudent = new EventEmitter<Student>();
}
