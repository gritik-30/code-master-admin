import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test', loadChildren: () => import('src/app/pages/teacher/test/test.module').then(m => m.TestModule) },
  { path: 'question', loadChildren: () => import('src/app/pages/teacher/question/question.module').then(m => m.QuestionModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
