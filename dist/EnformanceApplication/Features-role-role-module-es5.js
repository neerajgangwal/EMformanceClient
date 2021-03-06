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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_Entities_RolePermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app/Entities/RolePermissions */
    "./src/app/Entities/RolePermissions.ts");
    /* harmony import */


    var _app_Entities_ElementOperation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../app/Entities/ElementOperation */
    "./src/app/Entities/ElementOperation.ts");
    /* harmony import */


    var _app_Entities_RoleElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../app/Entities/RoleElement */
    "./src/app/Entities/RoleElement.ts");
    /* harmony import */


    var _role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../role.service */
    "./src/app/Features/role/role.service.ts");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../Services/layout.service */
    "./src/app/Services/layout.service.ts");
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
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");

    function CreateRoleComponent_div_3_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var department_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", department_r3.departmentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r3.departmentName, "");
      }
    }

    function CreateRoleComponent_div_3_div_21_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var operation_r7 = ctx.$implicit;
        var operationIndex_r8 = ctx.index;

        var element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", operationIndex_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](operation_r7.controls.operationName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", element_r4.controls.elementName.value + operation_r7.controls.operationName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", element_r4.controls.elementName.value + operation_r7.controls.operationName.value);
      }
    }

    function CreateRoleComponent_div_3_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateRoleComponent_div_3_div_21_div_5_Template, 7, 4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r4 = ctx.$implicit;
        var elementIndex_r5 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", elementIndex_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r4.controls.elementName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ElementOperationsList(elementIndex_r5).controls);
      }
    }

    function CreateRoleComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Department Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select Department");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateRoleComponent_div_3_option_9_Template, 2, 2, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-autoComplete", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("completeMethod", function CreateRoleComponent_div_3_Template_p_autoComplete_completeMethod_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.FilterRoles($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Permission");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateRoleComponent_div_3_div_21_Template, 6, 3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateRoleComponent_div_3_Template_input_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateRoleComponent_div_3_Template_input_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.CreateRole(ctx_r13.RoleForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.RoleForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.DepartmentList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestions", ctx_r0.FilteredRoleList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ElementsList.controls);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.RoleForm.valid);
      }
    }

    var CreateRoleComponent = /*#__PURE__*/function () {
      function CreateRoleComponent(roleService, layoutService, fb, messageService, router) {
        _classCallCheck(this, CreateRoleComponent);

        this.roleService = roleService;
        this.layoutService = layoutService;
        this.fb = fb;
        this.messageService = messageService;
        this.router = router;
        this.RoleList = [{
          "designationName": "CEO"
        }, {
          "designationName": "CTO"
        }, {
          "designationName": "COO"
        }, {
          "designationName": "CFO"
        }, {
          "designationName": "President"
        }, {
          "designationName": "VP"
        }, {
          "designationName": "Talent Acquisition Head"
        }, {
          "designationName": "HR Manager"
        }, {
          "designationName": "HR executive"
        }, {
          "designationName": "HR Trainer"
        }, {
          "designationName": "Project Manager"
        }, {
          "designationName": "Team Head"
        }, {
          "designationName": "UI/UX Developer"
        }, {
          "designationName": "UI/UX Designer"
        }, {
          "designationName": "Developer"
        }, {
          "designationName": "QA Engineer"
        }];

        this.InitializeForm = function () {
          this.RoleForm = this.fb.group({
            designationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            departmentId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parentDesignationId: [0],
            designationLevelNo: [0],
            designationElementMappingList: this.Elements
          });
        };

        this.ResetForm = function () {
          this.RoleForm.reset();
          this.InitializeForm();
        };
      }

      _createClass(CreateRoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.layoutService.UpdateLayout(true, true, true, false);
          this.roleService.GetDepartments().subscribe(function (res) {
            _this.DepartmentList = res.dataObj;
            console.log(_this.DepartmentList);

            _this.roleService.getElements().subscribe(function (res) {
              if (res.errorCode == 0) {
                _this.ElementsData = res.dataObj;

                _this.roleService.getOperations().subscribe(function (res2) {
                  if (res2.errorCode == 0) {
                    _this.OperationsData = res2.dataObj;

                    _this.InitializeForm();

                    console.log(_this.RoleForm.value);
                  }

                  ;
                });
              }
            });
          });
        }
      }, {
        key: "ElementOperationsList",
        value: function ElementOperationsList(elementIndex) {
          return this.ElementsList.controls[elementIndex].get('roleElementOprationList');
        }
      }, {
        key: "CreateRole",
        value: function CreateRole(data) {
          var _this2 = this;

          var Roleobj = new _app_Entities_RolePermissions__WEBPACK_IMPORTED_MODULE_2__["RolePermissions"]();
          Roleobj.departmentId = data.departmentId;
          Roleobj.designationName = data.designationName;
          Roleobj.parentDesignationId = data.parentDesignationId;
          Roleobj.designationLevelNo = data.designationLevelNo;
          Roleobj.designationElementMappingList = [];
          data.designationElementMappingList.forEach(function (elementdata) {
            var element = new _app_Entities_RoleElement__WEBPACK_IMPORTED_MODULE_4__["RoleElement"]();
            element.elementId = elementdata.elementId;
            element.roleElementOprationList = [];
            elementdata.roleElementOprationList.forEach(function (operationData) {
              if (operationData.value == true) {
                var opertaion = new _app_Entities_ElementOperation__WEBPACK_IMPORTED_MODULE_3__["ElementOperation"]();
                opertaion.operationId = operationData.operationId;
                element.roleElementOprationList.push(opertaion);
              }
            });
            Roleobj.designationElementMappingList.push(element);
          });
          this.roleService.addRole(Roleobj).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this2.messageService.add({
                severity: 'success',
                summary: 'Role created successfully',
                detail: ''
              });

              _this2.ResetForm();

              _this2.router.navigateByUrl("/role/list");
            } else {
              _this2.messageService.add({
                severity: 'error',
                summary: res.errorMsg,
                detail: ''
              });
            }
          }, function (error) {
            console.log(error);

            _this2.messageService.add({
              severity: 'error',
              summary: "Error with the api , please try again"
            });
          });
          console.log(Roleobj);
        }
      }, {
        key: "FilterRoles",
        value: function FilterRoles(event) {
          var filtered = [];
          var query = event.query;

          for (var i = 0; i < this.RoleList.length; i++) {
            var role = this.RoleList[i];

            if (role.designationName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(role.designationName);
            }
          }

          this.FilteredRoleList = filtered;
        }
      }, {
        key: "CancelButtonClick",
        value: function CancelButtonClick() {
          this.router.navigateByUrl("/role/list");
        }
      }, {
        key: "Elements",
        get: function get() {
          var _this3 = this;

          var elementsArray = this.fb.array([]);
          this.ElementsData.forEach(function (element) {
            elementsArray.push(_this3.fb.group({
              elementId: [element.elementId],
              elementName: [element.elementName],
              roleElementOprationList: _this3.Operations
            }));
          });
          return elementsArray;
        }
      }, {
        key: "Operations",
        get: function get() {
          var _this4 = this;

          var operationsArray = this.fb.array([]);
          this.OperationsData.forEach(function (element) {
            operationsArray.push(_this4.fb.group({
              operationId: [element.operationId],
              operationName: [element.operationName],
              value: [false]
            }));
          });
          return operationsArray;
        }
      }, {
        key: "ElementsList",
        get: function get() {
          return this.RoleForm.get('designationElementMappingList');
        }
      }]);

      return CreateRoleComponent;
    }();

    CreateRoleComponent.ɵfac = function CreateRoleComponent_Factory(t) {
      return new (t || CreateRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
    };

    CreateRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateRoleComponent,
      selectors: [["app-create-role"]],
      decls: 4,
      vars: 1,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], ["class", "form-container", 3, "formGroup", 4, "ngIf"], [1, "form-container", 3, "formGroup"], [1, "form-section"], [1, "col-lg-6"], [1, "form-group"], ["for", ""], ["name", "", "id", "", "formControlName", "departmentId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "designationName", "placeholder", "Enter Role Name", 3, "suggestions", "completeMethod"], [1, "form-container"], [1, "col-lg-12", "permission-heading"], ["formArrayName", "designationElementMappingList", 1, "permission-section"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "pull-right"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "value", "Create Role", 1, "subbtn", "btn", "btn-primary", 3, "disabled", "click"], [3, "value"], [1, "rolesection", 3, "formGroupName"], ["for", "", 1, "pull-left", "headtxt", 2, "width", "30%"], ["class", "material-switch", "formArrayName", "roleElementOprationList", 4, "ngFor", "ngForOf"], ["formArrayName", "roleElementOprationList", 1, "material-switch"], [3, "formGroupName"], ["name", "someSwitchOption001", "formControlName", "value", "type", "checkbox", 3, "id"], [1, "label-default", 3, "for"]],
      template: function CreateRoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateRoleComponent_div_3_Template, 25, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoleForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutoComplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: [".input.ng-tns-c63-1.ng-star-inserted[_ngcontent-%COMP%]\r\n      {\r\n        height: 46px;\r\n        padding: 10px 10px 10px 16px;\r\n        color: #57586E;\r\n        border: 1px solid #607D8B;\r\n        border-radius: 6px;\r\n        font-weight: 500;\r\n        font-size: 16px;\r\n        background-color: #fff;\r\n        box-shadow: none;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvcm9sZS9jcmVhdGUtcm9sZS9jcmVhdGUtcm9sZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztRQUVRLFlBQVk7UUFDWiw0QkFBNEI7UUFDNUIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixzQkFBc0I7UUFFdEIsZ0JBQWdCO01BQ2xCIiwiZmlsZSI6InNyYy9hcHAvRmVhdHVyZXMvcm9sZS9jcmVhdGUtcm9sZS9jcmVhdGUtcm9sZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0Lm5nLXRucy1jNjMtMS5uZy1zdGFyLWluc2VydGVkXHJcbiAgICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTZweDtcclxuICAgICAgICBjb2xvcjogIzU3NTg2RTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjA3RDhCO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcbiJdfQ== */", ""]
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
          type: _role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]
        }, {
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/role/edit-role/edit-role.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Features/role/edit-role/edit-role.component.ts ***!
    \****************************************************************/

  /*! exports provided: EditRoleComponent */

  /***/
  function srcAppFeaturesRoleEditRoleEditRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditRoleComponent", function () {
      return EditRoleComponent;
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


    var _app_Entities_RolePermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app/Entities/RolePermissions */
    "./src/app/Entities/RolePermissions.ts");
    /* harmony import */


    var _app_Entities_ElementOperation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../app/Entities/ElementOperation */
    "./src/app/Entities/ElementOperation.ts");
    /* harmony import */


    var _app_Entities_RoleElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../app/Entities/RoleElement */
    "./src/app/Entities/RoleElement.ts");
    /* harmony import */


    var _role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../role.service */
    "./src/app/Features/role/role.service.ts");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../Services/layout.service */
    "./src/app/Services/layout.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");

    function EditRoleComponent_div_3_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var department_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", department_r3.departmentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r3.departmentName, " ");
      }
    }

    function EditRoleComponent_div_3_div_21_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var operation_r7 = ctx.$implicit;
        var operationIndex_r8 = ctx.index;

        var element_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", operationIndex_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](operation_r7.controls.operationName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", element_r4.controls.elementName.value + operation_r7.controls.operationName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", element_r4.controls.elementName.value + operation_r7.controls.operationName.value);
      }
    }

    function EditRoleComponent_div_3_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditRoleComponent_div_3_div_21_div_5_Template, 7, 4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r4 = ctx.$implicit;
        var elementIndex_r5 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", elementIndex_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r4.controls.elementName.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ElementOperationsList(elementIndex_r5).controls);
      }
    }

    function EditRoleComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Department Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select Department");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditRoleComponent_div_3_option_9_Template, 2, 2, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-autoComplete", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("completeMethod", function EditRoleComponent_div_3_Template_p_autoComplete_completeMethod_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.FilterRoles($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Permission");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditRoleComponent_div_3_div_21_Template, 6, 3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditRoleComponent_div_3_Template_input_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditRoleComponent_div_3_Template_input_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.UpdateRole(ctx_r13.RoleForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.RoleForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.DepartmentList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestions", ctx_r0.FilteredRoleList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ElementsList.controls);
      }
    }

    var EditRoleComponent = /*#__PURE__*/function () {
      function EditRoleComponent(roleService, layoutService, fb, route, messageService, router) {
        _classCallCheck(this, EditRoleComponent);

        this.roleService = roleService;
        this.layoutService = layoutService;
        this.fb = fb;
        this.route = route;
        this.messageService = messageService;
        this.router = router;
        this.RolePermissions = [];
        this.RoleList = [{
          "designationName": "CEO"
        }, {
          "designationName": "CTO"
        }, {
          "designationName": "COO"
        }, {
          "designationName": "CFO"
        }, {
          "designationName": "President"
        }, {
          "designationName": "VP"
        }, {
          "designationName": "Talent Acquisition Head"
        }, {
          "designationName": "HR Manager"
        }, {
          "designationName": "HR executive"
        }, {
          "designationName": "HR Trainer"
        }, {
          "designationName": "Project Manager"
        }, {
          "designationName": "Team Head"
        }, {
          "designationName": "UI/UX Developer"
        }, {
          "designationName": "UI/UX Designer"
        }, {
          "designationName": "Developer"
        }, {
          "designationName": "QA Engineer"
        }];

        this.InitializeForm = function () {
          this.RoleForm = this.fb.group({
            designationName: [this.RoleData.designationName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            departmentId: [this.RoleData.departmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            designationId: [this.RoleData.designationId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parentDesignationId: [0],
            designationLevelNo: [0],
            designationElementMappingList: this.Elements
          });
        };

        this.ResetForm = function () {
          this.RoleForm.reset();
          this.InitializeForm();
        };
      }

      _createClass(EditRoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.queryParamMap.subscribe(function (params) {
            var id = params.get("id");

            _this5.roleService.GetDesignationById(id).subscribe(function (res) {
              console.log(res);
              _this5.RoleData = res.dataObj[0];

              _this5.roleService.GetDesignationElementsById(id).subscribe(function (res) {
                _this5.CreateHashMap(res.dataObj.designationElementMappingList);

                _this5.RolePermissions = res.dataObj.designationElementMappingList;

                _this5.roleService.GetDepartments().subscribe(function (res) {
                  _this5.DepartmentList = res.dataObj;
                  console.log(_this5.DepartmentList);

                  _this5.roleService.getElements().subscribe(function (res) {
                    if (res.errorCode == 0) {
                      _this5.ElementsData = res.dataObj;

                      _this5.roleService.getOperations().subscribe(function (res2) {
                        if (res2.errorCode == 0) {
                          _this5.OperationsData = res2.dataObj;

                          _this5.InitializeForm();

                          console.log(_this5.RoleForm.value);
                        }

                        ;
                      });
                    }
                  });
                });
              });
            });
          });
        }
      }, {
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
          var list = this.PermissionsData.get(elementId);

          if (list) {
            if (list.indexOf(operationId) > -1) {
              return true;
            }

            ;
          }

          return false;
        }
      }, {
        key: "Operations",
        value: function Operations(elementId) {
          var _this6 = this;

          var operationsArray = this.fb.array([]);
          this.OperationsData.forEach(function (element) {
            operationsArray.push(_this6.fb.group({
              operationId: [element.operationId],
              operationName: [element.operationName],
              value: [_this6.CheckPermission(elementId, element.operationId)]
            }));
          });
          return operationsArray;
        }
      }, {
        key: "ElementOperationsList",
        value: function ElementOperationsList(elementIndex) {
          return this.ElementsList.controls[elementIndex].get('roleElementOprationList');
        }
      }, {
        key: "UpdateRole",
        value: function UpdateRole(data) {
          var _this7 = this;

          var Roleobj = new _app_Entities_RolePermissions__WEBPACK_IMPORTED_MODULE_2__["RolePermissions"]();
          Roleobj.departmentId = data.departmentId;
          Roleobj.designationId = data.designationId;
          Roleobj.designationName = data.designationName;
          Roleobj.parentDesignationId = data.parentDesignationId;
          Roleobj.designationLevelNo = data.designationLevelNo;
          Roleobj.designationElementMappingList = [];
          data.designationElementMappingList.forEach(function (elementdata) {
            var element = new _app_Entities_RoleElement__WEBPACK_IMPORTED_MODULE_4__["RoleElement"]();
            element.elementId = elementdata.elementId;
            element.roleElementOprationList = [];
            elementdata.roleElementOprationList.forEach(function (operationData) {
              if (operationData.value == true) {
                var opertaion = new _app_Entities_ElementOperation__WEBPACK_IMPORTED_MODULE_3__["ElementOperation"]();
                opertaion.operationId = operationData.operationId;
                element.roleElementOprationList.push(opertaion);
              }
            });
            Roleobj.designationElementMappingList.push(element);
          });
          this.roleService.UpdateDesignation(Roleobj).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this7.messageService.add({
                severity: 'success',
                summary: 'Role Updated successfully',
                detail: ''
              });

              _this7.router.navigate(['role', 'list']);

              _this7.ResetForm();

              _this7.router.navigateByUrl("/role/list");
            } else {
              _this7.messageService.add({
                severity: 'error',
                summary: res.errorMsg,
                detail: ''
              });
            }
          }, function (error) {
            console.log(error);

            _this7.messageService.add({
              severity: 'error',
              summary: "Error with the api , please try again"
            });
          });
          console.log(Roleobj);
        }
      }, {
        key: "FilterRoles",
        value: function FilterRoles(event) {
          var filtered = [];
          var query = event.query;

          for (var i = 0; i < this.RoleList.length; i++) {
            var role = this.RoleList[i];

            if (role.designationName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(role.designationName);
            }
          }

          this.FilteredRoleList = filtered;
        }
      }, {
        key: "CancelButtonClick",
        value: function CancelButtonClick() {
          this.router.navigateByUrl("/role/list");
        }
      }, {
        key: "Elements",
        get: function get() {
          var _this8 = this;

          var elementsArray = this.fb.array([]);
          this.ElementsData.forEach(function (element) {
            elementsArray.push(_this8.fb.group({
              elementId: [element.elementId],
              elementName: [element.elementName],
              roleElementOprationList: _this8.Operations(element.elementId)
            }));
          });
          return elementsArray;
        }
      }, {
        key: "ElementsList",
        get: function get() {
          return this.RoleForm.get('designationElementMappingList');
        }
      }]);

      return EditRoleComponent;
    }();

    EditRoleComponent.ɵfac = function EditRoleComponent_Factory(t) {
      return new (t || EditRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    EditRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditRoleComponent,
      selectors: [["app-edit-role"]],
      decls: 4,
      vars: 1,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], ["class", "form-container", 3, "formGroup", 4, "ngIf"], [1, "form-container", 3, "formGroup"], [1, "form-section"], [1, "col-lg-6"], [1, "form-group"], ["for", ""], ["formControlName", "departmentId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "designationName", "placeholder", "Enter Role Name", 3, "suggestions", "completeMethod"], [1, "form-container"], [1, "col-lg-12", "permission-heading"], ["formArrayName", "designationElementMappingList", 1, "permission-section"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "pull-right"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", "value", "Update Role", 1, "subbtn", "btn", "btn-primary", 3, "click"], [3, "value"], [1, "rolesection", 3, "formGroupName"], ["for", "", 1, "pull-left", "headtxt", 2, "width", "30%"], ["class", "material-switch", "formArrayName", "roleElementOprationList", 4, "ngFor", "ngForOf"], ["formArrayName", "roleElementOprationList", 1, "material-switch"], [3, "formGroupName"], ["name", "someSwitchOption001", "formControlName", "value", "type", "checkbox", 3, "id"], [1, "label-default", 3, "for"]],
      template: function EditRoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditRoleComponent_div_3_Template, 25, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoleForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutoComplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3JvbGUvZWRpdC1yb2xlL2VkaXQtcm9sZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-role',
          templateUrl: './edit-role.component.html',
          styleUrls: ['./edit-role.component.css']
        }]
      }], function () {
        return [{
          type: _role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]
        }, {
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/role/role-list/role-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Features/role/role-list/role-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: RoleListComponent */

  /***/
  function srcAppFeaturesRoleRoleListRoleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleListComponent", function () {
      return RoleListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../role.service */
    "./src/app/Features/role/role.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Services/user.service */
    "./src/app/Services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RoleListComponent_li_16_i_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleListComponent_li_16_i_5_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var role_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.viewRoleClicked(role_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RoleListComponent_li_16_i_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleListComponent_li_16_i_6_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var role_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.editIconClicked(role_r2.designationId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RoleListComponent_li_16_i_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleListComponent_li_16_i_7_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var role_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.deleteIconClicked(role_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RoleListComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoleListComponent_li_16_i_5_Template, 1, 0, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoleListComponent_li_16_i_6_Template, 1, 0, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoleListComponent_li_16_i_7_Template, 1, 0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2.designationName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Role, ctx_r0.userService.Operations.View));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Role, ctx_r0.userService.Operations.Edit));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.CheckPermission(ctx_r0.userService.Elements.Role, ctx_r0.userService.Operations.Delete));
      }
    }

    function RoleListComponent_li_24_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var operation_r17 = ctx.$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.GetOperationName(operation_r17.operationId), "");
      }
    }

    function RoleListComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoleListComponent_li_24_li_4_Template, 2, 1, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r15 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.GetElementName(element_r15.elementId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r15.roleElementOprationList);
      }
    }

    var RoleListComponent = /*#__PURE__*/function () {
      function RoleListComponent(roleservice, messageService, router, userService) {
        _classCallCheck(this, RoleListComponent);

        this.roleservice = roleservice;
        this.messageService = messageService;
        this.router = router;
        this.userService = userService;

        this.FilterData = function (event) {
          var _this9 = this;

          var temp = this.RoleList;
          var data = event.target.value;
          console.log(data);
          console.log(temp);
          this.SearchResults = temp.filter(function (item) {
            console.log(item);
            console.log("---------");
            console.log(_this9.FilterKey);
            console.log(item[_this9.FilterKey]);
            console.log(item[_this9.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
            return item[_this9.FilterKey].toLowerCase().includes(data.toLowerCase());
          });
        };
      }

      _createClass(RoleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.roleservice.GetDesignations().subscribe(function (res) {
            _this10.RoleList = res.dataObj;
            console.log(_this10.RoleList);
            _this10.SearchResults = _this10.RoleList;
            _this10.FilterKey = "designationName";
            jquery__WEBPACK_IMPORTED_MODULE_1__('.slide-close').on('click', function () {
              jquery__WEBPACK_IMPORTED_MODULE_1__(this).parent().removeClass('open-slide');
              jquery__WEBPACK_IMPORTED_MODULE_1__('body').removeClass('gray-over');
            });
          });
        }
      }, {
        key: "viewRoleClicked",
        value: function viewRoleClicked(data) {
          var _this11 = this;

          this.roleservice.getOperations().subscribe(function (res) {
            if (res.errorCode == 0) {
              _this11.Operations = res.dataObj;

              _this11.roleservice.getElements().subscribe(function (res) {
                if (res.errorCode == 0) {
                  _this11.Elements = res.dataObj;

                  _this11.roleservice.GetDesignationElementsById(data.designationId).subscribe(function (res) {
                    _this11.ViewPermissions = res.dataObj.designationElementMappingList;
                  });
                }
              });
            }
          });
          jquery__WEBPACK_IMPORTED_MODULE_1__('#add-task').addClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_1__('body').addClass('gray-over');
        }
      }, {
        key: "editIconClicked",
        value: function editIconClicked(id) {
          this.router.navigate(['role', 'edit'], {
            queryParams: {
              'id': id
            }
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
        key: "deleteIconClicked",
        value: function deleteIconClicked(data) {
          var _this12 = this;

          console.log(data);
          this.roleservice.deleteDesignation(data.designationId).subscribe(function (res) {
            if (res.errorCode == 0) {
              _this12.RoleList.splice(_this12.RoleList.indexOf(data), 1);

              _this12.SearchResults = _this12.RoleList;

              _this12.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Role deleted'
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
      }]);

      return RoleListComponent;
    }();

    RoleListComponent.ɵfac = function RoleListComponent_Factory(t) {
      return new (t || RoleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    RoleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoleListComponent,
      selectors: [["app-role-list"]],
      decls: 25,
      vars: 2,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "search-form"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "input"], [1, "emlist"], [1, "team-member", "team-listvew"], [1, "role-list-heading"], ["class", "role-list-heading list-content", 4, "ngFor", "ngForOf"], ["id", "add-task", 1, "slide-popup"], [1, "slide-close"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "slide-content"], [4, "ngFor", "ngForOf"], [1, "role-list-heading", "list-content"], ["class", "icon-View", 3, "click", 4, "ngIf"], ["class", "icon-edit", 3, "click", 4, "ngIf"], ["class", "icon-Delete", 3, "click", 4, "ngIf"], [1, "icon-View", 3, "click"], [1, "icon-edit", 3, "click"], [1, "icon-Delete", 3, "click"]],
      template: function RoleListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RoleListComponent_Template_input_input_7_listener($event) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Role Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoleListComponent_li_16_Template, 8, 4, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Role Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RoleListComponent_li_24_Template, 5, 2, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SearchResults);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ViewPermissions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3JvbGUvcm9sZS1saXN0L3JvbGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-role-list',
          templateUrl: './role-list.component.html',
          styleUrls: ['./role-list.component.css']
        }]
      }], function () {
        return [{
          type: _role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
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
    /* harmony import */


    var _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-role/edit-role.component */
    "./src/app/Features/role/edit-role/edit-role.component.ts");
    /* harmony import */


    var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./role-list/role-list.component */
    "./src/app/Features/role/role-list/role-list.component.ts");

    var routes = [{
      path: 'create',
      component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_2__["CreateRoleComponent"],
      data: {
        Title: 'Create Role',
        ShowHeader: true,
        ShowNavBar: true
      }
    }, {
      path: 'edit',
      component: _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_3__["EditRoleComponent"],
      data: {
        Title: 'Edit Role',
        ShowHeader: true,
        ShowNavBar: true
      }
    }, {
      path: 'list',
      component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_4__["RoleListComponent"],
      data: {
        Title: 'Role List',
        ShowHeader: true,
        ShowNavBar: true
      }
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./role-list/role-list.component */
    "./src/app/Features/role/role-list/role-list.component.ts");
    /* harmony import */


    var _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit-role/edit-role.component */
    "./src/app/Features/role/edit-role/edit-role.component.ts");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");

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
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _role_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutoCompleteModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleModule, {
        declarations: [_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"], _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_4__["CreateRoleComponent"], _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_8__["RoleListComponent"], _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_9__["EditRoleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _role_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutoCompleteModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"], _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_4__["CreateRoleComponent"], _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_8__["RoleListComponent"], _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_9__["EditRoleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _role_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutoCompleteModule"]],
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
    /* harmony import */


    var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/user.service */
    "./src/app/Services/user.service.ts");

    var RoleService = function RoleService(httpClient, userService) {
      _classCallCheck(this, RoleService);

      this.httpClient = httpClient;
      this.userService = userService;

      this.addRole = function (data) {
        data.createdBy = this.userService.LoggedInUser.Id;
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].CreateRole, data);
      };

      this.getOperations = function () {
        return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getOperations);
      };

      this.getElements = function () {
        return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getElements);
      };

      this.GetDepartments = function () {
        return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getDepartment);
      };

      this.GetDesignations = function () {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].GetDesignations, {});
      };

      this.deleteDesignation = function (id) {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deleteRole, {
          designationId: id
        });
      };

      this.GetDesignationById = function (id) {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].GetDesignations, {
          designationId: id
        });
      };

      this.GetDesignationElementsById = function (id) {
        return this.httpClient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getDesignationElementMapping + id);
      };

      this.UpdateDesignation = function (data) {
        return this.httpClient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].updateDesignation, data);
      };
    };

    RoleService.ɵfac = function RoleService_Factory(t) {
      return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
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
        }, {
          type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-role-role-module-es5.js.map