import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit {

  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) {}

  testForm!: FormGroup;
  selectedQuestions: any[] = [];
  questions: any[] = [];
  teacher: any;

  ngOnInit(): void {
    this.teacher = JSON.parse(localStorage.getItem('teacher') || '');
    this.buildTestForm();
    this.getAllQuestions();
  }

  buildTestForm(): void {
    this.testForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      instructions: this.fb.control('', Validators.required),
      totalMarks: this.fb.control('', Validators.required),
      passingMarks: this.fb.control('', Validators.required),
      createdBy: this.fb.control(this.teacher._id)
    });
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

  selectQuestion(event: any, question: string): void {
    if(event.target.checked) {
      this.selectedQuestions.push(question);
    } else {
      this.selectedQuestions.splice(this.selectedQuestions.indexOf(question), 1);
    }
    this.getTotalMarks();
  }
  
  getTotalMarks(): void {
    const totalMarks = this.selectedQuestions.reduce((acc, curr) => {
      return acc + curr.marks;
    }, 0);
    this.testForm.get('totalMarks')?.setValue(totalMarks);
  }

  getSelectedQuestionIds(): string[] {
    return this.selectedQuestions.map(question => question._id);
  }

  saveTest(): void {
    const testData = {
      ...this.testForm.value,
      questions: this.getSelectedQuestionIds()
    };
    console.log(testData);
    this.api
      .post('test', testData)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
