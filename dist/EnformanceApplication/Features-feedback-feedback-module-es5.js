function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-feedback-feedback-module"], {
  /***/
  "./src/app/Features/feedback/feedback-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Features/feedback/feedback-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: FeedbackRoutingModule */

  /***/
  function srcAppFeaturesFeedbackFeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackRoutingModule", function () {
      return FeedbackRoutingModule;
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


    var _my_feedback_my_feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./my-feedback/my-feedback.component */
    "./src/app/Features/feedback/my-feedback/my-feedback.component.ts");
    /* harmony import */


    var _team_feedback_team_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./team-feedback/team-feedback.component */
    "./src/app/Features/feedback/team-feedback/team-feedback.component.ts");

    var routes = [{
      path: 'MyFeedback',
      component: _my_feedback_my_feedback_component__WEBPACK_IMPORTED_MODULE_2__["MyFeedbackComponent"],
      data: {
        Title: 'My Feedback',
        ShowHeader: true,
        ShowNavBar: true
      }
    }, {
      path: 'TeamFeedback',
      component: _team_feedback_team_feedback_component__WEBPACK_IMPORTED_MODULE_3__["TeamFeedbackComponent"],
      data: {
        Title: 'Team Feedback',
        ShowHeader: true,
        ShowNavBar: true
      }
    }];

    var FeedbackRoutingModule = function FeedbackRoutingModule() {
      _classCallCheck(this, FeedbackRoutingModule);
    };

    FeedbackRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FeedbackRoutingModule
    });
    FeedbackRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FeedbackRoutingModule_Factory(t) {
        return new (t || FeedbackRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedbackRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackRoutingModule, [{
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
  "./src/app/Features/feedback/feedback.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Features/feedback/feedback.component.ts ***!
    \*********************************************************/

  /*! exports provided: FeedbackComponent */

  /***/
  function srcAppFeaturesFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
      return FeedbackComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FeedbackComponent = /*#__PURE__*/function () {
      function FeedbackComponent() {
        _classCallCheck(this, FeedbackComponent);
      }

      _createClass(FeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeedbackComponent;
    }();

    FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) {
      return new (t || FeedbackComponent)();
    };

    FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedbackComponent,
      selectors: [["app-feedback"]],
      decls: 2,
      vars: 0,
      template: function FeedbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "feedback works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feedback',
          templateUrl: './feedback.component.html',
          styleUrls: ['./feedback.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/feedback/feedback.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/Features/feedback/feedback.module.ts ***!
    \******************************************************/

  /*! exports provided: FeedbackModule */

  /***/
  function srcAppFeaturesFeedbackFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackModule", function () {
      return FeedbackModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedback-routing.module */
    "./src/app/Features/feedback/feedback-routing.module.ts");
    /* harmony import */


    var _feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./feedback.component */
    "./src/app/Features/feedback/feedback.component.ts");
    /* harmony import */


    var _my_feedback_my_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-feedback/my-feedback.component */
    "./src/app/Features/feedback/my-feedback/my-feedback.component.ts");
    /* harmony import */


    var _team_feedback_team_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./team-feedback/team-feedback.component */
    "./src/app/Features/feedback/team-feedback/team-feedback.component.ts");
    /* harmony import */


    var _Shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../Shared/pipes/pipes.module */
    "./src/app/Shared/pipes/pipes.module.ts");

    var FeedbackModule = function FeedbackModule() {
      _classCallCheck(this, FeedbackModule);
    };

    FeedbackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FeedbackModule
    });
    FeedbackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FeedbackModule_Factory(t) {
        return new (t || FeedbackModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _Shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedbackModule, {
        declarations: [_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"], _my_feedback_my_feedback_component__WEBPACK_IMPORTED_MODULE_5__["MyFeedbackComponent"], _team_feedback_team_feedback_component__WEBPACK_IMPORTED_MODULE_6__["TeamFeedbackComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _Shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"], _my_feedback_my_feedback_component__WEBPACK_IMPORTED_MODULE_5__["MyFeedbackComponent"], _team_feedback_team_feedback_component__WEBPACK_IMPORTED_MODULE_6__["TeamFeedbackComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _Shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/feedback/feedback.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Features/feedback/feedback.service.ts ***!
    \*******************************************************/

  /*! exports provided: FeedbackService */

  /***/
  function srcAppFeaturesFeedbackFeedbackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackService", function () {
      return FeedbackService;
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


    var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Services/user.service */
    "./src/app/Services/user.service.ts");

    var FeedbackService = function FeedbackService(httpclient, userService) {
      _classCallCheck(this, FeedbackService);

      this.httpclient = httpclient;
      this.userService = userService;

      this.createFeedback = function (data) {
        data.createdBy = this.userService.LoggedInUser.Id;
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].addFeedabck, data);
      };

      this.GetProjectList = function (id) {
        return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ProjectList + id);
      };

      this.GetEmployeeData = function () {
        return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].employeeData);
      };

      this.GetRequestedFeedbacks = function (id) {
        return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getRequestedFeedback + id);
      };

      this.GetEmployeesData = function () {
        return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].employeeData);
      };

      this.GetProjectListByid = function (id) {
        return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ProjectList + id);
      };

      this.GetMyFeedback = function (id) {
        return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getMyFeedback + id);
      };

      this.UpdateFeedback = function (data) {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].UpdateFeedback, data);
      };

      this.GetFeedbackUpdated = function (id) {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getFeedbackByParam, {
          feedbackFromId: id
        });
      };

      this.GetFeedbackByParam = function (data) {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getFeedbackByParam, data);
      };

      this.GetTaskByProjectId = function (id) {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getTask, {
          projectId: id
        });
      };

      this.getTasks = function () {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getTask, {});
      };
    };

    FeedbackService.ɵfac = function FeedbackService_Factory(t) {
      return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FeedbackService,
      factory: FeedbackService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/feedback/my-feedback/my-feedback.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Features/feedback/my-feedback/my-feedback.component.ts ***!
    \************************************************************************/

  /*! exports provided: MyFeedbackComponent */

  /***/
  function srcAppFeaturesFeedbackMyFeedbackMyFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyFeedbackComponent", function () {
      return MyFeedbackComponent;
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


    var _feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../feedback.service */
    "./src/app/Features/feedback/feedback.service.ts");
    /* harmony import */


    var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Services/user.service */
    "./src/app/Services/user.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _Shared_pipes_data_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../Shared/pipes/data-filter.pipe */
    "./src/app/Shared/pipes/data-filter.pipe.ts");

    function MyFeedbackComponent_li_18_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFeedbackComponent_li_18_div_16_Template_img_click_6_listener() {
          var param_r7 = ctx.$implicit;
          return param_r7.rating = 1;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFeedbackComponent_li_18_div_16_Template_img_click_9_listener() {
          var param_r7 = ctx.$implicit;
          return param_r7.rating = 2;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFeedbackComponent_li_18_div_16_Template_img_click_12_listener() {
          var param_r7 = ctx.$implicit;
          return param_r7.rating = 3;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFeedbackComponent_li_18_div_16_Template_img_click_15_listener() {
          var param_r7 = ctx.$implicit;
          return param_r7.rating = 4;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "img", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFeedbackComponent_li_18_div_16_Template_img_click_18_listener() {
          var param_r7 = ctx.$implicit;
          return param_r7.rating = 5;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var param_r7 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.GetFeedbackParameterNames(param_r7.paramId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", param_r7.rating != null && param_r7.rating != 1 ? "20%" : "100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", param_r7.rating != null && param_r7.rating != 2 ? "20%" : "100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", param_r7.rating != null && param_r7.rating != 3 ? "20%" : "100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", param_r7.rating != null && param_r7.rating != 4 ? "20%" : "100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", param_r7.rating != null && param_r7.rating != 5 ? "20%" : "100%");
      }
    }

    function MyFeedbackComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyFeedbackComponent_li_18_div_16_Template, 19, 11, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyFeedbackComponent_li_18_Template_textarea_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var feedback_r4 = ctx.$implicit;
          return feedback_r4.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyFeedbackComponent_li_18_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var feedback_r4 = ctx.$implicit;
          return feedback_r4.blindRequest = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Send as anonymous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFeedbackComponent_li_18_Template_input_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var feedback_r4 = ctx.$implicit;
          var feedbackIndex_r5 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.SubmitFeedback(feedback_r4, feedbackIndex_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feedback_r4 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r4.designation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r4.emailId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", feedback_r4.taskId == null ? ctx_r0.getProjectName(feedback_r4.projectId) : ctx_r0.getTaskName(feedback_r4.taskId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", feedback_r4.feedbackParameteres);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", feedback_r4.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", feedback_r4.blindRequest);
      }
    }

    function MyFeedbackComponent_li_20_div_16_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
      }
    }

    function MyFeedbackComponent_li_20_div_16_img_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 54);
      }
    }

    function MyFeedbackComponent_li_20_div_16_img_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
      }
    }

    function MyFeedbackComponent_li_20_div_16_img_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 56);
      }
    }

    function MyFeedbackComponent_li_20_div_16_img_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 57);
      }
    }

    function MyFeedbackComponent_li_20_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyFeedbackComponent_li_20_div_16_img_6_Template, 1, 0, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyFeedbackComponent_li_20_div_16_img_9_Template, 1, 0, "img", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyFeedbackComponent_li_20_div_16_img_12_Template, 1, 0, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyFeedbackComponent_li_20_div_16_img_15_Template, 1, 0, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyFeedbackComponent_li_20_div_16_img_18_Template, 1, 0, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var param_r20 = ctx.$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.GetFeedbackParameterNames(param_r20.paramId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r20.rating == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r20.rating == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r20.rating == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r20.rating == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r20.rating == 5);
      }
    }

    function MyFeedbackComponent_li_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyFeedbackComponent_li_20_div_16_Template, 19, 6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyFeedbackComponent_li_20_Template_textarea_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var feedback_r18 = ctx.$implicit;
          return feedback_r18.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feedback_r18 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r18.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r18.designation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r18.emailId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", feedback_r18.taskId == null ? ctx_r1.getProjectName(feedback_r18.projectId) : ctx_r1.getTaskName(feedback_r18.taskId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", feedback_r18.feedbackParameteres);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", feedback_r18.description);
      }
    }

    function MyFeedbackComponent_li_22_div_16_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
      }
    }

    function MyFeedbackComponent_li_22_div_16_img_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 54);
      }
    }

    function MyFeedbackComponent_li_22_div_16_img_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
      }
    }

    function MyFeedbackComponent_li_22_div_16_img_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 56);
      }
    }

    function MyFeedbackComponent_li_22_div_16_img_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 57);
      }
    }

    function MyFeedbackComponent_li_22_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyFeedbackComponent_li_22_div_16_img_6_Template, 1, 0, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyFeedbackComponent_li_22_div_16_img_9_Template, 1, 0, "img", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyFeedbackComponent_li_22_div_16_img_12_Template, 1, 0, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyFeedbackComponent_li_22_div_16_img_15_Template, 1, 0, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyFeedbackComponent_li_22_div_16_img_18_Template, 1, 0, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var param_r31 = ctx.$implicit;

        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.GetFeedbackParameterNames(param_r31.paramId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r31.rating == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r31.rating == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r31.rating == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r31.rating == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", param_r31.rating == 5);
      }
    }

    function MyFeedbackComponent_li_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyFeedbackComponent_li_22_div_16_Template, 19, 6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyFeedbackComponent_li_22_Template_textarea_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var feedback_r29 = ctx.$implicit;
          return feedback_r29.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feedback_r29 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r29.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r29.designation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r29.emailId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", feedback_r29.taskId == null ? ctx_r2.getProjectName(feedback_r29.projectId) : ctx_r2.getTaskName(feedback_r29.taskId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", feedback_r29.feedbackParameteres);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", feedback_r29.description);
      }
    }

    function MyFeedbackComponent_li_28_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyFeedbackComponent_li_28_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.GetEmployeeNameBasedOnId(data_r40.feedbackFromId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.getDesignationNameForEmployee(data_r40.feedbackFromId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.GetEmployeeEmailBasedOnId(data_r40.feedbackFromId));
      }
    }

    function MyFeedbackComponent_li_28_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Anonymous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyFeedbackComponent_li_28_div_11_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
      }
    }

    function MyFeedbackComponent_li_28_div_11_img_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 54);
      }
    }

    function MyFeedbackComponent_li_28_div_11_img_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
      }
    }

    function MyFeedbackComponent_li_28_div_11_img_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 56);
      }
    }

    function MyFeedbackComponent_li_28_div_11_img_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 57);
      }
    }

    function MyFeedbackComponent_li_28_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyFeedbackComponent_li_28_div_11_img_6_Template, 1, 0, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyFeedbackComponent_li_28_div_11_img_9_Template, 1, 0, "img", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyFeedbackComponent_li_28_div_11_img_12_Template, 1, 0, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyFeedbackComponent_li_28_div_11_img_15_Template, 1, 0, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyFeedbackComponent_li_28_div_11_img_18_Template, 1, 0, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r47 = ctx.$implicit;

        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.GetFeedbackParameterNames(element_r47.paramId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r47.rating == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r47.rating == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r47.rating == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r47.rating == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r47.rating == 5);
      }
    }

    function MyFeedbackComponent_li_28_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyFeedbackComponent_li_28_div_12_Template_textarea_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var data_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return data_r40.feedbackReply = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFeedbackComponent_li_28_div_12_Template_input_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var data_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.SubmitFeedbackReply(data_r40);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r40.feedbackReply);
      }
    }

    function MyFeedbackComponent_li_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyFeedbackComponent_li_28_div_2_Template, 3, 0, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyFeedbackComponent_li_28_div_5_Template, 8, 3, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyFeedbackComponent_li_28_div_6_Template, 3, 0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyFeedbackComponent_li_28_div_11_Template, 19, 6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyFeedbackComponent_li_28_div_12_Template, 3, 1, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r40.blindRequest == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r40.blindRequest == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r40.blindRequest == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r40.feedbackParameteres);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r40.feedbackStatus == 2);
      }
    }

    var MyFeedbackComponent = /*#__PURE__*/function () {
      function MyFeedbackComponent(feedbackService, fb, userService, messageService) {
        _classCallCheck(this, MyFeedbackComponent);

        this.feedbackService = feedbackService;
        this.fb = fb;
        this.userService = userService;
        this.messageService = messageService;
        this.employeesDetails = [];
        this.ParametersList = [];
        this.FeedbackUpdatedList = [];
        this.ProjectList = [];
        this.TasksList = [];

        this.intialiseAddParameter = function () {
          this.ParameterForm = this.fb.group({
            paramId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.ParametersList = [{
            paramId: 1,
            description: 'Team Player'
          }, {
            paramId: 2,
            description: 'Willingness to help other'
          }, {
            paramId: 3,
            description: 'Communications Skills'
          }, {
            paramId: 4,
            description: 'Motivate colleague'
          }, {
            paramId: 5,
            description: 'Leadership qualities'
          }, {
            paramId: 6,
            description: 'Strength'
          }, {
            paramId: 7,
            description: 'Weakness'
          }, {
            paramId: 8,
            description: 'Creativity'
          }];
        };
      }

      _createClass(MyFeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.feedbackService.GetProjectList(-1).subscribe(function (res) {
            _this.ProjectList = res.dataObj;
            console.log('projectList ' + _this.ProjectList);
          });
          this.feedbackService.getTasks().subscribe(function (res) {
            _this.TasksList = res.dataObj;
          });
          this.feedbackService.GetEmployeesData().subscribe(function (res) {
            _this.employeesDetails = res.dataObj;
            console.log('employee list' + _this.employeesDetails);

            _this.feedbackService.GetRequestedFeedbacks(_this.userService.LoggedInUser.Id).subscribe(function (res) {
              if (res.errorCode == 0) {
                if (res.dataObj != null) {
                  _this.FeedbackList = res.dataObj;

                  _this.UpdateFeedbackListWithEmployeeData(_this.FeedbackList);

                  _this.UpdateProjectDetails();
                }
              } else {}
            });

            _this.feedbackService.GetFeedbackUpdated(_this.userService.LoggedInUser.Id).subscribe(function (res) {
              if (res.errorCode == 0) {
                if (res.dataObj != null) {
                  _this.FeedbackUpdatedList = res.dataObj;

                  _this.UpdateFeedbackListWithEmployeeData(_this.FeedbackUpdatedList);

                  _this.UpdateProjectDetails();
                }
              } else {}
            });

            _this.feedbackService.GetMyFeedback(_this.userService.LoggedInUser.Id).subscribe(function (res) {
              if (res.errorCode == 0) {
                if (res.dataObj != null) {
                  _this.MyFeedbackList = res.dataObj;

                  _this.UpdateFeedbackListWithEmployeeData(_this.MyFeedbackList);
                }
              } else {}
            });
          });
          this.intialiseAddParameter();
          this.FeedbackRequestForm = this.fb.group({
            feedbackRequestId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackForId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackFromId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackRequesterId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            taskId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackReply: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackCreatedDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackUpdatedDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            activateFlag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            blindRequest: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackGivenDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackParameteres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "UpdateProjectDetails",
        value: function UpdateProjectDetails() {
          var _this2 = this;

          var _loop = function _loop(index) {
            var element = _this2.FeedbackList[index];

            _this2.feedbackService.GetProjectListByid(element.projectId).subscribe(function (res) {
              _this2.FeedbackList[index].projectName = res.dataObj.projectName ? res.dataObj.projectName : '';
            });
          };

          for (var index = 0; index < this.FeedbackList.length; index++) {
            _loop(index);
          }
        }
      }, {
        key: "UpdateFeedbackListWithEmployeeData",
        value: function UpdateFeedbackListWithEmployeeData(list) {
          for (var index = 0; index < list.length; index++) {
            var element = list[index];
            var employee = this.GetEmployeeDataBasedOnId(element.feedbackForId);
            list[index].emailId = employee ? employee.employee.employeeEmail : '';
            list[index].designation = employee ? employee.designation.designationName : '';
            list[index].name = employee ? employee.employee.employeeFname + ' ' + employee.employee.employeeMname : '';
          }
        }
      }, {
        key: "GetEmployeeDataBasedOnId",
        value: function GetEmployeeDataBasedOnId(id) {
          for (var index = 0; index < this.employeesDetails.length; index++) {
            var element = this.employeesDetails[index];

            if (element.employee.employeeId == id) {
              return element;
            }
          }

          return null;
        }
      }, {
        key: "GetEmployeeNameBasedOnId",
        value: function GetEmployeeNameBasedOnId(id) {
          for (var index = 0; index < this.employeesDetails.length; index++) {
            var element = this.employeesDetails[index];

            if (element.employee.employeeId == id) {
              return element.employee.employeeFname + " " + element.employee.employeeMname;
            }
          }

          return "";
        }
      }, {
        key: "GetRequestedCount",
        value: function GetRequestedCount() {
          if (this.FeedbackList) {
            var data = this.FeedbackList.filter(function (d) {
              return d.feedbackStatus == '1';
            });

            if (data) {
              return data.length;
            }
          }

          return 0;
        }
      }, {
        key: "getProject",
        value: function getProject(id) {
          var _this3 = this;

          this.feedbackService.GetProjectListByid(id).subscribe(function (res) {
            _this3.projectdetails = res.dataObj;
            console.log('test' + _this3.projectdetails);
          });
          return this.projectdetails;
        }
      }, {
        key: "GetFeedbackParameterNames",
        value: function GetFeedbackParameterNames(paramId) {
          for (var index = 0; index < this.ParametersList.length; index++) {
            var element = this.ParametersList[index];

            if (element.paramId == paramId) {
              return element.description;
            }
          }

          return '';
        }
      }, {
        key: "GetIndexInFeedbackList",
        value: function GetIndexInFeedbackList(id) {
          for (var index = 0; index < this.FeedbackList.length; index++) {
            var element = this.FeedbackList[index];

            if (element.feedbackRequestId == id) {
              return index;
            }
          }

          return -1;
        }
      }, {
        key: "SubmitFeedbackReply",
        value: function SubmitFeedbackReply(data) {
          var _this4 = this;

          data.feedbackStatus = 3;
          this.feedbackService.UpdateFeedback(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              var responseObj = res.dataObj;
              responseObj.name = data.name;
              responseObj.designation = data.designation;
              responseObj.emailId = data.emailId;
              _this4.MyFeedbackList = responseObj;

              _this4.messageService.add({
                severity: 'success',
                summary: 'Team Created',
                detail: 'Via MessageService'
              });
            } else {
              _this4.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: res.errorMsg
              });
            }
          }, function (err) {
            _this4.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed please try again'
            });
          });
        }
      }, {
        key: "SubmitFeedback",
        value: function SubmitFeedback(data, index) {
          var _this5 = this;

          data.feedbackStatus = 2;
          this.feedbackService.UpdateFeedback(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              var responseObj = res.dataObj;
              responseObj.name = data.name;
              responseObj.designation = data.designation;
              responseObj.emailId = data.emailId;
              console.log(_this5.GetIndexInFeedbackList(data.feedbackRequestId));

              var dataIndex = _this5.FeedbackList.indexOf(_this5.FeedbackList.filter(function (d) {
                return d.feedbackRequestId == data.feedbackRequestId;
              }));

              console.log(dataIndex);
              _this5.FeedbackList[_this5.GetIndexInFeedbackList(data.feedbackRequestId)] = responseObj;

              _this5.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Feedback submitted successfully'
              });
            } else {
              _this5.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: res.errorMsg
              });
            }
          }, function (err) {
            _this5.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed please try again'
            });
          });
        }
      }, {
        key: "RemoveFromRequestedFeedback",
        value: function RemoveFromRequestedFeedback(feedbackId) {
          var index = this.FeedbackList.findIndex(function (d) {
            return d.feedbackRequestId == feedbackId;
          });

          if (index != -1) {
            this.FeedbackList.splice(index, 1);
          }
        }
      }, {
        key: "getProjectName",
        value: function getProjectName(id) {
          for (var index = 0; index < this.ProjectList.length; index++) {
            var element = this.ProjectList[index];

            if (element.projectId == id) {
              return element.projectName;
            }
          }

          return "";
        }
      }, {
        key: "getTaskName",
        value: function getTaskName(id) {
          for (var index = 0; index < this.TasksList.length; index++) {
            var element = this.TasksList[index];

            if (element.taskId == id) {
              return element.taskHeading;
            }
          }

          return "";
        }
      }, {
        key: "GetEmployeeEmailBasedOnId",
        value: function GetEmployeeEmailBasedOnId(id) {
          for (var index = 0; index < this.employeesDetails.length; index++) {
            var element = this.employeesDetails[index];

            if (element.employee.employeeId == id) {
              return element.employee.employeeEmail;
            }
          }

          return "";
        }
      }, {
        key: "getDesignationNameForEmployee",
        value: function getDesignationNameForEmployee(empId) {
          for (var index = 0; index < this.employeesDetails.length; index++) {
            var element = this.employeesDetails[index];

            if (element.employee.employeeId == empId) {
              return element.designation.designationName;
            }
          }

          return "";
        }
      }]);

      return MyFeedbackComponent;
    }();

    MyFeedbackComponent.ɵfac = function MyFeedbackComponent_Factory(t) {
      return new (t || MyFeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]));
    };

    MyFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyFeedbackComponent,
      selectors: [["app-my-feedback"]],
      decls: 30,
      vars: 17,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "nav", "nav-tabs"], [1, "active"], ["data-toggle", "tab", "href", "#feedback-request"], ["data-toggle", "tab", "href", "#my-feedback"], [1, "tab-content"], ["id", "feedback-request", 1, "tab-pane", "fade", "in", "active"], [1, "table-full-width"], [1, "light-text"], [1, "feedback-list"], [4, "ngFor", "ngForOf"], ["id", "my-feedback", 1, "tab-pane", "fade"], [1, "col-md-3"], [1, "media"], [1, "media-left"], ["href", "#"], ["src", "assets/img/faces/face-3.jpg", "alt", "...", 1, "media-object"], [1, "media-body"], [1, "media-heading"], [1, "gray-text"], ["href", "mailto:angeljohnson@gmail.com"], ["type", "text", "disabled", "", 1, "form-control", 3, "ngModel"], [1, "form-section"], [1, "permission-section", 2, "margin", "10px 0 0 0"], ["class", "smily-section", 4, "ngFor", "ngForOf"], [1, "feedback-area"], ["placeholder", "Write your feedback here", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], [1, "checkbox"], ["id", "checkbox1", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "checkbox1"], ["type", "submit", "value", "Submit", 1, "btn", "btn-normal", 3, "click"], [1, "message-create"], ["aria-hidden", "true", 1, "fa", "fa-comments-o"], [1, "smily-section"], [1, "rolesection"], ["for", "", 1, "pull-left", "headtxtsimily"], [1, "material-switch", "marright"], ["src", "assets/img/Bed.png", 3, "click"], ["src", "assets/img/can-improve.png", 3, "click"], ["src", "assets/img/Good.png", 3, "click"], ["src", "assets/img/very-good.png", 3, "click"], ["src", "assets/img/Excellent.png", 3, "click"], ["placeholder", "Write your feedback here", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["src", "assets/img/Bed.png", 4, "ngIf"], ["src", "assets/img/can-improve.png", 4, "ngIf"], ["src", "assets/img/Good.png", 4, "ngIf"], ["src", "assets/img/very-good.png", 4, "ngIf"], ["src", "assets/img/Excellent.png", 4, "ngIf"], ["src", "assets/img/Bed.png"], ["src", "assets/img/can-improve.png"], ["src", "assets/img/Good.png"], ["src", "assets/img/very-good.png"], ["src", "assets/img/Excellent.png"], ["class", "media-left", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-7"], [1, "permission-section"], ["class", "feedback-area", 4, "ngIf"], ["src", "assets/img/faces/face-1.jpg", "alt", "...", 1, "media-object"], [1, "col-md-4"]],
      template: function MyFeedbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Feedback Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyFeedbackComponent_li_18_Template, 29, 7, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "dataFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MyFeedbackComponent_li_20_Template, 21, 6, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "dataFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MyFeedbackComponent_li_22_Template, 21, 6, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "dataFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MyFeedbackComponent_li_28_Template, 13, 6, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You have ", ctx.GetRequestedCount(), " Feedback Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](19, 5, ctx.FeedbackList, "feedbackStatus", "1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](21, 9, ctx.FeedbackList, "feedbackStatus", "2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](23, 13, ctx.FeedbackList, "feedbackStatus", "3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.MyFeedbackList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_Shared_pipes_data_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["DataFilterPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2ZlZWRiYWNrL215LWZlZWRiYWNrL215LWZlZWRiYWNrLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyFeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-feedback',
          templateUrl: './my-feedback.component.html',
          styleUrls: ['./my-feedback.component.css']
        }]
      }], function () {
        return [{
          type: _feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/feedback/team-feedback/team-feedback.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Features/feedback/team-feedback/team-feedback.component.ts ***!
    \****************************************************************************/

  /*! exports provided: TeamFeedbackComponent */

  /***/
  function srcAppFeaturesFeedbackTeamFeedbackTeamFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamFeedbackComponent", function () {
      return TeamFeedbackComponent;
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


    var _feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../feedback.service */
    "./src/app/Features/feedback/feedback.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Services/user.service */
    "./src/app/Services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TeamFeedbackComponent_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", project_r4.projectId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r4.projectName, " ");
      }
    }

    function TeamFeedbackComponent_div_28_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamFeedbackComponent_div_28_li_4_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var feedbackData_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.SelectedFeedbackFor = feedbackData_r6.value;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feedbackData_r6 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.GetEmployeeNameBasedOnId(feedbackData_r6.key), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getDesignationNameForEmployee(feedbackData_r6.key));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Request from : ", feedbackData_r6.value.length, " Memeber");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Project Name : ", ctx_r5.getProjectName(feedbackData_r6.value[0].projectId), "");
      }
    }

    function TeamFeedbackComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamFeedbackComponent_div_28_li_4_Template, 10, 4, "li", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r1.FeedbackListByParamDictionary));
      }
    }

    function TeamFeedbackComponent_div_29_li_5_p_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feedback_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feedback_r10.description, " ");
      }
    }

    function TeamFeedbackComponent_div_29_li_5_h3_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Feedback pending ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TeamFeedbackComponent_div_29_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TeamFeedbackComponent_div_29_li_5_p_16_Template, 2, 1, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TeamFeedbackComponent_div_29_li_5_h3_17_Template, 2, 0, "h3", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feedback_r10 = ctx.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.GetEmployeeNameBasedOnId(feedback_r10.feedbackFromId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.getDesignationNameForEmployee(feedback_r10.feedbackFromId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.GetEmployeeEmailBasedOnId(feedback_r10.feedbackFromId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", feedback_r10.feedbackStatus == "2" || feedback_r10.feedbackStatus == "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", feedback_r10.feedbackStatus == "1");
      }
    }

    function TeamFeedbackComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamFeedbackComponent_div_29_li_5_Template, 18, 5, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Feedback Received to ", ctx_r2.GetEmployeeNameBasedOnId(ctx_r2.SelectedFeedbackFor[0].feedbackForId), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.SelectedFeedbackFor);
      }
    }

    function TeamFeedbackComponent_form_36_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", project_r20.projectId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r20.projectName, "");
      }
    }

    function TeamFeedbackComponent_form_36_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", task_r21.taskId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r21.taskHeading, "");
      }
    }

    function TeamFeedbackComponent_form_36_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employee_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", employee_r22.employee.employeeId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r22.FullName, "");
      }
    }

    function TeamFeedbackComponent_form_36_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employee_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", employee_r23.employee.employeeId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r23.FullName, "");
      }
    }

    function TeamFeedbackComponent_form_36_option_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var parameter_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", parameter_r24.paramId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", parameter_r24.description, "");
      }
    }

    function TeamFeedbackComponent_form_36_li_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamFeedbackComponent_form_36_li_41_Template_i_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var param_r25 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.RemoveParamFromSelectList(param_r25);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var param_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](param_r25.description);
      }
    }

    function TeamFeedbackComponent_form_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeamFeedbackComponent_form_36_Template_select_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.SelectProjectChanged(ctx_r28.CreateForm.controls["projectId"].value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TeamFeedbackComponent_form_36_option_7_Template, 2, 2, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select Task");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select Task");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeamFeedbackComponent_form_36_option_14_Template, 2, 2, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Feedback For Employee");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select For Employee");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TeamFeedbackComponent_form_36_option_21_Template, 2, 2, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Feedback From Employee");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select From Employee");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TeamFeedbackComponent_form_36_option_28_Template, 2, 2, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select Criteria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Select From Employee");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TeamFeedbackComponent_form_36_option_36_Template, 2, 2, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamFeedbackComponent_form_36_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.addToSelectList(ctx_r30.ParameterForm.controls.paramId.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " ADD ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TeamFeedbackComponent_form_36_li_41_Template, 5, 1, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamFeedbackComponent_form_36_Template_input_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.CreateButtonClicked(ctx_r31.CreateForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamFeedbackComponent_form_36_Template_input_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.CancelButtonClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.CreateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.ProjectList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.TaskList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.EmployeeList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.EmployeeList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.ParameterForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.ParametersList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.SelectedList);
      }
    }

    var TeamFeedbackComponent = /*#__PURE__*/function () {
      function TeamFeedbackComponent(feedbackService, messageService, userservice, fb) {
        _classCallCheck(this, TeamFeedbackComponent);

        this.feedbackService = feedbackService;
        this.messageService = messageService;
        this.userservice = userservice;
        this.fb = fb;
        this.feedbackList = [];
        this.ParametersList = [];
        this.SelectedList = [];
        this.selectedProject = '';
        this.FeedbackListParamsKeys = [];

        this.initialiseCreateForm = function () {
          jquery__WEBPACK_IMPORTED_MODULE_2__('#add-task').addClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
          this.CreateForm = this.fb.group({
            projectId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            taskId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackForId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackFromId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackReply: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackRequesterId: [this.userservice.LoggedInUser.Id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackStatus: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            feedbackParameteres: [this.SelectedList, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            blindRequest: [false]
          });
          this.intialiseAddParameter();
        };

        this.createButtonClicked = function () {
          this.initialiseCreateForm();
        };

        this.SelectProjectChanged = function (id) {
          var _this6 = this;

          this.feedbackService.GetTaskByProjectId(id).subscribe(function (res) {
            _this6.CreateForm.patchValue({
              taskId: ''
            });

            _this6.TaskList = res.dataObj;
            console.log(_this6.TaskList);
          });
        };

        this.intialiseAddParameter = function () {
          this.ParameterForm = this.fb.group({
            paramId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.ParametersList = [{
            paramId: 1,
            description: 'Team Player'
          }, {
            paramId: 2,
            description: 'Willingness to help other'
          }, {
            paramId: 3,
            description: 'Communications Skills'
          }, {
            paramId: 4,
            description: 'Motivate colleague'
          }, {
            paramId: 5,
            description: 'Leadership qualities'
          }, {
            paramId: 6,
            description: 'Strength'
          }, {
            paramId: 7,
            description: 'Weakness'
          }, {
            paramId: 8,
            description: 'Creativity'
          }];
        };

        this.CreateButtonClicked = function (data) {
          var _this7 = this;

          console.log(data);
          this.feedbackService.createFeedback(data).subscribe(function (res) {
            if (res.errorCode == 0) {
              console.log(res);

              _this7.feedbackList.push(res.dataObj);

              _this7.messageService.add({
                severity: 'success',
                summary: 'Feedback request Created',
                detail: 'Feedback request Created successfully'
              });

              _this7.ResetForm();

              _this7.CancelButtonClick();
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
      }

      _createClass(TeamFeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().removeClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
          });
          this.feedbackService.GetProjectList(-1).subscribe(function (res) {
            _this8.ProjectList = res.dataObj;
            console.log('projectList ' + _this8.ProjectList);
          });
          this.feedbackService.GetEmployeeData().subscribe(function (res) {
            console.log('employeeList ' + res.dataObj.employeeFname);
            _this8.EmployeeList = res.dataObj;

            _this8.EmployeeList.forEach(function (element) {
              element.FullName = element.employee.employeeFname + ' ' + element.employee.employeeMname;
            });
          });
          this.feedbackService;
        }
      }, {
        key: "addToSelectList",
        value: function addToSelectList(id) {
          var _this9 = this;

          console.log('id ' + id);

          var _iterator = _createForOfIteratorHelper(this.SelectedList),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var param = _step.value;

              if (param.paramId == id) {
                return;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.ParametersList.forEach(function (element) {
            console.log(element.paramId);

            if (element.paramId == id) {
              _this9.SelectedList.push(element);
            }
          });
        }
      }, {
        key: "ResetForm",
        value: function ResetForm() {
          this.CreateForm.reset;
          this.SelectedList = [];
        }
      }, {
        key: "RemoveParamFromSelectList",
        value: function RemoveParamFromSelectList(element) {
          this.SelectedList.splice(this.SelectedList.indexOf(element), 1);
        }
      }, {
        key: "ProjectFilterChange",
        value: function ProjectFilterChange(id) {
          var _this10 = this;

          console.log("project chage");
          this.feedbackService.GetFeedbackByParam({
            projectId: id
          }).subscribe(function (res) {
            if (res.errorCode == 0) {
              console.log("test");
              _this10.FeedbackListByParamDictionary = _this10.getForRequestSummary(res.dataObj); // this.FeedbackListParams=[];
              // var keys=feedbackListByParamDictionary.keys();
              // for (let index = 0; index < keys; index++) {
              //   const element = array[index];
              // }

              console.log(_this10.FeedbackListByParamDictionary);
            } else {}
          }, function (error) {});
        }
      }, {
        key: "UpdateProjectDetails",
        value: function UpdateProjectDetails(list) {
          for (var index = 0; index < this.ProjectList.length; index++) {
            var element = list[index];
            var project = this.getProject(element.projectId);
            list[index].projectName = project ? project.projectName : '';
          }
        }
      }, {
        key: "UpdateEmployeeData",
        value: function UpdateEmployeeData(list) {
          for (var index = 0; index < list.length; index++) {
            var element = list[index];
            var employee = this.GetEmployeeDataBasedOnId(element.feedbackForId);
            list[index].emailId = employee ? employee.employee.employeeEmail : '';
            list[index].designation = employee ? employee.designation.designationName : '';
            list[index].name = employee ? employee.employee.employeeFname + ' ' + employee.employee.employeeMname : '';
          }
        }
      }, {
        key: "GetEmployeeDataBasedOnId",
        value: function GetEmployeeDataBasedOnId(id) {
          for (var index = 0; index < this.EmployeeList.length; index++) {
            var element = this.EmployeeList[index];

            if (element.employee.employeeId == id) {
              return element;
            }
          }

          return null;
        }
      }, {
        key: "GetEmployeeNameBasedOnId",
        value: function GetEmployeeNameBasedOnId(id) {
          for (var index = 0; index < this.EmployeeList.length; index++) {
            var element = this.EmployeeList[index];

            if (element.employee.employeeId == id) {
              return element.employee.employeeFname + " " + element.employee.employeeMname;
            }
          }

          return "";
        }
      }, {
        key: "GetEmployeeEmailBasedOnId",
        value: function GetEmployeeEmailBasedOnId(id) {
          for (var index = 0; index < this.EmployeeList.length; index++) {
            var element = this.EmployeeList[index];

            if (element.employee.employeeId == id) {
              return element.employee.employeeEmail;
            }
          }

          return "";
        }
      }, {
        key: "getProject",
        value: function getProject(id) {
          for (var index = 0; index < this.ProjectList.length; index++) {
            var element = this.ProjectList[index];

            if (element.projectId == id) {
              return element;
            }
          }

          return null;
        }
      }, {
        key: "getProjectName",
        value: function getProjectName(id) {
          for (var index = 0; index < this.ProjectList.length; index++) {
            var element = this.ProjectList[index];

            if (element.projectId == id) {
              return element.projectName;
            }
          }

          return "";
        }
      }, {
        key: "getDesignationNameForEmployee",
        value: function getDesignationNameForEmployee(empId) {
          for (var index = 0; index < this.EmployeeList.length; index++) {
            var element = this.EmployeeList[index];

            if (element.employee.employeeId == empId) {
              return element.designation.designationName;
            }
          }

          return "";
        }
      }, {
        key: "getForRequestSummary",
        value: function getForRequestSummary(list) {
          var forDictionary = new Map();

          if (list) {
            for (var index = 0; index < list.length; index++) {
              var feedback = list[index];
              var feedbackemployeeList = [];

              if (forDictionary && forDictionary.has(feedback.feedbackForId)) {
                feedbackemployeeList = forDictionary.get(feedback.feedbackForId);
              }

              feedbackemployeeList.push(feedback);
              forDictionary.set(feedback.feedbackForId, feedbackemployeeList);
            }
          }

          return forDictionary;
        }
      }, {
        key: "DateFilterChange",
        value: function DateFilterChange(data) {
          var _this11 = this;

          console.log(data);
          console.log("date chage");
          this.feedbackService.GetFeedbackByParam({
            feedbackCreatedDate: data
          }).subscribe(function (res) {
            if (res.errorCode == 0) {
              console.log("test");
              _this11.FeedbackListByParamDictionary = _this11.getForRequestSummary(res.dataObj);
              console.log(_this11.FeedbackListByParamDictionary);
            } else {}
          }, function (error) {});
        }
      }, {
        key: "CancelButtonClick",
        value: function CancelButtonClick() {
          this.ResetForm();
          jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').parent().removeClass('open-slide');
          jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
        }
      }]);

      return TeamFeedbackComponent;
    }();

    TeamFeedbackComponent.ɵfac = function TeamFeedbackComponent_Factory(t) {
      return new (t || TeamFeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    TeamFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamFeedbackComponent,
      selectors: [["app-team-feedback"]],
      decls: 37,
      vars: 4,
      consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#daebeb"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "col-md-4", "pull-right"], ["type", "submit", "value", "Create Feedback Request", 1, "team", "btn", "btn-primary", "add-feedback", 3, "click"], [1, "form-container"], [1, "form-section"], [1, "col-lg-12", "permission-heading"], [2, "font-size", "20px", "font-weight", "600"], [1, "oradd"], [1, "col-lg-6"], [1, "form-group"], ["for", "", 2, "font-size", "16px"], [1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", 1, "form-control", 3, "change"], ["id", "requested-feedback", "class", "tab-pane fade active in", 4, "ngIf"], [4, "ngIf"], ["id", "add-task", 1, "slide-popup"], [1, "slide-close"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "slide-content"], [3, "formGroup", 4, "ngIf"], [3, "value"], ["id", "requested-feedback", 1, "tab-pane", "fade", "active", "in"], [1, "table-full-width"], [1, "clearfix"], [1, "team-member"], ["class", "feedback-width", 3, "click", 4, "ngFor", "ngForOf"], [1, "feedback-width", 3, "click"], [1, "team-thumb"], ["href", "#"], [1, "header"], [1, "title"], [1, "feedback-list"], [4, "ngFor", "ngForOf"], [1, "media"], [1, "media-left"], ["src", "assets/img/faces/face-1.jpg", "alt", "...", 1, "media-object"], [1, "media-body"], [1, "col-md-4"], [1, "media-heading"], [1, "gray-text"], ["href", "mailto:angeljohnson@gmail.com"], [1, "col-md-7"], [3, "formGroup"], ["for", ""], ["name", "", "id", "", "formControlName", "projectId", 1, "form-control", 3, "change"], ["name", "", "id", "", "formControlName", "taskId", 1, "form-control"], ["name", "", "id", "", "formControlName", "feedbackForId", 1, "form-control"], ["name", "", "id", "", "formControlName", "feedbackFromId", 1, "form-control"], [1, "selectwith-button", "removepad"], [1, "form-group", 3, "formGroup"], ["name", "", "id", "", "formControlName", "paramId", 1, "form-control"], [1, "btn", "btn-primary", 3, "click"], [1, "selected-user"], ["type", "submit", "value", "Create Feedback Request", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], [1, "user-thumb"], [1, "fa", "fa-times", 3, "click"]],
      template: function TeamFeedbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamFeedbackComponent_Template_input_click_6_listener() {
            return ctx.createButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " To see the project wise feedback select a project or simply select a date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeamFeedbackComponent_Template_select_change_17_listener($event) {
            return ctx.ProjectFilterChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TeamFeedbackComponent_option_20_Template, 2, 2, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeamFeedbackComponent_Template_input_change_27_listener($event) {
            return ctx.DateFilterChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TeamFeedbackComponent_div_28_Template, 6, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TeamFeedbackComponent_div_29_Template, 6, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Create Feedback Request");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TeamFeedbackComponent_form_36_Template, 45, 8, "form", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ProjectList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.FeedbackListByParamDictionary);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SelectedFeedbackFor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CreateForm != null);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2ZlZWRiYWNrL3RlYW0tZmVlZGJhY2svdGVhbS1mZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamFeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team-feedback',
          templateUrl: './team-feedback.component.html',
          styleUrls: ['./team-feedback.component.css']
        }]
      }], function () {
        return [{
          type: _feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }, {
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-feedback-feedback-module-es5.js.map