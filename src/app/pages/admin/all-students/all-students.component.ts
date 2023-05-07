import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit{

  students: any;
  orgId!: string;

  constructor(
    private api: ApiService
  ) {}

  ngOnInit(): void {
    const teacher = JSON.parse(localStorage.getItem('teacher') || '')
    this.orgId = teacher.org._id
    this.getStudents();
  }

  getStudents(): void {
    this.api.fetch(`teacher/student/${this.orgId}`).subscribe({
      next: (response) => {
        this.students  = response.students;
      }
    });
  }
  
}
