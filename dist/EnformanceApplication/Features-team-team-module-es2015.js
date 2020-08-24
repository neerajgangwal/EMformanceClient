(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-team-team-module"],{

/***/ "./src/app/Features/team/team-list/team-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Features/team/team-list/team-list.component.ts ***!
  \****************************************************************/
/*! exports provided: TeamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamListComponent", function() { return TeamListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team.service */ "./src/app/Features/team/team.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function TeamListComponent_li_20_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_li_20_i_5_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.ViewIconClicked(data_r5.teamId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamListComponent_li_20_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_li_20_i_6_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.editIconClicked(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamListComponent_li_20_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_li_20_i_7_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.AddTeamIcon(data_r5.teamId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamListComponent_li_20_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_li_20_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.DeleteTeamIcon(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamListComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamListComponent_li_20_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TeamListComponent_li_20_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TeamListComponent_li_20_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeamListComponent_li_20_i_8_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5.teamName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Team, ctx_r0.userService.Operations.View));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Team, ctx_r0.userService.Operations.Edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Team, ctx_r0.userService.Operations.Edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Team, ctx_r0.userService.Operations.Delete));
} }
function TeamListComponent_ul_38_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_ul_38_i_9_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const member_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.DeleteMemberIcon(member_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamListComponent_ul_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeamListComponent_ul_38_i_9_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r22 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r22.employeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r22.employeeEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userService.CheckPermission(ctx_r1.userService.Elements.Team, ctx_r1.userService.Operations.Delete));
} }
function TeamListComponent_div_43_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide Team name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamListComponent_div_43_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", project_r29.projectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r29.projectName, "");
} }
function TeamListComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Team Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeamListComponent_div_43_span_8_Template, 3, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "select Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TeamListComponent_div_43_option_15_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_div_43_Template_input_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.CancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_div_43_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.CreateButtonClicked(ctx_r32.CreateTeamForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.CreateTeamForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.CreateTeamForm.controls["teamName"].valid && (ctx_r2.CreateTeamForm.controls["teamName"].dirty || ctx_r2.CreateTeamForm.controls["teamName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ProjectsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.CreateTeamForm.valid);
} }
function TeamListComponent_form_51_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide Team name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamListComponent_form_51_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", project_r35.projectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r35.projectName, "");
} }
function TeamListComponent_form_51_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Team Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamListComponent_form_51_span_5_Template, 3, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TeamListComponent_form_51_option_12_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_form_51_Template_input_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.CancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_form_51_Template_input_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.editSaveButtonClicked(ctx_r38.EditTeamForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.EditTeamForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.EditTeamForm.controls["teamName"].valid && (ctx_r3.EditTeamForm.controls["teamName"].dirty || ctx_r3.EditTeamForm.controls["teamName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.ProjectsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.EditTeamForm.valid);
} }
function TeamListComponent_form_59_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", employee_r41.employee.employeeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", employee_r41.employee.employeeFname, " ", employee_r41.employee.employeeMname, "");
} }
function TeamListComponent_form_59_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_form_59_li_15_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const member_r42 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.RemoveMemberFromTeamList(member_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", member_r42.employee.employeeFname, " ", member_r42.employee.employeeMname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r42.designation.designationName);
} }
function TeamListComponent_form_59_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select team member");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Team Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeamListComponent_form_59_option_10_Template, 2, 3, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_form_59_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.AddMemberToTeamList(ctx_r45.AddTeamForm.get("EmployeeId").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TeamListComponent_form_59_li_15_Template, 7, 3, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_form_59_Template_input_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.CancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_form_59_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.SaveTeamMembers(ctx_r48.AddTeamForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.AddTeamForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.EmployeeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.AddTeamForm.get("EmployeeId").value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.TeamMemberList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.TeamMemberList.length == 0);
} }
class TeamListComponent {
    constructor(teamservice, messageService, fb, userService) {
        this.teamservice = teamservice;
        this.messageService = messageService;
        this.fb = fb;
        this.userService = userService;
        this.TeamMemberList = [];
        this.employeeArray = [];
        this.testList = [];
        this.editTeam = [];
        this.InitilizeCreateTeamForm = function () {
            this.CreateTeamForm = this.fb.group({
                projectId: -1,
                teamName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                departmentId: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                teamCreatedBy: [this.userService.LoggedInUser.Id],
                teamUpdatedBy: [this.userService.LoggedInUser.Id]
            });
        };
        this.InitilizeAddTeamForm = function (teamId) {
            this.AddTeamForm = this.fb.group({
                EmployeeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                TeamId: [teamId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.TeamMemberList = [];
        };
        this.InitilizeEditTeamForm = function (data) {
            this.EditTeamForm = this.fb.group({
                teamId: [data.teamId],
                projectId: [data.projectId],
                teamName: [data.teamName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                departmentId: [1],
                teamCreatedBy: [this.userService.LoggedInUser.Id],
                teamUpdatedBy: [this.userService.LoggedInUser.Id],
            });
        };
        this.ResetForm = function () {
            this.InitilizeCreateTeamForm();
        };
        this.getEmployeeFromList = function () {
            this.teamservice.getEmployeeData().subscribe((res) => {
                if (res.errorCode == 0) {
                    this.EmployeeList = res.dataObj;
                    console.log("---------------");
                    console.log(this.EmployeeList);
                    console.log("---------------");
                    console.log(this.ViewTeamMemberList);
                    console.log("---------------");
                    this.ViewTeamMemberList.forEach((element) => {
                        for (let employee of this.EmployeeList) {
                            if (element.employeeId == employee.employee.employeeId) {
                                element.employeeName = employee.employee.employeeFname + employee.employee.employeeMname;
                                element.employeeEmail = employee.employee.employeeEmail;
                                break;
                            }
                        }
                    });
                    console.log(this.ViewTeamMemberList);
                }
                else {
                }
            });
        };
        this.CreateButtonClicked = function (data) {
            console.log(data);
            this.teamservice.createTeam(data).subscribe((res) => {
                if (res.errorCode == 0) {
                    console.log(res);
                    this.TeamList.push(res.dataObj);
                    this.SearchResults = this.TeamList;
                    this.messageService.add({ severity: 'success', summary: 'Team Created', detail: 'Team created successfully' });
                    this.CancelButtonClick();
                    this.ResetForm();
                }
                else {
                    this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
                }
            }, (error) => {
                console.log(error);
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
            });
        };
        this.editSaveButtonClicked = function (data) {
            data.activateFlag = 1;
            console.log("save" + data.projectId);
            this.teamservice.updateTeam(data).subscribe((res) => {
                if (res.errorCode == 0) {
                    this.InitilizeEditTeamForm(res.dataObj);
                    for (let index = 0; index < this.TeamList.length; index++) {
                        const element = this.TeamList[index];
                        console.log("element.teamId" + element.teamId);
                        console.log("data.teamId" + data.teamId);
                        if (element.teamId == data.teamId) {
                            this.TeamList[index] = res.dataObj;
                        }
                    }
                    this.SearchResults = this.TeamList;
                    this.messageService.add({ severity: 'success', summary: 'Team updated', detail: 'Team Edited successfully' });
                    this.CancelButtonClick();
                    this.ResetForm();
                    this.CancelButtonClick();
                }
                else {
                    this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
                }
            }, (error) => {
                console.log(error);
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
            });
        };
        this.FilterData = function (event) {
            var temp = this.TeamList;
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
        this.teamservice.getTeam().subscribe((res) => {
            if (res.errorCode == 0) {
                this.TeamList = res.dataObj;
                console.log(this.TeamList);
                this.SearchResults = this.TeamList;
                this.FilterKey = "teamName";
            }
            else {
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().removeClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
        });
        this.teamservice.getProjects()
            .subscribe(res => {
            if (res.errorCode == 0) {
                this.ProjectsList = res.dataObj;
            }
            else {
            }
        });
    }
    CreateTeamButtonClicked() {
        this.InitilizeCreateTeamForm();
        jquery__WEBPACK_IMPORTED_MODULE_2__('#task-description').addClass('open-slide');
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
    }
    SaveTeamMembers(data) {
        console.log(data);
        var TeamMappingArray = [];
        this.TeamMemberList.forEach((element) => {
            TeamMappingArray.push({
                teamId: data.TeamId,
                employeeId: element.employee.employeeId,
                activateFlag: 1
            });
        });
        this.teamservice.addTeamMember(TeamMappingArray).subscribe((res) => {
            if (res.errorCode == 0) {
                this.messageService.add({ severity: 'success', summary: 'Team Created', detail: 'Via MessageService' });
                this.TeamMemberList = [];
                this.AddTeamForm.reset();
                this.CancelButtonClick();
            }
            else {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: res.errorMsg });
            }
        }, (err) => {
            console.log(err);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: "Failed please try again" });
        });
    }
    AddMemberToTeamList(id) {
        console.log(id);
        for (let member of this.TeamMemberList) {
            if (member.employee.employeeId == id) {
                return;
            }
        }
        this.EmployeeList.forEach((element) => {
            if (element.employee.employeeId == id) {
                this.TeamMemberList.push(element);
            }
        });
    }
    RemoveMemberFromTeamList(element) {
        this.TeamMemberList.splice(this.TeamMemberList.indexOf(element), 1);
    }
    ViewIconClicked(id) {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#add-task').addClass('open-slide');
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
        console.log(id);
        this.teamservice.getTeamMember(id).subscribe((res) => {
            if (res.errorCode == 0) {
                this.ViewTeamMemberList = res.dataObj;
                console.log(this.ViewTeamMemberList);
                this.getEmployeeFromList();
            }
            else {
            }
        });
    }
    editIconClicked(data) {
        this.InitilizeEditTeamForm(data);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#edit-team').addClass('open-slide');
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
        console.log("edit icon " + data);
    }
    AddTeamIcon(teamId) {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#addteam-member').addClass('open-slide');
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
        console.log("test");
        this.teamservice.getEmployeeData().subscribe((res) => {
            if (res.errorCode == 0) {
                console.log(res.dataObj);
                this.EmployeeList = res.dataObj;
                this.InitilizeAddTeamForm(teamId);
            }
            else {
                console.log(res);
            }
        }, (err) => { console.log("outside error"); });
    }
    DeleteTeamIcon(data) {
        this.teamservice.deleteTeam(data).subscribe((res) => {
            if (res.errorCode == 0) {
                this.TeamList.splice(this.TeamList.indexOf(data), 1);
                this.SearchResults = this.TeamList;
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Team deleted' });
            }
            else {
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
            }
        }, (err) => {
            console.log(err);
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
        });
    }
    CancelButtonClick() {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').parent().removeClass('open-slide');
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
    }
    DeleteMemberIcon(data) {
        this.teamservice.deleteTeam(data.employeeId).subscribe((res) => {
            if (res.errorCode == 0) {
                this.TeamList.splice(this.TeamList.indexOf(data), 1);
                this.SearchResults = this.TeamList;
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Team deleted' });
            }
            else {
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
            }
        }, (err) => {
            console.log(err);
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
        });
    }
}
TeamListComponent.ɵfac = function TeamListComponent_Factory(t) { return new (t || TeamListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
TeamListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamListComponent, selectors: [["app-team-list"]], decls: 60, vars: 5, consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "search-form"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "input"], [1, "col-md-2", "pull-right"], [1, "team", "btn", "btn-primary", "create-team", 3, "click"], [1, "emlist"], [1, "team-member", "team-listvew"], [1, "team-heading"], ["class", "team-heading list-content", 4, "ngFor", "ngForOf"], ["id", "add-task", 1, "slide-popup"], [1, "slide-close"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "slide-content", "forteam"], [1, "team-pop-view"], [1, "team-pop-view", "list-content"], [4, "ngFor", "ngForOf"], ["id", "task-description", 1, "slide-popup"], [1, "slide-wrapper"], ["class", "slide-content", 4, "ngIf"], ["id", "edit-team", 1, "slide-popup"], [1, "slide-content"], [3, "formGroup", 4, "ngIf"], ["id", "addteam-member", 1, "slide-popup"], [1, "team-heading", "list-content"], ["class", "icon-View team", 3, "click", 4, "ngIf"], ["class", "icon-edit", 3, "click", 4, "ngIf"], ["id", "addteam1", "class", "icon-Team", 3, "click", 4, "ngIf"], ["class", "icon-Delete", 3, "click", 4, "ngIf"], [1, "icon-View", "team", 3, "click"], [1, "icon-edit", 3, "click"], ["id", "addteam1", 1, "icon-Team", 3, "click"], [1, "icon-Delete", 3, "click"], [1, "team-thumb"], ["href", "#"], [3, "formGroup"], [1, "form-group"], ["for", ""], ["type", "text", "placeholder", "Enter Team Name", "formControlName", "teamName", 1, "form-control"], ["class", "error", 4, "ngIf"], ["formControlName", "projectId", 1, "form-control"], ["value", "-1", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "value", "Create Team", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "error"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [3, "value"], ["value", "-1"], ["type", "submit", "value", "Edit Team", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "selectwith-button"], [1, "custom-select-wrapper"], [1, "custom-select"], ["formControlName", "EmployeeId", 1, "form-control"], ["value", ""], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "selected-user"], ["type", "submit", "value", "Add Team Members", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "user-thumb"], [1, "fa", "fa-times", 3, "click"]], template: function TeamListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TeamListComponent_Template_input_input_8_listener($event) { return ctx.FilterData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_Template_button_click_10_listener() { return ctx.CreateTeamButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Team Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TeamListComponent_li_20_Template, 9, 5, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Team Member View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Employee Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TeamListComponent_ul_38_Template, 10, 3, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TeamListComponent_div_43_Template, 18, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Edit Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TeamListComponent_form_51_Template, 15, 4, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Add Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, TeamListComponent_form_59_Template, 18, 5, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SearchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ViewTeamMemberList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CreateTeamForm != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EditTeamForm != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.AddTeamForm != null);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3RlYW0vdGVhbS1saXN0L3RlYW0tbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-list',
                templateUrl: './team-list.component.html',
                styleUrls: ['./team-list.component.css']
            }]
    }], function () { return [{ type: _team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Features/team/team-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Features/team/team-routing.module.ts ***!
  \******************************************************/
/*! exports provided: TeamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRoutingModule", function() { return TeamRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-list/team-list.component */ "./src/app/Features/team/team-list/team-list.component.ts");





const routes = [{ path: 'list', component: _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_2__["TeamListComponent"], data: { Title: 'Team List', ShowHeader: true, ShowNavBar: true } }];
class TeamRoutingModule {
}
TeamRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamRoutingModule });
TeamRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamRoutingModule_Factory(t) { return new (t || TeamRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Features/team/team.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Features/team/team.component.ts ***!
  \*************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 2, vars: 0, template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "team works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Features/team/team.module.ts":
/*!**********************************************!*\
  !*** ./src/app/Features/team/team.module.ts ***!
  \**********************************************/
/*! exports provided: TeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _team_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-routing.module */ "./src/app/Features/team/team-routing.module.ts");
/* harmony import */ var _team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.component */ "./src/app/Features/team/team.component.ts");
/* harmony import */ var _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-list/team-list.component */ "./src/app/Features/team/team-list/team-list.component.ts");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team.service */ "./src/app/Features/team/team.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");









