(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-goals-goals-module"],{

/***/ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js":
/*!**********************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js ***!
  \**********************************************************************/
/*! exports provided: Dialog, DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/focustrap */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-focustrap.js");











const _c0 = ["titlebar"];
const _c1 = ["content"];
const _c2 = ["footer"];
function Dialog_div_0_div_1_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r8.id + "-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.header);
} }
function Dialog_div_0_div_1_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r9.id + "-label");
} }
const _c3 = function () { return { "ui-dialog-titlebar-icon ui-dialog-titlebar-maximize ui-corner-all": true }; };
function Dialog_div_0_div_1_div_2_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_div_2_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r12.maximize(); })("keydown.enter", function Dialog_div_0_div_1_div_2_a_5_Template_a_keydown_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r14.maximize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r10.maximized ? ctx_r10.minimizeIcon : ctx_r10.maximizeIcon);
} }
const _c4 = function () { return { "ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all": true }; };
function Dialog_div_0_div_1_div_2_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_div_2_a_6_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r15.close($event); })("keydown.enter", function Dialog_div_0_div_1_div_2_a_6_Template_a_keydown_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r17.close($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r11.closeIcon);
} }
function Dialog_div_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_div_2_Template_div_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.initDrag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_div_2_span_2_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dialog_div_0_div_1_div_2_span_3_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Dialog_div_0_div_1_div_2_a_5_Template, 2, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_div_2_a_6_Template, 2, 4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.headerFacet && ctx_r3.headerFacet.first);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.maximizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.closable);
} }
function Dialog_div_0_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Dialog_div_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_div_7_Template_div_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.initResize($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c5 = function (a1, a2, a3, a4) { return { "ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow": true, "ui-dialog-rtl": a1, "ui-dialog-draggable": a2, "ui-dialog-resizable": a3, "ui-dialog-maximized": a4 }; };
const _c6 = function (a0, a1) { return { transform: a0, transition: a1 }; };
const _c7 = function (a1) { return { value: "visible", params: a1 }; };
function Dialog_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onAnimationStart($event); })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.onAnimationEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_div_2_Template, 7, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_div_6_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Dialog_div_0_div_1_div_7_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](11, _c5, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c6, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r1.id + "-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.footerFacet && ctx_r1.footerFacet.first);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.resizable);
} }
const _c8 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { "ui-dialog-mask": true, "ui-widget-overlay": a1, "ui-dialog-visible": a2, "ui-dialog-mask-scrollblocker": a3, "ui-dialog-left": a4, "ui-dialog-right": a5, "ui-dialog-top": a6, "ui-dialog-topleft": a7, "ui-dialog-topright": a8, "ui-dialog-bottom": a9, "ui-dialog-bottomleft": a10, "ui-dialog-bottomright": a11 }; };
function Dialog_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_Template, 8, 21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.maskStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](4, _c8, [ctx_r0.modal, ctx_r0.maskVisible, ctx_r0.modal || ctx_r0.blockScroll, ctx_r0.position === "left", ctx_r0.position === "right", ctx_r0.position === "top", ctx_r0.position === "topleft", ctx_r0.position === "topright", ctx_r0.position === "bottom", ctx_r0.position === "bottomleft", ctx_r0.position === "bottomright"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visible);
} }
const _c9 = ["*", [["p-header"]], [["p-footer"]]];
const _c10 = ["*", "p-header", "p-footer"];
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let idx = 0;
const showAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: '{{transform}}', opacity: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'none', opacity: 1 }))
]);
const hideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: '{{transform}}', opacity: 0 }))
]);
let Dialog = class Dialog {
    constructor(el, renderer, zone, cd) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.cd = cd;
        this.draggable = true;
        this.resizable = true;
        this.closeOnEscape = true;
        this.closable = true;
        this.showHeader = true;
        this.blockScroll = false;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.minX = 0;
        this.minY = 0;
        this.focusOnShow = true;
        this.keepInViewport = true;
        this.focusTrap = true;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.closeIcon = 'pi pi-times';
        this.minimizeIcon = 'pi pi-window-minimize';
        this.maximizeIcon = 'pi pi-window-maximize';
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = `ui-dialog-${idx++}`;
        this._style = {};
        this._position = "center";
        this.transformOptions = "scale(0.7)";
    }
    get positionLeft() {
        return 0;
    }
    ;
    set positionLeft(_positionLeft) {
        console.log("positionLeft property is deprecated.");
    }
    get positionTop() {
        return 0;
    }
    ;
    set positionTop(_positionTop) {
        console.log("positionTop property is deprecated.");
    }
    get responsive() {
        return false;
    }
    ;
    set responsive(_responsive) {
        console.log("Responsive property is deprecated.");
    }
    get breakpoint() {
        return 649;
    }
    ;
    set breakpoint(_breakpoint) {
        console.log("Breakpoint property is not utilized and deprecated, use CSS media queries instead.");
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        if (this._visible && !this.maskVisible) {
            this.maskVisible = true;
        }
    }
    get style() {
        return this._style;
    }
    set style(value) {
        if (value) {
            this._style = Object.assign({}, value);
            this.originalStyle = value;
        }
    }
    get position() {
        return this._position;
    }
    ;
    set position(value) {
        this._position = value;
        switch (value) {
            case 'topleft':
            case 'bottomleft':
            case 'left':
                this.transformOptions = "translate3d(-100%, 0px, 0px)";
                break;
            case 'topright':
            case 'bottomright':
            case 'right':
                this.transformOptions = "translate3d(100%, 0px, 0px)";
                break;
            case 'bottom':
                this.transformOptions = "translate3d(0px, 100%, 0px)";
                break;
            case 'top':
                this.transformOptions = "translate3d(0px, -100%, 0px)";
                break;
            default:
                this.transformOptions = "scale(0.7)";
                break;
        }
    }
    focus() {
        let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.container, 'button');
        if (focusable) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => focusable.focus(), 5);
            });
        }
    }
    close(event) {
        this.visibleChange.emit(false);
        event.preventDefault();
    }
    enableModality() {
        if (this.closable && this.dismissableMask) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'click', (event) => {
                if (!this.container.isSameNode(event.target) && !this.container.contains(event.target)) {
                    this.close(event);
                }
            });
        }
        if (this.modal) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
        }
    }
    disableModality() {
        if (this.wrapper) {
            if (this.dismissableMask) {
                this.unbindMaskClickListener();
            }
            if (this.modal) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }
            if (!this.cd.destroyed) {
                this.cd.detectChanges();
            }
        }
    }
    maximize() {
        this.maximized = !this.maximized;
        if (!this.modal && !this.blockScroll) {
            if (this.maximized)
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
        }
    }
    unbindMaskClickListener() {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    }
    moveOnTop() {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex));
            this.wrapper.style.zIndex = String(this.baseZIndex + (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex - 1));
        }
    }
    initDrag(event) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(event.target, 'ui-dialog-titlebar-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].hasClass(event.target.parentElement, 'ui-dialog-titlebar-icon')) {
            return;
        }
        if (this.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            this.container.style.margin = '0';
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-unselectable-text');
        }
    }
    onKeydown(event) {
        if (this.focusTrap) {
            if (event.which === 9) {
                event.preventDefault();
                let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getFocusableElements(this.container);
                if (focusableElements && focusableElements.length > 0) {
                    if (!document.activeElement) {
                        focusableElements[0].focus();
                    }
                    else {
                        let focusedIndex = focusableElements.indexOf(document.activeElement);
                        if (event.shiftKey) {
                            if (focusedIndex == -1 || focusedIndex === 0)
                                focusableElements[focusableElements.length - 1].focus();
                            else
                                focusableElements[focusedIndex - 1].focus();
                        }
                        else {
                            if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                focusableElements[0].focus();
                            else
                                focusableElements[focusedIndex + 1].focus();
                        }
                    }
                }
            }
        }
    }
    onDrag(event) {
        if (this.dragging) {
            let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.container);
            let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.container);
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let offset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOffset(this.container);
            let leftPos = offset.left + deltaX;
            let topPos = offset.top + deltaY;
            let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getViewport();
            this.container.style.position = 'fixed';
            if (this.keepInViewport) {
                if (leftPos >= this.minX && (leftPos + containerWidth) < viewport.width) {
                    this._style.left = leftPos + 'px';
                    this.lastPageX = event.pageX;
                    this.container.style.left = leftPos + 'px';
                }
                if (topPos >= this.minY && (topPos + containerHeight) < viewport.height) {
                    this._style.top = topPos + 'px';
                    this.lastPageY = event.pageY;
                    this.container.style.top = topPos + 'px';
                }
            }
            else {
                this.lastPageX = event.pageX;
                this.container.style.left = leftPos + 'px';
                this.lastPageY = event.pageY;
                this.container.style.top = topPos + 'px';
            }
        }
    }
    endDrag(event) {
        if (this.draggable) {
            this.dragging = false;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-unselectable-text');
            this.cd.detectChanges();
        }
    }
    resetPosition() {
        this.container.style.position = '';
        this.container.style.left = '';
        this.container.style.top = '';
        this.container.style.margin = '';
    }
    //backward compatibility
    center() {
        this.resetPosition();
    }
    initResize(event) {
        if (this.resizable) {
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-unselectable-text');
            this.onResizeInit.emit(event);
        }
    }
    onResize(event) {
        if (this.resizing) {
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.container);
            let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.container);
            let contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.contentViewChild.nativeElement);
            let newWidth = containerWidth + deltaX;
            let newHeight = containerHeight + deltaY;
            let minWidth = this.container.style.minWidth;
            let minHeight = this.container.style.minHeight;
            let offset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOffset(this.container);
            let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getViewport();
            if ((!minWidth || newWidth > parseInt(minWidth)) && (offset.left + newWidth) < viewport.width) {
                this._style.width = newWidth + 'px';
                this.container.style.width = this._style.width;
            }
            if ((!minHeight || newHeight > parseInt(minHeight)) && (offset.top + newHeight) < viewport.height) {
                this.contentViewChild.nativeElement.style.height = contentHeight + deltaY + 'px';
            }
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }
    resizeEnd(event) {
        if (this.resizing) {
            this.resizing = false;
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-unselectable-text');
            this.onResizeEnd.emit(event);
        }
    }
    bindGlobalListeners() {
        if (this.draggable) {
            this.bindDocumentDragListener();
            this.bindDocumentDragEndListener();
        }
        if (this.resizable) {
            this.bindDocumentResizeListeners();
        }
        if (this.closeOnEscape && this.closable) {
            this.bindDocumentEscapeListener();
        }
    }
    unbindGlobalListeners() {
        this.unbindDocumentDragListener();
        this.unbindDocumentDragEndListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentEscapeListener();
    }
    bindDocumentDragListener() {
        this.zone.runOutsideAngular(() => {
            this.documentDragListener = this.onDrag.bind(this);
            window.document.addEventListener('mousemove', this.documentDragListener);
        });
    }
    unbindDocumentDragListener() {
        if (this.documentDragListener) {
            window.document.removeEventListener('mousemove', this.documentDragListener);
            this.documentDragListener = null;
        }
    }
    bindDocumentDragEndListener() {
        this.zone.runOutsideAngular(() => {
            this.documentDragEndListener = this.endDrag.bind(this);
            window.document.addEventListener('mouseup', this.documentDragEndListener);
        });
    }
    unbindDocumentDragEndListener() {
        if (this.documentDragEndListener) {
            window.document.removeEventListener('mouseup', this.documentDragEndListener);
            this.documentDragEndListener = null;
        }
    }
    bindDocumentResizeListeners() {
        this.zone.runOutsideAngular(() => {
            this.documentResizeListener = this.onResize.bind(this);
            this.documentResizeEndListener = this.resizeEnd.bind(this);
            window.document.addEventListener('mousemove', this.documentResizeListener);
            window.document.addEventListener('mouseup', this.documentResizeEndListener);
        });
    }
    unbindDocumentResizeListeners() {
        if (this.documentResizeListener && this.documentResizeEndListener) {
            window.document.removeEventListener('mousemove', this.documentResizeListener);
            window.document.removeEventListener('mouseup', this.documentResizeEndListener);
            this.documentResizeListener = null;
            this.documentResizeEndListener = null;
        }
    }
    bindDocumentEscapeListener() {
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', (event) => {
            if (event.which == 27) {
                if (parseInt(this.container.style.zIndex) === (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex + this.baseZIndex)) {
                    this.close(event);
                }
            }
        });
    }
    unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    }
    appendContainer() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.wrapper);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.wrapper, this.appendTo);
        }
    }
    restoreAppend() {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.wrapper);
        }
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.wrapper = this.container.parentElement;
                this.onShow.emit({});
                this.appendContainer();
                this.moveOnTop();
                this.bindGlobalListeners();
                if (this.modal) {
                    this.enableModality();
                }
                if (!this.modal && this.blockScroll) {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
                }
                if (this.focusOnShow) {
                    this.focus();
                }
                break;
        }
    }
    onAnimationEnd(event) {
        switch (event.toState) {
            case 'void':
                this.onContainerDestroy();
                this.onHide.emit({});
                break;
        }
    }
    onContainerDestroy() {
        this.unbindGlobalListeners();
        this.dragging = false;
        this.maskVisible = false;
        if (this.maximized) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            this.maximized = false;
        }
        if (this.modal) {
            this.disableModality();
        }
        if (this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
        }
        this.container = null;
        this.wrapper = null;
        this._style = this.originalStyle ? Object.assign({}, this.originalStyle) : {};
    }
    ngOnDestroy() {
        if (this.container) {
            this.restoreAppend();
            this.onContainerDestroy();
        }
    }
};
Dialog.ɵfac = function Dialog_Factory(t) { return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Dialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dialog, selectors: [["p-dialog"]], contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"], false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t);
    } }, viewQuery: function Dialog_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerViewChild = _t.first);
    } }, inputs: { draggable: "draggable", resizable: "resizable", closeOnEscape: "closeOnEscape", closable: "closable", showHeader: "showHeader", blockScroll: "blockScroll", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", minX: "minX", minY: "minY", focusOnShow: "focusOnShow", keepInViewport: "keepInViewport", focusTrap: "focusTrap", transitionOptions: "transitionOptions", closeIcon: "closeIcon", minimizeIcon: "minimizeIcon", maximizeIcon: "maximizeIcon", positionLeft: "positionLeft", positionTop: "positionTop", responsive: "responsive", breakpoint: "breakpoint", visible: "visible", style: "style", position: "position", header: "header", contentStyle: "contentStyle", modal: "modal", dismissableMask: "dismissableMask", rtl: "rtl", appendTo: "appendTo", styleClass: "styleClass", maskStyleClass: "maskStyleClass", maximizable: "maximizable" }, outputs: { onShow: "onShow", onHide: "onHide", visibleChange: "visibleChange", onResizeInit: "onResizeInit", onResizeEnd: "onResizeEnd" }, ngContentSelectors: _c10, decls: 1, vars: 1, consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["container", ""], ["class", "ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top", 3, "mousedown", 4, "ngIf"], [1, "ui-dialog-content", "ui-widget-content", 3, "ngStyle"], ["content", ""], ["class", "ui-dialog-footer ui-widget-content", 4, "ngIf"], ["class", "ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], [1, "ui-dialog-titlebar", "ui-widget-header", "ui-helper-clearfix", "ui-corner-top", 3, "mousedown"], ["titlebar", ""], ["class", "ui-dialog-title", 4, "ngIf"], [1, "ui-dialog-titlebar-icons"], ["tabindex", "0", "role", "button", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "ui-dialog-title"], ["tabindex", "0", "role", "button", 3, "ngClass", "click", "keydown.enter"], [1, "ui-dialog-footer", "ui-widget-content"], ["footer", ""], [1, "ui-resizable-handle", "ui-resizable-se", "ui-icon", "ui-icon-gripsmall-diagonal-se", 2, "z-index", "90", 3, "mousedown"]], template: function Dialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_Template, 2, 16, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__["FocusTrap"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(showAnimation)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(hideAnimation)
                ])
            ])
        ] } });
