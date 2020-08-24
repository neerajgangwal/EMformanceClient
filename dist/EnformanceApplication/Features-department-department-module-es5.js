function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-department-department-module"], {
  /***/
  "./src/app/Features/department/create-department/create-department.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/Features/department/create-department/create-department.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CreateDepartmentComponent */

  /***/
  function srcAppFeaturesDepartmentCreateDepartmentCreateDepartmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateDepartmentComponent", function () {
      return CreateDepartmentComponent;
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


    var _department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../department.service */
    "./src/app/Features/department/department.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/user.service */
    "./src/app/Services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");

    function CreateDepartmentComponent_div_3_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide department name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateDepartmentComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Department Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-autoComplete", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("completeMethod", function CreateDepartmentComponent_div_3_Template_p_autoComplete_completeMethod_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.FilterDepartments($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateDepartmentComponent_div_3_span_7_Template, 3, 0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDepartmentComponent_div_3_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.CreateButtonClicked(ctx_r6.DepartmentForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create Department ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.DepartmentForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestions", ctx_r0.FilteredDepartmentsList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.DepartmentForm.controls["departmentName"].valid && (ctx_r0.DepartmentForm.controls["departmentName"].dirty || ctx_r0.DepartmentForm.controls["departmentName"].touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.DepartmentForm.valid);
      }
    }

    function CreateDepartmentComponent_li_17_i_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDepartmentComponent_li_17_i_5_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var dept_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.editIconClicked(dept_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateDepartmentComponent_li_17_i_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDepartmentComponent_li_17_i_6_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var dept_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.deleteIconClicked(dept_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateDepartmentComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateDepartmentComponent_li_17_i_5_Template, 1, 0, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateDepartmentComponent_li_17_i_6_Template, 1, 0, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dept_r7 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dept_r7.departmentName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userService.CheckPermission(ctx_r1.userService.Elements.Department, ctx_r1.userService.Operations.Edit));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userService.CheckPermission(ctx_r1.userService.Elements.Department, ctx_r1.userService.Operations.Delete));
      }
    }

    function CreateDepartmentComponent_form_26_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide department name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateDepartmentComponent_form_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Department Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-autoComplete", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("completeMethod", function CreateDepartmentComponent_form_26_Template_p_autoComplete_completeMethod_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.FilterDepartments($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateDepartmentComponent_form_26_span_5_Template, 3, 0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDepartmentComponent_form_26_Template_input_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDepartmentComponent_form_26_Template_input_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.editSaveButtonClicked(ctx_r20.EditForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.EditForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestions", ctx_r2.FilteredDepartmentsList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.EditForm.controls["departmentName"].valid && (ctx_r2.EditForm.controls["departmentName"].dirty || ctx_r2.EditForm.controls["departmentName"].touched));
      }
    }

    var CreateDepartmentComponent = /*#__PURE__*/function () {
      function CreateDepartmentComponent(fb, AddDept, DeleteDept, messageService, userService, router) {
        _classCallCheck(this, CreateDepartmentComponent);

        this.fb = fb;
        this.AddDept = AddDept;
        this.DeleteDept = DeleteDept;
        this.messageService = messageService;
        this.userService = userService;
        this.router = router;
        this.DepartmentsList = [{
          "departmentName": "IT Services"
        }, {
          "departmentName": "Human Resource"
        }, {
          "departmentName": "Finance"
        }, {
          "departmentName": "Production"
        }, {
          "departmentName": "Security"
        }, {
          "departmentName": "Talent Acquisition"
        }, {
          "departmentName": "Marketing"
        }, {
          "departmentName": "Sales"
        }, {
          "departmentName": "Business Development"
        }];

        this.initialiseEditForm = function (data) {
          this.EditForm = this.fb.group({
            departmentId: [data.departmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            departmentName: [data.departmentName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          console.log("departmentid " + data.departmentId);
          console.log("departmentName " + data.departmentName);
        };

        this.ResetForm = function () {
          this.DepartmentForm.reset();
        };

        this.CreateButtonClicked = function (data) {
          var _this = this;

          this.loading = true;
          console.log(data);
          this.AddDept.addDepartment(data).subscribe(function (res) {
            console.log(res);

            if (res.errorCode == 0) {
              _this.DepartmentList.push(res.dataObj);

              _this.SearchResults = _this.DepartmentList;

              _this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Department Created'
              });

              _this.loading = false;

              _this.ResetForm();

              _this.CancelButtonClick();
            } else {
              _this.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (err) {
            console.log(err);

            _this.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: 'Something failed in api'
            });
          });
        };

        this.editIconClicked = function (data) {
          this.initialiseEditForm(data);
          console.log("data " + data);
          jquery__WEBPACK_IMPORTED_MODULE_2__('#edit-team').addClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
        };

        this.editSaveButtonClicked = function (data) {
          var _this2 = this;

          data.activateFlag = 1;
          console.log("save" + data.projectId);
          this.AddDept.updateDepartment(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this2.initialiseEditForm(res.dataObj);

              for (var index = 0; index < _this2.DepartmentList.length; index++) {
                var element = _this2.DepartmentList[index];
                console.log("element.departmentId" + element.departmentId);
                console.log("data.departmentId" + data.departmentId);

                if (element.departmentId == data.departmentId) {
                  _this2.DepartmentList[index] = res.dataObj;
                }
              }

              _this2.SearchResults = _this2.DepartmentList;

              _this2.messageService.add({
                severity: 'success',
                summary: 'department updated',
                detail: 'department edited successfully'
              });

              _this2.ResetForm();

              _this2.CancelButtonClick();
            } else {
              _this2.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (error) {
            console.log(error);

            _this2.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: 'Something went wrong please try after some time'
            });
          });
        };

        this.deleteIconClicked = function (data) {
          var _this3 = this;

          this.DeleteDept.deleteDepartment(data.departmentId).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this3.DepartmentList.splice(_this3.DepartmentList.indexOf(data), 1);

              _this3.SearchResults = _this3.DepartmentList;

              _this3.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Department deleted'
              });
            } else {
              _this3.messageService.add({
                severity: 'error',
                summary: 'Failed',
                detail: res.errorMsg
              });
            }
          }, function (err) {
            console.log(err);

            _this3.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: "Something went wrong"
            });
          });
        };

        this.FilterData = function (event) {
          var _this4 = this;

          console.log(this.DepartmentList);
          var temp = this.DepartmentList;
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

      _createClass(CreateDepartmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.DepartmentForm = this.fb.group({
            departmentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.AddDept.getDepartment().subscribe(function (res) {
            console.log(res);
            _this5.DepartmentList = res.dataObj;
            _this5.SearchResults = res.dataObj;
            _this5.FilterKey = "departmentName";
            jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').on('click', function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().removeClass('open-slide');
              jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
            });
          });
        }
      }, {
        key: "FilterDepartments",
        value: function FilterDepartments(event) {
          var filtered = [];
          var query = event.query;

          for (var i = 0; i < this.DepartmentsList.length; i++) {
            var department = this.DepartmentsList[i];

            if (department.departmentName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(department.departmentName);
            }
          }

          this.FilteredDepartmentsList = filtered;
        }
      }, {
        key: "CancelButtonClick",
        value: function CancelButtonClick() {
          jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').parent().removeClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
        }
      }]);

      return CreateDepartmentComponent;
    }();

    CreateDepartmentComponent.ɵfac = function CreateDepartmentComponent_Factory(t) {
      return new (t || CreateDepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    CreateDepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateDepartmentComponent,
      selectors: [["app-create-department"]],
      decls: 27,
      vars: 3,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], ["class", "form-container", 3, "formGroup", 4, "ngIf"], [1, "emlist"], [1, "row", 2, "margin-left", "0px"], [1, "col-md-4", 2, "margin-top", "10px"], [1, "search-form"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 2, "background-color", "#e9eff3", 3, "input"], [1, "team-member", "team-listvew"], [1, "list-heading"], [1, "dpname"], ["class", "list-heading list-content", 4, "ngFor", "ngForOf"], ["id", "edit-team", 1, "slide-popup"], [1, "slide-close"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "slide-wrapper"], [1, "slide-content"], [3, "formGroup", 4, "ngIf"], [1, "form-container", 3, "formGroup"], [1, "form-section"], [1, "col-lg-6"], [1, "form-group"], ["for", ""], ["formControlName", "departmentName", "placeholder", "Enter Department Name", 3, "suggestions", "completeMethod"], ["class", "error", 4, "ngIf"], [1, "col-lg-3", "pull-left"], [1, "subbtn", "btn", "btn-primary", 3, "disabled", "click"], [1, "error"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], [1, "list-heading", "list-content"], ["class", "icon-edit", 3, "click", 4, "ngIf"], ["class", "icon-Delete", 3, "click", 4, "ngIf"], [1, "icon-edit", 3, "click"], [1, "icon-Delete", 3, "click"], [3, "formGroup"], [2, "display", "inline-block"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "value", "Save Department", 1, "btn", "btn-primary", 3, "click"]],
      template: function CreateDepartmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateDepartmentComponent_div_3_Template, 11, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateDepartmentComponent_Template_input_input_9_listener($event) {
            return ctx.FilterData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateDepartmentComponent_li_17_Template, 7, 3, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p-toast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edit Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CreateDepartmentComponent_form_26_Template, 9, 3, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.CheckPermission(ctx.userService.Elements.Department, ctx.userService.Operations.Create));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SearchResults);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EditForm != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutoComplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2RlcGFydG1lbnQvY3JlYXRlLWRlcGFydG1lbnQvY3JlYXRlLWRlcGFydG1lbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateDepartmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-department',
          templateUrl: './create-department.component.html',
          styleUrls: ['./create-department.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]
        }, {
          type: _department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }, {
          type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/department/department-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Features/department/department-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: DepartmentRoutingModule */

  /***/
  function srcAppFeaturesDepartmentDepartmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentRoutingModule", function () {
      return DepartmentRoutingModule;
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


    var _create_department_create_department_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-department/create-department.component */
    "./src/app/Features/department/create-department/create-department.component.ts");

    var routes = [{
      path: 'create',
      component: _create_department_create_department_component__WEBPACK_IMPORTED_MODULE_2__["CreateDepartmentComponent"],
      data: {
        Title: 'Create Department',
        ShowHeader: true,
        ShowNavBar: true
      }
    }];

    var DepartmentRoutingModule = function DepartmentRoutingModule() {
      _classCallCheck(this, DepartmentRoutingModule);
    };

    DepartmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DepartmentRoutingModule
    });
    DepartmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DepartmentRoutingModule_Factory(t) {
        return new (t || DepartmentRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepartmentRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentRoutingModule, [{
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
  "./src/app/Features/department/department.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Features/department/department.component.ts ***!
    \*************************************************************/

  /*! exports provided: DepartmentComponent */

  /***/
  function srcAppFeaturesDepartmentDepartmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function () {
      return DepartmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DepartmentComponent = /*#__PURE__*/function () {
      function DepartmentComponent() {
        _classCallCheck(this, DepartmentComponent);
      }

      _createClass(DepartmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DepartmentComponent;
    }();

    DepartmentComponent.ɵfac = function DepartmentComponent_Factory(t) {
      return new (t || DepartmentComponent)();
    };

    DepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepartmentComponent,
      selectors: [["app-department"]],
      decls: 2,
      vars: 0,
      template: function DepartmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "department works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-department',
          templateUrl: './department.component.html',
          styleUrls: ['./department.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/department/department.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Features/department/department.module.ts ***!
    \**********************************************************/

  /*! exports provided: DepartmentModule */

  /***/
  function srcAppFeaturesDepartmentDepartmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentModule", function () {
      return DepartmentModule;
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


    var _department_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./department-routing.module */
    "./src/app/Features/department/department-routing.module.ts");
    /* harmony import */


    var _department_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./department.component */
    "./src/app/Features/department/department.component.ts");
    /* harmony import */


    var _create_department_create_department_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-department/create-department.component */
    "./src/app/Features/department/create-department/create-department.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./department.service */
    "./src/app/Features/department/department.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressspinner.js");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");

    var DepartmentModule = function DepartmentModule() {
      _classCallCheck(this, DepartmentModule);
    };

    DepartmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DepartmentModule
    });
    DepartmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DepartmentModule_Factory(t) {
        return new (t || DepartmentModule)();
      },
      providers: [_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _department_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepartmentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__["ProgressSpinnerModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepartmentModule, {
        declarations: [_department_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentComponent"], _create_department_create_department_component__WEBPACK_IMPORTED_MODULE_4__["CreateDepartmentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _department_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepartmentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__["ProgressSpinnerModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_department_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentComponent"], _create_department_create_department_component__WEBPACK_IMPORTED_MODULE_4__["CreateDepartmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _department_routing_module__WEBPACK_IMPORTED_MODULE_2__["DepartmentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["ToastModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__["ProgressSpinnerModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteModule"]],
          providers: [_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/department/department.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Features/department/department.service.ts ***!
    \***********************************************************/

  /*! exports provided: DepartmentService */

  /***/
  function srcAppFeaturesDepartmentDepartmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentService", function () {
      return DepartmentService;
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

    var DepartmentService = function DepartmentService(httpClient, userService) {
      _classCallCheck(this, DepartmentService);

      this.httpClient = httpClient;
      this.userService = userService;

      this.addDepartment = function (data) {
        data.createdBy = this.userService.LoggedInUser.Id;
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].CreateDepartment, data);
      };

      this.getDepartment = function () {
        console.log("Loading/........");
        return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getDepartment);
      };

      this.updateDepartment = function (data) {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].updateDepartment, data);
      };

      this.deleteDepartment = function (id) {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deleteDepartment, {
          departmentId: id
        });
      };
    };

    DepartmentService.ɵfac = function DepartmentService_Factory(t) {
      return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    DepartmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DepartmentService,
      factory: DepartmentService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentService, [{
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

  }
}]);
//# sourceMappingURL=Features-department-department-module-es5.js.map