class TeamModule {
}
TeamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamModule });
TeamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamModule_Factory(t) { return new (t || TeamModule)(); }, providers: [
        _team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _team_routing_module__WEBPACK_IMPORTED_MODULE_2__["TeamRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamModule, { declarations: [_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"], _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_4__["TeamListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _team_routing_module__WEBPACK_IMPORTED_MODULE_2__["TeamRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"], _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_4__["TeamListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _team_routing_module__WEBPACK_IMPORTED_MODULE_2__["TeamRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"]
                ],
                providers: [
                    _team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Features/team/team.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Features/team/team.service.ts ***!
  \***********************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");





class TeamService {
    constructor(httpclient, userService) {
        this.httpclient = httpclient;
        this.userService = userService;
        this.getTeam = function () {
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getTeam, {});
        };
        this.getProjects = function () {
            return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ProjectList + "-1");
        };
        this.createTeam = function (data) {
            data.createdBy = this.userService.LoggedInUser.Id;
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].createTeam, data);
        };
        this.getTeamMember = function (id) {
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getTeamMember, { teamId: id });
        };
        this.addTeamMember = function (addTeamMember) {
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].addTeamMember, addTeamMember);
        };
        this.getEmployeeData = function () {
            return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].employeeData);
        };
        this.deleteTeam = function (data) {
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deleteTeam, { teamId: data.teamId });
        };
        this.updateTeam = function (data) {
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].updateTeam, data);
        };
    }
}
TeamService.ɵfac = function TeamService_Factory(t) { return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
TeamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamService, factory: TeamService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=Features-team-team-module-es2015.js.map