Dialog.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "header", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "draggable", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "resizable", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "positionLeft", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "positionTop", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "contentStyle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "modal", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "closeOnEscape", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "dismissableMask", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "rtl", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "closable", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "responsive", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "appendTo", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "styleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "maskStyleClass", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "showHeader", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "breakpoint", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "blockScroll", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "autoZIndex", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "baseZIndex", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "minX", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "minY", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "focusOnShow", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "maximizable", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "keepInViewport", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "focusTrap", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "transitionOptions", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "closeIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "minimizeIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "maximizeIcon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"], { descendants: false })
], Dialog.prototype, "headerFacet", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"], { descendants: false })
], Dialog.prototype, "footerFacet", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('titlebar')
], Dialog.prototype, "headerViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content')
], Dialog.prototype, "contentViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('footer')
], Dialog.prototype, "footerViewChild", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Dialog.prototype, "onShow", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Dialog.prototype, "onHide", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Dialog.prototype, "visibleChange", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Dialog.prototype, "onResizeInit", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
], Dialog.prototype, "onResizeEnd", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "visible", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "style", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], Dialog.prototype, "position", null);
let DialogModule = class DialogModule {
};
DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DialogModule });
DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__["FocusTrapModule"]],
        primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-dialog',
                template: `
        <div *ngIf="maskVisible" [class]="maskStyleClass" 
            [ngClass]="{'ui-dialog-mask': true, 'ui-widget-overlay': this.modal, 'ui-dialog-visible': this.maskVisible, 'ui-dialog-mask-scrollblocker': this.modal || this.blockScroll,
                'ui-dialog-left': position === 'left',
                'ui-dialog-right': position === 'right',
                'ui-dialog-top': position === 'top',
                'ui-dialog-topleft': position === 'topleft',
                'ui-dialog-topright': position === 'topright',
                'ui-dialog-bottom': position === 'bottom',
                'ui-dialog-bottomleft': position === 'bottomleft',
                'ui-dialog-bottomright': position === 'bottomright'}" >
            <div #container [ngClass]="{'ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl':rtl,'ui-dialog-draggable':draggable,'ui-dialog-resizable':resizable, 'ui-dialog-maximized': maximized}"
                [ngStyle]="style" [class]="styleClass" *ngIf="visible" pFocusTrap [pFocusTrapDisabled]="focusTrap === false"
                [@animation]="{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}" (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)" role="dialog" [attr.aria-labelledby]="id + '-label'">
                <div #titlebar class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top" (mousedown)="initDrag($event)" *ngIf="showHeader">
                    <span [attr.id]="id + '-label'" class="ui-dialog-title" *ngIf="header">{{header}}</span>
                    <span [attr.id]="id + '-label'" class="ui-dialog-title" *ngIf="headerFacet && headerFacet.first">
                        <ng-content select="p-header"></ng-content>
                    </span>
                    <div class="ui-dialog-titlebar-icons">
                        <a *ngIf="maximizable" [ngClass]="{'ui-dialog-titlebar-icon ui-dialog-titlebar-maximize ui-corner-all':true}" tabindex="0" role="button" (click)="maximize()" (keydown.enter)="maximize()">
                            <span [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                        </a>
                        <a *ngIf="closable" [ngClass]="{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}" tabindex="0" role="button" (click)="close($event)" (keydown.enter)="close($event)">
                            <span [class]="closeIcon"></span>
                        </a>
                    </div>
                </div>
                <div #content class="ui-dialog-content ui-widget-content" [ngStyle]="contentStyle">
                    <ng-content></ng-content>
                </div>
                <div #footer class="ui-dialog-footer ui-widget-content" *ngIf="footerFacet && footerFacet.first">
                    <ng-content select="p-footer"></ng-content>
                </div>
                <div *ngIf="resizable" class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;" (mousedown)="initResize($event)"></div>
            </div>
        </div>
    `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(showAnimation)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(hideAnimation)
                        ])
                    ])
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeOnEscape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blockScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], baseZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], focusOnShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], keepInViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], focusTrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minimizeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maximizeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], visibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onResizeInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onResizeEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], positionLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], positionTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], breakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dismissableMask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rtl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maskStyleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maximizable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"], { descendants: false }]
        }], footerFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"], { descendants: false }]
        }], headerViewChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['titlebar']
        }], contentViewChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }], footerViewChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['footer']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DialogModule, { declarations: function () { return [Dialog]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__["FocusTrapModule"]]; }, exports: function () { return [Dialog,
        primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_5__["FocusTrapModule"]],
                exports: [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
                declarations: [Dialog]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=primeng-dialog.js.map

/***/ }),

