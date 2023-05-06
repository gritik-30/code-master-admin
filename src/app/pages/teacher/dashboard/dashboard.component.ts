import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  teacher: any;

  constructor(
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    const token = localStorage.getItem('token');
    this.api.fetch(`teacher/${token}`).subscribe({
      next: (response) => {
        this.teacher = response;
        localStorage.setItem('teacher', JSON.stringify(this.teacher));
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
