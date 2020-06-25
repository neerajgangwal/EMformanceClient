function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-goals-goals-module"], {
  /***/
  "./src/app/Features/goals/goals-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/Features/goals/goals-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: GoalsRoutingModule */

  /***/
  function srcAppFeaturesGoalsGoalsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalsRoutingModule", function () {
      return GoalsRoutingModule;
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


    var _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./my-goal/my-goal.component */
    "./src/app/Features/goals/my-goal/my-goal.component.ts");

    var routes = [{
      path: 'create',
      component: _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_2__["MyGoalComponent"]
    }];

    var GoalsRoutingModule = function GoalsRoutingModule() {
      _classCallCheck(this, GoalsRoutingModule);
    };

    GoalsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GoalsRoutingModule
    });
    GoalsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GoalsRoutingModule_Factory(t) {
        return new (t || GoalsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoalsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsRoutingModule, [{
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
  "./src/app/Features/goals/goals.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Features/goals/goals.component.ts ***!
    \***************************************************/

  /*! exports provided: GoalsComponent */

  /***/
  function srcAppFeaturesGoalsGoalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalsComponent", function () {
      return GoalsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GoalsComponent = /*#__PURE__*/function () {
      function GoalsComponent() {
        _classCallCheck(this, GoalsComponent);
      }

      _createClass(GoalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GoalsComponent;
    }();

    GoalsComponent.ɵfac = function GoalsComponent_Factory(t) {
      return new (t || GoalsComponent)();
    };

    GoalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GoalsComponent,
      selectors: [["app-goals"]],
      decls: 2,
      vars: 0,
      template: function GoalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "goals works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2dvYWxzL2dvYWxzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-goals',
          templateUrl: './goals.component.html',
          styleUrls: ['./goals.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/goals/goals.module.ts":
  /*!************************************************!*\
    !*** ./src/app/Features/goals/goals.module.ts ***!
    \************************************************/

  /*! exports provided: GoalsModule */

  /***/
  function srcAppFeaturesGoalsGoalsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalsModule", function () {
      return GoalsModule;
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


    var _goals_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./goals-routing.module */
    "./src/app/Features/goals/goals-routing.module.ts");
    /* harmony import */


    var _goals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./goals.component */
    "./src/app/Features/goals/goals.component.ts");
    /* harmony import */


    var _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./my-goal/my-goal.component */
    "./src/app/Features/goals/my-goal/my-goal.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _goals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./goals.service */
    "./src/app/Features/goals/goals.service.ts");

    var GoalsModule = function GoalsModule() {
      _classCallCheck(this, GoalsModule);
    };

    GoalsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GoalsModule
    });
    GoalsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GoalsModule_Factory(t) {
        return new (t || GoalsModule)();
      },
      providers: [_goals_service__WEBPACK_IMPORTED_MODULE_6__["GoalsService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _goals_routing_module__WEBPACK_IMPORTED_MODULE_2__["GoalsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoalsModule, {
        declarations: [_goals_component__WEBPACK_IMPORTED_MODULE_3__["GoalsComponent"], _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_4__["MyGoalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _goals_routing_module__WEBPACK_IMPORTED_MODULE_2__["GoalsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_goals_component__WEBPACK_IMPORTED_MODULE_3__["GoalsComponent"], _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_4__["MyGoalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _goals_routing_module__WEBPACK_IMPORTED_MODULE_2__["GoalsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
          providers: [_goals_service__WEBPACK_IMPORTED_MODULE_6__["GoalsService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/goals/goals.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/Features/goals/goals.service.ts ***!
    \*************************************************/

  /*! exports provided: GoalsService */

  /***/
  function srcAppFeaturesGoalsGoalsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalsService", function () {
      return GoalsService;
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

    var GoalsService = function GoalsService(httpclient) {
      _classCallCheck(this, GoalsService);

      this.httpclient = httpclient;

      this.addGoal = function () {
        return this.httpclient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].addGoal, {});
      };
    };

    GoalsService.ɵfac = function GoalsService_Factory(t) {
      return new (t || GoalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    GoalsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GoalsService,
      factory: GoalsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/goals/my-goal/my-goal.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Features/goals/my-goal/my-goal.component.ts ***!
    \*************************************************************/

  /*! exports provided: MyGoalComponent */

  /***/
  function srcAppFeaturesGoalsMyGoalMyGoalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyGoalComponent", function () {
      return MyGoalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyGoalComponent = /*#__PURE__*/function () {
      function MyGoalComponent() {
        _classCallCheck(this, MyGoalComponent);
      }

      _createClass(MyGoalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyGoalComponent;
    }();

    MyGoalComponent.ɵfac = function MyGoalComponent_Factory(t) {
      return new (t || MyGoalComponent)();
    };

    MyGoalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyGoalComponent,
      selectors: [["app-my-goal"]],
      decls: 2,
      vars: 0,
      template: function MyGoalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-goal works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2dvYWxzL215LWdvYWwvbXktZ29hbC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyGoalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-goal',
          templateUrl: './my-goal.component.html',
          styleUrls: ['./my-goal.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-goals-goals-module-es5.js.map