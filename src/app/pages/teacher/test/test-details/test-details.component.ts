import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit {
  testId!: string;
  testDetails: any;
  questions!: any[];
  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.testId = this.activatedRoute.snapshot.params['id'];
    this.getTestDetails();
  }

  getTestDetails(): void {
    this.api.fetch(`test/${this.testId}`).subscribe({
      next: (response) => {
        this.testDetails = response;
        this.questions = response.questions;
      },
      error: (err) => {
        console.error(err.error.message);
      }
    });
  }

  copyLink(): void {
    const el = document.createElement('textarea');
    el.value = `${environment.baseExamUrl}/${this.testId}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Link copied to Clipboard!')
  }
}
