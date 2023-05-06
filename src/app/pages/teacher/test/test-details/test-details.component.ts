import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit {
  testId!: string;
  testDetails: any;
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
      },
      error: (err) => {
        console.error(err.error.message);
      }
    });
  }
}