/***/ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-focustrap.js":
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-focustrap.js ***!
  \*************************************************************************/
/*! exports provided: FocusTrap, FocusTrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapModule", function() { return FocusTrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dom.js");





var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let FocusTrap = class FocusTrap {
    constructor(el) {
        this.el = el;
    }
    onkeydown(e) {
        if (this.pFocusTrapDisabled !== true) {
            e.preventDefault();
            let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getFocusableElements(this.el.nativeElement);
            if (focusableElements && focusableElements.length > 0) {
                if (!document.activeElement) {
                    focusableElements[0].focus();
                }
                else {
                    let focusedIndex = focusableElements.indexOf(document.activeElement);
                    if (e.shiftKey) {
                        if (focusedIndex == -1 || focusedIndex === 0)
                            focusableElements[focusableElements.length - 1].focus();
                        else
                            focusableElements[focusedIndex - 1].focus();
                    }
                    else {
                        if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                            focusableElements[0].focus();
                        else
                            focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        }
    }
};
FocusTrap.ɵfac = function FocusTrap_Factory(t) { return new (t || FocusTrap)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FocusTrap.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FocusTrap, selectors: [["", "pFocusTrap", ""]], hostBindings: function FocusTrap_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.tab", function FocusTrap_keydown_tab_HostBindingHandler($event) { return ctx.onkeydown($event); })("keydown.shift.tab", function FocusTrap_keydown_shift_tab_HostBindingHandler($event) { return ctx.onkeydown($event); });
    } }, inputs: { pFocusTrapDisabled: "pFocusTrapDisabled" } });
FocusTrap.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FocusTrap.prototype, "pFocusTrapDisabled", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.tab', ['$event']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.shift.tab', ['$event'])
], FocusTrap.prototype, "onkeydown", null);
let FocusTrapModule = class FocusTrapModule {
};
FocusTrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FocusTrapModule });
FocusTrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FocusTrapModule_Factory(t) { return new (t || FocusTrapModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[pFocusTrap]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onkeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.tab', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.shift.tab', ['$event']]
        }], pFocusTrapDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FocusTrapModule, { declarations: function () { return [FocusTrap]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [FocusTrap]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [FocusTrap],
                declarations: [FocusTrap]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=primeng-focustrap.js.map

/***/ }),

