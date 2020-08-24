function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-task-task-module"], {
  /***/
  "./src/app/Features/task/my-task/my-task.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/Features/task/my-task/my-task.component.ts ***!
    \************************************************************/

  /*! exports provided: MyTaskComponent */

  /***/
  function srcAppFeaturesTaskMyTaskMyTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyTaskComponent", function () {
      return MyTaskComponent;
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


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../task.service */
    "./src/app/Features/task/task.service.ts");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Services/layout.service */
    "./src/app/Services/layout.service.ts");
    /* harmony import */


    var _Services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Services/search.service */
    "./src/app/Services/search.service.ts");
    /* harmony import */


    var _Services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../Services/user.service */
    "./src/app/Services/user.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MyTaskComponent_li_34_i_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTaskComponent_li_34_i_10_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.viewIconClicked(data_r3.taskId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTaskComponent_li_34_i_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTaskComponent_li_34_i_11_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.editIconClicked(data_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTaskComponent_li_34_i_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTaskComponent_li_34_i_12_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.DeleteTeamIcon(data_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTaskComponent_li_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyTaskComponent_li_34_i_10_Template, 1, 0, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyTaskComponent_li_34_i_11_Template, 1, 0, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyTaskComponent_li_34_i_12_Template, 1, 0, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.taskHeading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.taskPriority);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.taskCreatedDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userservice.CheckPermission(ctx_r0.userservice.Elements.Task, ctx_r0.userservice.Operations.View));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userservice.CheckPermission(ctx_r0.userservice.Elements.Task, ctx_r0.userservice.Operations.Edit));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userservice.CheckPermission(ctx_r0.userservice.Elements.Task, ctx_r0.userservice.Operations.Delete));
      }
    }

    function MyTaskComponent_div_38_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", project_r22.projectId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r22.projectName, "");
      }
    }

    function MyTaskComponent_div_38_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide department name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTaskComponent_div_38_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter task heading ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTaskComponent_div_38_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter task description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTaskComponent_div_38_span_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select start date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTaskComponent_div_38_span_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select due date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyTaskComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Task");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyTaskComponent_div_38_option_10_Template, 2, 2, "option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyTaskComponent_div_38_span_11_Template, 3, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Task title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyTaskComponent_div_38_span_16_Template, 3, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Task Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MyTaskComponent_div_38_span_21_Template, 3, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select Priority");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select Priority");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Low");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "upload file");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "start date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, MyTaskComponent_div_38_span_50_Template, 3, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "to");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "due Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, MyTaskComponent_div_38_span_58_Template, 3, 0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTaskComponent_div_38_Template_input_click_59_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.createTaskSave(ctx_r23.createTaskForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTaskComponent_div_38_Template_input_click_60_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.createTaskForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ProjectsList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.createTaskForm.controls["projectId"].valid && (ctx_r1.createTaskForm.controls["projectId"].dirty || ctx_r1.createTaskForm.controls["projectId"].touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.createTaskForm.controls["taskHeading"].valid && (ctx_r1.createTaskForm.controls["taskHeading"].dirty || ctx_r1.createTaskForm.controls["taskHeading"].touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.createTaskForm.controls["taskDescription"].valid && (ctx_r1.createTaskForm.controls["taskDescription"].dirty || ctx_r1.createTaskForm.controls["taskDescription"].touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.createTaskForm.controls["taskStartDate"].valid && (ctx_r1.createTaskForm.controls["taskStartDate"].dirty || ctx_r1.createTaskForm.controls["taskStartDate"].touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.createTaskForm.controls["taskDueDate"].valid && (ctx_r1.createTaskForm.controls["taskDueDate"].dirty || ctx_r1.createTaskForm.controls["taskDueDate"].touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.createTaskForm.valid);
      }
    }

    function MyTaskComponent_div_42_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", project_r27.projectId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r27.projectName, "");
      }
    }

    function MyTaskComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Task");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyTaskComponent_div_42_option_8_Template, 2, 2, "option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Task title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Task Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Priority");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Low");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "upload file");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "to");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "due Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTaskComponent_div_42_Template_input_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTaskComponent_div_42_Template_input_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.editSaveButtonClicked(ctx_r30.EditTaskForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.EditTaskForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ProjectsList);
      }
    }

    var MyTaskComponent = /*#__PURE__*/function () {
      function MyTaskComponent(taskservice, layoutservice, searchservice, userservice, messageService, fb) {
        _classCallCheck(this, MyTaskComponent);

        this.taskservice = taskservice;
        this.layoutservice = layoutservice;
        this.searchservice = searchservice;
        this.userservice = userservice;
        this.messageService = messageService;
        this.fb = fb;
        this.editTask = [];
        this.viewTask = [];

        this.InitilizeEditTaskForm = function (data) {
          this.EditTaskForm = this.fb.group({
            taskId: [data.taskId],
            taskHeading: [data.taskHeading],
            departmentId: [2],
            taskDescription: [data.taskDescription],
            projectId: [data.projectId],
            assignedById: [this.userservice.LoggedInUser.Id],
            assignedToId: [1],
            taskStartDate: [data.taskStartDate],
            taskDueDate: [data.taskDueDate],
            taskAttachment: [data.taskAttachment],
            taskPriority: [data.taskPriority],
            taskStatus: [data.taskStatus]
          });
        };

        this.createTaskSave = function (data) {
          var _this = this;

          console.log(data);
          this.taskservice.CreateTask(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              console.log(res);

              _this.TaskList.push(res.dataObj);

              _this.SearchResults = _this.TaskList;

              _this.messageService.add({
                severity: 'success',
                summary: 'Task Created',
                detail: 'Task created successfully'
              });

              _this.CancelButtonClick();

              _this.ResetForm();
            } else {
              _this.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (error) {
            console.log(error);

            _this.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: 'Something went wrong please try after some time'
            });
          });
        };

        this.viewIconClicked = function (id) {
          var _this2 = this;

          console.log("id" + id);
          jquery__WEBPACK_IMPORTED_MODULE_2__('#task-description').addClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
          this.taskservice.getTaskForView(id).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this2.viewTask = res.dataObj[0];
              console.log(_this2.viewTask);
            } else {}
          });
        };

        this.editSaveButtonClicked = function (data) {
          var _this3 = this;

          data.activateFlag = 1;
          this.taskservice.editTask(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this3.InitilizeEditTaskForm(res.dataObj);

              for (var index = 0; index < _this3.TaskList.length; index++) {
                var element = _this3.TaskList[index];
                console.log("element.taskId" + element.taskId);
                console.log("data.taskId" + data.taskId);

                if (element.taskId == data.taskId) {
                  _this3.TaskList[index] = res.dataObj;
                }
              }

              _this3.SearchResults = _this3.TaskList;

              _this3.messageService.add({
                severity: 'success',
                summary: 'Task updated',
                detail: 'Task created successfully'
              });

              jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').parent().removeClass('open-slide');
              jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');

              _this3.ResetForm();
            } else {
              _this3.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (error) {
            console.log(error);

            _this3.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: 'Something went wrong please try after some time'
            });
          });
        };

        this.FilterData = function (event) {
          var _this4 = this;

          var temp = this.TaskList;
          var data = event.target.value;
          console.log(data);
          console.log(temp);
          this.SearchResults = temp.filter(function (item) {
            console.log(item);
            console.log(item[_this4.FilterKey]);
            console.log(item[_this4.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
            return item[_this4.FilterKey].toLowerCase().includes(data.toLowerCase());
          });
        };
      }

      _createClass(MyTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.searchservice.SetSource(null);
          this.taskservice.getTask().subscribe(function (res) {
            if (res.errorCode == 0) {
              _this5.TaskList = res.dataObj;
              console.log(_this5.TaskList);
              _this5.SearchResults = _this5.TaskList;
              _this5.FilterKey = "taskHeading";
            } else {}
          });
          jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().removeClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
          });
          this.taskservice.Getprojects().subscribe(function (res) {
            if (res.errorCode == 0) {
              _this5.ProjectsList = res.dataObj;
            } else {}
          });
        }
      }, {
        key: "InitialiseCreateTaskForm",
        value: function InitialiseCreateTaskForm() {
          this.createTaskForm = this.fb.group({
            taskHeading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            departmentId: [2],
            taskDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectId: [-1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            assignedById: [this.userservice.LoggedInUser.Id],
            assignedToId: [1],
            taskStartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            taskDueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            taskAttachment: [''],
            taskPriority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            taskStatus: ['']
          });
        }
      }, {
        key: "createTask",
        value: function createTask() {
          this.InitialiseCreateTaskForm();
          jquery__WEBPACK_IMPORTED_MODULE_2__('#add-task').addClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
        }
      }, {
        key: "ResetForm",
        value: function ResetForm() {
          this.InitialiseCreateTaskForm();
        }
      }, {
        key: "DeleteTeamIcon",
        value: function DeleteTeamIcon(data) {
          var _this6 = this;

          this.taskservice.deteleTask(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this6.TaskList.splice(_this6.TaskList.indexOf(data), 1);

              _this6.SearchResults = _this6.TaskList;

              _this6.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Task deleted'
              });
            } else {
              _this6.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (err) {
            console.log(err);

            _this6.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: "Something went wrong"
            });
          });
        }
      }, {
        key: "editIconClicked",
        value: function editIconClicked(data) {
          jquery__WEBPACK_IMPORTED_MODULE_2__('#edit-task').addClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
          console.log("snehan" + data);
          this.InitilizeEditTaskForm(data);
          console.log("edit icon " + data);
        }
      }, {
        key: "CancelButtonClick",
        value: function CancelButtonClick() {
          jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').parent().removeClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
        }
      }]);

      return MyTaskComponent;
    }();

    MyTaskComponent.ɵfac = function MyTaskComponent_Factory(t) {
      return new (t || MyTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    MyTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyTaskComponent,
      selectors: [["app-my-task"]],
      decls: 84,
      vars: 7,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "search-form"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "input"], [1, "col-md-2"], [1, "dropdown"], ["id", "dropdownMenuButton", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["type", "submit", "value", "Create Task", 1, "team", "btn", "btn-primary", 3, "click"], [1, "emlist"], [1, "team-member", "team-listvew"], [1, "mytask-heading"], ["class", "mytask-heading list-content", 4, "ngFor", "ngForOf"], ["id", "add-task", 1, "slide-popup"], [1, "slide-close"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], ["class", "slide-content", 4, "ngIf"], ["id", "edit-task", 1, "slide-popup"], ["id", "task-description", 1, "slide-popup"], [1, "slide-content"], [1, "color-red"], [1, "fa", "fa-clock-o"], [1, "icon-comment"], [1, "icon-attachment"], [1, "attachment"], ["src", "assets/img/img.png", "alt", ""], [1, "comment-item"], [1, "pro-thumb", 2, "background-image", "url('assets/img/face-3.jpg')"], ["href", "#", 1, "reply"], [1, "pro-thumb"], ["type", "text", "placeholder", "Write a comment", 1, "form-control"], [1, "mytask-heading", "list-content"], [1, "prioritybox", "redcolor"], ["class", "icon-View", 3, "click", 4, "ngIf"], ["class", "icon-edit", 3, "click", 4, "ngIf"], ["class", "icon-Delete", 3, "click", 4, "ngIf"], [1, "icon-View", 3, "click"], [1, "icon-edit", 3, "click"], [1, "icon-Delete", 3, "click"], [3, "formGroup"], [1, "form-group"], ["for", ""], ["formControlName", "projectId", 1, "form-control"], ["value", "-1", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error", 4, "ngIf"], ["type", "text", "placeholder", "Enter task title here", "formControlName", "taskHeading", 1, "form-control"], ["Class", "form-control", "rows", "4", "cols", "50", "formControlName", "taskDescription", "placeholder", "Enter Task details here"], ["name", "", "id", "", "formControlName", "taskPriority", 1, "form-control"], ["value", "", "selected", ""], ["value", "Low"], ["value", "Medium"], ["value", "High"], [1, "file-upload"], ["type", "text", "readonly", "", "placeholder", "File details here", "formControlName", "taskAttachment", 1, "form-control"], [1, "input-group-btn"], [1, "file-upload", "btn", "btn-success"], ["id", "upload", 1, "upl"], ["type", "file", "id", "up", 1, "upload", "up"], [1, "col-md-5"], ["type", "date", "formControlName", "taskStartDate", 1, "form-control"], [1, "col-md-2", "text-center"], [1, "to-padding"], ["type", "date", "formControlName", "taskDueDate", 1, "form-control"], ["type", "submit", "value", "CREATE TASK", 1, "team", "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], [3, "value"], [1, "error"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], ["type", "submit", "value", "EDIT TASK", 1, "team", "btn", "btn-primary", 3, "click"]],
      template: function MyTaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MyTaskComponent_Template_input_input_7_listener($event) {
            return ctx.FilterData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Filter by Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "b", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyTaskComponent_Template_input_click_21_listener() {
            return ctx.createTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Task Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MyTaskComponent_li_34_Template, 13, 6, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MyTaskComponent_div_38_Template, 61, 8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MyTaskComponent_div_42_Template, 52, 2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Task Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Attachment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Amanda Kherr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Loream provides you with intelligently crafted filler text with decent and simple UI. The loream text itself is specifically created to be appealing to eyes. Creating a positive placebo for your project. Making your project attractive and irresistible even at production phase. Try loream now!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "reply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SearchResults);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createTaskForm != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EditTaskForm != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewTask["taskHeading"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Due: ", ctx.viewTask["taskDueDate"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewTask["taskDescription"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewTask["taskAttachment"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Rhc2svbXktdGFzay9teS10YXNrLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-task',
          templateUrl: './my-task.component.html',
          styleUrls: ['./my-task.component.css']
        }]
      }], function () {
        return [{
          type: _task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
        }, {
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]
        }, {
          type: _Services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
        }, {
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/task/task-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/Features/task/task-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: TaskRoutingModule */

  /***/
  function srcAppFeaturesTaskTaskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskRoutingModule", function () {
      return TaskRoutingModule;
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


    var _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./my-task/my-task.component */
    "./src/app/Features/task/my-task/my-task.component.ts");
    /* harmony import */


    var _team_task_team_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./team-task/team-task.component */
    "./src/app/Features/task/team-task/team-task.component.ts");

    var routes = [{
      path: 'team-task',
      component: _team_task_team_task_component__WEBPACK_IMPORTED_MODULE_3__["TeamTaskComponent"],
      data: {
        Title: 'Team Task',
        ShowHeader: true,
        ShowNavBar: true
      }
    }, {
      path: 'my-task',
      component: _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_2__["MyTaskComponent"],
      data: {
        Title: 'My Task',
        ShowHeader: true,
        ShowNavBar: true
      }
    }];

    var TaskRoutingModule = function TaskRoutingModule() {
      _classCallCheck(this, TaskRoutingModule);
    };

    TaskRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TaskRoutingModule
    });
    TaskRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TaskRoutingModule_Factory(t) {
        return new (t || TaskRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskRoutingModule, [{
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
  "./src/app/Features/task/task.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/Features/task/task.component.ts ***!
    \*************************************************/

  /*! exports provided: TaskComponent */

  /***/
  function srcAppFeaturesTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TaskComponent = /*#__PURE__*/function () {
      function TaskComponent() {
        _classCallCheck(this, TaskComponent);
      }

      _createClass(TaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TaskComponent;
    }();

    TaskComponent.ɵfac = function TaskComponent_Factory(t) {
      return new (t || TaskComponent)();
    };

    TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskComponent,
      selectors: [["app-task"]],
      decls: 2,
      vars: 0,
      template: function TaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "task works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-task',
          templateUrl: './task.component.html',
          styleUrls: ['./task.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/task/task.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/Features/task/task.module.ts ***!
    \**********************************************/

  /*! exports provided: TaskModule */

  /***/
  function srcAppFeaturesTaskTaskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskModule", function () {
      return TaskModule;
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


    var _task_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./task-routing.module */
    "./src/app/Features/task/task-routing.module.ts");
    /* harmony import */


    var _task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task.component */
    "./src/app/Features/task/task.component.ts");
    /* harmony import */


    var _team_task_team_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./team-task/team-task.component */
    "./src/app/Features/task/team-task/team-task.component.ts");
    /* harmony import */


    var _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-task/my-task.component */
    "./src/app/Features/task/my-task/my-task.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./task.service */
    "./src/app/Features/task/task.service.ts");

    var TaskModule = function TaskModule() {
      _classCallCheck(this, TaskModule);
    };

    TaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TaskModule
    });
    TaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TaskModule_Factory(t) {
        return new (t || TaskModule)();
      },
      providers: [_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _task_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskModule, {
        declarations: [_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], _team_task_team_task_component__WEBPACK_IMPORTED_MODULE_4__["TeamTaskComponent"], _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_5__["MyTaskComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _task_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], _team_task_team_task_component__WEBPACK_IMPORTED_MODULE_4__["TeamTaskComponent"], _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_5__["MyTaskComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _task_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
          providers: [_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/task/task.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Features/task/task.service.ts ***!
    \***********************************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppFeaturesTaskTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
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

    var TaskService = function TaskService(httpclient, userService) {
      _classCallCheck(this, TaskService);

      this.httpclient = httpclient;
      this.userService = userService;

      this.getTask = function () {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getTask, {});
      };

      this.CreateTask = function (data) {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].createTask, data);
      };

      this.deteleTask = function (data) {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deleteTask, data);
      };

      this.Getprojects = function () {
        return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ProjectList + "-1");
      };

      this.editTask = function (data) {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].updateTask, data);
      };

      this.getTaskForView = function (id) {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getTask, {
          "taskId": id
        });
      };
    };

    TaskService.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
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
  "./src/app/Features/task/team-task/team-task.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Features/task/team-task/team-task.component.ts ***!
    \****************************************************************/

  /*! exports provided: TeamTaskComponent */

  /***/
  function srcAppFeaturesTaskTeamTaskTeamTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamTaskComponent", function () {
      return TeamTaskComponent;
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


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../task.service */
    "./src/app/Features/task/task.service.ts");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Services/layout.service */
    "./src/app/Services/layout.service.ts");
    /* harmony import */


    var _Services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Services/search.service */
    "./src/app/Services/search.service.ts");
    /* harmony import */


    var _Services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../Services/user.service */
    "./src/app/Services/user.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TeamTaskComponent_li_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamTaskComponent_li_35_Template_i_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var data_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.viewIconClicked(data_r3.taskId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamTaskComponent_li_35_Template_i_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var data_r3 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.editIconClicked(data_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamTaskComponent_li_35_Template_i_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var data_r3 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.DeleteTeamIcon(data_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.taskHeading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.taskPriority);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.taskCreatedDate);
      }
    }

    function TeamTaskComponent_div_99_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", project_r9.projectId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r9.projectName, "");
      }
    }

    function TeamTaskComponent_div_99_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Task");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeamTaskComponent_div_99_option_10_Template, 2, 2, "option", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Task title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Task Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select Priority");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select Priority");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Low");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "upload file");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "to");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "due Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamTaskComponent_div_99_Template_input_click_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamTaskComponent_div_99_Template_input_click_55_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.createTaskSave(ctx_r12.createTaskForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.createTaskForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ProjectsList);
      }
    }

    function TeamTaskComponent_div_103_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", project_r14.projectId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r14.projectName, "");
      }
    }

    function TeamTaskComponent_div_103_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Task");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeamTaskComponent_div_103_option_8_Template, 2, 2, "option", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Task title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Task Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Priority");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Low");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "upload file");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "to");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "due Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamTaskComponent_div_103_Template_input_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamTaskComponent_div_103_Template_input_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.editSaveButtonClicked(ctx_r17.EditTaskForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.EditTaskForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ProjectsList);
      }
    }

    var TeamTaskComponent = /*#__PURE__*/function () {
      function TeamTaskComponent(taskservice, layoutservice, searchservice, userservice, messageService, fb) {
        _classCallCheck(this, TeamTaskComponent);

        this.taskservice = taskservice;
        this.layoutservice = layoutservice;
        this.searchservice = searchservice;
        this.userservice = userservice;
        this.messageService = messageService;
        this.fb = fb;
        this.editTask = [];
        this.viewTask = [];

        this.InitilizeEditTaskForm = function (data) {
          this.EditTaskForm = this.fb.group({
            taskId: [data.taskId],
            taskHeading: [data.taskHeading],
            departmentId: [2],
            taskDescription: [data.taskDescription],
            projectId: [data.projectId],
            assignedById: [this.userservice.LoggedInUser.Id],
            assignedToId: [1],
            taskStartDate: [data.taskStartDate],
            taskDueDate: [data.taskDueDate],
            taskAttachment: [data.taskAttachment],
            taskPriority: [data.taskPriority],
            taskStatus: [data.taskStatus]
          });
        };

        this.createTaskSave = function (data) {
          var _this7 = this;

          console.log(data);
          this.taskservice.CreateTask(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              console.log(res);

              _this7.TaskList.push(res.dataObj);

              _this7.SearchResults = _this7.TaskList;

              _this7.messageService.add({
                severity: 'success',
                summary: 'Task Created',
                detail: 'Task created successfully'
              });

              _this7.ResetForm();
            } else {
              _this7.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (error) {
            console.log(error);

            _this7.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: 'Something went wrong please try after some time'
            });
          });
        };

        this.viewIconClicked = function (id) {
          var _this8 = this;

          console.log("id" + id);
          jquery__WEBPACK_IMPORTED_MODULE_2__('#task-team-description').addClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
          this.taskservice.getTaskForView(id).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this8.viewTask = res.dataObj[0];
              console.log(_this8.viewTask);
            } else {}
          });
        };

        this.editSaveButtonClicked = function (data) {
          var _this9 = this;

          data.activateFlag = 1;
          this.taskservice.editTask(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this9.InitilizeEditTaskForm(res.dataObj);

              for (var index = 0; index < _this9.TaskList.length; index++) {
                var element = _this9.TaskList[index];
                console.log("element.taskId" + element.taskId);
                console.log("data.taskId" + data.taskId);

                if (element.taskId == data.taskId) {
                  _this9.TaskList[index] = res.dataObj;
                }
              }

              _this9.SearchResults = _this9.TaskList;

              _this9.messageService.add({
                severity: 'success',
                summary: 'Task updated',
                detail: 'Task edited successfully'
              });

              _this9.ResetForm();
            } else {
              _this9.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (error) {
            console.log(error);

            _this9.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: 'Something went wrong please try after some time'
            });
          });
        };

        this.FilterData = function (event) {
          var _this10 = this;

          var temp = this.TaskList;
          var data = event.target.value;
          console.log(data);
          console.log(temp);
          this.SearchResults = temp.filter(function (item) {
            console.log(item);
            console.log(item[_this10.FilterKey]);
            console.log(item[_this10.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
            return item[_this10.FilterKey].toLowerCase().includes(data.toLowerCase());
          });
        };
      }

      _createClass(TeamTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.searchservice.SetSource(null);
          this.taskservice.getTask().subscribe(function (res) {
            if (res.errorCode == 0) {
              _this11.TaskList = res.dataObj;
              console.log(_this11.TaskList);
              _this11.SearchResults = _this11.TaskList;
              _this11.FilterKey = "taskHeading";

              _this11.taskservice.Getprojects().subscribe(function (res) {
                if (res.errorCode == 0) {
                  _this11.ProjectsList = res.dataObj;
                } else {}
              });
            } else {}
          });
          jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().removeClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
          });
        }
      }, {
        key: "InitialiseCreateTaskForm",
        value: function InitialiseCreateTaskForm() {
          this.createTaskForm = this.fb.group({
            taskHeading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            departmentId: 2,
            taskDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectId: [-1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            assignedById: [this.userservice.LoggedInUser.Id],
            assignedToId: 1,
            taskStartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            taskDueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            taskAttachment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            taskPriority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            taskStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "createTask",
        value: function createTask() {
          this.InitialiseCreateTaskForm();
          jquery__WEBPACK_IMPORTED_MODULE_2__('#add-team-task').addClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
        }
      }, {
        key: "ResetForm",
        value: function ResetForm() {
          this.InitialiseCreateTaskForm();
        }
      }, {
        key: "DeleteTeamIcon",
        value: function DeleteTeamIcon(data) {
          var _this12 = this;

          this.taskservice.deteleTask(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this12.TaskList.splice(_this12.TaskList.indexOf(data), 1);

              _this12.SearchResults = _this12.TaskList;

              _this12.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Team deleted'
              });
            } else {
              _this12.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (err) {
            console.log(err);

            _this12.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: "Something went wrong"
            });
          });
        }
      }, {
        key: "editIconClicked",
        value: function editIconClicked(data) {
          console.log("snehan" + data);
          this.InitilizeEditTaskForm(data);
          jquery__WEBPACK_IMPORTED_MODULE_2__('#edit-team-task').addClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
          console.log("edit icon " + data);
        }
      }, {
        key: "CancelButtonClick",
        value: function CancelButtonClick() {
          jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').parent().removeClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
        }
      }]);

      return TeamTaskComponent;
    }();

    TeamTaskComponent.ɵfac = function TeamTaskComponent_Factory(t) {
      return new (t || TeamTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    TeamTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamTaskComponent,
      selectors: [["app-team-task"]],
      decls: 145,
      vars: 6,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "search-form"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "input"], [1, "col-md-2"], [1, "dropdown"], ["id", "dropdownMenuButton", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["type", "submit", "value", "Create Task", 1, "team", "btn", "btn-primary", 3, "click"], [1, "col-md-9"], [1, "emlist"], [1, "team-member", "team-listvew"], [1, "mytask-heading"], ["class", "mytask-heading list-content", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card"], [1, "header"], [1, "title"], [1, "content", "team-list"], [1, "media"], [1, "media-left"], ["href", "#"], ["src", "assets/img/faces/face-1.jpg", "alt", "...", 1, "media-object"], [1, "media-body"], [1, "media-heading"], ["src", "assets/img/faces/face-2.jpg", "alt", "...", 1, "media-object"], ["src", "assets/img/faces/face-3.jpg", "alt", "...", 1, "media-object"], ["src", "assets/img/faces/face-4.jpg", "alt", "...", 1, "media-object"], ["src", "assets/img/faces/face-5.jpg", "alt", "...", 1, "media-object"], ["src", "assets/img/faces/face-6.jpg", "alt", "...", 1, "media-object"], ["id", "add-team-task", 1, "slide-popup"], [1, "slide-close"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], ["class", "slide-content", 4, "ngIf"], ["id", "edit-team-task", 1, "slide-popup"], ["id", "task-team-description", 1, "slide-popup"], [1, "slide-content"], [1, "color-red"], [1, "fa", "fa-clock-o"], [1, "icon-comment"], [1, "icon-attachment"], [1, "attachment"], ["src", "assets/img/img.png", "alt", ""], [1, "comment-item"], [1, "pro-thumb", 2, "background-image", "url('assets/img/face-3.jpg')"], ["href", "#", 1, "reply"], [1, "pro-thumb"], ["type", "text", "placeholder", "Write a comment", 1, "form-control"], [1, "mytask-heading", "list-content"], [1, "prioritybox", "redcolor"], [1, "icon-View", 3, "click"], [1, "icon-edit", 3, "click"], [1, "icon-Delete", 3, "click"], [3, "formGroup"], [1, "form-group"], ["for", ""], ["formControlName", "projectId", 1, "form-control"], ["value", "-1", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Enter task title here", "formControlName", "taskHeading", 1, "form-control"], ["Class", "form-control", "rows", "4", "cols", "50", "formControlName", "taskDescription", "placeholder", "Enter Task details here"], ["name", "", "id", "", "formControlName", "taskPriority", 1, "form-control"], ["value", "", "selected", ""], ["value", "Low"], ["value", "Medium"], ["value", "High"], [1, "file-upload"], ["type", "text", "readonly", "", "placeholder", "File details here", "formControlName", "taskAttachment", 1, "form-control"], [1, "input-group-btn"], [1, "file-upload", "btn", "btn-success"], ["id", "upload", 1, "upl"], ["type", "file", "id", "up", 1, "upload", "up"], [1, "col-md-5"], ["type", "date", "formControlName", "taskStartDate", 1, "form-control"], [1, "col-md-2", "text-center"], [1, "to-padding"], ["type", "date", "formControlName", "taskDueDate", 1, "form-control"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "value", "CREATE TASK", 1, "team", "btn", "btn-primary", 3, "click"], [3, "value"], ["type", "submit", "value", "EDIT TASK", 1, "team", "btn", "btn-primary", 3, "click"]],
      template: function TeamTaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TeamTaskComponent_Template_input_input_7_listener($event) {
            return ctx.FilterData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Filter by Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "b", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamTaskComponent_Template_input_click_21_listener() {
            return ctx.createTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Task Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TeamTaskComponent_li_35_Template, 13, 3, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "My Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Amanda Kherr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Angel Johnson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Babak Kherr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Baha Johnson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Angel Johnson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Babak Kherr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, TeamTaskComponent_div_99_Template, 56, 2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, TeamTaskComponent_div_103_Template, 52, 2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Task Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Create dashboard of ProgressBar Helps you organize, assign, tasks, all from one central platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Attachment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Amanda Kherr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Loream provides you with intelligently crafted filler text with decent and simple UI. The loream text itself is specifically created to be appealing to eyes. Creating a positive placebo for your project. Making your project attractive and irresistible even at production phase. Try loream now!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "reply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SearchResults);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createTaskForm != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EditTaskForm != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Due: ", ctx.viewTask["taskDueDate"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewTask["taskDescription"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewTask["taskAttachment"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Rhc2svdGVhbS10YXNrL3RlYW0tdGFzay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team-task',
          templateUrl: './team-task.component.html',
          styleUrls: ['./team-task.component.css']
        }]
      }], function () {
        return [{
          type: _task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
        }, {
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]
        }, {
          type: _Services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
        }, {
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-task-task-module-es5.js.map