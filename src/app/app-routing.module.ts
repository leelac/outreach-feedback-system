import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeEventsComponent } from './pages/employee-events/employee-events.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee-events', component: EmployeeEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
