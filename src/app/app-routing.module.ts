import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './design/layout/layout.component';
import { SigninGuard } from './guards/signin.guard';
import { SignoutGuard } from './guards/signout.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth',
    loadChildren: () => import('src/app/pages/auth/auth.module').then(m => m.AuthModule),
    canActivate: [SignoutGuard]
  },
  {
    path: 'teacher',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/teacher/teacher.module').then(m => m.TeacherModule)
      }
    ],
    canActivate: [SigninGuard]
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/admin/admin.module').then(m => m.AdminModule)
      }
    ],
    canActivate: [SigninGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
