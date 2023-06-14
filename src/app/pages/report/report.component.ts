import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(
    private api: ApiService
  ) {}

  reports: any;
  ngOnInit(): void {
    this.api.fetch(`test/all-results`).subscribe({
      next: res => {
        this.reports = res;
      },
      error: err => {
        console.error(err);
        alert('Something went wrong! Please try later.');
      }
    })
  }
}
