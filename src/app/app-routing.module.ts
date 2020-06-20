import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'login', loadChildren: () => import('./Features/login/login.module').then(m => m.LoginModule) }, 
{ path: 'company', loadChildren: () => import('./Features/company/company.module').then(m => m.CompanyModule) },
{ path: 'employee', loadChildren: () => import('./Features/employee/employee.module').then(m => m.EmployeeModule) },
{ path: '', loadChildren: () => import('./Features/signup/signup.module').then(m => m.SignupModule) },
{ path: 'project', loadChildren: () => import('./Features/project/project.module').then(m => m.ProjectModule) },
{ path: 'department', loadChildren: () => import('./Features/department/department.module').then(m => m.DepartmentModule) },
{ path: 'role', loadChildren: () => import('./Features/role/role.module').then(m => m.RoleModule) },
{ path: 'task-routing', loadChildren: () => import('./Features/task/task.module').then(m => m.TaskModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
