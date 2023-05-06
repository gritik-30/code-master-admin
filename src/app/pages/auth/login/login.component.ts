import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {}

  loginForm!: FormGroup;

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, Validators.required)
    });
  }

  login(): void {
    this.api.post('teacher/login', this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response);
        alert(response.message);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/teacher']);
      },
      error: (error) => {
        console.error(error.error.message);
        alert(error.error.message);
      },
    });
  }


}
