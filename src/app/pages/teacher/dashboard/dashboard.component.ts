import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  orgId!: string;
  teacher: any;
  totalTeachers!: number;
  totalStudents!: number;
  totalTests!: number;
  totalQuestions!: number;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.api.fetch(`teacher/getProfile`).subscribe({
      next: (response) => {
        this.teacher = response;
        localStorage.setItem('teacher', JSON.stringify(this.teacher));
        const teacher = JSON.parse(localStorage.getItem('teacher') || '')
        this.orgId = teacher.org._id
        if (response.isAdmin) {
          this.getTeachers();
          this.getStudents();
        } else {
          this.getTests();
          this.getAllQuestions();
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getTeachers(): void {
    this.api.fetch('teacher/all-teachers').subscribe({
      next: (response) => {
        const teachers = response.teachers;
        this.totalTeachers = teachers.length;
      }
    });
  }

  getStudents(): void {
    this.api.fetch(`teacher/student/${this.orgId}`).subscribe({
      next: (response) => {
        this.totalStudents = response.students.length;
      }
    });
  }

  getTests(): void {
    this.api.fetch('test').subscribe({
      next: (response) => {
        const tests = response;
        this.totalTests = tests.length;
      }
    });
  }

  getAllQuestions(): void {
    this.api.fetch('question').subscribe({
      next: (res) => {
        const questions = res.questions;
        this.totalQuestions = questions.length;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
