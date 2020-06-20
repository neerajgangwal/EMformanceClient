function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-role-role-module"], {
  /***/
  "./src/app/Features/role/create-role/create-role.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Features/role/create-role/create-role.component.ts ***!
    \********************************************************************/

  /*! exports provided: CreateRoleComponent */

  /***/
  function srcAppFeaturesRoleCreateRoleCreateRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRoleComponent", function () {
      return CreateRoleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../role.service */
    "./src/app/Features/role/role.service.ts");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../Services/layout.service */
    "./src/app/Services/layout.service.ts");

    var CreateRoleComponent = /*#__PURE__*/function () {
      function CreateRoleComponent(roleService, layoutService) {
        _classCallCheck(this, CreateRoleComponent);

        this.roleService = roleService;
        this.layoutService = layoutService;
      }

      _createClass(CreateRoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.layoutService.UpdateLayout(true, true, true, false);
        }
      }]);

      return CreateRoleComponent;
    }();

    CreateRoleComponent.ɵfac = function CreateRoleComponent_Factory(t) {
      return new (t || CreateRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]));
    };

    CreateRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateRoleComponent,
      selectors: [["app-create-role"]],
      decls: 173,
      vars: 0,
      consts: [[1, "main-panel"], [1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "top-heading"], [1, "form-container"], [1, "form-section"], [1, "col-lg-6"], [1, "form-group"], ["for", ""], ["name", "", "id", "", 1, "form-control"], ["value", ""], ["type", "text", "placeholder", "Enter Role Name", 1, "form-control"], [1, "col-lg-12", "permission-heading"], [1, "permission-section"], [1, "rolesection"], ["for", "", 1, "pull-left", "headtxt"], [1, "material-switch"], ["id", "EmployeeDetailsPermissions-create", "name", "someSwitchOption001", "type", "checkbox"], ["for", "EmployeeDetailsPermissions-create", 1, "label-default"], ["id", "EmployeeDetailsPermissions-edit", "name", "someSwitchOption001", "type", "checkbox"], ["for", "EmployeeDetailsPermissions-edit", 1, "label-default"], ["id", "EmployeeDetailsPermissions-delete", "name", "someSwitchOption001", "type", "checkbox"], ["for", "EmployeeDetailsPermissions-delete", 1, "label-default"], ["id", "ProjectPermission-create", "name", "someSwitchOption001", "type", "checkbox"], ["for", "ProjectPermission-create", 1, "label-default"], ["id", "ProjectPermission-edit", "name", "someSwitchOption001", "type", "checkbox"], ["for", "ProjectPermission-edit", 1, "label-default"], ["id", "ProjectPermission-delete", "name", "someSwitchOption001", "type", "checkbox"], ["for", "ProjectPermission-delete", 1, "label-default"], ["id", "PostJobPermissions-create", "name", "someSwitchOption001", "type", "checkbox"], ["for", "PostJobPermissions-create", 1, "label-default"], ["id", "PostJobPermissions-edit", "name", "someSwitchOption001", "type", "checkbox"], ["for", "PostJobPermissions-edit", 1, "label-default"], ["id", "PostJobPermissions-delete", "name", "someSwitchOption001", "type", "checkbox"], ["for", "PostJobPermissions-delete", 1, "label-default"], ["id", "TeamPermission-create", "name", "someSwitchOption001", "type", "checkbox"], ["for", "TeamPermission-create", 1, "label-default"], ["id", "TeamPermission-edit", "name", "someSwitchOption001", "type", "checkbox"], ["for", "TeamPermission-edit", 1, "label-default"], ["id", "TeamPermission-delete", "name", "someSwitchOption001", "type", "checkbox"], ["for", "TeamPermission-delete", 1, "label-default"], ["id", "ResumePermissions-create", "name", "someSwitchOption001", "type", "checkbox"], ["for", "ResumePermissions-create", 1, "label-default"], ["id", "ResumePermissions-edit", "name", "someSwitchOption001", "type", "checkbox"], ["for", "ResumePermissions-edit", 1, "label-default"], ["id", "ResumePermissions-delete", "name", "someSwitchOption001", "type", "checkbox"], ["for", "ResumePermissions-delete", 1, "label-default"], ["id", "SkillPermission-create", "name", "someSwitchOption001", "type", "checkbox"], ["for", "SkillPermission-create", 1, "label-default"], ["id", "SkillPermission-edit", "name", "someSwitchOption001", "type", "checkbox"], ["for", "SkillPermission-edit", 1, "label-default"], ["id", "SkillPermission-delete", "name", "someSwitchOption001", "type", "checkbox"], ["for", "SkillPermission-delete", 1, "label-default"], [1, "col-lg-3", "pull-right"], ["type", "submit", "value", "Create Role", 1, "subbtn", "btn", "btn-primary"]],
      template: function CreateRoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Department Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Project Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Roler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Employee Details Permissions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Project Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Post Job Permissions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Team Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Resume Permissions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Skill Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "label", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3JvbGUvY3JlYXRlLXJvbGUvY3JlYXRlLXJvbGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-role',
          templateUrl: './create-role.component.html',
          styleUrls: ['./create-role.component.css']
        }]
      }], function () {
        return [{
          type: _role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"]
        }, {
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/role/role-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/Features/role/role-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: RoleRoutingModule */

  /***/
  function srcAppFeaturesRoleRoleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleRoutingModule", function () {
      return RoleRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-role/create-role.component */
    "./src/app/Features/role/create-role/create-role.component.ts");

    var routes = [{
      path: 'create',
      component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_2__["CreateRoleComponent"]
    }];

    var RoleRoutingModule = function RoleRoutingModule() {
      _classCallCheck(this, RoleRoutingModule);
    };

    RoleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RoleRoutingModule
    });
    RoleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RoleRoutingModule_Factory(t) {
        return new (t || RoleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/role/role.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/Features/role/role.component.ts ***!
    \*************************************************/

  /*! exports provided: RoleComponent */

  /***/
  function srcAppFeaturesRoleRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleComponent", function () {
      return RoleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../Services/layout.service */
    "./src/app/Services/layout.service.ts");

    var RoleComponent = /*#__PURE__*/function () {
      function RoleComponent(layoutService) {
        _classCallCheck(this, RoleComponent);

        this.layoutService = layoutService;
      }

      _createClass(RoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.layoutService.UpdateLayout(true, true, true, false);
        }
      }]);

      return RoleComponent;
    }();

    RoleComponent.ɵfac = function RoleComponent_Factory(t) {
      return new (t || RoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]));
    };

    RoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoleComponent,
      selectors: [["app-role"]],
      decls: 2,
      vars: 0,
      template: function RoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "role works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-role',
          templateUrl: './role.component.html',
          styleUrls: ['./role.component.css']
        }]
      }], function () {
        return [{
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/role/role.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/Features/role/role.module.ts ***!
    \**********************************************/

  /*! exports provided: RoleModule */

  /***/
  function srcAppFeaturesRoleRoleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleModule", function () {
      return RoleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _role_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./role-routing.module */
    "./src/app/Features/role/role-routing.module.ts");
    /* harmony import */


    var _role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./role.component */
    "./src/app/Features/role/role.component.ts");
    /* harmony import */


    var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-role/create-role.component */
    "./src/app/Features/role/create-role/create-role.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./role.service */
    "./src/app/Features/role/role.service.ts");

    var RoleModule = function RoleModule() {
      _classCallCheck(this, RoleModule);
    };

    RoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RoleModule
    });
    RoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RoleModule_Factory(t) {
        return new (t || RoleModule)();
      },
      providers: [_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _role_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleModule, {
        declarations: [_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"], _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_4__["CreateRoleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _role_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"], _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_4__["CreateRoleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _role_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleRoutingModule"]],
          providers: [_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/role/role.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Features/role/role.service.ts ***!
    \***********************************************/

  /*! exports provided: RoleService */

  /***/
  function srcAppFeaturesRoleRoleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleService", function () {
      return RoleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RoleService = function RoleService(httpClient) {
      _classCallCheck(this, RoleService);

      this.httpClient = httpClient;

      this.addRole = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].CreateRole);
      };
    };

    RoleService.ɵfac = function RoleService_Factory(t) {
      return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RoleService,
      factory: RoleService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-role-role-module-es5.js.map