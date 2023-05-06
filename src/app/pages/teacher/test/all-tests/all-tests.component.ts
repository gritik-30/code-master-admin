import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-tests',
  templateUrl: './all-tests.component.html',
  styleUrls: ['./all-tests.component.scss']
})
export class AllTestsComponent implements OnInit{
  tests: any = undefined;

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllTests()
  }

  getAllTests(): void {
    this.api.fetch('test').subscribe({
      next: (response) => {
        this.tests = response;
      }
    });
  }

  viewTestDetails(testId: string) {
    this.router.navigate([`teacher/test/details/${testId}`]);
  }
}
