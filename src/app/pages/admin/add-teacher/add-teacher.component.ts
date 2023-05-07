import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit{
  teacherForm!: FormGroup;
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teacherForm = this.buildTeacherForm();
  }

  buildTeacherForm(): FormGroup {
    return this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      _orgId: this.fb.control(this.getOrg(), Validators.required),
    });
  }

  getOrg(): string {
    return JSON.parse(localStorage.getItem('teacher') || '').org._id
  }

  registerTeacher(): void {
    this.api.post('teacher/register', this.teacherForm.value).subscribe({
      next: (res) => {
        alert(res.message);
        this.router.navigate(['admin/teachers']);
      }
    });
  }
}
