(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-employee-employee-module"],{

/***/ "./src/app/Entities/UpdateElementOperation.ts":
/*!****************************************************!*\
  !*** ./src/app/Entities/UpdateElementOperation.ts ***!
  \****************************************************/
/*! exports provided: ElementOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementOperation", function() { return ElementOperation; });
class ElementOperation {
}


/***/ }),

/***/ "./src/app/Entities/UpdateEmployeePermissions.ts":
/*!*******************************************************!*\
  !*** ./src/app/Entities/UpdateEmployeePermissions.ts ***!
  \*******************************************************/
/*! exports provided: EmployeePermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePermissions", function() { return EmployeePermissions; });
class EmployeePermissions {
}


/***/ }),

/***/ "./src/app/Entities/UpdateEmployeeRoleElement.ts":
/*!*******************************************************!*\
  !*** ./src/app/Entities/UpdateEmployeeRoleElement.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeRoleElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoleElement", function() { return EmployeeRoleElement; });
class EmployeeRoleElement {
}


/***/ }),

/***/ "./src/app/Features/employee/create-employee/create-employee.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Features/employee/create-employee/create-employee.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_Entities_EmployeePermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Entities/EmployeePermissions */ "./src/app/Entities/EmployeePermissions.ts");
/* harmony import */ var src_app_Entities_EmployeeRoleElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Entities/EmployeeRoleElement */ "./src/app/Entities/EmployeeRoleElement.ts");
/* harmony import */ var src_app_Entities_ElementOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Entities/ElementOperation */ "./src/app/Entities/ElementOperation.ts");
/* harmony import */ var _Services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/layout.service */ "./src/app/Services/layout.service.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../employee.service */ "./src/app/Features/employee/employee.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function CreateEmployeeComponent_div_3_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide first name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEmployeeComponent_div_3_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEmployeeComponent_div_3_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEmployeeComponent_div_3_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEmployeeComponent_div_3_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid employeeId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEmployeeComponent_div_3_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", department_r12.departmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r12.departmentName, "");
} }
function CreateEmployeeComponent_div_3_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEmployeeComponent_div_3_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEmployeeComponent_div_3_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const designation_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", designation_r13.designationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", designation_r13.designationName, "");
} }
function CreateEmployeeComponent_div_3_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEmployeeComponent_div_3_div_83_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const operation_r17 = ctx.$implicit;
    const operationIndex_r18 = ctx.index;
    const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", operationIndex_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](operation_r17.controls.operationName.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", element_r14.controls.elementName.value + operation_r17.controls.operationName.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", element_r14.controls.elementName.value + operation_r17.controls.operationName.value);
} }
function CreateEmployeeComponent_div_3_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateEmployeeComponent_div_3_div_83_div_5_Template, 7, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const elementIndex_r15 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", elementIndex_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.controls.elementName.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.ElementOperationsList(elementIndex_r15).controls);
} }
function CreateEmployeeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Upload Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateEmployeeComponent_div_3_span_15_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateEmployeeComponent_div_3_span_21_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email Address*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CreateEmployeeComponent_div_3_span_27_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateEmployeeComponent_div_3_span_33_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Employee Id*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CreateEmployeeComponent_div_3_span_39_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Select Department*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateEmployeeComponent_div_3_Template_select_change_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.SelectDepartmentChanged(ctx_r20.EmployeeForm.controls["departmentId"].value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Select Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CreateEmployeeComponent_div_3_option_47_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CreateEmployeeComponent_div_3_span_48_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Phone Number*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CreateEmployeeComponent_div_3_span_54_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Select Role*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateEmployeeComponent_div_3_Template_select_change_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.SelectRoleChanged(ctx_r22.EmployeeForm.controls["designationId"].value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Select Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CreateEmployeeComponent_div_3_option_62_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CreateEmployeeComponent_div_3_span_63_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Gender*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_a_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.RadioButtonClick("Male"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_a_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.RadioButtonClick("Female"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_a_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.RadioButtonClick("Other"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Select Permission");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, CreateEmployeeComponent_div_3_div_83_Template, 6, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_input_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.CancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_input_click_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.CreateEmployee(ctx_r27.EmployeeForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.EmployeeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeFname"].valid && (ctx_r0.EmployeeForm.controls["employeeFname"].dirty || ctx_r0.EmployeeForm.controls["employeeFname"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeMname"].valid && (ctx_r0.EmployeeForm.controls["employeeMname"].dirty || ctx_r0.EmployeeForm.controls["employeeMname"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeEmail"].valid && (ctx_r0.EmployeeForm.controls["employeeEmail"].dirty || ctx_r0.EmployeeForm.controls["employeeEmail"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeePassword"].valid && (ctx_r0.EmployeeForm.controls["employeePassword"].dirty || ctx_r0.EmployeeForm.controls["employeePassword"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeUserId"].valid && (ctx_r0.EmployeeForm.controls["employeeUserId"].dirty || ctx_r0.EmployeeForm.controls["employeeUserId"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.DepartmentList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["departmentId"].valid && (ctx_r0.EmployeeForm.controls["departmentId"].dirty || ctx_r0.EmployeeForm.controls["departmentId"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeMobileNo"].valid && (ctx_r0.EmployeeForm.controls["employeeMobileNo"].dirty || ctx_r0.EmployeeForm.controls["employeeMobileNo"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.DesignationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["designationId"].valid && (ctx_r0.EmployeeForm.controls["designationId"].dirty || ctx_r0.EmployeeForm.controls["designationId"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.EmployeeForm.controls["gender"].value == "Male")("notActive", ctx_r0.EmployeeForm.controls["gender"].value != "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.EmployeeForm.controls["gender"].value == "Male")("notActive", ctx_r0.EmployeeForm.controls["gender"].value != "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.EmployeeForm.controls["gender"].value == "Male")("notActive", ctx_r0.EmployeeForm.controls["gender"].value != "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ElementsList.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.EmployeeForm.valid);
} }
class CreateEmployeeComponent {
    constructor(layoutService, employeeService, fb, messageService, userService, router) {
        this.layoutService = layoutService;
        this.employeeService = employeeService;
        this.fb = fb;
        this.messageService = messageService;
        this.userService = userService;
        this.router = router;
        this.RolePermissions = [];
        this.InitializeForm = function () {
            if (this.EmployeeForm) {
                var employee = this.EmployeeForm.value;
                this.EmployeeForm = this.fb.group({
                    designationId: [employee.designationId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    departmentId: [employee.departmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeFname: [employee.employeeFname, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeMname: [employee.employeeMname, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeEmail: [employee.employeeEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                    employeePassword: [employee.employeePassword, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeMobileNo: [employee.employeeMobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeProfileImg: [employee.employeeProfileImg],
                    employeeUserId: [employee.employeeUserId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    gender: [employee.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeElementMappingList: this.Elements
                });
            }
            else {
                this.EmployeeForm = this.fb.group({
                    designationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    departmentId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeFname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeMname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                    employeePassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeMobileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeProfileImg: [''],
                    employeeUserId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    gender: ['Male', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    employeeElementMappingList: this.Elements
                });
            }
        };
        this.SelectDepartmentChanged = function (id) {
            this.employeeService.GetRolesForDepartmentId(id).subscribe((res) => {
                this.EmployeeForm.patchValue({
                    designationId: ''
                });
                this.DesignationList = res.dataObj;
                console.log(this.DesignationList);
            });
        };
        this.CreateEmployee = function (data) {
            console.log("TestData");
            console.log(data);
            var convertedData = this.MapDataToEntity(data);
            this.employeeService.CreateEmployee(convertedData).subscribe((res) => {
                console.log(res);
                if (res.errorCode == 0) {
                    console.log("success");
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully created employee' });
                    this.resetForm();
                    this.CancelButtonClick();
                    this.EmployeeForm.patchValue({
                        gender: 'Male'
                    });
                    var signupData = {
                        userRole: "NON-ADMIN",
                        companyInfo: this.userService.LoggedInUser.CompanyInfo,
                        name: data.employeeFname,
                        password: data.employeePassword,
                        email: data.employeeEmail
                    };
                    this.employeeService.CreateSignUp(signupData).subscribe((res2) => {
                        if (res2.errorCode == 0) {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully created employee signup' });
                        }
                    });
                }
                else {
                    this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
                }
            }, (err) => {
                console.log(err);
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Failed , please try again" });
            });
        };
        this.MapDataToEntity = function (data) {
            var Empobj = new src_app_Entities_EmployeePermissions__WEBPACK_IMPORTED_MODULE_2__["EmployeePermissions"]();
            Empobj.designationId = data.designationId;
            Empobj.departmentId = data.departmentId;
            Empobj.employeeFname = data.employeeFname;
            Empobj.employeeMname = data.employeeMname;
            Empobj.employeeEmail = data.employeeEmail;
            Empobj.employeeMobileNo = data.employeeMobileNo;
            Empobj.employeePassword = data.employeePassword;
            Empobj.employeeProfileImg = data.employeeProfileImg;
            Empobj.employeeCode = data.employeeId;
            Empobj.gender = data.gender;
            Empobj.employeeElementMappingList = [];
            data.employeeElementMappingList.forEach(elementdata => {
                var element = new src_app_Entities_EmployeeRoleElement__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoleElement"]();
                element.elementId = elementdata.elementId;
                element.employeeElementOprationList = [];
                elementdata.employeeElementOperationList.forEach(operationData => {
                    if (operationData.value == true) {
                        var opertaion = new src_app_Entities_ElementOperation__WEBPACK_IMPORTED_MODULE_4__["ElementOperation"]();
                        opertaion.operationId = operationData.operationId;
                        element.employeeElementOprationList.push(opertaion);
                    }
                });
                Empobj.employeeElementMappingList.push(element);
            });
            return Empobj;
        };
        this.resetForm = function () {
            this.EmployeeForm.reset();
            this.PermissionsData = null;
            this.InitializeForm();
        };
        this.RadioButtonClick = function (data) {
            this.EmployeeForm.patchValue({
                gender: data
            });
        };
    }
    CreateHashMap(data) {
        this.PermissionsData = new Map();
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            var operations = [];
            for (let index2 = 0; index2 < element.roleElementOprationList.length; index2++) {
                const operation = element.roleElementOprationList[index2];
                operations.push(operation.operationId);
            }
            this.PermissionsData.set(element.elementId, operations);
        }
    }
    CheckPermission(elementId, operationId) {
        if (this.PermissionsData) {
            var list = this.PermissionsData.get(elementId);
            if (list) {
                if (list.indexOf(operationId) > -1) {
                    return true;
                }
                ;
            }
        }
        return false;
    }
    ngOnInit() {
        this.employeeService.GetDepartments().subscribe((res) => {
            this.DepartmentList = res.dataObj;
            console.log(this.DepartmentList);
        });
        this.employeeService.getElements()
            .subscribe((res) => {
            if (res.errorCode == 0) {
                this.ElementsData = res.dataObj;
                this.employeeService.getOperations().subscribe((res2) => {
                    if (res2.errorCode == 0) {
                        this.OperationsData = res2.dataObj;
                        this.InitializeForm();
                        console.log(this.EmployeeForm.value);
                    }
                    ;
                });
            }
        });
    }
    SelectRoleChanged(id) {
        this.employeeService.getRolePermissions(id).subscribe(res => {
            this.CreateHashMap(res.dataObj.designationElementMappingList);
            console.log(id);
            this.InitializeForm();
        });
    }
    get Elements() {
        var elementsArray = this.fb.array([]);
        this.ElementsData.forEach(element => {
            elementsArray.push(this.fb.group({
                elementId: [element.elementId],
                elementName: [element.elementName],
                employeeElementOperationList: this.Operations(element.elementId)
            }));
        });
        return elementsArray;
    }
    Operations(elementId) {
        var operationsArray = this.fb.array([]);
        this.OperationsData.forEach(element => {
            operationsArray.push(this.fb.group({
                operationId: [element.operationId],
                operationName: [element.operationName],
                value: [this.CheckPermission(elementId, element.operationId)],
            }));
        });
        return operationsArray;
    }
    ;
    get ElementsList() {
        return this.EmployeeForm.get('employeeElementMappingList');
    }
    ElementOperationsList(elementIndex) {
        return this.ElementsList.controls[elementIndex].get('employeeElementOperationList');
    }
    CancelButtonClick() {
        this.router.navigateByUrl("/employee/list");
    }
}
CreateEmployeeComponent.ɵfac = function CreateEmployeeComponent_Factory(t) { return new (t || CreateEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
CreateEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateEmployeeComponent, selectors: [["app-create-employee"]], decls: 4, vars: 1, consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], ["class", "form-container", 3, "formGroup", 4, "ngIf"], [1, "form-container", 3, "formGroup"], [1, "form-section"], [1, "col-lg-12"], ["data-color", "orange", "id", "wizardProfile", 1, "card", "wizard-card"], [1, "picture-container"], [1, "picture"], ["src", "assets/img/default-avatar.jpg", "id", "wizardPicturePreview", "title", "", 1, "picture-src"], ["type", "file", "id", "wizard-picture", "formControlName", "employeeProfileImg"], [1, "col-lg-6"], [1, "form-group"], ["for", ""], ["type", "text", "formControlName", "employeeFname", "placeholder", "Enter your first name", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "employeeMname", "placeholder", "Enter Last Name", 1, "form-control"], ["type", "text", "formControlName", "employeeEmail", "placeholder", "Enter Email Address", 1, "form-control"], ["type", "password", "formControlName", "employeePassword", "placeholder", "Enter Password", 1, "form-control"], ["type", "text", "formControlName", "employeeUserId", "placeholder", "Enter Employee Id", 1, "form-control"], ["name", "", "id", "", "formControlName", "departmentId", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "employeeMobileNo", "placeholder", "Enter Phone Number", 1, "form-control"], ["name", "", "id", "", "formControlName", "designationId", 1, "form-control", 3, "change"], ["for", "fun", 1, "control-label", "text-right"], [1, "input-group"], ["id", "radioBtn", 1, "btn-group"], ["data-toggle", "fun", "data-title", "Y", 1, "btn", "btn-primary", "gender", "btn-sm", "active", 3, "click"], ["data-toggle", "fun", "data-title", "X", 1, "btn", "btn-primary", "gender", "btn-sm", "notActive", 3, "click"], ["data-toggle", "fun", "data-title", "N", 1, "btn", "btn-primary", "btn-sm", "gender", "notActive", 3, "click"], ["type", "hidden", "name", "fun", "id", "fun", "formControlName", "gender"], [1, "form-container"], [1, "col-lg-12", "permission-heading"], ["formArrayName", "employeeElementMappingList", 1, "permission-section"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "pull-right"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "value", "Create Employee", 1, "subbtn", "btn", "btn-primary", 3, "disabled", "click"], [1, "error"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [3, "value"], [1, "rolesection", 3, "formGroupName"], ["for", "", 1, "pull-left", "headtxt", 2, "width", "30%"], ["class", "material-switch", "formArrayName", "employeeElementOperationList", 4, "ngFor", "ngForOf"], ["formArrayName", "employeeElementOperationList", 1, "material-switch"], [3, "formGroupName"], ["name", "someSwitchOption001", "formControlName", "value", "type", "checkbox", 3, "id"], [1, "label-default", 3, "for"]], template: function CreateEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateEmployeeComponent_div_3_Template, 87, 25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EmployeeForm != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL2NyZWF0ZS1lbXBsb3llZS9jcmVhdGUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-employee',
                templateUrl: './create-employee.component.html',
                styleUrls: ['./create-employee.component.css']
            }]
    }], function () { return [{ type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"] }, { type: _employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }, { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Features/employee/edit-employee/edit-employee.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Features/employee/edit-employee/edit-employee.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function() { return EditEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_Entities_UpdateEmployeePermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Entities/UpdateEmployeePermissions */ "./src/app/Entities/UpdateEmployeePermissions.ts");
/* harmony import */ var src_app_Entities_UpdateEmployeeRoleElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Entities/UpdateEmployeeRoleElement */ "./src/app/Entities/UpdateEmployeeRoleElement.ts");
/* harmony import */ var src_app_Entities_UpdateElementOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Entities/UpdateElementOperation */ "./src/app/Entities/UpdateElementOperation.ts");
/* harmony import */ var _Services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/layout.service */ "./src/app/Services/layout.service.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../employee.service */ "./src/app/Features/employee/employee.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function EditEmployeeComponent_div_3_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide first name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEmployeeComponent_div_3_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEmployeeComponent_div_3_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEmployeeComponent_div_3_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEmployeeComponent_div_3_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid employeeId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEmployeeComponent_div_3_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", department_r12.departmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r12.departmentName, "");
} }
function EditEmployeeComponent_div_3_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEmployeeComponent_div_3_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEmployeeComponent_div_3_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const designation_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", designation_r13.designationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](designation_r13.designationName);
} }
function EditEmployeeComponent_div_3_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditEmployeeComponent_div_3_div_83_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const operation_r17 = ctx.$implicit;
    const operationIndex_r18 = ctx.index;
    const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", operationIndex_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](operation_r17.controls.operationName.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", element_r14.controls.elementName.value + operation_r17.controls.operationName.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", element_r14.controls.elementName.value + operation_r17.controls.operationName.value);
} }
function EditEmployeeComponent_div_3_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditEmployeeComponent_div_3_div_83_div_5_Template, 7, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const elementIndex_r15 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", elementIndex_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.controls.elementName.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.ElementOperationsList(elementIndex_r15).controls);
} }
function EditEmployeeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "upload Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditEmployeeComponent_div_3_span_15_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditEmployeeComponent_div_3_span_21_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EditEmployeeComponent_div_3_span_27_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EditEmployeeComponent_div_3_span_33_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Employee Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, EditEmployeeComponent_div_3_span_39_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Select Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditEmployeeComponent_div_3_Template_select_change_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.SelectDepartmentChanged(ctx_r20.EmployeeForm.controls["departmentId"].value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Select Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EditEmployeeComponent_div_3_option_47_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EditEmployeeComponent_div_3_span_48_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EditEmployeeComponent_div_3_span_54_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Select Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditEmployeeComponent_div_3_Template_select_change_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.SelectRoleChanged(ctx_r22.EmployeeForm.controls["designationId"].value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Select Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, EditEmployeeComponent_div_3_option_62_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, EditEmployeeComponent_div_3_span_63_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_a_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.RadioButtonClick("Male"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_a_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.RadioButtonClick("Female"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_a_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.RadioButtonClick("Other"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Select Permission");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, EditEmployeeComponent_div_3_div_83_Template, 6, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_input_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.CancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_input_click_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.UpdateEmployee(ctx_r27.EmployeeForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.EmployeeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeFname"].valid && (ctx_r0.EmployeeForm.controls["employeeFname"].dirty || ctx_r0.EmployeeForm.controls["employeeFname"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeMname"].valid && (ctx_r0.EmployeeForm.controls["employeeMname"].dirty || ctx_r0.EmployeeForm.controls["employeeMname"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeEmail"].valid && (ctx_r0.EmployeeForm.controls["employeeEmail"].dirty || ctx_r0.EmployeeForm.controls["employeeEmail"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeePassword"].valid && (ctx_r0.EmployeeForm.controls["employeePassword"].dirty || ctx_r0.EmployeeForm.controls["employeePassword"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeUserId"].valid && (ctx_r0.EmployeeForm.controls["employeeUserId"].dirty || ctx_r0.EmployeeForm.controls["employeeUserId"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.DepartmentList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["departmentId"].valid && (ctx_r0.EmployeeForm.controls["departmentId"].dirty || ctx_r0.EmployeeForm.controls["departmentId"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["employeeMobileNo"].valid && (ctx_r0.EmployeeForm.controls["employeeMobileNo"].dirty || ctx_r0.EmployeeForm.controls["employeeMobileNo"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.EmployeeForm.controls["departmentId"].value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.DesignationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.EmployeeForm.controls["designationId"].valid && (ctx_r0.EmployeeForm.controls["designationId"].dirty || ctx_r0.EmployeeForm.controls["designationId"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.EmployeeForm.controls["gender"].value == "Male")("notActive", ctx_r0.EmployeeForm.controls["gender"].value != "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.EmployeeForm.controls["gender"].value == "Male")("notActive", ctx_r0.EmployeeForm.controls["gender"].value != "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.EmployeeForm.controls["gender"].value == "Male")("notActive", ctx_r0.EmployeeForm.controls["gender"].value != "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ElementsList.controls);
} }
class EditEmployeeComponent {
    constructor(layoutService, employeeService, fb, messageService, route, router) {
        this.layoutService = layoutService;
        this.employeeService = employeeService;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.RolePermissions = [];
        this.InitializeForm = function (employee) {
            this.EmployeeForm = this.fb.group({
                employeeId: [employee.employeeId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                designationId: [employee.designationId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                departmentId: [employee.departmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeFname: [employee.employeeFname, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeMname: [employee.employeeMname, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeEmail: [employee.employeeEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                employeePassword: [employee.employeePassword, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeMobileNo: [employee.employeeMobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeProfileImg: [employee.employeeProfileImg],
                employeeUserId: [employee.employeeUserId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                gender: [employee.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeElementMappingList: this.Elements
            });
            this.employeeService.GetDepartments().subscribe((res) => {
                this.DepartmentList = res.dataObj;
                console.log(this.DepartmentList);
            });
            this.SelectDepartmentChanged(employee.departmentId);
        };
        this.SelectDepartmentChanged = function (id) {
            this.employeeService.GetRolesForDepartmentId(id).subscribe((res) => {
                this.EmployeeForm.patchValue({
                    designationId: ''
                });
                this.DesignationList = res.dataObj;
                console.log(this.DesignationList);
            });
        };
        this.UpdateEmployee = function (data) {
            console.log("TestData");
            console.log(data);
            var convertedData = this.MapDataToEntity(data);
            this.employeeService.UpdateEmployee(convertedData).subscribe((res) => {
                console.log(res);
                if (res.errorCode == 0) {
                    console.log("success");
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully created employee' });
                    this.router.navigate(['employee', 'list']);
                    this.resetForm();
                    this.EmployeeForm.patchValue({
                        gender: 'Male'
                    });
                    this.router.navigateByUrl("/employee/list");
                }
                else {
                    this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
                }
            }, (err) => {
                console.log(err);
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Failed , please try again" });
            });
        };
        this.MapDataToEntity = function (data) {
            var Empobj = new src_app_Entities_UpdateEmployeePermissions__WEBPACK_IMPORTED_MODULE_2__["EmployeePermissions"]();
            Empobj.designationId = data.designationId;
            Empobj.departmentId = data.departmentId;
            Empobj.employeeFname = data.employeeFname;
            Empobj.employeeMname = data.employeeMname;
            Empobj.employeeEmail = data.employeeEmail;
            Empobj.employeeMobileNo = data.employeeMobileNo;
            Empobj.employeePassword = data.employeePassword;
            Empobj.employeeProfileImg = data.employeeProfileImg;
            Empobj.employeeUserId = data.employeeCode;
            Empobj.employeeId = data.employeeId;
            Empobj.gender = data.gender;
            Empobj.employeeElementMappingList = [];
            data.employeeElementMappingList.forEach(elementdata => {
                var element = new src_app_Entities_UpdateEmployeeRoleElement__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoleElement"]();
                element.elementId = elementdata.elementId;
                element.employeeElementMpgId = this.ElementIdMapping.get(elementdata.elementId);
                element.employeeElementOprationList = [];
                elementdata.employeeElementOperationList.forEach(operationData => {
                    if (operationData.value == true) {
                        var opertaion = new src_app_Entities_UpdateElementOperation__WEBPACK_IMPORTED_MODULE_4__["ElementOperation"]();
                        opertaion.operationId = operationData.operationId;
                        opertaion.employeeElementOperationId = this.OPerationIdMapping.get(elementdata.elementId + '-' + operationData.operationId);
                        element.employeeElementOprationList.push(opertaion);
                    }
                });
                Empobj.employeeElementMappingList.push(element);
            });
            return Empobj;
        };
        this.resetForm = function () {
            this.router.navigate(['employee', 'list']);
            this.EmployeeForm.reset();
            this.InitializeForm();
        };
        this.RadioButtonClick = function (data) {
            this.EmployeeForm.patchValue({
                gender: data
            });
        };
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe(params => {
            var id = params.get("id");
            this.employeeService.getElements()
                .subscribe((res) => {
                if (res.errorCode == 0) {
                    this.ElementsData = res.dataObj;
                    this.employeeService.getOperations().subscribe((res2) => {
                        if (res2.errorCode == 0) {
                            this.OperationsData = res2.dataObj;
                            this.employeeService.GetEmployeeById(id).subscribe(res => {
                                var employee = res.dataObj[0];
                                this.employeeService.getEmployeeElementMapping(id).subscribe(res => {
                                    this.CreateHashMap(res.dataObj.employeeElementMappingList);
                                    this.InitializeForm(employee);
                                });
                            });
                        }
                        ;
                    });
                }
            });
        });
    }
    SelectRoleChanged(id) {
    }
    CreateHashMap(data) {
        this.PermissionsData = new Map();
        this.ElementIdMapping = new Map();
        this.OPerationIdMapping = new Map();
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            this.ElementIdMapping.set(element.elementId, element.employeeElementMpgId);
            var operations = [];
            for (let index2 = 0; index2 < element.employeeElementOprationList.length; index2++) {
                const operation = element.employeeElementOprationList[index2];
                this.OPerationIdMapping.set(element.elementId + '-' + operation.operationId, operation.employeeElementOperationId);
                operations.push(operation.operationId);
            }
            this.PermissionsData.set(element.elementId, operations);
        }
    }
    CheckPermission(elementId, operationId) {
        if (this.PermissionsData) {
            var list = this.PermissionsData.get(elementId);
            if (list) {
                if (list.indexOf(operationId) > -1) {
                    return true;
                }
                ;
            }
        }
        return false;
    }
    get Elements() {
        var elementsArray = this.fb.array([]);
        this.ElementsData.forEach(element => {
            elementsArray.push(this.fb.group({
                elementId: [element.elementId],
                elementName: [element.elementName],
                employeeElementOperationList: this.Operations(element.elementId)
            }));
        });
        return elementsArray;
    }
    Operations(elementId) {
        var operationsArray = this.fb.array([]);
        this.OperationsData.forEach(element => {
            operationsArray.push(this.fb.group({
                operationId: [element.operationId],
                operationName: [element.operationName],
                value: [this.CheckPermission(elementId, element.operationId)],
            }));
        });
        return operationsArray;
    }
    ;
    get ElementsList() {
        return this.EmployeeForm.get('employeeElementMappingList');
    }
    ElementOperationsList(elementIndex) {
        return this.ElementsList.controls[elementIndex].get('employeeElementOperationList');
    }
    CancelButtonClick() {
        this.router.navigateByUrl("/employee/list");
    }
}
EditEmployeeComponent.ɵfac = function EditEmployeeComponent_Factory(t) { return new (t || EditEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
EditEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditEmployeeComponent, selectors: [["app-edit-employee"]], decls: 4, vars: 1, consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], ["class", "form-container", 3, "formGroup", 4, "ngIf"], [1, "form-container", 3, "formGroup"], [1, "form-section"], [1, "col-lg-12"], ["data-color", "orange", "id", "wizardProfile", 1, "card", "wizard-card"], [1, "picture-container"], [1, "picture"], ["src", "assets/img/default-avatar.jpg", "id", "wizardPicturePreview", "title", "", 1, "picture-src"], ["type", "file", "id", "wizard-picture", "formControlName", "employeeProfileImg"], [1, "col-lg-6"], [1, "form-group"], ["for", ""], ["type", "text", "formControlName", "employeeFname", "placeholder", "Enter your first name", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "employeeMname", "placeholder", "Enter Last Name", 1, "form-control"], ["type", "text", "formControlName", "employeeEmail", "placeholder", "Enter Email Address", 1, "form-control"], ["type", "password", "formControlName", "employeePassword", "placeholder", "Enter Password", 1, "form-control"], ["type", "text", "formControlName", "employeeUserId", "placeholder", "Enter Employee Id", 1, "form-control"], ["name", "", "id", "", "formControlName", "departmentId", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "employeeMobileNo", "placeholder", "Enter Phone Number", 1, "form-control"], ["name", "", "id", "", "formControlName", "designationId", 1, "form-control", 3, "disabled", "change"], ["for", "fun", 1, "control-label", "text-right"], [1, "input-group"], ["id", "radioBtn", 1, "btn-group"], ["data-toggle", "fun", "data-title", "Y", 1, "btn", "btn-primary", "gender", "btn-sm", "active", 3, "click"], ["data-toggle", "fun", "data-title", "X", 1, "btn", "btn-primary", "gender", "btn-sm", "notActive", 3, "click"], ["data-toggle", "fun", "data-title", "N", 1, "btn", "btn-primary", "btn-sm", "gender", "notActive", 3, "click"], ["type", "hidden", "name", "fun", "id", "fun", "formControlName", "gender"], [1, "form-container"], [1, "col-lg-12", "permission-heading"], ["formArrayName", "employeeElementMappingList", 1, "permission-section"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "pull-right"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "value", "Save Employee", 1, "subbtn", "btn", "btn-primary", 3, "click"], [1, "error"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [3, "value"], [1, "rolesection", 3, "formGroupName"], ["for", "", 1, "pull-left", "headtxt", 2, "width", "30%"], ["class", "material-switch", "formArrayName", "employeeElementOperationList", 4, "ngFor", "ngForOf"], ["formArrayName", "employeeElementOperationList", 1, "material-switch"], [3, "formGroupName"], ["name", "someSwitchOption001", "formControlName", "value", "type", "checkbox", 3, "id"], [1, "label-default", 3, "for"]], template: function EditEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditEmployeeComponent_div_3_Template, 87, 25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EmployeeForm != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL2VkaXQtZW1wbG95ZWUvZWRpdC1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-employee',
                templateUrl: './edit-employee.component.html',
                styleUrls: ['./edit-employee.component.css']
            }]
    }], function () { return [{ type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"] }, { type: _employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Features/employee/employee-list/employee-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Features/employee/employee-list/employee-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee.service */ "./src/app/Features/employee/employee.service.ts");
/* harmony import */ var _Services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/layout.service */ "./src/app/Services/layout.service.ts");
/* harmony import */ var _Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/search.service */ "./src/app/Services/search.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function EmployeeListComponent_li_20_i_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_li_20_i_13_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.viewIconClicked(data_r1.employee.employeeId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeListComponent_li_20_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_li_20_i_14_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editEmployeeIconClicked(data_r1.employee.employeeId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeListComponent_li_20_i_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_li_20_i_15_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteIconClicked(data_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeListComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmployeeListComponent_li_20_i_13_Template, 1, 0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmployeeListComponent_li_20_i_14_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmployeeListComponent_li_20_i_15_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r1.employee.employeeFname + " " + data_r1.employee.employeeMname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.employee.employeeEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.department.departmentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.designation.designationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Employee, ctx_r0.userService.Operations.View));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Employee, ctx_r0.userService.Operations.Edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Employee, ctx_r0.userService.Operations.Delete));
} }
class EmployeeListComponent {
    constructor(employeeService, layoutservice, searchSerrvice, messageService, userService, router) {
        this.employeeService = employeeService;
        this.layoutservice = layoutservice;
        this.searchSerrvice = searchSerrvice;
        this.messageService = messageService;
        this.userService = userService;
        this.router = router;
        this.deleteIconClicked = function (data) {
            console.log("some data " + data.employee.employeeId);
            console.log("id " + data.employeeId);
            this.employeeService.deleteEmployee(data.employee.employeeId).subscribe((res) => {
                if (res.errorCode == 0) {
                    this.EmployeeList.splice(this.EmployeeList.indexOf(data), 1);
                    this.SearchResults = this.EmployeeList;
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee deleted' });
                }
                else {
                    this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
                }
            }, (err) => {
                console.log(err);
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
            });
        };
        this.FilterData = function (event) {
            var temp = this.EmployeeList;
            var data = event.target.value;
            console.log(data);
            console.log(temp);
            this.SearchResults = temp.filter(item => {
                console.log(item);
                console.log(item[this.FilterKey]);
                console.log(item[this.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
                return item[this.FilterKey].toLowerCase().includes(data.toLowerCase());
            });
        };
    }
    ngOnInit() {
        this.searchSerrvice.SetSource(null);
        this.layoutservice.UpdateLayout(true, true, true, true);
        this.employeeService.GetEmployeeData().subscribe((res) => {
            this.EmployeeList = res.dataObj;
            this.EmployeeList.forEach((element) => {
                element.FullName = element.employee.employeeFname + " " + element.employee.employeeMname;
            });
            console.log(this.EmployeeList);
            this.SearchResults = this.EmployeeList;
            this.FilterKey = "FullName";
        });
    }
    editEmployeeIconClicked(id) {
        this.router.navigate(['employee', 'edit'], { queryParams: { 'id': id } });
    }
    viewIconClicked(id) {
        this.router.navigate(['employee', 'view'], { queryParams: { 'id': id } });
    }
}
EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeListComponent, selectors: [["app-employee-list"]], decls: 21, vars: 1, consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "search-form"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "input"], [1, "emlist"], [1, "team-member", "team-listvew"], [1, "list-heading"], ["class", "list-heading list-content", 4, "ngFor", "ngForOf"], [1, "list-heading", "list-content"], [1, "team-thumb"], ["href", "#"], ["class", "icon-View", 3, "click", 4, "ngIf"], ["class", "icon-edit", 3, "click", 4, "ngIf"], ["class", "icon-Delete", 3, "click", 4, "ngIf"], [1, "icon-View", 3, "click"], [1, "icon-edit", 3, "click"], [1, "icon-Delete", 3, "click"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmployeeListComponent_Template_input_input_7_listener($event) { return ctx.FilterData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Employee Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Designation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EmployeeListComponent_li_20_Template, 16, 7, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SearchResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-list',
                templateUrl: './employee-list.component.html',
                styleUrls: ['./employee-list.component.css']
            }]
    }], function () { return [{ type: _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"] }, { type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }, { type: _Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Features/employee/employee-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Features/employee/employee-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-employee/create-employee.component */ "./src/app/Features/employee/create-employee/create-employee.component.ts");
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-employee/edit-employee.component */ "./src/app/Features/employee/edit-employee/edit-employee.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/Features/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-employee/view-employee.component */ "./src/app/Features/employee/view-employee/view-employee.component.ts");








const routes = [{ path: 'create', component: _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_2__["CreateEmployeeComponent"], data: { Title: 'Create Employee', ShowHeader: true, ShowNavBar: true } },
    { path: 'list', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"], data: { Title: 'Employee List', ShowHeader: true, ShowNavBar: true } },
    { path: 'view', component: _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_5__["ViewEmployeeComponent"], data: { Title: 'Employee', ShowHeader: true, ShowNavBar: true } },
    { path: 'edit', component: _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_3__["EditEmployeeComponent"], data: { Title: 'Edit Employee', ShowHeader: true, ShowNavBar: true } }
];
class EmployeeRoutingModule {
}
EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeRoutingModule });
EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Features/employee/employee.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Features/employee/employee.component.ts ***!
  \*********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EmployeeComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) { return new (t || EmployeeComponent)(); };
EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeComponent, selectors: [["app-employee"]], decls: 2, vars: 0, template: function EmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "employee works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee',
                templateUrl: './employee.component.html',
                styleUrls: ['./employee.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Features/employee/employee.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Features/employee/employee.module.ts ***!
  \******************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/Features/employee/employee-routing.module.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "./src/app/Features/employee/employee.component.ts");
/* harmony import */ var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-employee/create-employee.component */ "./src/app/Features/employee/create-employee/create-employee.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/Features/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee.service */ "./src/app/Features/employee/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-employee/view-employee.component */ "./src/app/Features/employee/view-employee/view-employee.component.ts");
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-employee/edit-employee.component */ "./src/app/Features/employee/edit-employee/edit-employee.component.ts");













class EmployeeModule {
}
EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeModule });
EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); }, providers: [_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeModule, { declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"], _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"], _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_10__["ViewEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_11__["EditEmployeeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"], _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"], _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_10__["ViewEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_11__["EditEmployeeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"]
                ],
                providers: [_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Features/employee/employee.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Features/employee/employee.service.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");





class EmployeeService {
    constructor(httpClient, userService) {
        this.httpClient = httpClient;
        this.userService = userService;
        this.GetEmployeeData = function () {
            return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].employeeData);
        };
        this.GetEmployeeById = function (id) {
            return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getEmployeeData, { employeeId: id });
        };
        this.GetDepartments = function () {
            return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getDepartment);
        };
        this.GetDepartment = function (id) {
            return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getDepartmentById + id);
        };
        this.GetDesignation = function (id) {
            return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].GetDesignations, { designationId: id });
        };
        this.GetRolesForDepartmentId = function (id) {
            return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].GetDesignations, { departmentId: id });
        };
        this.CreateEmployee = function (data) {
            data.createdBy = this.userService.LoggedInUser.Id;
            return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].AddEmployee, data);
        };
        this.UpdateEmployee = function (data) {
            return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].updateEmployee, data);
        };
        this.getOperations = function () {
            return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getOperations);
        };
        this.getElements = function () {
            return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getElements);
        };
        this.getRolePermissions = function (id) {
            return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getDesignationElementMapping + id);
        };
        this.deleteEmployee = function (id) {
            return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deleteEmployee, { employeeId: id });
        };
        this.getEmployeeElementMapping = function (id) {
            return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getEmployeeElementsMapping + id);
        };
        this.GetSkillsMappedToEmployee = function (employeeIdData) {
            return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getEmployeeSkill, { employeeId: employeeIdData });
        };
        this.GetAllTheSkills = function () {
            return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getSkill, {});
        };
        this.CreateSignUp = function (data) {
            return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].signup, data);
        };
        this.GetProjectListById = function (id) {
            return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ProjectList + id);
        };
        this.getTeam = function () {
            return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getTeam, {});
        };
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Features/employee/view-employee/view-employee.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Features/employee/view-employee/view-employee.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEmployeeComponent", function() { return ViewEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee.service */ "./src/app/Features/employee/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ViewEmployeeComponent_div_42_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const operation_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.GetOperationName(operation_r8.operationId), "");
} }
function ViewEmployeeComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewEmployeeComponent_div_42_li_10_Template, 2, 1, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", "collapse" + element_r6.elementId)("data-target", "#collapse" + element_r6.elementId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#collapse" + element_r6.elementId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#collapse" + element_r6.elementId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.GetElementName(element_r6.elementId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "collapse" + element_r6.elementId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r6.employeeElementOprationList);
} }
const _c0 = function (a0, a1, a2, a3) { return { "completedcolor": a0, "yellowcolor": a1, "purplecolor": a2, "redcolor": a3 }; };
const _c1 = function (a0, a1, a2) { return { "redcolor": a0, "greencolor": a1, "purplecolor": a2 }; };
function ViewEmployeeComponent_li_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 3+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r9.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r9.projectStartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r9.projectDueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c0, project_r9.projectStatus == "Completed", project_r9.projectStatus != "Completed" && project_r9.projectPriority == "Low", project_r9.projectStatus != "Completed" && project_r9.projectPriority == "Medium", project_r9.projectStatus != "Completed" && project_r9.projectPriority == "High"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r9.projectPriority);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c1, project_r9.projectStatus == "Delayed", project_r9.projectStatus == "Completed", project_r9.projectStatus == "In Progress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r9.projectStatus);
} }
function ViewEmployeeComponent_div_67_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r11.teamName, " ");
} }
function ViewEmployeeComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Team Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewEmployeeComponent_div_67_li_7_Template, 4, 1, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.TeamList);
} }
function ViewEmployeeComponent_h3_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not tagged to any team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewEmployeeComponent_div_70_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "67");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "54");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getSkillNameById(skill_r13.skillId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", skill_r13.skillProficiency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-value", skill_r13.skillProficiency);
} }
function ViewEmployeeComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewEmployeeComponent_div_70_div_4_Template, 25, 3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.EmployeeSkills);
} }
function ViewEmployeeComponent_h3_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No skills mapped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewEmployeeComponent {
    constructor(employeeService, route) {
        this.employeeService = employeeService;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe(params => {
            var id = params.get("id");
            this.employeeService.GetEmployeeById(id).subscribe((res) => {
                if (res.errorCode == 0) {
                    this.Employee = res.dataObj[0];
                    this.GetDesignationById(this.Employee.designationId);
                    this.GetDepartmentById(this.Employee.departmentId);
                    this.employeeService.getOperations().subscribe(res => {
                        if (res.errorCode == 0) {
                            this.Operations = res.dataObj;
                            this.employeeService.getElements().subscribe(res => {
                                if (res.errorCode == 0) {
                                    this.Elements = res.dataObj;
                                    this.employeeService.getEmployeeElementMapping(id).subscribe(res => {
                                        if (res.errorCode == 0) {
                                            this.Permissions = res.dataObj.employeeElementMappingList;
                                            this.getEmployeeSkills(id);
                                            this.getAllEmployeeSkills();
                                            //MapPermissionsList(res.dataObj.employeeElementMappingList);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });
    }
    MapPermissionsList(data) {
        if (data) {
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                for (let index2 = 0; index2 < element.employeeElementOprationList.length; index2++) {
                    const operation = element.employeeElementOprationList[index2];
                }
            }
        }
    }
    getEmployeeSkills(id) {
        console.log("skill called");
        this.employeeService.GetSkillsMappedToEmployee(id)
            .subscribe(res => {
            if (res.errorCode == 0) {
                console.log(res.dataObj);
                this.EmployeeSkills = res.dataObj;
            }
            else {
            }
        });
    }
    getAllEmployeeSkills() {
        this.employeeService.GetAllTheSkills()
            .subscribe(res => {
            if (res.errorCode == 0) {
                console.log(res.dataObj);
                this.Skills = res.dataObj;
            }
            else {
            }
        });
    }
    getSkillNameById(id) {
        if (this.Skills) {
            for (let index = 0; index < this.Skills.length; index++) {
                const element = this.Skills[index];
                if (element.skillId == id) {
                    return element.skillName;
                }
            }
        }
        return "";
    }
    getProjectList() {
        var id = -1;
        this.employeeService.GetProjectListById(id).subscribe((res) => {
            console.log(res);
            this.projectList = res.dataObj;
            console.log(this.projectList);
        });
    }
    getTeamList() {
        this.employeeService.getTeam().subscribe((res) => {
            if (res.errorCode == 0) {
                this.TeamList = res.dataObj;
                console.log(this.TeamList);
            }
            else {
            }
        });
    }
    GetOperationName(id) {
        for (let index = 0; index < this.Operations.length; index++) {
            const operation = this.Operations[index];
            if (operation.operationId == id) {
                return operation.operationName;
            }
        }
    }
    GetElementName(id) {
        for (let index = 0; index < this.Elements.length; index++) {
            const element = this.Elements[index];
            if (element.elementId == id) {
                return element.elementName;
            }
        }
    }
    GetDesignationById(id) {
        this.employeeService.GetDesignation(id).subscribe(res => {
            this.DepartmentName = res.dataObj[0].departmentName;
        });
    }
    GetDepartmentById(id) {
        this.employeeService.GetDepartment(id).subscribe(res => {
            this.DesignationName = res.dataObj[0].designationName;
        });
    }
}
ViewEmployeeComponent.ɵfac = function ViewEmployeeComponent_Factory(t) { return new (t || ViewEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ViewEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewEmployeeComponent, selectors: [["app-view-employee"]], decls: 73, vars: 12, consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "nav", "nav-tabs"], [1, "active"], ["data-toggle", "tab", "href", "#feedback-request"], ["data-toggle", "tab", "href", "#my-feedback", 3, "click"], ["data-toggle", "tab", "href", "#team-feedback", 3, "click"], ["data-toggle", "tab", "href", "#skill-feedback"], [1, "tab-content"], ["id", "feedback-request", 1, "tab-pane", "fade", "in", "active"], [1, "table-full-width"], [1, "feedback-list", 2, "margin-bottom", "0px"], [1, "media"], [1, "media-left"], ["href", "#"], ["src", "assets/img/faces/face-1.jpg", "alt", "...", 1, "media-object"], [1, "media-body"], [1, "media-heading"], [1, "gray-text"], [3, "href"], [1, "col-md-12", "col-xs-12"], ["id", "accordion", 1, "panel-group"], ["class", "panel panel-default", "id", "panel2", 4, "ngFor", "ngForOf"], ["id", "my-feedback", 1, "tab-pane", "fade"], [1, "checkbox-list"], [1, "table"], [2, "width", "280px"], [1, "gray-text", 2, "width", "150px"], [1, "gray-text", 2, "width", "140px"], [2, "width", "104px"], [2, "width", "110px"], [1, "gray-text", 2, "width", "180px"], [4, "ngFor", "ngForOf"], ["id", "team-feedback", 1, "tab-pane", "fade"], ["class", "table-full-width", 4, "ngIf"], ["style", "text-align: center;padding-top: 20%;", 4, "ngIf"], ["id", "skill-feedback", 1, "tab-pane", "fade"], [1, "col-md-3"], ["id", "panel2", 1, "panel", "panel-default"], ["data-toggle", "collapse", 1, "panel-heading"], [1, "panel-title"], ["data-toggle", "collapse", 1, "collapsed", 2, "font-weight", "bold"], [1, "panel-collapse", "collapse", "fade"], [1, "panel-body"], [1, "content"], [1, "permission-list"], [2, "width", "292px"], [1, "gray-text", "projectthumb", 2, "width", "140px"], [1, "team-thumb"], [1, "more-thumb"], [2, "width", "92px"], [1, "prioritybox", 3, "ngClass"], [1, "statusbox", 3, "ngClass"], [1, "emlist"], [1, "team-member", "team-listvew"], [1, "team-heading"], ["class", "team-heading list-content", 4, "ngFor", "ngForOf"], [1, "team-heading", "list-content"], [2, "text-align", "center", "padding-top", "20%"], [1, "feedback-list"], [1, "row", "skill-list"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "skill-slider"], ["id", "ex1CurrentSliderValLabel", 1, "skill-value"], ["id", "ex1SliderVal"], ["id", "", 1, "slider", "slider-horizontal"], [1, "slider-track"], [1, "slider-track-low", 2, "left", "0px", "width", "0%"], [1, "slider-selection", 2, "left", "0%", "width", "67%"], [1, "slider-track-high", 2, "right", "0px", "width", "46%"], ["role", "presentation", 1, "tooltip", "tooltip-main", "top", 2, "left", "54%"], [1, "tooltip-arrow"], [1, "tooltip-inner"], ["role", "presentation", 1, "tooltip", "tooltip-min", "top", 2, "display", "none"], ["role", "presentation", 1, "tooltip", "tooltip-max", "top", 2, "display", "none"], ["role", "slider", "aria-valuemin", "0", "aria-valuemax", "100", "aria-valuenow", "0", "tabindex", "0", 1, "slider-handle", "max-slider-handle", "round", "hide", 2, "left", "0%"], ["id", "ex1", "type", "text", "data-slider-min", "0", "data-slider-max", "100", "data-slider-step", "1", "data-slider-value", "100", 2, "display", "none", 3, "value"]], template: function ViewEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Employee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewEmployeeComponent_Template_a_click_10_listener() { return ctx.getProjectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewEmployeeComponent_Template_a_click_13_listener() { return ctx.getTeamList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Employee Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ViewEmployeeComponent_div_42_Template, 11, 7, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Projects Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Priorities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ViewEmployeeComponent_li_64_Template, 21, 16, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ViewEmployeeComponent_div_67_Template, 8, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ViewEmployeeComponent_h3_68_Template, 2, 0, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ViewEmployeeComponent_div_70_Template, 5, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ViewEmployeeComponent_h3_71_Template, 2, 0, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Employee.employeeFname + " " + ctx.Employee.employeeMname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.DepartmentName, " . ", ctx.DesignationName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "'mailto:'+", ctx.Employee.employeeEmail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Employee.employeeEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Employee.employeeMobileNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.TeamList && ctx.TeamList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.TeamList || ctx.TeamList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EmployeeSkills && ctx.EmployeeSkills.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.EmployeeSkills || ctx.EmployeeSkills.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL3ZpZXctZW1wbG95ZWUvdmlldy1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-employee',
                templateUrl: './view-employee.component.html',
                styleUrls: ['./view-employee.component.css']
            }]
    }], function () { return [{ type: _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=Features-employee-employee-module-es2015.js.map