import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentForm = this.buildTeacherForm();
  }

  buildTeacherForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      org: this.fb.control(this.getOrg(), Validators.required),
    });
  }

  getOrg(): string {
    return JSON.parse(localStorage.getItem('teacher') || '').org._id
  }

  registerStudent(): void {
    this.api.post('teacher/student', this.studentForm.value).subscribe({
      next: (res) => {
        alert(res.message);
        this.router.navigate(['admin/students']);
      }
    });
  }
}
