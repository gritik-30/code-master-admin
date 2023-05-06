import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit{

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  questionForm!: FormGroup;

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  ngOnInit(): void {
    this.questionForm = this.buildQuestionForm();
    this.addTestCase();
  }

  
  public get testCases() : FormArray {
    return this.questionForm.get('testCases') as FormArray;
  }

  buildQuestionForm(): FormGroup {
    return this.fb.group({
      questionText: this.fb.control('', Validators.required),
      marks: this.fb.control('', Validators.required),
      language: this.fb.control('', Validators.required),
      sourceCode: this.fb.control('', Validators.required),
      template: this.fb.control('', Validators.required),
      testCases: this.fb.array([])
    });
  }

  buildTestCaseForm(): FormGroup {
    return this.fb.group({
      input: this.fb.control('', Validators.required),
      expectedOutput: this.fb.control('', Validators.required)
    });
  }

  addTestCase(): void {
    this.testCases.push(this.buildTestCaseForm());
  }
  saveQuestion(): void {
    this.api
    .post('question', this.questionForm.value)
    .subscribe({
      next: (res) => {
        alert(res.message);
        this.router.navigate(['/teacher/question']);
        },
        error: (err) => {
          console.error(err);
          alert(err.error.message);
        }
      });
  }

}
