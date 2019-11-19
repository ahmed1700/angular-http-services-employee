import { EmployeeEditComponent } from './emp/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './emp/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './emp/employee-create/employee-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
  [
    { path: '', component: EmployeeListComponent  },
    { path: 'create-emp', component: EmployeeCreateComponent },
    { path: 'list-emp', component: EmployeeListComponent },
    { path: 'edit-emp/:id', component: EmployeeEditComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
