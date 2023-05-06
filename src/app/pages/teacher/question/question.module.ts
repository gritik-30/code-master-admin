import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionLibraryComponent } from './question-library/question-library.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';


@NgModule({
  declarations: [
    QuestionLibraryComponent,
    SubjectsComponent,
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot()
  ]
})
export class QuestionModule { }
