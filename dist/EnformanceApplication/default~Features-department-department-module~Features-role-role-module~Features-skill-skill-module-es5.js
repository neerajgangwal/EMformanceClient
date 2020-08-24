function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Features-department-department-module~Features-role-role-module~Features-skill-skill-module"], {
  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js ***!
    \****************************************************************************/

  /*! exports provided: AUTOCOMPLETE_VALUE_ACCESSOR, AutoComplete, AutoCompleteModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengAutocompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_VALUE_ACCESSOR", function () {
      return AUTOCOMPLETE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoComplete", function () {
      return AutoComplete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteModule", function () {
      return AutoCompleteModule;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/utils */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["in"];
    var _c1 = ["multiIn"];
    var _c2 = ["multiContainer"];
    var _c3 = ["ddBtn"];

    function AutoComplete_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_input_1_Template_input_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onInputClick($event);
        })("input", function AutoComplete_input_1_Template_input_input_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onInput($event);
        })("keydown", function AutoComplete_input_1_Template_input_keydown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onKeydown($event);
        })("keyup", function AutoComplete_input_1_Template_input_keyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onKeyup($event);
        })("focus", function AutoComplete_input_1_Template_input_focus_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onInputFocus($event);
        })("blur", function AutoComplete_input_1_Template_input_blur_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onInputBlur($event);
        })("change", function AutoComplete_input_1_Template_input_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onInputChange($event);
        })("paste", function AutoComplete_input_1_Template_input_paste_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onInputPaste($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.inputStyleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.inputStyle)("autocomplete", ctx_r0.autocomplete)("ngClass", "ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input")("value", ctx_r0.inputFieldValue)("readonly", ctx_r0.readonly)("disabled", ctx_r0.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx_r0.type)("id", ctx_r0.inputId)("required", ctx_r0.required)("name", ctx_r0.name)("aria-controls", ctx_r0.listId)("aria-expanded", ctx_r0.overlayVisible)("aria-activedescendant", "p-highlighted-option")("autofocus", ctx_r0.autofocus)("placeholder", ctx_r0.placeholder)("size", ctx_r0.size)("maxlength", ctx_r0.maxlength)("tabindex", ctx_r0.tabindex)("aria-label", ctx_r0.ariaLabel)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-required", ctx_r0.required);
      }
    }

    function AutoComplete_ul_2_li_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ul_2_li_2_span_2_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.removeItem(_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AutoComplete_ul_2_li_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var val_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.resolveFieldData(val_r18));
      }
    }

    function AutoComplete_ul_2_li_2_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c4 = function _c4(a0) {
      return {
        $implicit: a0
      };
    };

    function AutoComplete_ul_2_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_2_li_2_span_2_Template, 1, 0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_ul_2_li_2_span_3_Template, 2, 1, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_ul_2_li_2_ng_container_4_Template, 1, 0, "ng-container", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var val_r18 = ctx.$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.selectedItemTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c4, val_r18));
      }
    }

    var _c5 = function _c5(a0, a1) {
      return {
        "ui-state-disabled": a0,
        "ui-state-focus": a1
      };
    };

    function AutoComplete_ul_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ul_2_Template_ul_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          return _r17.focus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_2_li_2_Template, 5, 6, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutoComplete_ul_2_Template_input_input_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.onInput($event);
        })("click", function AutoComplete_ul_2_Template_input_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.onInputClick($event);
        })("keydown", function AutoComplete_ul_2_Template_input_keydown_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.onKeydown($event);
        })("keyup", function AutoComplete_ul_2_Template_input_keyup_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.onKeyup($event);
        })("focus", function AutoComplete_ul_2_Template_input_focus_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.onInputFocus($event);
        })("blur", function AutoComplete_ul_2_Template_input_blur_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.onInputBlur($event);
        })("change", function AutoComplete_ul_2_Template_input_change_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.onInputChange($event);
        })("paste", function AutoComplete_ul_2_Template_input_paste_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.onInputPaste($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c5, ctx_r1.disabled, ctx_r1.focus));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.inputStyleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("autocomplete", ctx_r1.autocomplete)("ngStyle", ctx_r1.inputStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx_r1.type)("id", ctx_r1.inputId)("placeholder", ctx_r1.value && ctx_r1.value.length ? null : ctx_r1.placeholder)("tabindex", ctx_r1.tabindex)("maxlength", ctx_r1.maxlength)("autofocus", ctx_r1.autofocus)("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-required", ctx_r1.required)("aria-controls", ctx_r1.listId)("aria-expanded", ctx_r1.overlayVisible)("aria-activedescendant", "p-highlighted-option");
      }
    }

    function AutoComplete_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
      }
    }

    function AutoComplete_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_button_4_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.handleDropdownClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.dropdownIcon)("disabled", ctx_r3.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r3.tabindex);
      }
    }

    function AutoComplete_div_5_li_3_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.resolveFieldData(option_r42));
      }
    }

    function AutoComplete_div_5_li_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c6 = function _c6(a1) {
      return {
        "ui-autocomplete-list-item ui-corner-all": true,
        "ui-state-highlight": a1
      };
    };

    var _c7 = function _c7(a0, a1) {
      return {
        $implicit: a0,
        index: a1
      };
    };

    function AutoComplete_div_5_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AutoComplete_div_5_li_3_Template_li_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var option_r42 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r47.highlightOption = option_r42;
        })("mouseleave", function AutoComplete_div_5_li_3_Template_li_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r49.highlightOption = null;
        })("click", function AutoComplete_div_5_li_3_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var option_r42 = ctx.$implicit;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r50.selectItem(option_r42);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_5_li_3_span_1_Template, 2, 1, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_div_5_li_3_ng_container_2_Template, 1, 0, "ng-container", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r42 = ctx.$implicit;
        var idx_r43 = ctx.index;

        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c6, ctx_r40.highlightOption == option_r42))("id", ctx_r40.highlightOption == option_r42 ? "p-highlighted-option" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r40.itemTemplate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r40.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c7, option_r42, idx_r43));
      }
    }

    function AutoComplete_div_5_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.emptyMessage);
      }
    }

    var _c8 = function _c8() {
      return ["ui-autocomplete-panel ui-widget ui-widget-content ui-corner-all ui-shadow"];
    };

    var _c9 = function _c9(a0, a1) {
      return {
        showTransitionParams: a0,
        hideTransitionParams: a1
      };
    };

    var _c10 = function _c10(a1) {
      return {
        value: "visible",
        params: a1
      };
    };

    function AutoComplete_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@overlayAnimation.start", function AutoComplete_div_5_Template_div_animation_overlayAnimation_start_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.onOverlayAnimationStart($event);
        })("@overlayAnimation.done", function AutoComplete_div_5_Template_div_animation_overlayAnimation_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.onOverlayAnimationDone($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_div_5_li_3_Template, 3, 10, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_div_5_li_4_Template, 2, 1, "li", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.panelStyleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r4.scrollHeight);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c8))("ngStyle", ctx_r4.panelStyle)("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c9, ctx_r4.showTransitionOptions, ctx_r4.hideTransitionOptions)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r4.listId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.suggestions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.noResults && ctx_r4.emptyMessage);
      }
    }

    var _c11 = function _c11(a1, a2) {
      return {
        "ui-autocomplete ui-widget": true,
        "ui-autocomplete-dd": a1,
        "ui-autocomplete-multiple": a2
      };
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var AUTOCOMPLETE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return AutoComplete;
      }),
      multi: true
    };

    var AutoComplete = /*#__PURE__*/function () {
      function AutoComplete(el, renderer, cd, differs) {
        _classCallCheck(this, AutoComplete);

        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.differs = differs;
        this.minLength = 1;
        this.delay = 300;
        this.type = 'text';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.dropdownIcon = "pi pi-caret-down";
        this.unique = true;
        this.completeOnFocus = false;
        this.completeMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDropdownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollHeight = '200px';
        this.dropdownMode = 'blank';
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.autocomplete = 'off';

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.overlayVisible = false;
        this.focus = false;
        this.inputFieldValue = null;
        this.differ = differs.find([]).create(null);
        this.listId = Object(primeng_utils__WEBPACK_IMPORTED_MODULE_7__["UniqueComponentId"])() + '_list';
      }

      _createClass(AutoComplete, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var _this = this;

          //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
          if (this.suggestionsUpdated && this.overlay && this.overlay.offsetParent) {
            setTimeout(function () {
              if (_this.overlay) {
                _this.alignOverlay();
              }
            }, 1);
            this.suggestionsUpdated = false;
          }

          if (this.highlightOptionChanged) {
            setTimeout(function () {
              if (_this.overlay) {
                var listItem = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(_this.overlay, 'li.ui-state-highlight');

                if (listItem) {
                  primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].scrollInView(_this.overlay, listItem);
                }
              }
            }, 1);
            this.highlightOptionChanged = false;
          }
        }
      }, {
        key: "handleSuggestionsChange",
        value: function handleSuggestionsChange() {
          if (this._suggestions != null && this.loading) {
            this.highlightOption = null;

            if (this._suggestions.length) {
              this.noResults = false;
              this.show();
              this.suggestionsUpdated = true;

              if (this.autoHighlight) {
                this.highlightOption = this._suggestions[0];
              }
            } else {
              this.noResults = true;

              if (this.emptyMessage) {
                this.show();
                this.suggestionsUpdated = true;
              } else {
                this.hide();
              }
            }

            this.loading = false;
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this2 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'item':
                _this2.itemTemplate = item.template;
                break;

              case 'selectedItem':
                _this2.selectedItemTemplate = item.template;
                break;

              default:
                _this2.itemTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
          this.filled = this.value && this.value != '';
          this.updateInputField();
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onModelChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onModelTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(val) {
          this.disabled = val;
        }
      }, {
        key: "onInput",
        value: function onInput(event) {
          var _this3 = this;

          // When an input element with a placeholder is clicked, the onInput event is invoked in IE.
          if (!this.inputKeyDown && primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].isIE()) {
            return;
          }

          if (this.timeout) {
            clearTimeout(this.timeout);
          }

          var value = event.target.value;

          if (!this.multiple && !this.forceSelection) {
            this.onModelChange(value);
          }

          if (value.length === 0 && !this.multiple) {
            this.hide();
            this.onClear.emit(event);
            this.onModelChange(value);
          }

          if (value.length >= this.minLength) {
            this.timeout = setTimeout(function () {
              _this3.search(event, value);
            }, this.delay);
          } else {
            this.suggestions = null;
            this.hide();
          }

          this.updateFilledState();
          this.inputKeyDown = false;
        }
      }, {
        key: "onInputClick",
        value: function onInputClick(event) {
          if (this.documentClickListener) {
            this.inputClick = true;
          }
        }
      }, {
        key: "search",
        value: function search(event, query) {
          //allow empty string but not undefined or null
          if (query === undefined || query === null) {
            return;
          }

          this.loading = true;
          this.completeMethod.emit({
            originalEvent: event,
            query: query
          });
        }
      }, {
        key: "selectItem",
        value: function selectItem(option) {
          var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (this.forceSelectionUpdateModelTimeout) {
            clearTimeout(this.forceSelectionUpdateModelTimeout);
            this.forceSelectionUpdateModelTimeout = null;
          }

          if (this.multiple) {
            this.multiInputEL.nativeElement.value = '';
            this.value = this.value || [];

            if (!this.isSelected(option) || !this.unique) {
              this.value = [].concat(_toConsumableArray(this.value), [option]);
              this.onModelChange(this.value);
            }
          } else {
            this.inputEL.nativeElement.value = this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(option, this.field) || '' : option;
            this.value = option;
            this.onModelChange(this.value);
          }

          this.onSelect.emit(option);
          this.updateFilledState();

          if (focus) {
            this.itemClicked = true;
            this.focusInput();
          }
        }
      }, {
        key: "show",
        value: function show() {
          if (this.multiInputEL || this.inputEL) {
            var hasFocus = this.multiple ? document.activeElement == this.multiInputEL.nativeElement : document.activeElement == this.inputEL.nativeElement;

            if (!this.overlayVisible && hasFocus) {
              this.overlayVisible = true;
            }
          }
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.overlay = event.element;
              this.appendOverlay();

              if (this.autoZIndex) {
                this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].zindex);
              }

              this.alignOverlay();
              this.bindDocumentClickListener();
              this.bindDocumentResizeListener();
              this.onShow.emit(event);
              break;

            case 'void':
              this.onOverlayHide();
              break;
          }
        }
      }, {
        key: "onOverlayAnimationDone",
        value: function onOverlayAnimationDone(event) {
          if (event.toState === 'void') {
            this._suggestions = null;
          }
        }
      }, {
        key: "appendOverlay",
        value: function appendOverlay() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].appendChild(this.overlay, this.appendTo);

            if (!this.overlay.style.minWidth) {
              this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].getWidth(this.el.nativeElement.children[0]) + 'px';
            }
          }
        }
      }, {
        key: "resolveFieldData",
        value: function resolveFieldData(value) {
          return this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(value, this.field) : value;
        }
      }, {
        key: "restoreOverlayAppend",
        value: function restoreOverlayAppend() {
          if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
          }
        }
      }, {
        key: "alignOverlay",
        value: function alignOverlay() {
          if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].absolutePosition(this.overlay, this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].relativePosition(this.overlay, this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.overlayVisible = false;
        }
      }, {
        key: "handleDropdownClick",
        value: function handleDropdownClick(event) {
          if (!this.overlayVisible) {
            this.focusInput();
            var queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
            if (this.dropdownMode === 'blank') this.search(event, '');else if (this.dropdownMode === 'current') this.search(event, queryValue);
            this.onDropdownClick.emit({
              originalEvent: event,
              query: queryValue
            });
          } else {
            this.hide();
          }
        }
      }, {
        key: "focusInput",
        value: function focusInput() {
          if (this.multiple) this.multiInputEL.nativeElement.focus();else this.inputEL.nativeElement.focus();
        }
      }, {
        key: "removeItem",
        value: function removeItem(item) {
          var itemIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].index(item);
          var removedValue = this.value[itemIndex];
          this.value = this.value.filter(function (val, i) {
            return i != itemIndex;
          });
          this.onModelChange(this.value);
          this.updateFilledState();
          this.onUnselect.emit(removedValue);
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          if (this.overlayVisible) {
            var highlightItemIndex = this.findOptionIndex(this.highlightOption);

            switch (event.which) {
              //down
              case 40:
                if (highlightItemIndex != -1) {
                  var nextItemIndex = highlightItemIndex + 1;

                  if (nextItemIndex != this.suggestions.length) {
                    this.highlightOption = this.suggestions[nextItemIndex];
                    this.highlightOptionChanged = true;
                  }
                } else {
                  this.highlightOption = this.suggestions[0];
                }

                event.preventDefault();
                break;
              //up

              case 38:
                if (highlightItemIndex > 0) {
                  var prevItemIndex = highlightItemIndex - 1;
                  this.highlightOption = this.suggestions[prevItemIndex];
                  this.highlightOptionChanged = true;
                }

                event.preventDefault();
                break;
              //enter

              case 13:
                if (this.highlightOption) {
                  this.selectItem(this.highlightOption);
                  this.hide();
                }

                event.preventDefault();
                break;
              //escape

              case 27:
                this.hide();
                event.preventDefault();
                break;
              //tab

              case 9:
                if (this.highlightOption) {
                  this.selectItem(this.highlightOption);
                }

                this.hide();
                break;
            }
          } else {
            if (event.which === 40 && this.suggestions) {
              this.search(event, event.target.value);
            }
          }

          if (this.multiple) {
            switch (event.which) {
              //backspace
              case 8:
                if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
                  this.value = _toConsumableArray(this.value);
                  var removedValue = this.value.pop();
                  this.onModelChange(this.value);
                  this.updateFilledState();
                  this.onUnselect.emit(removedValue);
                }

                break;
            }
          }

          this.inputKeyDown = true;
        }
      }, {
        key: "onKeyup",
        value: function onKeyup(event) {
          this.onKeyUp.emit(event);
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          if (!this.itemClicked && this.completeOnFocus) {
            var queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
            this.search(event, queryValue);
          }

          this.focus = true;
          this.onFocus.emit(event);
          this.itemClicked = false;
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(event) {
          this.focus = false;
          this.onModelTouched();
          this.onBlur.emit(event);
        }
      }, {
        key: "onInputChange",
        value: function onInputChange(event) {
          var _this4 = this;

          if (this.forceSelection) {
            var valid = false;
            var inputValue = event.target.value.trim();

            if (this.suggestions) {
              var _iterator = _createForOfIteratorHelper(this.suggestions),
                  _step;

              try {
                var _loop = function _loop() {
                  var suggestion = _step.value;
                  var itemValue = _this4.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(suggestion, _this4.field) : suggestion;

                  if (itemValue && inputValue === itemValue.trim()) {
                    valid = true;
                    _this4.forceSelectionUpdateModelTimeout = setTimeout(function () {
                      _this4.selectItem(suggestion, false);
                    }, 250);
                    return "break";
                  }
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _ret = _loop();

                  if (_ret === "break") break;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            if (!valid) {
              if (this.multiple) {
                this.multiInputEL.nativeElement.value = '';
              } else {
                this.value = null;
                this.inputEL.nativeElement.value = '';
              }

              this.onClear.emit(event);
              this.onModelChange(this.value);
            }
          }
        }
      }, {
        key: "onInputPaste",
        value: function onInputPaste(event) {
          this.onKeydown(event);
        }
      }, {
        key: "isSelected",
        value: function isSelected(val) {
          var selected = false;

          if (this.value && this.value.length) {
            for (var i = 0; i < this.value.length; i++) {
              if (primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].equals(this.value[i], val, this.dataKey)) {
                selected = true;
                break;
              }
            }
          }

          return selected;
        }
      }, {
        key: "findOptionIndex",
        value: function findOptionIndex(option) {
          var index = -1;

          if (this.suggestions) {
            for (var i = 0; i < this.suggestions.length; i++) {
              if (primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].equals(option, this.suggestions[i])) {
                index = i;
                break;
              }
            }
          }

          return index;
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          if (this.multiple) this.filled = this.value && this.value.length || this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '';else this.filled = this.inputFieldValue && this.inputFieldValue != '' || this.inputEL && this.inputEL.nativeElement && this.inputEL.nativeElement.value != '';
          ;
        }
      }, {
        key: "updateInputField",
        value: function updateInputField() {
          var formattedValue = this.value ? this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(this.value, this.field) || '' : this.value : '';
          this.inputFieldValue = formattedValue;

          if (this.inputEL && this.inputEL.nativeElement) {
            this.inputEL.nativeElement.value = formattedValue;
          }

          this.updateFilledState();
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this5 = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
              if (event.which === 3) {
                return;
              }

              if (!_this5.inputClick && !_this5.isDropdownClick(event)) {
                _this5.hide();
              }

              _this5.inputClick = false;

              _this5.cd.markForCheck();
            });
          }
        }
      }, {
        key: "isDropdownClick",
        value: function isDropdownClick(event) {
          if (this.dropdown) {
            var target = event.target;
            return target === this.dropdownButton.nativeElement || target.parentNode === this.dropdownButton.nativeElement;
          } else {
            return false;
          }
        }
      }, {
        key: "unbindDocumentClickListener",
        value: function unbindDocumentClickListener() {
          if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
          }
        }
      }, {
        key: "bindDocumentResizeListener",
        value: function bindDocumentResizeListener() {
          this.documentResizeListener = this.onWindowResize.bind(this);
          window.addEventListener('resize', this.documentResizeListener);
        }
      }, {
        key: "unbindDocumentResizeListener",
        value: function unbindDocumentResizeListener() {
          if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
          }
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          this.hide();
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.unbindDocumentResizeListener();
          this.overlay = null;
          this.onHide.emit();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.forceSelectionUpdateModelTimeout) {
            clearTimeout(this.forceSelectionUpdateModelTimeout);
            this.forceSelectionUpdateModelTimeout = null;
          }

          this.restoreOverlayAppend();
          this.onOverlayHide();
        }
      }, {
        key: "suggestions",
        get: function get() {
          return this._suggestions;
        },
        set: function set(val) {
          this._suggestions = val;
          this.handleSuggestionsChange();
        }
      }]);

      return AutoComplete;
    }();

    AutoComplete.ɵfac = function AutoComplete_Factory(t) {
      return new (t || AutoComplete)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]));
    };

    AutoComplete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutoComplete,
      selectors: [["p-autoComplete"]],
      contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function AutoComplete_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEL = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiInputEL = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiContainerEL = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownButton = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function AutoComplete_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ui-inputwrapper-filled", ctx.filled)("ui-inputwrapper-focus", ctx.focus && !ctx.disabled);
        }
      },
      inputs: {
        minLength: "minLength",
        delay: "delay",
        type: "type",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        dropdownIcon: "dropdownIcon",
        unique: "unique",
        completeOnFocus: "completeOnFocus",
        scrollHeight: "scrollHeight",
        dropdownMode: "dropdownMode",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        autocomplete: "autocomplete",
        suggestions: "suggestions",
        disabled: "disabled",
        style: "style",
        panelStyle: "panelStyle",
        styleClass: "styleClass",
        panelStyleClass: "panelStyleClass",
        inputStyle: "inputStyle",
        inputId: "inputId",
        inputStyleClass: "inputStyleClass",
        placeholder: "placeholder",
        readonly: "readonly",
        maxlength: "maxlength",
        name: "name",
        required: "required",
        size: "size",
        appendTo: "appendTo",
        autoHighlight: "autoHighlight",
        forceSelection: "forceSelection",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        field: "field",
        dropdown: "dropdown",
        multiple: "multiple",
        tabindex: "tabindex",
        dataKey: "dataKey",
        emptyMessage: "emptyMessage",
        autofocus: "autofocus"
      },
      outputs: {
        completeMethod: "completeMethod",
        onSelect: "onSelect",
        onUnselect: "onUnselect",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onDropdownClick: "onDropdownClick",
        onClear: "onClear",
        onKeyUp: "onKeyUp",
        onShow: "onShow",
        onHide: "onHide"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([AUTOCOMPLETE_VALUE_ACCESSOR])],
      decls: 6,
      vars: 12,
      consts: [[3, "ngClass", "ngStyle"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "ngStyle", "class", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste", 4, "ngIf"], ["class", "ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all", 3, "ngClass", "click", 4, "ngIf"], ["class", "ui-autocomplete-loader pi pi-spinner pi-spin", 4, "ngIf"], ["type", "button", "pButton", "", "class", "ui-autocomplete-dropdown", 3, "icon", "disabled", "click", 4, "ngIf"], [3, "ngClass", "max-height", "ngStyle", "class", 4, "ngIf"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "ngStyle", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste"], ["in", ""], [1, "ui-autocomplete-multiple-container", "ui-widget", "ui-inputtext", "ui-state-default", "ui-corner-all", 3, "ngClass", "click"], ["multiContainer", ""], ["class", "ui-autocomplete-token ui-state-highlight ui-corner-all", 4, "ngFor", "ngForOf"], [1, "ui-autocomplete-input-token"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "disabled", "readonly", "autocomplete", "ngStyle", "input", "click", "keydown", "keyup", "focus", "blur", "change", "paste"], ["multiIn", ""], [1, "ui-autocomplete-token", "ui-state-highlight", "ui-corner-all"], ["token", ""], ["class", "ui-autocomplete-token-icon pi pi-fw pi-times", 3, "click", 4, "ngIf"], ["class", "ui-autocomplete-token-label", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ui-autocomplete-token-icon", "pi", "pi-fw", "pi-times", 3, "click"], [1, "ui-autocomplete-token-label"], [1, "ui-autocomplete-loader", "pi", "pi-spinner", "pi-spin"], ["type", "button", "pButton", "", 1, "ui-autocomplete-dropdown", 3, "icon", "disabled", "click"], ["ddBtn", ""], ["panel", ""], ["role", "listbox", 1, "ui-autocomplete-items", "ui-autocomplete-list", "ui-widget-content", "ui-widget", "ui-corner-all", "ui-helper-reset"], ["role", "option", 3, "ngClass", "id", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["class", "ui-autocomplete-emptymessage ui-autocomplete-list-item ui-corner-all", 4, "ngIf"], ["role", "option", 3, "ngClass", "id", "mouseenter", "mouseleave", "click"], [4, "ngIf"], [1, "ui-autocomplete-emptymessage", "ui-autocomplete-list-item", "ui-corner-all"]],
      template: function AutoComplete_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_input_1_Template, 2, 23, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_2_Template, 6, 23, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_i_3_Template, 1, 0, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_button_4_Template, 2, 3, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutoComplete_div_5_Template, 5, 16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c11, ctx.dropdown, ctx.multiple))("ngStyle", ctx.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlayVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateY(5%)',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          transform: 'translateY(0)',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])]
      }
    });

    AutoComplete.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "minLength", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "delay", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "panelStyle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "panelStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "inputStyle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "inputId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "inputStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "placeholder", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "readonly", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "disabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "maxlength", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "name", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "required", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "size", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "appendTo", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "autoHighlight", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "forceSelection", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "type", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "autoZIndex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "baseZIndex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "ariaLabel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "ariaLabelledBy", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "dropdownIcon", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "unique", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "completeOnFocus", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "completeMethod", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "onSelect", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "onUnselect", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "onFocus", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "onBlur", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "onDropdownClick", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "onClear", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "onKeyUp", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "onShow", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], AutoComplete.prototype, "onHide", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "field", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "scrollHeight", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "dropdown", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "dropdownMode", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "multiple", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "tabindex", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "dataKey", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "emptyMessage", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "showTransitionOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "hideTransitionOptions", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "autofocus", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "autocomplete", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('in')], AutoComplete.prototype, "inputEL", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('multiIn')], AutoComplete.prototype, "multiInputEL", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('multiContainer')], AutoComplete.prototype, "multiContainerEL", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ddBtn')], AutoComplete.prototype, "dropdownButton", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"])], AutoComplete.prototype, "templates", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], AutoComplete.prototype, "suggestions", null);

    var AutoCompleteModule = function AutoCompleteModule() {
      _classCallCheck(this, AutoCompleteModule);
    };

    AutoCompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AutoCompleteModule
    });
    AutoCompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AutoCompleteModule_Factory(t) {
        return new (t || AutoCompleteModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoComplete, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-autoComplete',
          template: "\n        <span [ngClass]=\"{'ui-autocomplete ui-widget':true,'ui-autocomplete-dd':dropdown,'ui-autocomplete-multiple':multiple}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <input *ngIf=\"!multiple\" #in [attr.type]=\"type\" [attr.id]=\"inputId\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [autocomplete]=\"autocomplete\" [attr.required]=\"required\" [attr.name]=\"name\"\n            [ngClass]=\"'ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input'\" [value]=\"inputFieldValue\" aria-autocomplete=\"list\" [attr.aria-controls]=\"listId\" role=\"searchbox\" [attr.aria-expanded]=\"overlayVisible\" aria-haspopup=\"true\" [attr.aria-activedescendant]=\"'p-highlighted-option'\"\n            (click)=\"onInputClick($event)\" (input)=\"onInput($event)\" (keydown)=\"onKeydown($event)\" (keyup)=\"onKeyup($event)\" [attr.autofocus]=\"autofocus\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (change)=\"onInputChange($event)\" (paste)=\"onInputPaste($event)\"\n            [attr.placeholder]=\"placeholder\" [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [readonly]=\"readonly\" [disabled]=\"disabled\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\" [attr.aria-required]=\"required\"\n            ><ul *ngIf=\"multiple\" #multiContainer class=\"ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all\" [ngClass]=\"{'ui-state-disabled':disabled,'ui-state-focus':focus}\" (click)=\"multiIn.focus()\">\n                <li #token *ngFor=\"let val of value\" class=\"ui-autocomplete-token ui-state-highlight ui-corner-all\">\n                    <span class=\"ui-autocomplete-token-icon pi pi-fw pi-times\" (click)=\"removeItem(token)\" *ngIf=\"!disabled\"></span>\n                    <span *ngIf=\"!selectedItemTemplate\" class=\"ui-autocomplete-token-label\">{{resolveFieldData(val)}}</span>\n                    <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: val}\"></ng-container>\n                </li>\n                <li class=\"ui-autocomplete-input-token\">\n                    <input #multiIn [attr.type]=\"type\" [attr.id]=\"inputId\" [disabled]=\"disabled\" [attr.placeholder]=\"(value&&value.length ? null : placeholder)\" [attr.tabindex]=\"tabindex\" [attr.maxlength]=\"maxlength\" (input)=\"onInput($event)\"  (click)=\"onInputClick($event)\"\n                            (keydown)=\"onKeydown($event)\" [readonly]=\"readonly\" (keyup)=\"onKeyup($event)\" [attr.autofocus]=\"autofocus\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (change)=\"onInputChange($event)\" (paste)=\"onInputPaste($event)\" [autocomplete]=\"autocomplete\"\n                            [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\" [attr.aria-required]=\"required\"\n                            aria-autocomplete=\"list\" [attr.aria-controls]=\"listId\" role=\"searchbox\" [attr.aria-expanded]=\"overlayVisible\" aria-haspopup=\"true\" [attr.aria-activedescendant]=\"'p-highlighted-option'\">\n                </li>\n            </ul>\n            <i *ngIf=\"loading\" class=\"ui-autocomplete-loader pi pi-spinner pi-spin\"></i><button #ddBtn type=\"button\" pButton [icon]=\"dropdownIcon\" class=\"ui-autocomplete-dropdown\" [disabled]=\"disabled\"\n                (click)=\"handleDropdownClick($event)\" *ngIf=\"dropdown\" [attr.tabindex]=\"tabindex\"></button>\n            <div #panel *ngIf=\"overlayVisible\" [ngClass]=\"['ui-autocomplete-panel ui-widget ui-widget-content ui-corner-all ui-shadow']\" [style.max-height]=\"scrollHeight\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\"\n                [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (@overlayAnimation.done)=\"onOverlayAnimationDone($event)\" >\n                <ul role=\"listbox\" [attr.id]=\"listId\" class=\"ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\">\n                    <li role=\"option\"  *ngFor=\"let option of suggestions; let idx = index\" [ngClass]=\"{'ui-autocomplete-list-item ui-corner-all':true,'ui-state-highlight':(highlightOption==option)}\"\n                        (mouseenter)=\"highlightOption=option\" (mouseleave)=\"highlightOption=null\" [id]=\"highlightOption == option ? 'p-highlighted-option':''\" (click)=\"selectItem(option)\">\n                        <span *ngIf=\"!itemTemplate\">{{resolveFieldData(option)}}</span>\n                        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: idx}\"></ng-container>\n                    </li>\n                    <li *ngIf=\"noResults && emptyMessage\" class=\"ui-autocomplete-emptymessage ui-autocomplete-list-item ui-corner-all\">{{emptyMessage}}</li>\n                </ul>\n            </div>\n        </span>\n    ",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateY(5%)',
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateY(0)',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])],
          host: {
            '[class.ui-inputwrapper-filled]': 'filled',
            '[class.ui-inputwrapper-focus]': 'focus && !disabled'
          },
          providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
        }];
      }, {
        minLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        baseZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unique: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        completeOnFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        completeMethod: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onUnselect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDropdownClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrollHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showTransitionOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideTransitionOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        suggestions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        panelStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        panelStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoHighlight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        forceSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabelledBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        emptyMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autofocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputEL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['in']
        }],
        multiInputEL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['multiIn']
        }],
        multiContainerEL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['multiContainer']
        }],
        dropdownButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ddBtn']
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"]]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutoCompleteModule, {
        declarations: function declarations() {
          return [AutoComplete];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]];
        },
        exports: function exports() {
          return [AutoComplete, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
          exports: [AutoComplete, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
          declarations: [AutoComplete]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-autocomplete.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js ***!
    \**********************************************************************/

  /*! exports provided: Button, ButtonDirective, ButtonModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengButtonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Button", function () {
      return Button;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonDirective", function () {
      return ButtonDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonModule", function () {
      return ButtonModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/dom */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1, a2) {
      return {
        "ui-clickable": true,
        "ui-button-icon-left": a1,
        "ui-button-icon-right": a2
      };
    };

    function Button_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.iconPos === "left", ctx_r0.iconPos === "right"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
      }
    }

    var _c1 = function _c1(a1, a2, a3, a4, a5, a6) {
      return {
        "ui-button ui-widget ui-state-default ui-corner-all": true,
        "ui-button-icon-only": a1,
        "ui-button-text-icon-left": a2,
        "ui-button-text-icon-right": a3,
        "ui-button-text-only": a4,
        "ui-button-text-empty": a5,
        "ui-state-disabled": a6
      };
    };

    var _c2 = ["*"];

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var ButtonDirective = /*#__PURE__*/function () {
      function ButtonDirective(el) {
        _classCallCheck(this, ButtonDirective);

        this.el = el;
        this.iconPos = 'left';
        this.cornerStyleClass = 'ui-corner-all';
      }

      _createClass(ButtonDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].addMultipleClasses(this.el.nativeElement, this.getStyleClass());

          if (this.icon) {
            var iconElement = document.createElement("span");
            iconElement.setAttribute("aria-hidden", "true");
            var iconPosClass = this.iconPos == 'right' ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-clickable ' + this.icon;
            this.el.nativeElement.appendChild(iconElement);
          }

          var labelElement = document.createElement("span");

          if (this.icon && !this.label) {
            labelElement.setAttribute('aria-hidden', 'true');
          }

          labelElement.className = 'ui-button-text ui-clickable';
          labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
          this.el.nativeElement.appendChild(labelElement);
          this.initialized = true;
        }
      }, {
        key: "getStyleClass",
        value: function getStyleClass() {
          var styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;

          if (this.icon) {
            if (this.label != null && this.label != undefined) {
              if (this.iconPos == 'left') styleClass = styleClass + ' ui-button-text-icon-left';else styleClass = styleClass + ' ui-button-text-icon-right';
            } else {
              styleClass = styleClass + ' ui-button-icon-only';
            }
          } else {
            if (this.label) {
              styleClass = styleClass + ' ui-button-text-only';
            } else {
              styleClass = styleClass + ' ui-button-text-empty';
            }
          }

          return styleClass;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
          }

          this.initialized = false;
        }
      }, {
        key: "label",
        get: function get() {
          return this._label;
        },
        set: function set(val) {
          this._label = val;

          if (this.initialized) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label;

            if (!this.icon) {
              if (this._label) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].removeClass(this.el.nativeElement, 'ui-button-text-empty');
                primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].addClass(this.el.nativeElement, 'ui-button-text-only');
              } else {
                primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].addClass(this.el.nativeElement, 'ui-button-text-empty');
                primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].removeClass(this.el.nativeElement, 'ui-button-text-only');
              }
            }
          }
        }
      }, {
        key: "icon",
        get: function get() {
          return this._icon;
        },
        set: function set(val) {
          this._icon = val;

          if (this.initialized) {
            var iconPosClass = this.iconPos == 'right' ? 'ui-button-icon-right' : 'ui-button-icon-left';
            primeng_dom__WEBPACK_IMPORTED_MODULE_1__["DomHandler"].findSingle(this.el.nativeElement, '.ui-clickable').className = iconPosClass + ' ui-clickable ' + this.icon;
          }
        }
      }]);

      return ButtonDirective;
    }();

    ButtonDirective.ɵfac = function ButtonDirective_Factory(t) {
      return new (t || ButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ButtonDirective,
      selectors: [["", "pButton", ""]],
      inputs: {
        iconPos: "iconPos",
        cornerStyleClass: "cornerStyleClass",
        label: "label",
        icon: "icon"
      }
    });

    ButtonDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ButtonDirective.prototype, "iconPos", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ButtonDirective.prototype, "cornerStyleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ButtonDirective.prototype, "label", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], ButtonDirective.prototype, "icon", null);

    var Button = function Button() {
      _classCallCheck(this, Button);

      this.iconPos = 'left';
      this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    Button.ɵfac = function Button_Factory(t) {
      return new (t || Button)();
    };

    Button.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Button,
      selectors: [["p-button"]],
      inputs: {
        iconPos: "iconPos",
        type: "type",
        icon: "icon",
        label: "label",
        disabled: "disabled",
        style: "style",
        styleClass: "styleClass"
      },
      outputs: {
        onClick: "onClick",
        onFocus: "onFocus",
        onBlur: "onBlur"
      },
      ngContentSelectors: _c2,
      decls: 5,
      vars: 16,
      consts: [[3, "ngStyle", "disabled", "ngClass", "click", "focus", "blur"], [3, "ngClass", "class", 4, "ngIf"], [1, "ui-button-text", "ui-clickable"], [3, "ngClass"]],
      template: function Button_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Button_Template_button_click_0_listener($event) {
            return ctx.onClick.emit($event);
          })("focus", function Button_Template_button_focus_0_listener($event) {
            return ctx.onFocus.emit($event);
          })("blur", function Button_Template_button_blur_0_listener($event) {
            return ctx.onBlur.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Button_span_2_Template, 1, 7, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("disabled", ctx.disabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](9, _c1, ctx.icon && !ctx.label, ctx.icon && ctx.label && ctx.iconPos === "left", ctx.icon && ctx.label && ctx.iconPos === "right", !ctx.icon && ctx.label, !ctx.icon && !ctx.label, ctx.disabled));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", ctx.icon && !ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label || "ui-btn");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2
    });

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Button.prototype, "type", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Button.prototype, "iconPos", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Button.prototype, "icon", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Button.prototype, "label", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Button.prototype, "disabled", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Button.prototype, "style", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()], Button.prototype, "styleClass", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Button.prototype, "onClick", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Button.prototype, "onFocus", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()], Button.prototype, "onBlur", void 0);

    var ButtonModule = function ButtonModule() {
      _classCallCheck(this, ButtonModule);
    };

    ButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ButtonModule
    });
    ButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ButtonModule_Factory(t) {
        return new (t || ButtonModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pButton]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        iconPos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cornerStyleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Button, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'p-button',
          template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [ngStyle]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-button ui-widget ui-state-default ui-corner-all':true,\n                        'ui-button-icon-only': (icon && !label),\n                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),\n                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),\n                        'ui-button-text-only': (!icon && label),\n                        'ui-button-text-empty': (!icon && !label),\n                        'ui-state-disabled': disabled}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\">\n            <ng-content></ng-content>\n            <span [ngClass]=\"{'ui-clickable': true,\n                        'ui-button-icon-left': (iconPos === 'left'), \n                        'ui-button-icon-right': (iconPos === 'right')}\"\n                        [class]=\"icon\" *ngIf=\"icon\" [attr.aria-hidden]=\"true\"></span>\n            <span class=\"ui-button-text ui-clickable\" [attr.aria-hidden]=\"icon && !label\">{{label||'ui-btn'}}</span>\n        </button>\n    ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [];
      }, {
        iconPos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styleClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonModule, {
        declarations: function declarations() {
          return [ButtonDirective, Button];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [ButtonDirective, Button];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [ButtonDirective, Button],
          declarations: [ButtonDirective, Button]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-button.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js ***!
    \*************************************************************************/

  /*! exports provided: InputText, InputTextModule */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengInputtextJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputText", function () {
      return InputText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputTextModule", function () {
      return InputTextModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var InputText = /*#__PURE__*/function () {
      function InputText(el, ngModel) {
        _classCallCheck(this, InputText);

        this.el = el;
        this.ngModel = ngModel;
      }

      _createClass(InputText, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.updateFilledState();
        } //To trigger change detection to manage ui-state-filled for material labels when there is no value binding

      }, {
        key: "onInput",
        value: function onInput(e) {
          this.updateFilledState();
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length || this.ngModel && this.ngModel.model;
        }
      }]);

      return InputText;
    }();

    InputText.ɵfac = function InputText_Factory(t) {
      return new (t || InputText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], 8));
    };

    InputText.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InputText,
      selectors: [["", "pInputText", ""]],
      hostVars: 10,
      hostBindings: function InputText_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputText_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ui-inputtext", true)("ui-corner-all", true)("ui-state-default", true)("ui-widget", true)("ui-state-filled", ctx.filled);
        }
      }
    });

    InputText.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event'])], InputText.prototype, "onInput", null);

    InputText = __decorate([__param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())], InputText);

    var InputTextModule = function InputTextModule() {
      _classCallCheck(this, InputTextModule);
    };

    InputTextModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputTextModule
    });
    InputTextModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InputTextModule_Factory(t) {
        return new (t || InputTextModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pInputText]',
          host: {
            '[class.ui-inputtext]': 'true',
            '[class.ui-corner-all]': 'true',
            '[class.ui-state-default]': 'true',
            '[class.ui-widget]': 'true',
            '[class.ui-state-filled]': 'filled'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputTextModule, {
        declarations: function declarations() {
          return [InputText];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [InputText];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [InputText],
          declarations: [InputText]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-inputtext.js.map

    /***/

  },

  /***/
  "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-utils.js ***!
    \*********************************************************************/

  /*! exports provided: FilterUtils, ObjectUtils, UniqueComponentId, lastId */

  /***/
  function node_modulesPrimeng__ivy_ngcc__Fesm2015PrimengUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterUtils", function () {
      return FilterUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectUtils", function () {
      return ObjectUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueComponentId", function () {
      return UniqueComponentId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lastId", function () {
      return lastId;
    });

    var ObjectUtils = /*#__PURE__*/function () {
      function ObjectUtils() {
        _classCallCheck(this, ObjectUtils);
      }

      _createClass(ObjectUtils, null, [{
        key: "equals",
        value: function equals(obj1, obj2, field) {
          if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.equalsByValue(obj1, obj2);
        }
      }, {
        key: "equalsByValue",
        value: function equalsByValue(obj1, obj2) {
          if (obj1 === obj2) return true;

          if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
            var arrA = Array.isArray(obj1),
                arrB = Array.isArray(obj2),
                i,
                length,
                key;

            if (arrA && arrB) {
              length = obj1.length;
              if (length != obj2.length) return false;

              for (i = length; i-- !== 0;) {
                if (!this.equalsByValue(obj1[i], obj2[i])) return false;
              }

              return true;
            }

            if (arrA != arrB) return false;
            var dateA = obj1 instanceof Date,
                dateB = obj2 instanceof Date;
            if (dateA != dateB) return false;
            if (dateA && dateB) return obj1.getTime() == obj2.getTime();
            var regexpA = obj1 instanceof RegExp,
                regexpB = obj2 instanceof RegExp;
            if (regexpA != regexpB) return false;
            if (regexpA && regexpB) return obj1.toString() == obj2.toString();
            var keys = Object.keys(obj1);
            length = keys.length;
            if (length !== Object.keys(obj2).length) return false;

            for (i = length; i-- !== 0;) {
              if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
            }

            for (i = length; i-- !== 0;) {
              key = keys[i];
              if (!this.equalsByValue(obj1[key], obj2[key])) return false;
            }

            return true;
          }

          return obj1 !== obj1 && obj2 !== obj2;
        }
      }, {
        key: "resolveFieldData",
        value: function resolveFieldData(data, field) {
          if (data && field) {
            if (this.isFunction(field)) {
              return field(data);
            } else if (field.indexOf('.') == -1) {
              return data[field];
            } else {
              var fields = field.split('.');
              var value = data;

              for (var i = 0, len = fields.length; i < len; ++i) {
                if (value == null) {
                  return null;
                }

                value = value[fields[i]];
              }

              return value;
            }
          } else {
            return null;
          }
        }
      }, {
        key: "isFunction",
        value: function isFunction(obj) {
          return !!(obj && obj.constructor && obj.call && obj.apply);
        }
      }, {
        key: "reorderArray",
        value: function reorderArray(value, from, to) {
          var target;

          if (value && from !== to) {
            if (to >= value.length) {
              to %= value.length;
              from %= value.length;
            }

            value.splice(to, 0, value.splice(from, 1)[0]);
          }
        }
      }, {
        key: "generateSelectItems",
        value: function generateSelectItems(val, field) {
          var selectItems;

          if (val && val.length) {
            selectItems = [];

            var _iterator2 = _createForOfIteratorHelper(val),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;
                selectItems.push({
                  label: this.resolveFieldData(item, field),
                  value: item
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          return selectItems;
        }
      }, {
        key: "insertIntoOrderedArray",
        value: function insertIntoOrderedArray(item, index, arr, sourceArr) {
          if (arr.length > 0) {
            var injected = false;

            for (var i = 0; i < arr.length; i++) {
              var currentItemIndex = this.findIndexInList(arr[i], sourceArr);

              if (currentItemIndex > index) {
                arr.splice(i, 0, item);
                injected = true;
                break;
              }
            }

            if (!injected) {
              arr.push(item);
            }
          } else {
            arr.push(item);
          }
        }
      }, {
        key: "findIndexInList",
        value: function findIndexInList(item, list) {
          var index = -1;

          if (list) {
            for (var i = 0; i < list.length; i++) {
              if (list[i] == item) {
                index = i;
                break;
              }
            }
          }

          return index;
        }
      }, {
        key: "removeAccents",
        value: function removeAccents(str) {
          if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
          }

          return str;
        }
      }]);

      return ObjectUtils;
    }();

    var FilterUtils = /*#__PURE__*/function () {
      function FilterUtils() {
        _classCallCheck(this, FilterUtils);
      }

      _createClass(FilterUtils, null, [{
        key: "filter",
        value: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
          var filteredItems = [];
          var filterText = ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(filterLocale);

          if (value) {
            var _iterator3 = _createForOfIteratorHelper(value),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;

                var _iterator4 = _createForOfIteratorHelper(fields),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var field = _step4.value;
                    var fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(item, field))).toLocaleLowerCase(filterLocale);

                    if (FilterUtils[filterMatchMode](fieldValue, filterText, filterLocale)) {
                      filteredItems.push(item);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          return filteredItems;
        }
      }, {
        key: "startsWith",
        value: function startsWith(value, filter, filterLocale) {
          if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
          var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.slice(0, filterValue.length) === filterValue;
        }
      }, {
        key: "contains",
        value: function contains(value, filter, filterLocale) {
          if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
          var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.indexOf(filterValue) !== -1;
        }
      }, {
        key: "endsWith",
        value: function endsWith(value, filter, filterLocale) {
          if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
          var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
        }
      }, {
        key: "equals",
        value: function equals(value, filter, filterLocale) {
          if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        }
      }, {
        key: "notEquals",
        value: function notEquals(value, filter, filterLocale) {
          if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
            return false;
          }

          if (value === undefined || value === null) {
            return true;
          }

          if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        }
      }, {
        key: "in",
        value: function _in(value, filter, filterLocale) {
          if (filter === undefined || filter === null || filter.length === 0) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          for (var i = 0; i < filter.length; i++) {
            if (ObjectUtils.equals(value, filter[i])) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "lt",
        value: function lt(value, filter, filterLocale) {
          if (filter === undefined || filter === null) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();else return value < filter;
        }
      }, {
        key: "lte",
        value: function lte(value, filter, filterLocale) {
          if (filter === undefined || filter === null) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();else return value <= filter;
        }
      }, {
        key: "gt",
        value: function gt(value, filter, filterLocale) {
          if (filter === undefined || filter === null) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();else return value > filter;
        }
      }, {
        key: "gte",
        value: function gte(value, filter, filterLocale) {
          if (filter === undefined || filter === null) {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();else return value >= filter;
        }
      }]);

      return FilterUtils;
    }();

    var lastId = 0;

    function UniqueComponentId() {
      var prefix = 'pr_id_';
      lastId++;
      return "".concat(prefix).concat(lastId);
    }
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=primeng-utils.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~Features-department-department-module~Features-role-role-module~Features-skill-skill-module-es5.js.map