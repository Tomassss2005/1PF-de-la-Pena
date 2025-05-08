import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from './models/student';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  isEditingId: number | null = null;
  studentForm: FormGroup

  students: Student[] = [
    { id: 1, nombre: 'Tomás', nota: 8, apellido: 'García', curso: 1 },
    { id: 2, nombre: 'Nicolás', nota: 7, apellido: 'Rona', curso: 4 },
    { id: 3, nombre: 'Lucía', nota: 9, apellido: 'Perez', curso: 5 },
    { id: 4, nombre: 'Federico', nota: 5, apellido: 'Gonzales', curso: 2 },
    { id: 5, nombre: 'Abril', nota: 8, apellido: 'Sanina', curso: 1 },
    { id: 6, nombre: 'Mirko', nota: 6, apellido: 'Giralde', curso: 3 },
    { id: 7, nombre: 'Silvia', nota: 10, apellido: 'Jackson', curso: 5 },
    { id: 8, nombre: 'Carlos', nota: 7, apellido: 'Seles', curso: 4 },
  ];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      id: "",
      nombre: "",
      apellido: "",
      nota: "",
      curso: "",
    })
  }

  onsubmit() {

    if (this.isEditingId) {
      // Si está editando actualiza el usuario existente

      this.students = this.students.map((student) => student.id === this.isEditingId
        ? { ...student, ...this.studentForm.value } : student)

    } else {
      const newStudent = this.studentForm.value;
      newStudent.id = this.students.length + 1;
      this.students = [...this.students, this.studentForm.value];
      console.log(this.students);
    }
    this.studentForm.reset() // Resetea el formulario al modificar
    this.isEditingId = null;
  }

  onDeleteStudent(id: number) {
    console.log('Estudiante eliminado', id);
    if (confirm('¿Está seguro que quiere eliminar este estudiante?')) {
      this.students = this.students.filter((student) => student.id !== id);
    }
  }

  onEditStudent(student: Student) {
    this.isEditingId = student.id;
    console.log('Estudiante modificado', student);
    this.studentForm.patchValue(student);
  }
}