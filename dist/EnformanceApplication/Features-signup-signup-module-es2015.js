(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-signup-signup-module"],{

/***/ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js":
/*!***************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js ***!
  \***************************************************************************/
/*! exports provided: ProgressBar, ProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function() { return ProgressBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ProgressBar_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r0.value != null ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.value, "", ctx_r0.unit, "");
} }
const _c0 = function (a1, a2) { return { "ui-progressbar ui-widget ui-widget-content ui-corner-all": true, "ui-progressbar-determinate": a1, "ui-progressbar-indeterminate": a2 }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ProgressBar = class ProgressBar {
    constructor() {
        this.showValue = true;
        this.unit = '%';
        this.mode = 'determinate';
    }
};
ProgressBar.ɵfac = function ProgressBar_Factory(t) { return new (t || ProgressBar)(); };
ProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBar, selectors: [["p-progressBar"]], inputs: { showValue: "showValue", unit: "unit", mode: "mode", value: "value", style: "style", styleClass: "styleClass" }, decls: 3, vars: 11, consts: [["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", "ngClass"], [1, "ui-progressbar-value", "ui-progressbar-value-animate", "ui-widget-header", "ui-corner-all", 2, "display", "block"], ["class", "ui-progressbar-label", 3, "display", 4, "ngIf"], [1, "ui-progressbar-label"]], template: function ProgressBar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressBar_div_2_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.mode === "determinate", ctx.mode === "indeterminate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.value + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showValue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ProgressBar.prototype, "value", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ProgressBar.prototype, "showValue", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ProgressBar.prototype, "style", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ProgressBar.prototype, "styleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ProgressBar.prototype, "unit", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], ProgressBar.prototype, "mode", void 0);
let ProgressBarModule = class ProgressBarModule {
};
ProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProgressBarModule });
ProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-progressBar',
                template: `
        <div [class]="styleClass" [ngStyle]="style" role="progressbar" aria-valuemin="0" [attr.aria-valuenow]="value" aria-valuemax="100"
            [ngClass]="{'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}">
            <div class="ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all" [style.width]="value + '%'" style="display:block"></div>
            <div class="ui-progressbar-label" [style.display]="value != null ? 'block' : 'none'" *ngIf="showValue">{{value}}{{unit}}</div>
        </div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return []; }, { showValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressBarModule, { declarations: function () { return [ProgressBar]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ProgressBar]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [ProgressBar],
                declarations: [ProgressBar]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=primeng-progressbar.js.map

/***/ }),

/***/ "./src/app/Features/signup/email-verification/email-verification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Features/signup/email-verification/email-verification.component.ts ***!
  \************************************************************************************/
/*! exports provided: EmailVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationComponent", function() { return EmailVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Entities_EmployeePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Entities/EmployeePermissions */ "./src/app/Entities/EmployeePermissions.ts");
/* harmony import */ var _Entities_EmployeeRoleElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Entities/EmployeeRoleElement */ "./src/app/Entities/EmployeeRoleElement.ts");
/* harmony import */ var _Entities_ElementOperation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Entities/ElementOperation */ "./src/app/Entities/ElementOperation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signup.service */ "./src/app/Features/signup/signup.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");









function EmailVerificationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Verifying your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-progressBar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmailVerificationComponent_div_9_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function EmailVerificationComponent_div_9_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function EmailVerificationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailVerificationComponent_div_9_i_5_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailVerificationComponent_div_9_i_6_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.verified == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.verified == false);
} }
class EmailVerificationComponent {
    constructor(route, signupService, router) {
        this.route = route;
        this.signupService = signupService;
        this.router = router;
        this.loading = false;
        this.message = "";
    }
    ngOnInit() {
        this.loading = true;
        this.route.queryParamMap.subscribe(params => {
            var token = params.get("tokenId");
            console.log(token);
            this.signupService.ValidateToken(token)
                .subscribe(res => {
                if (res.errorCode == 0) {
                    this.signupService.getElements(res.dataObj.companyInfo)
                        .subscribe((res1) => {
                        if (res1.errorCode == 0) {
                            this.ElementsData = res1.dataObj;
                            this.signupService.getOperations(res.dataObj.companyInfo).subscribe((res2) => {
                                if (res2.errorCode == 0) {
                                    this.OperationsData = res2.dataObj;
                                    var empData = this.GetEmpData(res.dataObj);
                                    this.signupService.CreateEmployee(res.dataObj.companyInfo, empData).subscribe((res3) => {
                                        if (res3.errorCode == 0) {
                                            this.loading = false;
                                            this.message = "Successfully verified";
                                            this.verified = true;
                                            this.router.navigate(['login']);
                                        }
                                        else {
                                        }
                                    }, (err) => {
                                    });
                                }
                                ;
                            });
                        }
                    });
                }
                else {
                    this.verified = false;
                    this.message = "Failed to verified, please try again";
                }
            }, error => {
                this.loading = false;
                this.verified = false;
                console.log(error);
                this.message = "Failed to verified, please try again";
            });
        });
    }
    GetEmpData(data) {
        var Empobj = new _Entities_EmployeePermissions__WEBPACK_IMPORTED_MODULE_1__["EmployeePermissions"]();
        Empobj.designationId = -1;
        Empobj.departmentId = -1;
        Empobj.employeeFname = data.name;
        Empobj.employeeEmail = data.email;
        Empobj.employeePassword = "";
        Empobj.employeeCode = data.userId;
        Empobj.employeeMname = "";
        Empobj.gender = "Male";
        Empobj.employeeMobileNo = "12345";
        Empobj.employeeProfileImg = "";
        Empobj.employeeElementMappingList = [];
        for (let index = 0; index < this.ElementsData.length; index++) {
            const ele = this.ElementsData[index];
            var element = new _Entities_EmployeeRoleElement__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoleElement"]();
            element.elementId = ele.elementId;
            element.employeeElementOprationList = [];
            for (let index2 = 0; index2 < this.OperationsData.length; index2++) {
                const ops = this.OperationsData[index2];
                var opertaion = new _Entities_ElementOperation__WEBPACK_IMPORTED_MODULE_3__["ElementOperation"]();
                opertaion.operationId = ops.operationId;
                element.employeeElementOprationList.push(opertaion);
            }
            Empobj.employeeElementMappingList.push(element);
        }
        return Empobj;
    }
}
EmailVerificationComponent.ɵfac = function EmailVerificationComponent_Factory(t) { return new (t || EmailVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_signup_service__WEBPACK_IMPORTED_MODULE_5__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EmailVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 10, vars: 2, consts: [[1, "extraMargins"], [1, "main-panel"], [1, "login"], [1, "welcome-heading", 2, "text-align", "center"], [1, ""], ["src", "assets/img/login-logo.png"], [4, "ngIf"], [1, "welcome-heading", 2, "font-size", "larger"], [2, "text-align", "center"], ["mode", "indeterminate"], ["class", "fa fa-check-circle", "style", "font-size:60px;color: #007775;", 4, "ngIf"], ["class", "fa fa-times-circle", "style", "font-size:60px;color:red", 4, "ngIf"], [1, "fa", "fa-check-circle", 2, "font-size", "60px", "color", "#007775"], [1, "fa", "fa-times-circle", 2, "font-size", "60px", "color", "red"]], template: function EmailVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmailVerificationComponent_div_8_Template, 6, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailVerificationComponent_div_9_Template, 7, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading != true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressBar"]], styles: [".extraMargins[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 10%;\r\n    margin-bottom: 12%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvc2lnbnVwL2VtYWlsLXZlcmlmaWNhdGlvbi9lbWFpbC12ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvRmVhdHVyZXMvc2lnbnVwL2VtYWlsLXZlcmlmaWNhdGlvbi9lbWFpbC12ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYU1hcmdpbnNcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTIlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-verification',
                templateUrl: './email-verification.component.html',
                styleUrls: ['./email-verification.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _signup_service__WEBPACK_IMPORTED_MODULE_5__["SignupService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Features/signup/signup-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/Features/signup/signup-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/Features/signup/signup.component.ts");
/* harmony import */ var _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-verification/email-verification.component */ "./src/app/Features/signup/email-verification/email-verification.component.ts");






const routes = [{ path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], data: { Title: '', ShowHeader: false, ShowNavBar: false } },
    { path: 'EmailVerification', component: _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__["EmailVerificationComponent"], data: { Title: '', ShowHeader: false, ShowNavBar: false } }
];
class SignupRoutingModule {
}
SignupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignupRoutingModule });
SignupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignupRoutingModule_Factory(t) { return new (t || SignupRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Features/signup/signup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Features/signup/signup.component.ts ***!
  \*****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/layout.service */ "./src/app/Services/layout.service.ts");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup.service */ "./src/app/Features/signup/signup.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function SignupComponent_form_14_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_14_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_14_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_14_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide company name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_14_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid Portal Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_14_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portal name already exists, please enter a different name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_14_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select Industy type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_14_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide Company Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_14_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
function SignupComponent_form_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_14_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.OnSubmit(ctx_r11.SignupForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignupComponent_form_14_span_5_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignupComponent_form_14_span_10_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_form_14_span_15_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Company Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignupComponent_form_14_span_20_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Company Website *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Unique Portal Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SignupComponent_form_14_Template_input_blur_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.checkPortalName(ctx_r13.SignupForm.controls["portalName"].value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignupComponent_form_14_span_29_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SignupComponent_form_14_span_30_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Industry *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Select industry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "IT Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Finance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Manufacturing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Hospitality");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Health Care");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SignupComponent_form_14_span_47_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Company Size*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Select Team Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "1-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "51-150");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "151-250");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "251-500");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "500 and more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, SignupComponent_form_14_span_64_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Office Phone No *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, SignupComponent_form_14_span_69_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "I agree to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Terms of services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Privacy Policy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "I already have an account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.SignupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.SignupForm.controls["name"].valid && (ctx_r0.SignupForm.controls["name"].dirty || ctx_r0.SignupForm.controls["name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.SignupForm.controls["email"].valid && (ctx_r0.SignupForm.controls["email"].dirty || ctx_r0.SignupForm.controls["email"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.SignupForm.controls["password"].valid && (ctx_r0.SignupForm.controls["password"].dirty || ctx_r0.SignupForm.controls["password"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.SignupForm.controls["companyName"].valid && (ctx_r0.SignupForm.controls["companyName"].dirty || ctx_r0.SignupForm.controls["companyName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.ShowCompanyValidationMessage && !ctx_r0.SignupForm.controls["portalName"].valid && (ctx_r0.SignupForm.controls["portalName"].dirty || ctx_r0.SignupForm.controls["portalName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ShowCompanyValidationMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.SignupForm.controls["industryType"].valid && (ctx_r0.SignupForm.controls["industryType"].dirty || ctx_r0.SignupForm.controls["industryType"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.SignupForm.controls["companySize"].valid && (ctx_r0.SignupForm.controls["companySize"].dirty || ctx_r0.SignupForm.controls["companySize"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.SignupForm.controls["adminMobile"].valid && (ctx_r0.SignupForm.controls["adminMobile"].dirty || ctx_r0.SignupForm.controls["adminMobile"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.SignupForm.valid || !ctx_r0.SignupForm.controls["termsCheckBox"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
} }
function SignupComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successfully registered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " please check your email for verification link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "extraMargin": a0 }; };
class SignupComponent {
    constructor(layoutservice, fb, signupService, router, messageService) {
        this.layoutservice = layoutservice;
        this.fb = fb;
        this.signupService = signupService;
        this.router = router;
        this.messageService = messageService;
        this.ShowValidationMessage = false;
        this.ShowCompanyValidationMessage = false;
        this.OnSubmit = function (data) {
            console.log(data.portalName);
            var userData = {
                userRole: "ADMIN",
                companyInfo: data.portalName,
                name: data.name,
                password: data.password,
                email: data.email
            };
            this.signupService.SignupFunction(userData).subscribe((res) => {
                if (res.errorCode == 0) {
                    var company = {
                        companyName: data.companyName,
                        portalName: data.portalName,
                        industryType: data.industryType,
                        adminMobile: data.adminMobile,
                        adminEmail: data.email,
                        companyDomain: '',
                        contactPerson: res.dataObj.userId,
                        apiURLPrefix: data.companyWebsite,
                        companySize: data.companySize
                    };
                    this.signupService.addCompany(company).subscribe((res) => {
                        if (res.errorCode == 0) {
                            this.messageService.add({ severity: 'success', summary: "Comapny added successfully" });
                            this.ShowValidationMessage = true;
                        }
                        else {
                            this.messageService.add({ severity: 'error', summary: res.errorMsg });
                        }
                    }, (err) => {
                        this.messageService.add({ severity: 'error', summary: "Something went wrong, please try later" });
                    });
                }
                else {
                    this.messageService.add({ severity: 'error', summary: res.errorMsg });
                }
            }, (error) => {
                this.messageService.add({ severity: 'error', summary: "Something went wrong, please try later" });
                console.log(error);
            });
        };
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.ngOnInit();
            }
        });
    }
    ngOnInit() {
        this.SignupForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyWebsite: [''],
            portalName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            industryType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companySize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            adminMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')])],
            termsCheckBox: [false]
        });
    }
    checkPortalName(data) {
        this.signupService.CheckPortalName(data).subscribe((res) => {
            if (res.errorCode == 0) {
                this.ShowCompanyValidationMessage = false;
            }
            else {
                this.ShowCompanyValidationMessage = true;
            }
        }),
            (err) => {
            };
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_signup_service__WEBPACK_IMPORTED_MODULE_4__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 16, vars: 5, consts: [[1, "login-bg"], [1, "overlay"], [1, "sidebar"], [1, "sidebar-wrapper"], [1, "nav"], [1, "main-panel"], [1, "login", 3, "ngClass"], [1, "welcome-heading"], [1, "heading-1", "signuplh"], [1, ""], ["src", "assets/img/login-logo.png"], [1, "clearfix"], [1, "form-wrapper"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["style", "font-size: larger;text-align: center;font-weight: bolder;", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", ""], ["type", "text", "placeholder", "Enter Your Full Name", "formControlName", "name", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "email", "placeholder", "Enter Your Email Address", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Enter Your Password", 1, "form-control"], ["type", "text", "placeholder", "Enter Your Company Name", "formControlName", "companyName", 1, "form-control"], ["type", "text", "placeholder", "Enter Your Company Website", "formControlName", "companyWebsite", 1, "form-control"], ["type", "text", "id", "portal", "placeholder", "ex. gomapIndia", "formControlName", "portalName", 1, "form-control", 3, "blur"], ["formControlName", "industryType", 1, "form-control"], ["value", ""], ["value", "IT Services"], ["value", "Finance"], ["value", "Manufacturing"], ["value", "Hospitality"], ["value", "Health Care"], ["formControlName", "companySize", 1, "form-control"], ["value", "1-50"], ["value", "51-150"], ["value", "151-250"], ["value", "251-500"], ["value", "500 and more"], ["type", "text", "placeholder", "Enter Your Mobile Number", "formControlName", "adminMobile", 1, "form-control"], [1, "checkbox"], ["id", "checkbox1", "type", "checkbox", "formControlName", "termsCheckBox"], ["for", "checkbox1"], ["href", "#"], ["type", "submit", "name", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "frpass"], [3, "routerLink"], [1, "error"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [2, "font-size", "larger", "text-align", "center", "font-weight", "bolder"], [2, "text-align", "center"], [1, "fa", "fa-check-circle", 2, "font-size", "60px", "color", "#007775"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Start your Free Trial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignupComponent_form_14_Template, 86, 13, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 7, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.ShowValidationMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowValidationMessage == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowValidationMessage == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".extraMargin[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 12%;\r\n    margin-bottom: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9GZWF0dXJlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0cmFNYXJnaW5cclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _signup_service__WEBPACK_IMPORTED_MODULE_4__["SignupService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Features/signup/signup.module.ts":
/*!**************************************************!*\
  !*** ./src/app/Features/signup/signup.module.ts ***!
  \**************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/Features/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/Features/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-verification/email-verification.component */ "./src/app/Features/signup/email-verification/email-verification.component.ts");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");








class SignupModule {
}
SignupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignupModule });
SignupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignupModule_Factory(t) { return new (t || SignupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignupModule, { declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_5__["EmailVerificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_5__["EmailVerificationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Features/signup/signup.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Features/signup/signup.service.ts ***!
  \***************************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Services/user.service.ts");





class SignupService {
    constructor(httpClient, userService) {
        this.httpClient = httpClient;
        this.userService = userService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
        this.SignupFunction = function (data) {
            return this.httpClient.post(this.url + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].signup, data);
        };
        this.ValidateToken = function (token) {
            return this.httpClient.get(this.url + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].emailVerification + token);
        };
        this.addCompany = function (data) {
            return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].addCompany, data);
        };
        this.CreateEmployee = function (company, data) {
            return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlPrefix + company + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlSuffix + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].AddEmployee, data);
        };
        this.getOperations = function (company) {
            return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlPrefix + company + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlSuffix + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getOperations);
        };
        this.getElements = function (company) {
            return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlPrefix + company + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].urlSuffix + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getElements);
        };
        this.CheckPortalName = function (name) {
            return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].validatePortalName + name);
        };
    }
}
SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
SignupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignupService, factory: SignupService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=Features-signup-signup-module-es2015.js.map