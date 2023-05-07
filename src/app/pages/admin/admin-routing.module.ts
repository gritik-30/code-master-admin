import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  { path: 'teachers', component: AllTeachersComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'students', component: AllStudentsComponent },
  { path: 'add-student', component: AddStudentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