/***/ "./src/app/Features/goals/goals-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/Features/goals/goals-routing.module.ts ***!
  \********************************************************/
/*! exports provided: GoalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsRoutingModule", function() { return GoalsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-goal/my-goal.component */ "./src/app/Features/goals/my-goal/my-goal.component.ts");
/* harmony import */ var _team_goal_team_goal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-goal/team-goal.component */ "./src/app/Features/goals/team-goal/team-goal.component.ts");






const routes = [{ path: 'mygoal', component: _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_2__["MyGoalComponent"], data: { Title: 'My Goal', ShowHeader: true, ShowNavBar: true } },
    { path: 'teamgoal', component: _team_goal_team_goal_component__WEBPACK_IMPORTED_MODULE_3__["TeamGoalComponent"], data: { Title: 'Team Goal', ShowHeader: true, ShowNavBar: true } }];
class GoalsRoutingModule {
}
GoalsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoalsRoutingModule });
GoalsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoalsRoutingModule_Factory(t) { return new (t || GoalsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoalsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Features/goals/goals.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Features/goals/goals.component.ts ***!
  \***************************************************/
/*! exports provided: GoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponent", function() { return GoalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GoalsComponent {
    constructor() { }
    ngOnInit() {
    }
}
GoalsComponent.ɵfac = function GoalsComponent_Factory(t) { return new (t || GoalsComponent)(); };
GoalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalsComponent, selectors: [["app-goals"]], decls: 2, vars: 0, template: function GoalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "goals works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2dvYWxzL2dvYWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-goals',
                templateUrl: './goals.component.html',
                styleUrls: ['./goals.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/Features/goals/goals.module.ts":
/*!************************************************!*\
  !*** ./src/app/Features/goals/goals.module.ts ***!
  \************************************************/
/*! exports provided: GoalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsModule", function() { return GoalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _goals_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goals-routing.module */ "./src/app/Features/goals/goals-routing.module.ts");
/* harmony import */ var _goals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goals.component */ "./src/app/Features/goals/goals.component.ts");
/* harmony import */ var _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-goal/my-goal.component */ "./src/app/Features/goals/my-goal/my-goal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _goals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goals.service */ "./src/app/Features/goals/goals.service.ts");
/* harmony import */ var _team_goal_team_goal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team-goal/team-goal.component */ "./src/app/Features/goals/team-goal/team-goal.component.ts");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-slider.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");












