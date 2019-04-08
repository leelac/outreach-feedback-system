import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeEventsComponent } from './pages/employee-events/employee-events.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FeedbackSuccessComponent } from './pages/feedback-success/feedback-success.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee-events', component: EmployeeEventsComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'feedback-success', component: FeedbackSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
