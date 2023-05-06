import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { TestDetailsComponent } from './test-details/test-details.component';


@NgModule({
  declarations: [
    AllTestsComponent,
    TestDetailsComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