class GoalsModule {
}
GoalsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoalsModule });
GoalsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoalsModule_Factory(t) { return new (t || GoalsModule)(); }, providers: [
        _goals_service__WEBPACK_IMPORTED_MODULE_7__["GoalsService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _goals_routing_module__WEBPACK_IMPORTED_MODULE_2__["GoalsRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoalsModule, { declarations: [_goals_component__WEBPACK_IMPORTED_MODULE_3__["GoalsComponent"], _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_4__["MyGoalComponent"], _team_goal_team_goal_component__WEBPACK_IMPORTED_MODULE_8__["TeamGoalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _goals_routing_module__WEBPACK_IMPORTED_MODULE_2__["GoalsRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_goals_component__WEBPACK_IMPORTED_MODULE_3__["GoalsComponent"], _my_goal_my_goal_component__WEBPACK_IMPORTED_MODULE_4__["MyGoalComponent"], _team_goal_team_goal_component__WEBPACK_IMPORTED_MODULE_8__["TeamGoalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _goals_routing_module__WEBPACK_IMPORTED_MODULE_2__["GoalsRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"]
                ],
                providers: [
                    _goals_service__WEBPACK_IMPORTED_MODULE_7__["GoalsService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Features/goals/goals.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Features/goals/goals.service.ts ***!
  \*************************************************/
/*! exports provided: GoalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsService", function() { return GoalsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");





class GoalsService {
    constructor(httpclient, userService) {
        this.httpclient = httpclient;
        this.userService = userService;
        this.addGoal = function (data) {
            data.createdBy = this.userService.LoggedInUser.Id;
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].addGoal, data);
        };
        this.getGoal = function (id) {
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getGoal, { employeeId: id });
        };
        this.deleteGoal = function (data) {
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deleteGoal, { goalId: data });
        };
        this.updateGoal = function (data) {
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].updateGoal, data);
        };
        this.getTeamGoals = function (id) {
            return this.httpclient.get(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getTeamGoals + id);
        };
        this.getEmployeeList = function () {
            return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getEmployeeData, {});
        };
    }
    getGoalById(id) {
        return this.httpclient.post(this.userService.LoggedInUser.PortalName + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getGoal, { goalId: id });
    }
}
GoalsService.ɵfac = function GoalsService_Factory(t) { return new (t || GoalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
GoalsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoalsService, factory: GoalsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Features/goals/my-goal/my-goal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Features/goals/my-goal/my-goal.component.ts ***!
  \*************************************************************/
/*! exports provided: MyGoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGoalComponent", function() { return MyGoalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _goals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../goals.service */ "./src/app/Features/goals/goals.service.ts");
/* harmony import */ var _Services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/layout.service */ "./src/app/Services/layout.service.ts");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-slider.js");












function MyGoalComponent_div_22_div_3_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_22_div_3_i_18_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const goal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.EditIconClicked(goal_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyGoalComponent_div_22_div_3_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_22_div_3_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const goal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.DeleteIconClicked(goal_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyGoalComponent_div_22_div_3_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-slider", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_22_div_3_div_28_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const goal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.RadioButtonClick("hold", goal_r6.formGroup, goal_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_22_div_3_div_28_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const goal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.RadioButtonClick("delay", goal_r6.formGroup, goal_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_22_div_3_div_28_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const goal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.RadioButtonClick("completed", goal_r6.formGroup, goal_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const goal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", goal_r6.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r6.formGroup.controls.goalPercentage.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", goal_r6.formGroup.controls["goalStatus"].value == "hold")("notActive", goal_r6.formGroup.controls["goalStatus"].value != "hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", goal_r6.formGroup.controls["goalStatus"].value == "delay")("notActive", goal_r6.formGroup.controls["goalStatus"].value != "delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", goal_r6.formGroup.controls["goalStatus"].value == "completed")("notActive", goal_r6.formGroup.controls["goalStatus"].value != "completed");
} }
function MyGoalComponent_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_22_div_3_Template_p_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const goal_r6 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.getGoalDescription(goal_r6.goalId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyGoalComponent_div_22_div_3_i_18_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MyGoalComponent_div_22_div_3_i_19_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_22_div_3_Template_i_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const goal_r6 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.SaveIconClicked(goal_r6.formGroup, goal_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MyGoalComponent_div_22_div_3_div_28_Template, 19, 16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const goal_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r5.setStyles(goal_r6.goalStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r6.goalHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("redcolor", goal_r6.goalStatus == "delay")("yellowcolorp", goal_r6.goalStatus == "hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r6.goalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r6.goalEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r6.goalDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.userService.CheckPermission(ctx_r5.userService.Elements.Goals, ctx_r5.userService.Operations.Edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.userService.CheckPermission(ctx_r5.userService.Elements.Goals, ctx_r5.userService.Operations.Delete));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", goal_r6.formGroup != null);
} }
function MyGoalComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Work in Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyGoalComponent_div_22_div_3_Template, 29, 13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.GetGoalInprogressList);
} }
function MyGoalComponent_div_24_div_3_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_24_div_3_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const goal_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.confirmationDialogOpen(goal_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyGoalComponent_div_24_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_24_div_3_Template_p_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const goal_r28 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.getGoalDescription(goal_r28.goalId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_24_div_3_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const goal_r28 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.EditIconClicked(goal_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_div_24_div_3_Template_i_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const goal_r28 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.DeleteIconClicked(goal_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MyGoalComponent_div_24_div_3_button_26_Template, 2, 0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const goal_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r28.goalHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r28.goalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r28.goalEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r28.goalDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", goal_r28.goalStatus == "completed");
} }
function MyGoalComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyGoalComponent_div_24_div_3_Template, 27, 5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.GetGoalCompletedList);
} }
function MyGoalComponent_form_31_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide goal name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyGoalComponent_form_31_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide Goal description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyGoalComponent_form_31_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select Start date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyGoalComponent_form_31_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Goal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyGoalComponent_form_31_span_5_Template, 3, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Goal Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyGoalComponent_form_31_span_10_Template, 3, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MyGoalComponent_form_31_span_27_Template, 3, 0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_form_31_Template_input_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.CreateGoal(ctx_r40.createGoalForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_form_31_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.CancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.createGoalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.createGoalForm.controls["goalHeading"].valid && (ctx_r2.createGoalForm.controls["goalHeading"].dirty || ctx_r2.createGoalForm.controls["goalHeading"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.createGoalForm.controls["goalDescription"].valid && (ctx_r2.createGoalForm.controls["goalDescription"].dirty || ctx_r2.createGoalForm.controls["goalDescription"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.createGoalForm.controls["goalStartDate"].valid && (ctx_r2.createGoalForm.controls["goalStartDate"].dirty || ctx_r2.createGoalForm.controls["goalStartDate"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.createGoalForm.valid);
} }
function MyGoalComponent_form_38_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Goal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Goal Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_form_38_Template_input_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.editSaveButtonClicked(ctx_r43.editGoalForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_form_38_Template_input_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.CancelButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.editGoalForm);
} }
function MyGoalComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "attachments.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "10 KB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r46.goalHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r46.goalEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r46.goalDescription);
} }
const _c0 = function () { return { width: "50vw" }; };
class MyGoalComponent {
    constructor(goalservice, layoutservice, fb, userService, messageService) {
        this.goalservice = goalservice;
        this.layoutservice = layoutservice;
        this.fb = fb;
        this.userService = userService;
        this.messageService = messageService;
        this.displayConfirmationDialog = false;
        this.confirmationNote = '';
        this.confirmationDialogSelectedGoal = null;
        this.RadioButtonClick = function (data, form, goal) {
            form.patchValue({
                goalStatus: data
            });
            this.SaveIconClicked(form, goal);
        };
        this.initialiseCreateForm = function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#add-task').addClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
            this.createGoalForm = this.fb.group({
                taskId: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                departmentId: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeId: [this.userService.LoggedInUser.Id],
                goalStatus: ['Inprogress'],
                goalApprovedStatus: ['Inprogress'],
                confirmNote: [''],
                goalHeading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalAttachment: [''],
                goalStartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalEndDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                statusLevel: []
            });
        };
        this.initialiseEditForm = function (data) {
            console.log("edit");
            console.log(data.goalId);
            this.editGoalForm = this.fb.group({
                goalId: [data.goalId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                taskId: [data.goalId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                departmentId: [data.departmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeId: [this.userService.LoggedInUser.Id],
                goalStatus: [data.goalStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalApprovedStatus: [data.goalApprovedStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                confirmNote: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalHeading: [data.goalHeading, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalDescription: [data.goalDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalAttachment: [data.goalAttachment, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalStartDate: [data.goalStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalEndDate: [data.goalEndDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
            console.log("edit goal form " + this.editGoalForm.value);
        };
        this.CreateGoal = function (data) {
            console.log("create button clicked");
            console.log("data " + data);
            this.goalservice.addGoal(data).subscribe((res) => {
                console.log("res " + res);
                if (res.errorCode == 0) {
                    var resultData = res.dataObj;
                    resultData.formGroup = this.fb.group({
                        goalStatus: [resultData.goalStatus],
                        goalPercentage: [resultData.goalPercentage]
                    });
                    this.goallist.push(resultData);
                    console.log("success");
                    this.SearchResults = this.goallist;
                    this.messageService.add({ severity: 'success', summary: 'goal created', detail: 'Successfully created goal' });
                    this.CancelButtonClick();
                    this.createGoalForm.reset();
                }
                else {
                    this.messageService.add({ severity: 'error', summary: 'creation failed', detail: 'Failed to create goal' });
                }
            });
        };
        this.editSaveButtonClicked = function (data) {
            data.activateFlag = 1;
            console.log("save" + data.goalId);
            this.goalservice.updateGoal(data).subscribe((res) => {
                if (res.errorCode == 0) {
                    this.initialiseEditForm(res.dataObj);
                    var resultData = res.dataObj;
                    resultData.formGroup = this.fb.group({
                        goalStatus: [resultData.goalStatus],
                        goalPercentage: [resultData.goalPercentage]
                    });
                    for (let index = 0; index < this.goallist.length; index++) {
                        const element = this.goallist[index];
                        console.log("element.goalId" + element.goalId);
                        console.log("data.goalId" + data.goalId);
                        if (element.goalId == data.goalId) {
                            this.goallist[index] = resultData;
                        }
                    }
                    this.SearchResults = this.goallist;
                    this.messageService.add({ severity: 'success', summary: 'Goal updated', detail: 'Goal updated successfully' });
                    this.CancelButtonClick();
                    this.ResetForm();
                }
                else {
                    this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
                }
            }, (error) => {
                console.log(error);
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
            });
        };
        this.FilterData = function (event) {
            var temp = this.goallist;
            var data = event.target.value;
            console.log(data);
            console.log(temp);
            this.SearchResults = temp.filter(item => {
                console.log(item);
                console.log("---------");
                console.log(this.FilterKey);
                console.log(item[this.FilterKey]);
                console.log(item[this.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
                return item[this.FilterKey].toLowerCase().includes(data.toLowerCase());
            });
        };
        this.getGoalDescription = function (id) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#task-description').addClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
            this.goalservice.getGoalById(id).subscribe((res) => {
                if (res.errorCode == 0) {
                    this.SpecificGoal = res.dataObj;
                }
            });
        };
    }
    ngOnInit() {
        this.goalservice.getGoal(this.userService.LoggedInUser.Id).subscribe((res) => {
            if (res.errorCode == 0) {
                this.goallist = res.dataObj;
                this.UpdateDashboardFormsToList(this.goallist);
                console.log(this.goallist);
                this.SearchResults = this.goallist;
                this.FilterKey = "goalHeading";
            }
            else {
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().removeClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
        });
    }
    UpdateDashboardFormsToList(data) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            data[index].formGroup = this.fb.group({
                goalStatus: [element.goalStatus],
                goalPercentage: [element.goalPercentage]
            });
        }
        console.log(data);
    }
    SaveIconClicked(form, goal) {
        goal.goalStatus = form.value.goalStatus;
        goal.goalPercentage = form.value.goalPercentage;
        goal.formGroup = null;
        this.editSaveButtonClicked(goal);
    }
    ComformationDialog() {
    }
    get GetGoalCompletedList() {
        var list = [];
        this.SearchResults.forEach(element => {
            if (element.goalStatus == "completed" || element.goalStatus == "submitted" || element.goalStatus == "approved") {
                list.push(element);
            }
        });
        return list;
    }
    get GetGoalInprogressList() {
        var list = [];
        this.SearchResults.forEach(element => {
            if (element.goalStatus != "completed" && element.goalStatus != "submitted" && element.goalStatus != "approved") {
                list.push(element);
            }
        });
        return list;
    }
    AddGoalClicked() {
        console.log("method clicked");
        this.initialiseCreateForm();
    }
    EditIconClicked(data) {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#edit-task').addClass('open-slide');
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
        console.log("edit icon clicked");
        console.log("data " + data);
        this.initialiseEditForm(data);
    }
    DeleteIconClicked(data) {
        console.log("delete icon clicked");
        console.log("data is " + data);
        this.goalservice.deleteGoal(data.goalId).subscribe((res) => {
            if (res.errorCode == 0) {
                this.goallist.splice(this.goallist.indexOf(data), 1);
                this.SearchResults = this.goallist;
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'goal deleted' });
            }
            else {
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
            }
        }, (err) => {
            console.log(err);
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
        });
    }
    setStyles(goalStatus) {
        if (goalStatus == "hold") {
            return "#ffeccc";
        }
        else if (goalStatus == 'delay') {
            return "#ffd3d8";
        }
        else {
            return 'white';
        }
    }
    CancelButtonClick() {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').parent().removeClass('open-slide');
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
    }
    SubmitConfirmationDialog() {
        var goal = this.confirmationDialogSelectedGoal;
        goal.confirmNote = this.confirmationNote;
        goal.goalStatus = "submitted";
        goal.formGroup = null;
        this.editSaveButtonClicked(goal);
        this.ResetConfirmationDialog();
    }
    confirmationDialogOpen(goal) {
        this.confirmationDialogSelectedGoal = goal;
        this.displayConfirmationDialog = true;
    }
    ResetConfirmationDialog() {
        this.confirmationNote = '';
        this.displayConfirmationDialog = false;
    }
}
MyGoalComponent.ɵfac = function MyGoalComponent_Factory(t) { return new (t || MyGoalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
MyGoalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyGoalComponent, selectors: [["app-my-goal"]], decls: 60, vars: 11, consts: [[1, "main-panel"], ["header", "Confirm Note", 3, "visible", "baseZIndex", "visibleChange"], [2, "width", "100%", "height", "200px", 3, "ngModel", "ngModelChange"], ["type", "button", "Class", "btn", 3, "click"], ["type", "button", "Class", "btn btn-danger", 3, "click"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "search-form"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "input"], [1, "col-md-2", "pull-right"], ["type", "submit", "value", "Add New Goal", 1, "team", "btn", "btn-primary", 3, "click"], [1, "col-md-12"], [1, "col-md-6"], ["class", "card-outer", 4, "ngIf"], ["id", "add-task", 1, "slide-popup"], [1, "slide-close"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "slide-content"], [3, "formGroup", 4, "ngIf"], ["id", "edit-task", 1, "slide-popup"], ["id", "task-description", 1, "slide-popup"], ["class", "slide-content", 4, "ngFor", "ngForOf"], [1, "comment-item"], [1, "pro-thumb", 2, "background-image", "url('assets/img/face-3.jpg')"], ["href", "#", 1, "reply"], [1, "pro-thumb"], ["type", "text", "placeholder", "Write a comment", 1, "form-control"], [1, "card-outer"], ["class", "task-card", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "task-card"], [1, "col-md-9"], [1, "col-md-3"], [1, "statusbox"], [1, "date-section"], [3, "click"], [1, "goal-action"], ["class", "icon-edit", 3, "click", 4, "ngIf"], ["class", "icon-Delete", 3, "click", 4, "ngIf"], [1, "icon-success", 3, "click"], [1, "icon-comment", "managewidth"], [1, "icon-attachment", "managewidth"], [1, "row", "card-footer"], ["class", "col-md-12", 3, "formGroup", 4, "ngIf"], [1, "icon-edit", 3, "click"], [1, "icon-Delete", 3, "click"], [1, "col-md-12", 3, "formGroup"], [1, "skill-slider"], ["id", "ex3CurrentSliderValLabel", 1, "skill-value"], ["id", "ex3SliderVal"], ["formControlName", "goalPercentage", 3, "min", "max"], [1, "form-group"], ["for", "fun", 1, "control-label", "text-right"], [1, "input-group"], ["id", "radioBtn", 1, "btn-group"], ["data-toggle", "fun", "data-title", "Y", 1, "btn", "btn-primary", "gender", "btn-sm", "hold", "active", 3, "click"], ["data-toggle", "fun", "data-title", "X", 1, "btn", "btn-primary", "gender", "btn-sm", "delay", "notActive", 3, "click"], ["data-toggle", "fun", "data-title", "N", 1, "btn", "btn-primary", "btn-sm", "gender", "due", "notActive", 3, "click"], ["type", "hidden", "name", "fun", "id", "fun", "formControlName", "goalStatus"], ["class", "task-card", 4, "ngFor", "ngForOf"], [1, "statusbox", "greencolor"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [3, "formGroup"], ["for", ""], ["type", "text", "placeholder", "Enter goal title here", "formControlName", "goalHeading", 1, "form-control"], ["class", "error", 4, "ngIf"], ["Class", "form-control", "placeholder", "Enter Goal details here", "rows", "4", "cols", "30", "formControlName", "goalDescription"], [1, "file-upload"], ["type", "text", "readonly", "", "placeholder", "File details here", "formControlName", "goalAttachment", 1, "form-control"], [1, "input-group-btn"], [1, "file-upload", "btn", "btn-success"], ["id", "upload", 1, "upl"], ["type", "file", "id", "up", 1, "upload", "up"], [1, "col-md-5"], ["type", "date", "formControlName", "goalStartDate", 1, "form-control"], [1, "col-md-2", "text-center"], [1, "to-padding"], ["type", "date", "formControlName", "goalEndDate", 1, "form-control"], ["type", "submit", "value", "CREATE Goal", 1, "team", "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", "value", "Cancel", 1, "btn", "btn-primary", 3, "click"], [1, "error"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], ["type", "text", "placeholder", "Enter task title here", "formControlName", "goalHeading", 1, "form-control"], ["Class", "form-control", "placeholder", "Enter Goal details here", "formControlName", "goalDescription", "rows", "4", "cols", "50"], ["type", "submit", "value", "Save Goal", 1, "team", "btn", "btn-primary", 3, "click"], [1, "color-red"], [1, "fa", "fa-clock-o"], [1, "icon-discription"], [1, "icon-attachment"], [1, "attachment"], ["src", "assets/img/img.png", "alt", ""]], template: function MyGoalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dialog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function MyGoalComponent_Template_p_dialog_visibleChange_1_listener($event) { return ctx.displayConfirmationDialog = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyGoalComponent_Template_textarea_ngModelChange_2_listener($event) { return ctx.confirmationNote = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_Template_button_click_4_listener() { return ctx.SubmitConfirmationDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_Template_button_click_6_listener() { return ctx.ResetConfirmationDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MyGoalComponent_Template_input_input_14_listener($event) { return ctx.FilterData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyGoalComponent_Template_input_click_16_listener() { return ctx.AddGoalClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MyGoalComponent_div_22_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MyGoalComponent_div_24_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Create Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MyGoalComponent_form_31_Template, 37, 5, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Edit Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MyGoalComponent_form_38_Template, 35, 1, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MyGoalComponent_div_42_Template, 20, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Amanda Kherr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Loream provides you with intelligently crafted filler text with decent and simple UI. The loream text itself is specifically created to be appealing to eyes. Creating a positive placebo for your project. Making your project attractive and irresistible even at production phase. Try loream now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.displayConfirmationDialog)("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmationNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SearchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SearchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createGoalForm != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editGoalForm != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SpecificGoal);
    } }, directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_7__["Dialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["Footer"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_slider__WEBPACK_IMPORTED_MODULE_9__["Slider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2dvYWxzL215LWdvYWwvbXktZ29hbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyGoalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-goal',
                templateUrl: './my-goal.component.html',
                styleUrls: ['./my-goal.component.css']
            }]
    }], function () { return [{ type: _goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"] }, { type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Features/goals/team-goal/team-goal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Features/goals/team-goal/team-goal.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamGoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamGoalComponent", function() { return TeamGoalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _goals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../goals.service */ "./src/app/Features/goals/goals.service.ts");
/* harmony import */ var _Services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/layout.service */ "./src/app/Services/layout.service.ts");
/* harmony import */ var src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function TeamGoalComponent_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamGoalComponent_div_14_div_3_Template_p_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const goal_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.getGoalDescription(goal_r4.goalId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Created BY :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const goal_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r3.setStyles(goal_r4.goalStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r4.goalHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("redcolor", goal_r4.goalStatus == "delay")("yellowcolorp", goal_r4.goalStatus == "hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r4.goalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r4.goalEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r4.goalDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getEmployeeById(goal_r4.employeeId));
} }
function TeamGoalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Work in Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamGoalComponent_div_14_div_3_Template, 19, 11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.GetGoalInprogressList);
} }
function TeamGoalComponent_div_16_div_3_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamGoalComponent_div_16_div_3_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const goal_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.ApproveGoal(goal_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamGoalComponent_div_16_div_3_div_19_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const goal_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.DeclineGoal(goal_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Decline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamGoalComponent_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamGoalComponent_div_16_div_3_Template_p_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const goal_r8 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.getGoalDescription(goal_r8.goalId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Created BY :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TeamGoalComponent_div_16_div_3_div_19_Template, 7, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const goal_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r8.goalHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r8.goalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r8.goalEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goal_r8.goalDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getEmployeeById(goal_r8.employeeId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", goal_r8.goalStatus == "submitted");
} }
function TeamGoalComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamGoalComponent_div_16_div_3_Template, 20, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.GetGoalCompletedList);
} }
function TeamGoalComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "attachments.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "10 KB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r17.goalHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r17.goalEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r17.goalDescription);
} }
class TeamGoalComponent {
    constructor(goalservice, layoutservice, fb, userService, messageService) {
        this.goalservice = goalservice;
        this.layoutservice = layoutservice;
        this.fb = fb;
        this.userService = userService;
        this.messageService = messageService;
        this.RadioButtonClick = function (data, form) {
            form.patchValue({
                goalStatus: data
            });
        };
        this.initialiseCreateForm = function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#add-task').addClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
            this.createGoalForm = this.fb.group({
                taskId: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                departmentId: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeId: [this.userService.LoggedInUser.Id],
                goalStatus: ['approved', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalApprovedStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                confirmNote: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalHeading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalAttachment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalStartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalEndDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                statusLevel: []
            });
        };
        this.initialiseEditForm = function (data) {
            console.log("edit");
            console.log(data.goalId);
            this.editGoalForm = this.fb.group({
                goalId: [data.goalId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                taskId: [data.goalId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                departmentId: [data.departmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                employeeId: [this.userService.LoggedInUser.Id],
                goalStatus: [data.goalStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalApprovedStatus: [data.goalApprovedStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                confirmNote: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalHeading: [data.goalHeading, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalDescription: [data.goalDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalAttachment: [data.goalAttachment, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalStartDate: [data.goalStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                goalEndDate: [data.goalEndDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
            console.log("edit goal form " + this.editGoalForm.value);
        };
        this.CreateGoal = function (data) {
            console.log("create button clicked");
            console.log("data " + data);
            this.goalservice.addGoal(data).subscribe((res) => {
                console.log("res " + res);
                if (res.errorCode == 0) {
                    var resultData = res.dataObj;
                    resultData.formGroup = this.fb.group({
                        goalStatus: [resultData.goalStatus],
                        goalPercentage: [resultData.goalPercentage]
                    });
                    this.goallist.push(resultData);
                    console.log("success");
                    this.SearchResults = this.goallist;
                    this.messageService.add({ severity: 'success', summary: 'Successfully created goal', detail: 'Via MessageService' });
                    this.createGoalForm.reset();
                }
                else {
                    this.messageService.add({ severity: 'error', summary: 'creation failed', detail: 'Via MessageService' });
                }
            });
        };
        this.editSaveButtonClicked = function (data) {
            data.activateFlag = 1;
            console.log("save" + data.goalId);
            this.goalservice.updateGoal(data).subscribe((res) => {
                if (res.errorCode == 0) {
                    this.initialiseEditForm(res.dataObj);
                    var resultData = res.dataObj;
                    resultData.formGroup = this.fb.group({
                        goalStatus: [resultData.goalStatus],
                        goalPercentage: [resultData.goalPercentage]
                    });
                    for (let index = 0; index < this.goallist.length; index++) {
                        const element = this.goallist[index];
                        console.log("element.goalId" + element.goalId);
                        console.log("data.goalId" + data.goalId);
                        if (element.goalId == data.goalId) {
                            this.goallist[index] = resultData;
                        }
                    }
                    this.SearchResults = this.goallist;
                    this.messageService.add({ severity: 'success', summary: 'Goal updated', detail: 'Goal updated successfully' });
                    this.ResetForm();
                }
                else {
                    this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
                }
            }, (error) => {
                console.log(error);
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
            });
        };
        this.FilterData = function (event) {
            var temp = this.goallist;
            var data = event.target.value;
            console.log(data);
            console.log(temp);
            this.SearchResults = temp.filter(item => {
                console.log(item);
                console.log("---------");
                console.log(this.FilterKey);
                console.log(item[this.FilterKey]);
                console.log(item[this.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
                return item[this.FilterKey].toLowerCase().includes(data.toLowerCase());
            });
        };
        this.getGoalDescription = function (id) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#task-description').addClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
            this.goalservice.getGoalById(id).subscribe((res) => {
                if (res.errorCode == 0) {
                    this.SpecificGoal = res.dataObj;
                }
            });
        };
    }
    ngOnInit() {
        this.goalservice.getTeamGoals(this.userService.LoggedInUser.Id).subscribe((res) => {
            if (res.errorCode == 0) {
                var id;
                this.goallist = res.dataObj;
                this.goalservice.getEmployeeList().subscribe((res) => {
                    this.employeeList = res.dataObj;
                    console.log("employee lsit" + this.employeeList);
                });
                console.log("id of emolyee " + this.employeeDetails);
                this.UpdateDashboardFormsToList(this.goallist);
                console.log(this.goallist);
                this.SearchResults = this.goallist;
                this.FilterKey = "goalHeading";
            }
            else {
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().removeClass('open-slide');
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
        });
    }
    UpdateDashboardFormsToList(data) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            data[index].formGroup = this.fb.group({
                goalStatus: [element.goalStatus],
                goalPercentage: [element.goalPercentage]
            });
        }
        console.log(data);
    }
    SaveIconClicked(form, goal) {
        goal.goalStatus = form.value.goalStatus;
        goal.goalPercentage = form.value.goalPercentage;
        goal.formGroup = null;
        this.editSaveButtonClicked(goal);
    }
    get GetGoalCompletedList() {
        var list = [];
        this.SearchResults.forEach(element => {
            if (element.goalStatus == "completed" || element.goalStatus == "submitted" || element.goalStatus == "approved") {
                list.push(element);
            }
        });
        return list;
    }
    get GetGoalInprogressList() {
        var list = [];
        this.SearchResults.forEach(element => {
            if (element.goalStatus != "completed" && element.goalStatus != "submitted" && element.goalStatus != "approved") {
                list.push(element);
            }
        });
        return list;
    }
    AddGoalClicked() {
        console.log("method clicked");
        this.initialiseCreateForm();
    }
    EditIconClicked(data) {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#edit-task').addClass('open-slide');
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('gray-over');
        console.log("edit icon clicked");
        console.log("data " + data);
        this.initialiseEditForm(data);
    }
    DeleteIconClicked(data) {
        console.log("delete icon clicked");
        console.log("data is " + data);
        this.goalservice.deleteGoal(data.goalId).subscribe((res) => {
            if (res.errorCode == 0) {
                this.goallist.splice(this.goallist.indexOf(data), 1);
                this.SearchResults = this.goallist;
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'goal deleted' });
            }
            else {
                this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
            }
        }, (err) => {
            console.log(err);
            this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
        });
    }
    setStyles(goalStatus) {
        if (goalStatus == "hold") {
            return "#ffeccc";
        }
        else if (goalStatus == 'delay') {
            return "#ffd3d8";
        }
        else {
            return 'white';
        }
    }
    CancelButtonClick() {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-close').parent().removeClass('open-slide');
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('gray-over');
    }
    getEmployeeById(id) {
        for (let index = 0; index < this.employeeList.length; index++) {
            const element = this.employeeList[index];
            if (element.employeeId == id) {
                return element.employeeFname + " " + element.employeeMname;
            }
        }
        return "";
    }
    ApproveGoal(goal) {
        goal.goalStatus = "approved";
        goal.formGroup = null;
        this.editSaveButtonClicked(goal);
    }
    DeclineGoal(goal) {
        goal.goalStatus = "declined";
        goal.formGroup = null;
        this.editSaveButtonClicked(goal);
    }
}
TeamGoalComponent.ɵfac = function TeamGoalComponent_Factory(t) { return new (t || TeamGoalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
TeamGoalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamGoalComponent, selectors: [["app-team-goal"]], decls: 38, vars: 3, consts: [[1, "main-panel"], [1, "content", 2, "background-color", "#DAEBEB"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "search-form"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "input"], [1, "col-md-2", "pull-right"], [1, "col-md-12"], [1, "col-md-6"], ["class", "card-outer", 4, "ngIf"], ["id", "task-description", 1, "slide-popup"], [1, "slide-close"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], ["class", "slide-content", 4, "ngFor", "ngForOf"], [1, "slide-content"], [1, "comment-item"], [1, "pro-thumb", 2, "background-image", "url('assets/img/face-3.jpg')"], ["href", "#", 1, "reply"], [1, "pro-thumb"], ["type", "text", "placeholder", "Write a comment", 1, "form-control"], [1, "card-outer"], ["class", "task-card", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "task-card"], [1, "col-md-9"], [1, "col-md-3"], [1, "statusbox"], [1, "date-section"], [3, "click"], ["class", "task-card", 4, "ngFor", "ngForOf"], [1, "statusbox", "greencolor"], ["class", "row", 4, "ngIf"], [1, "col-sm-6"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "color-red"], [1, "fa", "fa-clock-o"], [1, "icon-discription"], [1, "icon-attachment"], [1, "attachment"], ["src", "assets/img/img.png", "alt", ""]], template: function TeamGoalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TeamGoalComponent_Template_input_input_7_listener($event) { return ctx.FilterData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeamGoalComponent_div_14_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TeamGoalComponent_div_16_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TeamGoalComponent_div_20_Template, 20, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Amanda Kherr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Loream provides you with intelligently crafted filler text with decent and simple UI. The loream text itself is specifically created to be appealing to eyes. Creating a positive placebo for your project. Making your project attractive and irresistible even at production phase. Try loream now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SearchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SearchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SpecificGoal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2dvYWxzL3RlYW0tZ29hbC90ZWFtLWdvYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamGoalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-goal',
                templateUrl: './team-goal.component.html',
                styleUrls: ['./team-goal.component.css']
            }]
    }], function () { return [{ type: _goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"] }, { type: _Services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=Features-goals-goals-module-es2015.js.map