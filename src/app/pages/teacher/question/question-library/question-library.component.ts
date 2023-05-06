import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-question-library',
  templateUrl: './question-library.component.html',
  styleUrls: ['./question-library.component.scss']
})
export class QuestionLibraryComponent implements OnInit {

  constructor(
    private api: ApiService
  ) {}

  questions: any[] = [];
  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions(): void {
    this.api.fetch('question').subscribe({
      next: (res) => {
        this.questions = res.questions;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
