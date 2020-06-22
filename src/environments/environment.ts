// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ProjectListComponent } from 'src/app/Features/project/project-list/project-list.component';

export const environment = {
  production: false,
  url:"http://3.133.244.20:8080/evaluatemyperformance/emf/",
  login:"login",
  addUser:"addUser",
  employeeData:"getEmployeeList",
  ProjectList:"getProjectList",
  CreateDepartment:"addDepartment",
  getDepartment:"getDepartment?departmentId=-1",
  CreateRole:"addDesignation",
  GetDesignations:"getDesignation",
  AddEmployee:"addEmployee",
  getSkill:"getSkill",
  getTask:"getTask",
  signup:"addUser",
  addCompany:"addCompany"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
