import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { CreateTestComponent } from './create-test/create-test.component';

const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'library', component: AllTestsComponent },
  { path: 'new-test', component: CreateTestComponent },
  { path: 'details/:id', component: TestDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
