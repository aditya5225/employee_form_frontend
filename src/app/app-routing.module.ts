import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';
import { EmplyeeListComponent } from './pages/emplyee-list/emplyee-list.component';

const routes: Routes = [{
  path: "",
  redirectTo: "employee",
  pathMatch: "full",
}, 
{ path: "employee", component: EmployeeFormComponent },
{ path: "employee_update/:id", component: EmployeeFormComponent },
{ path: "employee_list", component: EmplyeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
