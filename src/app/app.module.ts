import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
