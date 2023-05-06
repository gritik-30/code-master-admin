import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionLibraryComponent } from './question-library/question-library.component';
import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-questions', pathMatch: 'full' },
  { path: 'all-questions', component: QuestionLibraryComponent },
  { path: 'new-question', component: AddQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
