import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionLibraryComponent } from './question-library/question-library.component';
import { SubjectsComponent } from './subjects/subjects.component';


@NgModule({
  declarations: [
    QuestionLibraryComponent,
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule
  ]
})
export class QuestionModule { }
