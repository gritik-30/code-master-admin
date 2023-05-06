import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllTestsComponent,
    TestDetailsComponent,
    CreateTestComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    ReactiveFormsModule
  ]
})
export class TestModule { }
