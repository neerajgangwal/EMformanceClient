function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-admin-admin-subscription-admin-subscription-module"], {
  /***/
  "./src/app/Features/admin/admin-subscription/admin-subscription-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/Features/admin/admin-subscription/admin-subscription-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: AdminSubscriptionRoutingModule */

  /***/
  function srcAppFeaturesAdminAdminSubscriptionAdminSubscriptionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSubscriptionRoutingModule", function () {
      return AdminSubscriptionRoutingModule;
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


    var _admin_subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-subscription.component */
    "./src/app/Features/admin/admin-subscription/admin-subscription.component.ts");

    var routes = [{
      path: '',
      component: _admin_subscription_component__WEBPACK_IMPORTED_MODULE_2__["AdminSubscriptionComponent"]
    }];

    var AdminSubscriptionRoutingModule = function AdminSubscriptionRoutingModule() {
      _classCallCheck(this, AdminSubscriptionRoutingModule);
    };

    AdminSubscriptionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminSubscriptionRoutingModule
    });
    AdminSubscriptionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminSubscriptionRoutingModule_Factory(t) {
        return new (t || AdminSubscriptionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminSubscriptionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSubscriptionRoutingModule, [{
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
  "./src/app/Features/admin/admin-subscription/admin-subscription.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/Features/admin/admin-subscription/admin-subscription.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AdminSubscriptionComponent */

  /***/
  function srcAppFeaturesAdminAdminSubscriptionAdminSubscriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSubscriptionComponent", function () {
      return AdminSubscriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminSubscriptionComponent = /*#__PURE__*/function () {
      function AdminSubscriptionComponent() {
        _classCallCheck(this, AdminSubscriptionComponent);
      }

      _createClass(AdminSubscriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminSubscriptionComponent;
    }();

    AdminSubscriptionComponent.ɵfac = function AdminSubscriptionComponent_Factory(t) {
      return new (t || AdminSubscriptionComponent)();
    };

    AdminSubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminSubscriptionComponent,
      selectors: [["app-admin-subscription"]],
      decls: 2,
      vars: 0,
      template: function AdminSubscriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-subscription works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2FkbWluLXN1YnNjcmlwdGlvbi9hZG1pbi1zdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSubscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-subscription',
          templateUrl: './admin-subscription.component.html',
          styleUrls: ['./admin-subscription.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/admin/admin-subscription/admin-subscription.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/Features/admin/admin-subscription/admin-subscription.module.ts ***!
    \********************************************************************************/

  /*! exports provided: AdminSubscriptionModule */

  /***/
  function srcAppFeaturesAdminAdminSubscriptionAdminSubscriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSubscriptionModule", function () {
      return AdminSubscriptionModule;
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


    var _admin_subscription_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-subscription-routing.module */
    "./src/app/Features/admin/admin-subscription/admin-subscription-routing.module.ts");
    /* harmony import */


    var _admin_subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-subscription.component */
    "./src/app/Features/admin/admin-subscription/admin-subscription.component.ts");

    var AdminSubscriptionModule = function AdminSubscriptionModule() {
      _classCallCheck(this, AdminSubscriptionModule);
    };

    AdminSubscriptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminSubscriptionModule
    });
    AdminSubscriptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminSubscriptionModule_Factory(t) {
        return new (t || AdminSubscriptionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_subscription_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminSubscriptionRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminSubscriptionModule, {
        declarations: [_admin_subscription_component__WEBPACK_IMPORTED_MODULE_3__["AdminSubscriptionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_subscription_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminSubscriptionRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSubscriptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_subscription_component__WEBPACK_IMPORTED_MODULE_3__["AdminSubscriptionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_subscription_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminSubscriptionRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-admin-admin-subscription-admin-subscription-module-es5.js.map