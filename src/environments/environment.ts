// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  url:"http://3.133.244.20:8080/evaluatemyperformance/emf/",
  login:"login",
  addUser:"addUser",
  employeeData:"getEmployeeList",
  ProjectList:"getProjectList?projectId=",
  CreateProject:"addProject",
  CreateDepartment:"addDepartment",
  getDepartment:"getDepartment?departmentId=-1",
  getDepartmentById:"getDepartment?departmentId=",
  CreateRole:"addDesignation",
  GetDesignations:"getDesignation",
  AddEmployee:"addEmployee",
  getSkill:"getSkill",
  getTask:"getTask",
  createTask:"addTask",
  signup:"addUser",
  addCompany:"addCompany",
  getTeam:"getTeam",
  addGoal:"addGoal",
  getGoal:"getGoal",
  getElements:"getElements",
  getOperations:"getOperation",
  emailVerification:"emailVerification?tokenId=",
  createTeam:"addTeam",
  getTeamMember:"getTeamMember",
  addTeamMember:"manageTeam",
  getEmployeeData:"getEmployeeData",
  getDesignationElementMapping:"getDesignationElements?designationId=",
  getEmployeeElementsMapping:"getEmployeeElements?employeeId=",
  //master-admin
  getUserList:"getCompany",

  //delete
  deleteDepartment:"deleteDepartment",
  deleteEmployee:"deleteEmployee",
  deleteTask:"deleteTask",
  deleteRole:"deleteDesignation",
  deleteProject:"deleteProject",
  deleteTeam:"deleteTeam",

  //update
  updateTeam:"updateTeam",
  updateDesignation:"updateDesignation",
  updateTask:"updateTask",
  updateProject:"updateProject",
  updateDepartment:"updateDepartment",
  updateEmployee:"updateEmployee"


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
