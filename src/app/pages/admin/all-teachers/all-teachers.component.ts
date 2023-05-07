import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.scss']
})
export class AllTeachersComponent implements OnInit {
  teachers: any;

  constructor(
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getTeachers()
  }

  getTeachers(): void {
    this.api.fetch('teacher/all-teachers').subscribe({
      next: (response) => {
        this.teachers  = response.teachers;
      }
    });
  }
}
