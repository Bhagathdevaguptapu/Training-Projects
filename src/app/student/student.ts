import { Component } from '@angular/core';
import { Student } from '../model/student.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class StudentComponent {
  students: Student[] =[
      new Student(1, "Bhagath",85),
      new Student(2, "Krishna",75),
      new Student(3, "Vamsi",50),
    ];
}
