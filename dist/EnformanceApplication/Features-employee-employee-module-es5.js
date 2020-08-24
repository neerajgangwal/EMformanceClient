function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-employee-employee-module"], {
  /***/
  "./src/app/Entities/UpdateElementOperation.ts":
  /*!****************************************************!*\
    !*** ./src/app/Entities/UpdateElementOperation.ts ***!
    \****************************************************/

  /*! exports provided: ElementOperation */

  /***/
  function srcAppEntitiesUpdateElementOperationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElementOperation", function () {
      return ElementOperation;
    });

    var ElementOperation = function ElementOperation() {
      _classCallCheck(this, ElementOperation);
    };
    /***/

  },

  /***/
  "./src/app/Entities/UpdateEmployeePermissions.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Entities/UpdateEmployeePermissions.ts ***!
    \*******************************************************/

  /*! exports provided: EmployeePermissions */

  /***/
  function srcAppEntitiesUpdateEmployeePermissionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeePermissions", function () {
      return EmployeePermissions;
    });

    var EmployeePermissions = function EmployeePermissions() {
      _classCallCheck(this, EmployeePermissions);
    };
    /***/

  },

  /***/
  "./src/app/Entities/UpdateEmployeeRoleElement.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Entities/UpdateEmployeeRoleElement.ts ***!
    \*******************************************************/

  /*! exports provided: EmployeeRoleElement */

  /***/
  function srcAppEntitiesUpdateEmployeeRoleElementTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRoleElement", function () {
      return EmployeeRoleElement;
    });

    var EmployeeRoleElement = function EmployeeRoleElement() {
      _classCallCheck(this, EmployeeRoleElement);
    };
    /***/

  },

  /***/
  "./src/app/Features/employee/create-employee/create-employee.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/Features/employee/create-employee/create-employee.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CreateEmployeeComponent */

  /***/
  function srcAppFeaturesEmployeeCreateEmployeeCreateEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function () {
      return CreateEmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_Entities_EmployeePermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Entities/EmployeePermissions */
    "./src/app/Entities/EmployeePermissions.ts");
    /* harmony import */


    var src_app_Entities_EmployeeRoleElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Entities/EmployeeRoleElement */
    "./src/app/Entities/EmployeeRoleElement.ts");
    /* harmony import */


    var src_app_Entities_ElementOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Entities/ElementOperation */
    "./src/app/Entities/ElementOperation.ts");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Services/layout.service */
    "./src/app/Services/layout.service.ts");
    /* harmony import */


    var _employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../employee.service */
    "./src/app/Features/employee/employee.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/Services/user.service */
    "./src/app/Services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CreateEmployeeComponent_div_3_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide first name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateEmployeeComponent_div_3_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide last name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateEmployeeComponent_div_3_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateEmployeeComponent_div_3_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateEmployeeComponent_div_3_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid employeeId");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateEmployeeComponent_div_3_option_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var department_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", department_r12.departmentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r12.departmentName, "");
      }
    }

    function CreateEmployeeComponent_div_3_span_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select department");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateEmployeeComponent_div_3_span_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid mobile number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateEmployeeComponent_div_3_option_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var designation_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", designation_r13.designationId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", designation_r13.designationName, "");
      }
    }

    function CreateEmployeeComponent_div_3_span_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateEmployeeComponent_div_3_div_83_div_5_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var operation_r17 = ctx.$implicit;
        var operationIndex_r18 = ctx.index;

        var element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", operationIndex_r18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](operation_r17.controls.operationName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", element_r14.controls.elementName.value + operation_r17.controls.operationName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", element_r14.controls.elementName.value + operation_r17.controls.operationName.value);
      }
    }

    function CreateEmployeeComponent_div_3_div_83_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;
        var elementIndex_r15 = ctx.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", elementIndex_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.controls.elementName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.ElementOperationsList(elementIndex_r15).controls);
      }
    }

    function CreateEmployeeComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateEmployeeComponent_div_3_Template_select_change_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.SelectDepartmentChanged(ctx_r20.EmployeeForm.controls["departmentId"].value);
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateEmployeeComponent_div_3_Template_select_change_59_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.SelectRoleChanged(ctx_r22.EmployeeForm.controls["designationId"].value);
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_a_click_70_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.RadioButtonClick("Male");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Male");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_a_click_72_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.RadioButtonClick("Female");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Female");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_a_click_74_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.RadioButtonClick("Other");
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_input_click_85_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEmployeeComponent_div_3_Template_input_click_86_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.CreateEmployee(ctx_r27.EmployeeForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    var CreateEmployeeComponent = /*#__PURE__*/function () {
      function CreateEmployeeComponent(layoutService, employeeService, fb, messageService, userService, router) {
        _classCallCheck(this, CreateEmployeeComponent);

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
          } else {
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
          var _this = this;

          this.employeeService.GetRolesForDepartmentId(id).subscribe(function (res) {
            _this.EmployeeForm.patchValue({
              designationId: ''
            });

            _this.DesignationList = res.dataObj;
            console.log(_this.DesignationList);
          });
        };

        this.CreateEmployee = function (data) {
          var _this2 = this;

          console.log("TestData");
          console.log(data);
          var convertedData = this.MapDataToEntity(data);
          this.employeeService.CreateEmployee(convertedData).subscribe(function (res) {
            console.log(res);

            if (res.errorCode == 0) {
              console.log("success");

              _this2.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Successfully created employee'
              });

              _this2.resetForm();

              _this2.CancelButtonClick();

              _this2.EmployeeForm.patchValue({
                gender: 'Male'
              });

              var signupData = {
                userRole: "NON-ADMIN",
                companyInfo: _this2.userService.LoggedInUser.CompanyInfo,
                name: data.employeeFname,
                password: data.employeePassword,
                email: data.employeeEmail
              };

              _this2.employeeService.CreateSignUp(signupData).subscribe(function (res2) {
                if (res2.errorCode == 0) {
                  _this2.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Successfully created employee signup'
                  });
                }
              });
            } else {
              _this2.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (err) {
            console.log(err);

            _this2.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: "Failed , please try again"
            });
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
          data.employeeElementMappingList.forEach(function (elementdata) {
            var element = new src_app_Entities_EmployeeRoleElement__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoleElement"]();
            element.elementId = elementdata.elementId;
            element.employeeElementOprationList = [];
            elementdata.employeeElementOperationList.forEach(function (operationData) {
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

      _createClass(CreateEmployeeComponent, [{
        key: "CreateHashMap",
        value: function CreateHashMap(data) {
          this.PermissionsData = new Map();

          for (var index = 0; index < data.length; index++) {
            var element = data[index];
            var operations = [];

            for (var index2 = 0; index2 < element.roleElementOprationList.length; index2++) {
              var operation = element.roleElementOprationList[index2];
              operations.push(operation.operationId);
            }

            this.PermissionsData.set(element.elementId, operations);
          }
        }
      }, {
        key: "CheckPermission",
        value: function CheckPermission(elementId, operationId) {
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
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.employeeService.GetDepartments().subscribe(function (res) {
            _this3.DepartmentList = res.dataObj;
            console.log(_this3.DepartmentList);
          });
          this.employeeService.getElements().subscribe(function (res) {
            if (res.errorCode == 0) {
              _this3.ElementsData = res.dataObj;

              _this3.employeeService.getOperations().subscribe(function (res2) {
                if (res2.errorCode == 0) {
                  _this3.OperationsData = res2.dataObj;

                  _this3.InitializeForm();

                  console.log(_this3.EmployeeForm.value);
                }

                ;
              });
            }
          });
        }
      }, {
        key: "SelectRoleChanged",
        value: function SelectRoleChanged(id) {
          var _this4 = this;

          this.employeeService.getRolePermissions(id).subscribe(function (res) {
            _this4.CreateHashMap(res.dataObj.designationElementMappingList);

            console.log(id);

            _this4.InitializeForm();
          });
        }
      }, {
        key: "Operations",
        value: function Operations(elementId) {
          var _this5 = this;

          var operationsArray = this.fb.array([]);
          this.OperationsData.forEach(function (element) {
            operationsArray.push(_this5.fb.group({
              operationId: [element.operationId],
              operationName: [element.operationName],
              value: [_this5.CheckPermission(elementId, element.operationId)]
            }));
          });
          return operationsArray;
        }
      }, {
        key: "ElementOperationsList",
        value: function ElementOperationsList(elementIndex) {
          return this.ElementsList.controls[elementIndex].get('employeeElementOperationList');
        }
      }, {
        key: "CancelButtonClick",
        value: function CancelButtonClick() {
          this.router.navigateByUrl("/employee/list");
        }
      }, {
        key: "Elements",
        get: function get() {
          var _this6 = this;

          var elementsArray = this.fb.array([]);
          this.ElementsData.forEach(function (element) {
            elementsArray.push(_this6.fb.group({
              elementId: [element.elementId],
              elementName: [element.elementName],
              employeeElementOperationList: _this6.Operations(element.elementId)
            }));
          });
          return elementsArray;
        }
      }, {
        key: "ElementsList",
        get: function get() {
          return this.EmployeeForm.get('employeeElementMappingList');
        }
      }]);

      return CreateEmployeeComponent;
    }();

    CreateEmployeeComponent.ɵfac = function CreateEmployeeComponent_Factory(t) {
      return new (t || CreateEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]));
    };

    CreateEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateEmployeeComponent,
      selectors: [["app-create-employee"]],
      decls: 4,
      vars: 1,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], ["class", "form-container", 3, "formGroup", 4, "ngIf"], [1, "form-container", 3, "formGroup"], [1, "form-section"], [1, "col-lg-12"], ["data-color", "orange", "id", "wizardProfile", 1, "card", "wizard-card"], [1, "picture-container"], [1, "picture"], ["src", "assets/img/default-avatar.jpg", "id", "wizardPicturePreview", "title", "", 1, "picture-src"], ["type", "file", "id", "wizard-picture", "formControlName", "employeeProfileImg"], [1, "col-lg-6"], [1, "form-group"], ["for", ""], ["type", "text", "formControlName", "employeeFname", "placeholder", "Enter your first name", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "employeeMname", "placeholder", "Enter Last Name", 1, "form-control"], ["type", "text", "formControlName", "employeeEmail", "placeholder", "Enter Email Address", 1, "form-control"], ["type", "password", "formControlName", "employeePassword", "placeholder", "Enter Password", 1, "form-control"], ["type", "text", "formControlName", "employeeUserId", "placeholder", "Enter Employee Id", 1, "form-control"], ["name", "", "id", "", "formControlName", "departmentId", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "employeeMobileNo", "placeholder", "Enter Phone Number", 1, "form-control"], ["name", "", "id", "", "formControlName", "designationId", 1, "form-control", 3, "change"], ["for", "fun", 1, "control-label", "text-right"], [1, "input-group"], ["id", "radioBtn", 1, "btn-group"], ["data-toggle", "fun", "data-title", "Y", 1, "btn", "btn-primary", "gender", "btn-sm", "active", 3, "click"], ["data-toggle", "fun", "data-title", "X", 1, "btn", "btn-primary", "gender", "btn-sm", "notActive", 3, "click"], ["data-toggle", "fun", "data-title", "N", 1, "btn", "btn-primary", "btn-sm", "gender", "notActive", 3, "click"], ["type", "hidden", "name", "fun", "id", "fun", "formControlName", "gender"], [1, "form-container"], [1, "col-lg-12", "permission-heading"], ["formArrayName", "employeeElementMappingList", 1, "permission-section"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "pull-right"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "value", "Create Employee", 1, "subbtn", "btn", "btn-primary", 3, "disabled", "click"], [1, "error"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [3, "value"], [1, "rolesection", 3, "formGroupName"], ["for", "", 1, "pull-left", "headtxt", 2, "width", "30%"], ["class", "material-switch", "formArrayName", "employeeElementOperationList", 4, "ngFor", "ngForOf"], ["formArrayName", "employeeElementOperationList", 1, "material-switch"], [3, "formGroupName"], ["name", "someSwitchOption001", "formControlName", "value", "type", "checkbox", 3, "id"], [1, "label-default", 3, "for"]],
      template: function CreateEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateEmployeeComponent_div_3_Template, 87, 25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EmployeeForm != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL2NyZWF0ZS1lbXBsb3llZS9jcmVhdGUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-employee',
          templateUrl: './create-employee.component.html',
          styleUrls: ['./create-employee.component.css']
        }]
      }], function () {
        return [{
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]
        }, {
          type: _employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/employee/edit-employee/edit-employee.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Features/employee/edit-employee/edit-employee.component.ts ***!
    \****************************************************************************/

  /*! exports provided: EditEmployeeComponent */

  /***/
  function srcAppFeaturesEmployeeEditEmployeeEditEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function () {
      return EditEmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_Entities_UpdateEmployeePermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Entities/UpdateEmployeePermissions */
    "./src/app/Entities/UpdateEmployeePermissions.ts");
    /* harmony import */


    var src_app_Entities_UpdateEmployeeRoleElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Entities/UpdateEmployeeRoleElement */
    "./src/app/Entities/UpdateEmployeeRoleElement.ts");
    /* harmony import */


    var src_app_Entities_UpdateElementOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Entities/UpdateElementOperation */
    "./src/app/Entities/UpdateElementOperation.ts");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Services/layout.service */
    "./src/app/Services/layout.service.ts");
    /* harmony import */


    var _employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../employee.service */
    "./src/app/Features/employee/employee.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditEmployeeComponent_div_3_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide first name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditEmployeeComponent_div_3_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide last name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditEmployeeComponent_div_3_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditEmployeeComponent_div_3_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditEmployeeComponent_div_3_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid employeeId");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditEmployeeComponent_div_3_option_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var department_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", department_r12.departmentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r12.departmentName, "");
      }
    }

    function EditEmployeeComponent_div_3_span_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select department");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditEmployeeComponent_div_3_span_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide valid mobile number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditEmployeeComponent_div_3_option_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var designation_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", designation_r13.designationId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](designation_r13.designationName);
      }
    }

    function EditEmployeeComponent_div_3_span_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditEmployeeComponent_div_3_div_83_div_5_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var operation_r17 = ctx.$implicit;
        var operationIndex_r18 = ctx.index;

        var element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", operationIndex_r18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](operation_r17.controls.operationName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", element_r14.controls.elementName.value + operation_r17.controls.operationName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", element_r14.controls.elementName.value + operation_r17.controls.operationName.value);
      }
    }

    function EditEmployeeComponent_div_3_div_83_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;
        var elementIndex_r15 = ctx.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", elementIndex_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.controls.elementName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.ElementOperationsList(elementIndex_r15).controls);
      }
    }

    function EditEmployeeComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditEmployeeComponent_div_3_Template_select_change_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.SelectDepartmentChanged(ctx_r20.EmployeeForm.controls["departmentId"].value);
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditEmployeeComponent_div_3_Template_select_change_59_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.SelectRoleChanged(ctx_r22.EmployeeForm.controls["designationId"].value);
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_a_click_70_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.RadioButtonClick("Male");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Male");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_a_click_72_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.RadioButtonClick("Female");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Female");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_a_click_74_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.RadioButtonClick("Other");
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_input_click_85_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_div_3_Template_input_click_86_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.UpdateEmployee(ctx_r27.EmployeeForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    var EditEmployeeComponent = /*#__PURE__*/function () {
      function EditEmployeeComponent(layoutService, employeeService, fb, messageService, route, router) {
        _classCallCheck(this, EditEmployeeComponent);

        this.layoutService = layoutService;
        this.employeeService = employeeService;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.RolePermissions = [];

        this.InitializeForm = function (employee) {
          var _this7 = this;

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
          this.employeeService.GetDepartments().subscribe(function (res) {
            _this7.DepartmentList = res.dataObj;
            console.log(_this7.DepartmentList);
          });
          this.SelectDepartmentChanged(employee.departmentId);
        };

        this.SelectDepartmentChanged = function (id) {
          var _this8 = this;

          this.employeeService.GetRolesForDepartmentId(id).subscribe(function (res) {
            _this8.EmployeeForm.patchValue({
              designationId: ''
            });

            _this8.DesignationList = res.dataObj;
            console.log(_this8.DesignationList);
          });
        };

        this.UpdateEmployee = function (data) {
          var _this9 = this;

          console.log("TestData");
          console.log(data);
          var convertedData = this.MapDataToEntity(data);
          this.employeeService.UpdateEmployee(convertedData).subscribe(function (res) {
            console.log(res);

            if (res.errorCode == 0) {
              console.log("success");

              _this9.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Successfully created employee'
              });

              _this9.router.navigate(['employee', 'list']);

              _this9.resetForm();

              _this9.EmployeeForm.patchValue({
                gender: 'Male'
              });

              _this9.router.navigateByUrl("/employee/list");
            } else {
              _this9.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (err) {
            console.log(err);

            _this9.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: "Failed , please try again"
            });
          });
        };

        this.MapDataToEntity = function (data) {
          var _this10 = this;

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
          data.employeeElementMappingList.forEach(function (elementdata) {
            var element = new src_app_Entities_UpdateEmployeeRoleElement__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoleElement"]();
            element.elementId = elementdata.elementId;
            element.employeeElementMpgId = _this10.ElementIdMapping.get(elementdata.elementId);
            element.employeeElementOprationList = [];
            elementdata.employeeElementOperationList.forEach(function (operationData) {
              if (operationData.value == true) {
                var opertaion = new src_app_Entities_UpdateElementOperation__WEBPACK_IMPORTED_MODULE_4__["ElementOperation"]();
                opertaion.operationId = operationData.operationId;
                opertaion.employeeElementOperationId = _this10.OPerationIdMapping.get(elementdata.elementId + '-' + operationData.operationId);
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

      _createClass(EditEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.queryParamMap.subscribe(function (params) {
            var id = params.get("id");

            _this11.employeeService.getElements().subscribe(function (res) {
              if (res.errorCode == 0) {
                _this11.ElementsData = res.dataObj;

                _this11.employeeService.getOperations().subscribe(function (res2) {
                  if (res2.errorCode == 0) {
                    _this11.OperationsData = res2.dataObj;

                    _this11.employeeService.GetEmployeeById(id).subscribe(function (res) {
                      var employee = res.dataObj[0];

                      _this11.employeeService.getEmployeeElementMapping(id).subscribe(function (res) {
                        _this11.CreateHashMap(res.dataObj.employeeElementMappingList);

                        _this11.InitializeForm(employee);
                      });
                    });
                  }

                  ;
                });
              }
            });
          });
        }
      }, {
        key: "SelectRoleChanged",
        value: function SelectRoleChanged(id) {}
      }, {
        key: "CreateHashMap",
        value: function CreateHashMap(data) {
          this.PermissionsData = new Map();
          this.ElementIdMapping = new Map();
          this.OPerationIdMapping = new Map();

          for (var index = 0; index < data.length; index++) {
            var element = data[index];
            this.ElementIdMapping.set(element.elementId, element.employeeElementMpgId);
            var operations = [];

            for (var index2 = 0; index2 < element.employeeElementOprationList.length; index2++) {
              var operation = element.employeeElementOprationList[index2];
              this.OPerationIdMapping.set(element.elementId + '-' + operation.operationId, operation.employeeElementOperationId);
              operations.push(operation.operationId);
            }

            this.PermissionsData.set(element.elementId, operations);
          }
        }
      }, {
        key: "CheckPermission",
        value: function CheckPermission(elementId, operationId) {
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
      }, {
        key: "Operations",
        value: function Operations(elementId) {
          var _this12 = this;

          var operationsArray = this.fb.array([]);
          this.OperationsData.forEach(function (element) {
            operationsArray.push(_this12.fb.group({
              operationId: [element.operationId],
              operationName: [element.operationName],
              value: [_this12.CheckPermission(elementId, element.operationId)]
            }));
          });
          return operationsArray;
        }
      }, {
        key: "ElementOperationsList",
        value: function ElementOperationsList(elementIndex) {
          return this.ElementsList.controls[elementIndex].get('employeeElementOperationList');
        }
      }, {
        key: "CancelButtonClick",
        value: function CancelButtonClick() {
          this.router.navigateByUrl("/employee/list");
        }
      }, {
        key: "Elements",
        get: function get() {
          var _this13 = this;

          var elementsArray = this.fb.array([]);
          this.ElementsData.forEach(function (element) {
            elementsArray.push(_this13.fb.group({
              elementId: [element.elementId],
              elementName: [element.elementName],
              employeeElementOperationList: _this13.Operations(element.elementId)
            }));
          });
          return elementsArray;
        }
      }, {
        key: "ElementsList",
        get: function get() {
          return this.EmployeeForm.get('employeeElementMappingList');
        }
      }]);

      return EditEmployeeComponent;
    }();

    EditEmployeeComponent.ɵfac = function EditEmployeeComponent_Factory(t) {
      return new (t || EditEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
    };

    EditEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditEmployeeComponent,
      selectors: [["app-edit-employee"]],
      decls: 4,
      vars: 1,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], ["class", "form-container", 3, "formGroup", 4, "ngIf"], [1, "form-container", 3, "formGroup"], [1, "form-section"], [1, "col-lg-12"], ["data-color", "orange", "id", "wizardProfile", 1, "card", "wizard-card"], [1, "picture-container"], [1, "picture"], ["src", "assets/img/default-avatar.jpg", "id", "wizardPicturePreview", "title", "", 1, "picture-src"], ["type", "file", "id", "wizard-picture", "formControlName", "employeeProfileImg"], [1, "col-lg-6"], [1, "form-group"], ["for", ""], ["type", "text", "formControlName", "employeeFname", "placeholder", "Enter your first name", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "employeeMname", "placeholder", "Enter Last Name", 1, "form-control"], ["type", "text", "formControlName", "employeeEmail", "placeholder", "Enter Email Address", 1, "form-control"], ["type", "password", "formControlName", "employeePassword", "placeholder", "Enter Password", 1, "form-control"], ["type", "text", "formControlName", "employeeUserId", "placeholder", "Enter Employee Id", 1, "form-control"], ["name", "", "id", "", "formControlName", "departmentId", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "employeeMobileNo", "placeholder", "Enter Phone Number", 1, "form-control"], ["name", "", "id", "", "formControlName", "designationId", 1, "form-control", 3, "disabled", "change"], ["for", "fun", 1, "control-label", "text-right"], [1, "input-group"], ["id", "radioBtn", 1, "btn-group"], ["data-toggle", "fun", "data-title", "Y", 1, "btn", "btn-primary", "gender", "btn-sm", "active", 3, "click"], ["data-toggle", "fun", "data-title", "X", 1, "btn", "btn-primary", "gender", "btn-sm", "notActive", 3, "click"], ["data-toggle", "fun", "data-title", "N", 1, "btn", "btn-primary", "btn-sm", "gender", "notActive", 3, "click"], ["type", "hidden", "name", "fun", "id", "fun", "formControlName", "gender"], [1, "form-container"], [1, "col-lg-12", "permission-heading"], ["formArrayName", "employeeElementMappingList", 1, "permission-section"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "pull-right"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "value", "Save Employee", 1, "subbtn", "btn", "btn-primary", 3, "click"], [1, "error"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [3, "value"], [1, "rolesection", 3, "formGroupName"], ["for", "", 1, "pull-left", "headtxt", 2, "width", "30%"], ["class", "material-switch", "formArrayName", "employeeElementOperationList", 4, "ngFor", "ngForOf"], ["formArrayName", "employeeElementOperationList", 1, "material-switch"], [3, "formGroupName"], ["name", "someSwitchOption001", "formControlName", "value", "type", "checkbox", 3, "id"], [1, "label-default", 3, "for"]],
      template: function EditEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditEmployeeComponent_div_3_Template, 87, 25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EmployeeForm != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL2VkaXQtZW1wbG95ZWUvZWRpdC1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-employee',
          templateUrl: './edit-employee.component.html',
          styleUrls: ['./edit-employee.component.css']
        }]
      }], function () {
        return [{
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]
        }, {
          type: _employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/employee/employee-list/employee-list.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Features/employee/employee-list/employee-list.component.ts ***!
    \****************************************************************************/

  /*! exports provided: EmployeeListComponent */

  /***/
  function srcAppFeaturesEmployeeEmployeeListEmployeeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
      return EmployeeListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../employee.service */
    "./src/app/Features/employee/employee.service.ts");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../Services/layout.service */
    "./src/app/Services/layout.service.ts");
    /* harmony import */


    var _Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Services/search.service */
    "./src/app/Services/search.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Services/user.service */
    "./src/app/Services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmployeeListComponent_li_20_i_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_li_20_i_13_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.viewIconClicked(data_r1.employee.employeeId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_li_20_i_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_li_20_i_14_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.editEmployeeIconClicked(data_r1.employee.employeeId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_li_20_i_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_li_20_i_15_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.deleteIconClicked(data_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_li_20_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    var EmployeeListComponent = /*#__PURE__*/function () {
      function EmployeeListComponent(employeeService, layoutservice, searchSerrvice, messageService, userService, router) {
        _classCallCheck(this, EmployeeListComponent);

        this.employeeService = employeeService;
        this.layoutservice = layoutservice;
        this.searchSerrvice = searchSerrvice;
        this.messageService = messageService;
        this.userService = userService;
        this.router = router;

        this.deleteIconClicked = function (data) {
          var _this14 = this;

          console.log("some data " + data.employee.employeeId);
          console.log("id " + data.employeeId);
          this.employeeService.deleteEmployee(data.employee.employeeId).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this14.EmployeeList.splice(_this14.EmployeeList.indexOf(data), 1);

              _this14.SearchResults = _this14.EmployeeList;

              _this14.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Employee deleted'
              });
            } else {
              _this14.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (err) {
            console.log(err);

            _this14.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: "Something went wrong"
            });
          });
        };

        this.FilterData = function (event) {
          var _this15 = this;

          var temp = this.EmployeeList;
          var data = event.target.value;
          console.log(data);
          console.log(temp);
          this.SearchResults = temp.filter(function (item) {
            console.log(item);
            console.log(item[_this15.FilterKey]);
            console.log(item[_this15.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
            return item[_this15.FilterKey].toLowerCase().includes(data.toLowerCase());
          });
        };
      }

      _createClass(EmployeeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.searchSerrvice.SetSource(null);
          this.layoutservice.UpdateLayout(true, true, true, true);
          this.employeeService.GetEmployeeData().subscribe(function (res) {
            _this16.EmployeeList = res.dataObj;

            _this16.EmployeeList.forEach(function (element) {
              element.FullName = element.employee.employeeFname + " " + element.employee.employeeMname;
            });

            console.log(_this16.EmployeeList);
            _this16.SearchResults = _this16.EmployeeList;
            _this16.FilterKey = "FullName";
          });
        }
      }, {
        key: "editEmployeeIconClicked",
        value: function editEmployeeIconClicked(id) {
          this.router.navigate(['employee', 'edit'], {
            queryParams: {
              'id': id
            }
          });
        }
      }, {
        key: "viewIconClicked",
        value: function viewIconClicked(id) {
          this.router.navigate(['employee', 'view'], {
            queryParams: {
              'id': id
            }
          });
        }
      }]);

      return EmployeeListComponent;
    }();

    EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) {
      return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeListComponent,
      selectors: [["app-employee-list"]],
      decls: 21,
      vars: 1,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "search-form"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "input"], [1, "emlist"], [1, "team-member", "team-listvew"], [1, "list-heading"], ["class", "list-heading list-content", 4, "ngFor", "ngForOf"], [1, "list-heading", "list-content"], [1, "team-thumb"], ["href", "#"], ["class", "icon-View", 3, "click", 4, "ngIf"], ["class", "icon-edit", 3, "click", 4, "ngIf"], ["class", "icon-Delete", 3, "click", 4, "ngIf"], [1, "icon-View", 3, "click"], [1, "icon-edit", 3, "click"], [1, "icon-Delete", 3, "click"]],
      template: function EmployeeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmployeeListComponent_Template_input_input_7_listener($event) {
            return ctx.FilterData($event);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SearchResults);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employee-list',
          templateUrl: './employee-list.component.html',
          styleUrls: ['./employee-list.component.css']
        }]
      }], function () {
        return [{
          type: _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
        }, {
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
        }, {
          type: _Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }, {
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/employee/employee-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Features/employee/employee-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: EmployeeRoutingModule */

  /***/
  function srcAppFeaturesEmployeeEmployeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function () {
      return EmployeeRoutingModule;
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


    var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-employee/create-employee.component */
    "./src/app/Features/employee/create-employee/create-employee.component.ts");
    /* harmony import */


    var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-employee/edit-employee.component */
    "./src/app/Features/employee/edit-employee/edit-employee.component.ts");
    /* harmony import */


    var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./employee-list/employee-list.component */
    "./src/app/Features/employee/employee-list/employee-list.component.ts");
    /* harmony import */


    var _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-employee/view-employee.component */
    "./src/app/Features/employee/view-employee/view-employee.component.ts");

    var routes = [{
      path: 'create',
      component: _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_2__["CreateEmployeeComponent"],
      data: {
        Title: 'Create Employee',
        ShowHeader: true,
        ShowNavBar: true
      }
    }, {
      path: 'list',
      component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"],
      data: {
        Title: 'Employee List',
        ShowHeader: true,
        ShowNavBar: true
      }
    }, {
      path: 'view',
      component: _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_5__["ViewEmployeeComponent"],
      data: {
        Title: 'Employee',
        ShowHeader: true,
        ShowNavBar: true
      }
    }, {
      path: 'edit',
      component: _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_3__["EditEmployeeComponent"],
      data: {
        Title: 'Edit Employee',
        ShowHeader: true,
        ShowNavBar: true
      }
    }];

    var EmployeeRoutingModule = function EmployeeRoutingModule() {
      _classCallCheck(this, EmployeeRoutingModule);
    };

    EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeRoutingModule
    });
    EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeRoutingModule_Factory(t) {
        return new (t || EmployeeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeRoutingModule, [{
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
  "./src/app/Features/employee/employee.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Features/employee/employee.component.ts ***!
    \*********************************************************/

  /*! exports provided: EmployeeComponent */

  /***/
  function srcAppFeaturesEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
      return EmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmployeeComponent = /*#__PURE__*/function () {
      function EmployeeComponent() {
        _classCallCheck(this, EmployeeComponent);
      }

      _createClass(EmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmployeeComponent;
    }();

    EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) {
      return new (t || EmployeeComponent)();
    };

    EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeComponent,
      selectors: [["app-employee"]],
      decls: 2,
      vars: 0,
      template: function EmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "employee works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employee',
          templateUrl: './employee.component.html',
          styleUrls: ['./employee.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/employee/employee.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/Features/employee/employee.module.ts ***!
    \******************************************************/

  /*! exports provided: EmployeeModule */

  /***/
  function srcAppFeaturesEmployeeEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
      return EmployeeModule;
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


    var _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employee-routing.module */
    "./src/app/Features/employee/employee-routing.module.ts");
    /* harmony import */


    var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee.component */
    "./src/app/Features/employee/employee.component.ts");
    /* harmony import */


    var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-employee/create-employee.component */
    "./src/app/Features/employee/create-employee/create-employee.component.ts");
    /* harmony import */


    var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./employee-list/employee-list.component */
    "./src/app/Features/employee/employee-list/employee-list.component.ts");
    /* harmony import */


    var _employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./employee.service */
    "./src/app/Features/employee/employee.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./view-employee/view-employee.component */
    "./src/app/Features/employee/view-employee/view-employee.component.ts");
    /* harmony import */


    var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./edit-employee/edit-employee.component */
    "./src/app/Features/employee/edit-employee/edit-employee.component.ts");

    var EmployeeModule = function EmployeeModule() {
      _classCallCheck(this, EmployeeModule);
    };

    EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeModule
    });
    EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeModule_Factory(t) {
        return new (t || EmployeeModule)();
      },
      providers: [_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeModule, {
        declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"], _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"], _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_10__["ViewEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_11__["EditEmployeeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"], _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"], _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_10__["ViewEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_11__["EditEmployeeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"]],
          providers: [_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/employee/employee.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Features/employee/employee.service.ts ***!
    \*******************************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppFeaturesEmployeeEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
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
    /* harmony import */


    var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/user.service */
    "./src/app/Services/user.service.ts");

    var EmployeeService = function EmployeeService(httpClient, userService) {
      _classCallCheck(this, EmployeeService);

      this.httpClient = httpClient;
      this.userService = userService;

      this.GetEmployeeData = function () {
        return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].employeeData);
      };

      this.GetEmployeeById = function (id) {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getEmployeeData, {
          employeeId: id
        });
      };

      this.GetDepartments = function () {
        return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getDepartment);
      };

      this.GetDepartment = function (id) {
        return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getDepartmentById + id);
      };

      this.GetDesignation = function (id) {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].GetDesignations, {
          designationId: id
        });
      };

      this.GetRolesForDepartmentId = function (id) {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].GetDesignations, {
          departmentId: id
        });
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
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deleteEmployee, {
          employeeId: id
        });
      };

      this.getEmployeeElementMapping = function (id) {
        return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getEmployeeElementsMapping + id);
      };

      this.GetSkillsMappedToEmployee = function (employeeIdData) {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getEmployeeSkill, {
          employeeId: employeeIdData
        });
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
    };

    EmployeeService.ɵfac = function EmployeeService_Factory(t) {
      return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmployeeService,
      factory: EmployeeService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/employee/view-employee/view-employee.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Features/employee/view-employee/view-employee.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ViewEmployeeComponent */

  /***/
  function srcAppFeaturesEmployeeViewEmployeeViewEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewEmployeeComponent", function () {
      return ViewEmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../employee.service */
    "./src/app/Features/employee/employee.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewEmployeeComponent_div_42_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var operation_r8 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.GetOperationName(operation_r8.operationId), "");
      }
    }

    function ViewEmployeeComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var element_r6 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    var _c0 = function _c0(a0, a1, a2, a3) {
      return {
        "completedcolor": a0,
        "yellowcolor": a1,
        "purplecolor": a2,
        "redcolor": a3
      };
    };

    var _c1 = function _c1(a0, a1, a2) {
      return {
        "redcolor": a0,
        "greencolor": a1,
        "purplecolor": a2
      };
    };

    function ViewEmployeeComponent_li_64_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var project_r9 = ctx.$implicit;

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
      }
    }

    function ViewEmployeeComponent_div_67_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r11.teamName, " ");
      }
    }

    function ViewEmployeeComponent_div_67_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.TeamList);
      }
    }

    function ViewEmployeeComponent_h3_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not tagged to any team");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewEmployeeComponent_div_70_div_4_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var skill_r13 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getSkillNameById(skill_r13.skillId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", skill_r13.skillProficiency);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-value", skill_r13.skillProficiency);
      }
    }

    function ViewEmployeeComponent_div_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewEmployeeComponent_div_70_div_4_Template, 25, 3, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.EmployeeSkills);
      }
    }

    function ViewEmployeeComponent_h3_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No skills mapped");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ViewEmployeeComponent = /*#__PURE__*/function () {
      function ViewEmployeeComponent(employeeService, route) {
        _classCallCheck(this, ViewEmployeeComponent);

        this.employeeService = employeeService;
        this.route = route;
      }

      _createClass(ViewEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.route.queryParamMap.subscribe(function (params) {
            var id = params.get("id");

            _this17.employeeService.GetEmployeeById(id).subscribe(function (res) {
              if (res.errorCode == 0) {
                _this17.Employee = res.dataObj[0];

                _this17.GetDesignationById(_this17.Employee.designationId);

                _this17.GetDepartmentById(_this17.Employee.departmentId);

                _this17.employeeService.getOperations().subscribe(function (res) {
                  if (res.errorCode == 0) {
                    _this17.Operations = res.dataObj;

                    _this17.employeeService.getElements().subscribe(function (res) {
                      if (res.errorCode == 0) {
                        _this17.Elements = res.dataObj;

                        _this17.employeeService.getEmployeeElementMapping(id).subscribe(function (res) {
                          if (res.errorCode == 0) {
                            _this17.Permissions = res.dataObj.employeeElementMappingList;

                            _this17.getEmployeeSkills(id);

                            _this17.getAllEmployeeSkills(); //MapPermissionsList(res.dataObj.employeeElementMappingList);

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
      }, {
        key: "MapPermissionsList",
        value: function MapPermissionsList(data) {
          if (data) {
            for (var index = 0; index < data.length; index++) {
              var element = data[index];

              for (var index2 = 0; index2 < element.employeeElementOprationList.length; index2++) {
                var operation = element.employeeElementOprationList[index2];
              }
            }
          }
        }
      }, {
        key: "getEmployeeSkills",
        value: function getEmployeeSkills(id) {
          var _this18 = this;

          console.log("skill called");
          this.employeeService.GetSkillsMappedToEmployee(id).subscribe(function (res) {
            if (res.errorCode == 0) {
              console.log(res.dataObj);
              _this18.EmployeeSkills = res.dataObj;
            } else {}
          });
        }
      }, {
        key: "getAllEmployeeSkills",
        value: function getAllEmployeeSkills() {
          var _this19 = this;

          this.employeeService.GetAllTheSkills().subscribe(function (res) {
            if (res.errorCode == 0) {
              console.log(res.dataObj);
              _this19.Skills = res.dataObj;
            } else {}
          });
        }
      }, {
        key: "getSkillNameById",
        value: function getSkillNameById(id) {
          if (this.Skills) {
            for (var index = 0; index < this.Skills.length; index++) {
              var element = this.Skills[index];

              if (element.skillId == id) {
                return element.skillName;
              }
            }
          }

          return "";
        }
      }, {
        key: "getProjectList",
        value: function getProjectList() {
          var _this20 = this;

          var id = -1;
          this.employeeService.GetProjectListById(id).subscribe(function (res) {
            console.log(res);
            _this20.projectList = res.dataObj;
            console.log(_this20.projectList);
          });
        }
      }, {
        key: "getTeamList",
        value: function getTeamList() {
          var _this21 = this;

          this.employeeService.getTeam().subscribe(function (res) {
            if (res.errorCode == 0) {
              _this21.TeamList = res.dataObj;
              console.log(_this21.TeamList);
            } else {}
          });
        }
      }, {
        key: "GetOperationName",
        value: function GetOperationName(id) {
          for (var index = 0; index < this.Operations.length; index++) {
            var operation = this.Operations[index];

            if (operation.operationId == id) {
              return operation.operationName;
            }
          }
        }
      }, {
        key: "GetElementName",
        value: function GetElementName(id) {
          for (var index = 0; index < this.Elements.length; index++) {
            var element = this.Elements[index];

            if (element.elementId == id) {
              return element.elementName;
            }
          }
        }
      }, {
        key: "GetDesignationById",
        value: function GetDesignationById(id) {
          var _this22 = this;

          this.employeeService.GetDesignation(id).subscribe(function (res) {
            _this22.DepartmentName = res.dataObj[0].departmentName;
          });
        }
      }, {
        key: "GetDepartmentById",
        value: function GetDepartmentById(id) {
          var _this23 = this;

          this.employeeService.GetDepartment(id).subscribe(function (res) {
            _this23.DesignationName = res.dataObj[0].designationName;
          });
        }
      }]);

      return ViewEmployeeComponent;
    }();

    ViewEmployeeComponent.ɵfac = function ViewEmployeeComponent_Factory(t) {
      return new (t || ViewEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ViewEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewEmployeeComponent,
      selectors: [["app-view-employee"]],
      decls: 73,
      vars: 12,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "nav", "nav-tabs"], [1, "active"], ["data-toggle", "tab", "href", "#feedback-request"], ["data-toggle", "tab", "href", "#my-feedback", 3, "click"], ["data-toggle", "tab", "href", "#team-feedback", 3, "click"], ["data-toggle", "tab", "href", "#skill-feedback"], [1, "tab-content"], ["id", "feedback-request", 1, "tab-pane", "fade", "in", "active"], [1, "table-full-width"], [1, "feedback-list", 2, "margin-bottom", "0px"], [1, "media"], [1, "media-left"], ["href", "#"], ["src", "assets/img/faces/face-1.jpg", "alt", "...", 1, "media-object"], [1, "media-body"], [1, "media-heading"], [1, "gray-text"], [3, "href"], [1, "col-md-12", "col-xs-12"], ["id", "accordion", 1, "panel-group"], ["class", "panel panel-default", "id", "panel2", 4, "ngFor", "ngForOf"], ["id", "my-feedback", 1, "tab-pane", "fade"], [1, "checkbox-list"], [1, "table"], [2, "width", "280px"], [1, "gray-text", 2, "width", "150px"], [1, "gray-text", 2, "width", "140px"], [2, "width", "104px"], [2, "width", "110px"], [1, "gray-text", 2, "width", "180px"], [4, "ngFor", "ngForOf"], ["id", "team-feedback", 1, "tab-pane", "fade"], ["class", "table-full-width", 4, "ngIf"], ["style", "text-align: center;padding-top: 20%;", 4, "ngIf"], ["id", "skill-feedback", 1, "tab-pane", "fade"], [1, "col-md-3"], ["id", "panel2", 1, "panel", "panel-default"], ["data-toggle", "collapse", 1, "panel-heading"], [1, "panel-title"], ["data-toggle", "collapse", 1, "collapsed", 2, "font-weight", "bold"], [1, "panel-collapse", "collapse", "fade"], [1, "panel-body"], [1, "content"], [1, "permission-list"], [2, "width", "292px"], [1, "gray-text", "projectthumb", 2, "width", "140px"], [1, "team-thumb"], [1, "more-thumb"], [2, "width", "92px"], [1, "prioritybox", 3, "ngClass"], [1, "statusbox", 3, "ngClass"], [1, "emlist"], [1, "team-member", "team-listvew"], [1, "team-heading"], ["class", "team-heading list-content", 4, "ngFor", "ngForOf"], [1, "team-heading", "list-content"], [2, "text-align", "center", "padding-top", "20%"], [1, "feedback-list"], [1, "row", "skill-list"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "skill-slider"], ["id", "ex1CurrentSliderValLabel", 1, "skill-value"], ["id", "ex1SliderVal"], ["id", "", 1, "slider", "slider-horizontal"], [1, "slider-track"], [1, "slider-track-low", 2, "left", "0px", "width", "0%"], [1, "slider-selection", 2, "left", "0%", "width", "67%"], [1, "slider-track-high", 2, "right", "0px", "width", "46%"], ["role", "presentation", 1, "tooltip", "tooltip-main", "top", 2, "left", "54%"], [1, "tooltip-arrow"], [1, "tooltip-inner"], ["role", "presentation", 1, "tooltip", "tooltip-min", "top", 2, "display", "none"], ["role", "presentation", 1, "tooltip", "tooltip-max", "top", 2, "display", "none"], ["role", "slider", "aria-valuemin", "0", "aria-valuemax", "100", "aria-valuenow", "0", "tabindex", "0", 1, "slider-handle", "max-slider-handle", "round", "hide", 2, "left", "0%"], ["id", "ex1", "type", "text", "data-slider-min", "0", "data-slider-max", "100", "data-slider-step", "1", "data-slider-value", "100", 2, "display", "none", 3, "value"]],
      template: function ViewEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewEmployeeComponent_Template_a_click_10_listener() {
            return ctx.getProjectList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewEmployeeComponent_Template_a_click_13_listener() {
            return ctx.getTeamList();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2VtcGxveWVlL3ZpZXctZW1wbG95ZWUvdmlldy1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-employee',
          templateUrl: './view-employee.component.html',
          styleUrls: ['./view-employee.component.css']
        }]
      }], function () {
        return [{
          type: _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-employee-employee-module-es5.js.map