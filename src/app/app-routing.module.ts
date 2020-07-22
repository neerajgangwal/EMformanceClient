import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './Shared/auth.guard';

const routes: Routes = [
{ path: 'login', loadChildren: () => import('./Features/login/login.module').then(m => m.LoginModule) }, 
{ path: 'company', loadChildren: () => import('./Features/company/company.module').then(m => m.CompanyModule) },
{ path: 'employee', loadChildren: () => import('./Features/employee/employee.module').then(m => m.EmployeeModule) ,canActivate:[AuthGuard]},
{ path: '', loadChildren: () => import('./Features/signup/signup.module').then(m => m.SignupModule) },
{ path: 'project', loadChildren: () => import('./Features/project/project.module').then(m => m.ProjectModule) ,canActivate:[AuthGuard]},
{ path: 'department', loadChildren: () => import('./Features/department/department.module').then(m => m.DepartmentModule) ,canActivate:[AuthGuard]},
{ path: 'role', loadChildren: () => import('./Features/role/role.module').then(m => m.RoleModule) ,canActivate:[AuthGuard]},
{ path: 'task', loadChildren: () => import('./Features/task/task.module').then(m => m.TaskModule) ,canActivate:[AuthGuard]},
{ path: 'team', loadChildren: () => import('./Features/team/team.module').then(m => m.TeamModule) ,canActivate:[AuthGuard]},
{ path: 'goals', loadChildren: () => import('./Features/goals/goals.module').then(m => m.GoalsModule) ,canActivate:[AuthGuard]},
{ path: 'ExitInterview', loadChildren: () => import('./Features/exit-interview/exit-interview.module').then(m => m.ExitInterviewModule) },
{ path: 'Skill', loadChildren: () => import('./Features/skill/skill.module').then(m => m.SkillModule) },
{ path: 'Feedback', loadChildren: () => import('./Features/feedback/feedback.module').then(m => m.FeedbackModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
