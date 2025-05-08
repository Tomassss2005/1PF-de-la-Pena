import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './students-routing.module';
import { StudentsComponent } from '../students/students.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { StudentNameCategoryPipe } from './pipes/student-name-category.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { StudentsTableComponent } from './components/users-table/students-table-component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsTableComponent,
    StudentNameCategoryPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }
