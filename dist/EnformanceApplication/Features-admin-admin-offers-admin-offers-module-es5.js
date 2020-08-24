function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-admin-admin-offers-admin-offers-module"], {
  /***/
  "./src/app/Features/admin/admin-offers/admin-offers-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Features/admin/admin-offers/admin-offers-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AdminOffersRoutingModule */

  /***/
  function srcAppFeaturesAdminAdminOffersAdminOffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminOffersRoutingModule", function () {
      return AdminOffersRoutingModule;
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


    var _admin_offers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-offers.component */
    "./src/app/Features/admin/admin-offers/admin-offers.component.ts");

    var routes = [{
      path: '',
      component: _admin_offers_component__WEBPACK_IMPORTED_MODULE_2__["AdminOffersComponent"]
    }];

    var AdminOffersRoutingModule = function AdminOffersRoutingModule() {
      _classCallCheck(this, AdminOffersRoutingModule);
    };

    AdminOffersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminOffersRoutingModule
    });
    AdminOffersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminOffersRoutingModule_Factory(t) {
        return new (t || AdminOffersRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminOffersRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminOffersRoutingModule, [{
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
  "./src/app/Features/admin/admin-offers/admin-offers.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Features/admin/admin-offers/admin-offers.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminOffersComponent */

  /***/
  function srcAppFeaturesAdminAdminOffersAdminOffersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminOffersComponent", function () {
      return AdminOffersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminOffersComponent = /*#__PURE__*/function () {
      function AdminOffersComponent() {
        _classCallCheck(this, AdminOffersComponent);
      }

      _createClass(AdminOffersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminOffersComponent;
    }();

    AdminOffersComponent.ɵfac = function AdminOffersComponent_Factory(t) {
      return new (t || AdminOffersComponent)();
    };

    AdminOffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminOffersComponent,
      selectors: [["app-admin-offers"]],
      decls: 2,
      vars: 0,
      template: function AdminOffersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-offers works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2FkbWluLW9mZmVycy9hZG1pbi1vZmZlcnMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminOffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-offers',
          templateUrl: './admin-offers.component.html',
          styleUrls: ['./admin-offers.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/admin/admin-offers/admin-offers.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Features/admin/admin-offers/admin-offers.module.ts ***!
    \********************************************************************/

  /*! exports provided: AdminOffersModule */

  /***/
  function srcAppFeaturesAdminAdminOffersAdminOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminOffersModule", function () {
      return AdminOffersModule;
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


    var _admin_offers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-offers-routing.module */
    "./src/app/Features/admin/admin-offers/admin-offers-routing.module.ts");
    /* harmony import */


    var _admin_offers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-offers.component */
    "./src/app/Features/admin/admin-offers/admin-offers.component.ts");

    var AdminOffersModule = function AdminOffersModule() {
      _classCallCheck(this, AdminOffersModule);
    };

    AdminOffersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminOffersModule
    });
    AdminOffersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminOffersModule_Factory(t) {
        return new (t || AdminOffersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_offers_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminOffersRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminOffersModule, {
        declarations: [_admin_offers_component__WEBPACK_IMPORTED_MODULE_3__["AdminOffersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_offers_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminOffersRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminOffersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_offers_component__WEBPACK_IMPORTED_MODULE_3__["AdminOffersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_offers_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminOffersRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-admin-admin-offers-admin-offers-module-es5.js.map