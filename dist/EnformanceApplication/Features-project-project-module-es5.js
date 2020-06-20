function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-project-project-module"], {
  /***/
  "./src/app/Features/project/project-list/project-list.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Features/project/project-list/project-list.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProjectListComponent */

  /***/
  function srcAppFeaturesProjectProjectListProjectListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function () {
      return ProjectListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/Features/project/project.service.ts");
    /* harmony import */


    var _Services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../Services/layout.service */
    "./src/app/Services/layout.service.ts");
    /* harmony import */


    var _Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Services/search.service */
    "./src/app/Services/search.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProjectListComponent_li_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 3+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Completed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.projectName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.projectStartDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.projectDueDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.projectPriority);
      }
    }

    var ProjectListComponent = /*#__PURE__*/function () {
      function ProjectListComponent(projectservice, layoutservice, searchservice) {
        _classCallCheck(this, ProjectListComponent);

        this.projectservice = projectservice;
        this.layoutservice = layoutservice;
        this.searchservice = searchservice;
      }

      _createClass(ProjectListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.layoutservice.UpdateLayout(true, true, true, true);
          this.projectservice.GetProjectList().subscribe(function (res) {
            console.log(res);
            _this.projectList = res.dataObj;

            _this.searchservice.SetSource(res.dataObj);

            _this.searchservice.Key = "projectName";
          });
        }
      }]);

      return ProjectListComponent;
    }();

    ProjectListComponent.ɵfac = function ProjectListComponent_Factory(t) {
      return new (t || ProjectListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]));
    };

    ProjectListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectListComponent,
      selectors: [["app-project-list"]],
      decls: 27,
      vars: 1,
      consts: [[1, "main-panel"], [1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "table-full-width"], [1, "checkbox-list"], [1, "table"], [2, "width", "50px"], [2, "width", "280px"], [1, "gray-text", 2, "width", "150px"], [1, "gray-text", 2, "width", "140px"], [2, "width", "104px"], [2, "width", "110px"], [1, "gray-text", 2, "width", "180px"], [4, "ngFor", "ngForOf"], [1, "checkbox"], ["id", "checkbox11", "type", "checkbox"], ["for", "checkbox11"], [2, "width", "292px"], [1, "gray-text", "projectthumb", 2, "width", "140px"], [1, "team-thumb"], [1, "more-thumb"], [2, "width", "92px"], [1, "prioritybox", "completedcolor"], [1, "statusbox", "greencolor"], [1, "gray-text", "act", 2, "width", "180px"], [1, "icon-View"], [1, "icon-edit"], [1, "icon-Delete"]],
      template: function ProjectListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Projects Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Due Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Priorities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProjectListComponent_li_26_Template, 29, 4, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchservice.SearchResults);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2plY3QvcHJvamVjdC1saXN0L3Byb2plY3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project-list',
          templateUrl: './project-list.component.html',
          styleUrls: ['./project-list.component.css']
        }]
      }], function () {
        return [{
          type: _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
        }, {
          type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
        }, {
          type: _Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/project/project-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/Features/project/project-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: ProjectRoutingModule */

  /***/
  function srcAppFeaturesProjectProjectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function () {
      return ProjectRoutingModule;
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


    var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./project-list/project-list.component */
    "./src/app/Features/project/project-list/project-list.component.ts");

    var routes = [{
      path: 'list',
      component: _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectListComponent"]
    }];

    var ProjectRoutingModule = function ProjectRoutingModule() {
      _classCallCheck(this, ProjectRoutingModule);
    };

    ProjectRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectRoutingModule
    });
    ProjectRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectRoutingModule_Factory(t) {
        return new (t || ProjectRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectRoutingModule, [{
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
  "./src/app/Features/project/project.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Features/project/project.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppFeaturesProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProjectComponent = /*#__PURE__*/function () {
      function ProjectComponent() {
        _classCallCheck(this, ProjectComponent);
      }

      _createClass(ProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectComponent;
    }();

    ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
      return new (t || ProjectComponent)();
    };

    ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectComponent,
      selectors: [["app-project"]],
      decls: 2,
      vars: 0,
      template: function ProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "project works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project',
          templateUrl: './project.component.html',
          styleUrls: ['./project.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/project/project.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/Features/project/project.module.ts ***!
    \****************************************************/

  /*! exports provided: ProjectModule */

  /***/
  function srcAppFeaturesProjectProjectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectModule", function () {
      return ProjectModule;
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


    var _project_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./project-routing.module */
    "./src/app/Features/project/project-routing.module.ts");
    /* harmony import */


    var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project.component */
    "./src/app/Features/project/project.component.ts");
    /* harmony import */


    var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./project-list/project-list.component */
    "./src/app/Features/project/project-list/project-list.component.ts");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./project.service */
    "./src/app/Features/project/project.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProjectModule = function ProjectModule() {
      _classCallCheck(this, ProjectModule);
    };

    ProjectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectModule
    });
    ProjectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectModule_Factory(t) {
        return new (t || ProjectModule)();
      },
      providers: [_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _project_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectModule, {
        declarations: [_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"], _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _project_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"], _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _project_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          providers: [_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/project/project.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Features/project/project.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppFeaturesProjectProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
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

    var ProjectService = function ProjectService(httpClient) {
      _classCallCheck(this, ProjectService);

      this.httpClient = httpClient;

      this.GetProjectList = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ProjectList);
      };
    };

    ProjectService.ɵfac = function ProjectService_Factory(t) {
      return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectService,
      factory: ProjectService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-project-project-module-es5.js.map