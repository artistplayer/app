(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-files-files-module~pages-playlist-playlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg class=\"spinner\" width=\"65px\" height=\"65px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle>\n</svg>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/preview/preview.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/preview/preview.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"light\">\n        <ion-title *ngIf=\"file\">\n            {{file.title ? file.artist + ' - ' + file.title : file.filename}}\n        </ion-title>\n\n        <ion-button slot=\"end\" size=\"large\" [fill]=\"'clear'\" (tap)=\"close()\">\n            <fa-icon icon=\"times\"></fa-icon>\n        </ion-button>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollX]=\"false\" [scrollY]=\"false\">\n    <ion-toolbar text-center color=\"light\">\n        <ion-range class=\"time-slider\"\n                   color=\"danger\"\n                   mode=\"md\"\n                   min=\"0\"\n                   [value]=\"audioElement?.currentTime\"\n                   [max]=\"audioElement?.duration\"\n        ></ion-range>\n        <span slot=\"end\">{{getTimecode('{m}:{ss}', 'current')}} / {{getTimecode('{m}:{ss}', 'total')}}</span>\n\n\n    </ion-toolbar>\n\n\n    <audio *ngIf=\"file\" controls (loadstart)=\"loadAudioElement($event.target)\">\n        <source src=\"{{file.url}}\">\n    </audio>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n:host .spinner {\n  -webkit-animation: rotator 1.4s linear infinite;\n          animation: rotator 1.4s linear infinite;\n}\n@-webkit-keyframes rotator {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n@keyframes rotator {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n}\n:host .path {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  -webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;\n          animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;\n}\n@-webkit-keyframes colors {\n  0% {\n    stroke: #4285F4;\n  }\n  25% {\n    stroke: #DE3E35;\n  }\n  50% {\n    stroke: #F7C223;\n  }\n  75% {\n    stroke: #1B9A59;\n  }\n  100% {\n    stroke: #4285F4;\n  }\n}\n@keyframes colors {\n  0% {\n    stroke: #4285F4;\n  }\n  25% {\n    stroke: #DE3E35;\n  }\n  50% {\n    stroke: #F7C223;\n  }\n  75% {\n    stroke: #1B9A59;\n  }\n  100% {\n    stroke: #4285F4;\n  }\n}\n@-webkit-keyframes dash {\n  0% {\n    stroke-dashoffset: 187;\n  }\n  50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg);\n  }\n}\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 187;\n  }\n  50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg);\n  }\n  100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURLRTtFQUNFLCtDQUFBO1VBQUEsdUNBQUE7QUNISjtBRE1FO0VBQ0U7SUFDRSx1QkFBQTtFQ0pKO0VETUU7SUFDRSx5QkFBQTtFQ0pKO0FBQ0Y7QURGRTtFQUNFO0lBQ0UsdUJBQUE7RUNKSjtFRE1FO0lBQ0UseUJBQUE7RUNKSjtBQUNGO0FET0U7RUFDRSxxQkFqQk87RUFrQlAsb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1GQUFBO1VBQUEsMkVBQUE7QUNMSjtBRFNFO0VBQ0U7SUFDRSxlQUFBO0VDUEo7RURTRTtJQUNFLGVBQUE7RUNQSjtFRFNFO0lBQ0UsZUFBQTtFQ1BKO0VEU0U7SUFDRSxlQUFBO0VDUEo7RURTRTtJQUNFLGVBQUE7RUNQSjtBQUNGO0FEUkU7RUFDRTtJQUNFLGVBQUE7RUNQSjtFRFNFO0lBQ0UsZUFBQTtFQ1BKO0VEU0U7SUFDRSxlQUFBO0VDUEo7RURTRTtJQUNFLGVBQUE7RUNQSjtFRFNFO0lBQ0UsZUFBQTtFQ1BKO0FBQ0Y7QURVRTtFQUNFO0lBQ0Usc0JBNUNLO0VDb0NUO0VEVUU7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VDUko7RURVRTtJQUNFLHNCQW5ESztJQW9ETCx5QkFBQTtFQ1JKO0FBQ0Y7QURIRTtFQUNFO0lBQ0Usc0JBNUNLO0VDb0NUO0VEVUU7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VDUko7RURVRTtJQUNFLHNCQW5ESztJQW9ETCx5QkFBQTtFQ1JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cblxuICAkb2Zmc2V0OiAxODc7XG4gICRkdXJhdGlvbjogMS40cztcblxuICAuc3Bpbm5lciB7XG4gICAgYW5pbWF0aW9uOiByb3RhdG9yICRkdXJhdGlvbiBsaW5lYXIgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHJvdGF0b3Ige1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgLnBhdGgge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICRvZmZzZXQ7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIGFuaW1hdGlvbjogZGFzaCAkZHVyYXRpb24gZWFzZS1pbi1vdXQgaW5maW5pdGUsXG4gICAgY29sb3JzICgkZHVyYXRpb24qNCkgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNvbG9ycyB7XG4gICAgMCUge1xuICAgICAgc3Ryb2tlOiAjNDI4NUY0O1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgc3Ryb2tlOiAjREUzRTM1O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgc3Ryb2tlOiAjRjdDMjIzO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgc3Ryb2tlOiAjMUI5QTU5O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHN0cm9rZTogIzQyODVGNDtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGRhc2gge1xuICAgIDAlIHtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAkb2Zmc2V0O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICRvZmZzZXQvNDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICRvZmZzZXQ7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpO1xuICAgIH1cbiAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5zcGlubmVyIHtcbiAgYW5pbWF0aW9uOiByb3RhdG9yIDEuNHMgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyByb3RhdG9yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIH1cbn1cbjpob3N0IC5wYXRoIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTg3O1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBhbmltYXRpb246IGRhc2ggMS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgY29sb3JzIDUuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGNvbG9ycyB7XG4gIDAlIHtcbiAgICBzdHJva2U6ICM0Mjg1RjQ7XG4gIH1cbiAgMjUlIHtcbiAgICBzdHJva2U6ICNERTNFMzU7XG4gIH1cbiAgNTAlIHtcbiAgICBzdHJva2U6ICNGN0MyMjM7XG4gIH1cbiAgNzUlIHtcbiAgICBzdHJva2U6ICMxQjlBNTk7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlOiAjNDI4NUY0O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE4NztcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA0Ni43NTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxODc7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")).default]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/loader/loader.module.ts ***!
  \****************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoaderModule = /** @class */ (function () {
    function LoaderModule() {
    }
    LoaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            exports: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]]
        })
    ], LoaderModule);
    return LoaderModule;
}());



/***/ }),

/***/ "./src/app/components/preview/preview.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/preview/preview.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  border-radius: 15px;\n  background: #fff;\n}\n:host .file-label {\n  font-size: 13px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n:host .time-slider {\n  --knob-size: 0;\n  --bar-border-radius: 2px;\n}\n:host .time-slider:hover {\n  --knob-size: 20px;\n}\n:host audio {\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL2NvbXBvbmVudHMvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQ0FKO0FERUk7RUFDRSxpQkFBQTtBQ0FOO0FESUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAuZmlsZS1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gIC50aW1lLXNsaWRlciB7XG4gICAgLS1rbm9iLXNpemU6IDA7XG4gICAgLS1iYXItYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAtLWtub2Itc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cblxuICBhdWRpbyB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxufSIsIjpob3N0IHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbjpob3N0IC5maWxlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG46aG9zdCAudGltZS1zbGlkZXIge1xuICAtLWtub2Itc2l6ZTogMDtcbiAgLS1iYXItYm9yZGVyLXJhZGl1czogMnB4O1xufVxuOmhvc3QgLnRpbWUtc2xpZGVyOmhvdmVyIHtcbiAgLS1rbm9iLXNpemU6IDIwcHg7XG59XG46aG9zdCBhdWRpbyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/preview/preview.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/preview/preview.component.ts ***!
  \*********************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/file.service */ "./src/app/services/api/file.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(fileService, modalController) {
        this.fileService = fileService;
        this.modalController = modalController;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileService.find(this.fileId).then(function (file) {
            _this.file = file;
        });
    };
    PreviewComponent.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    PreviewComponent.prototype.loadAudioElement = function (element, autoPlay) {
        if (autoPlay === void 0) { autoPlay = true; }
        this.audioElement = element;
        console.log('load');
        this.audioElement.currentTime = 0;
        if (autoPlay) {
            this.audioElement.play();
        }
        element.addEventListener('timeupdate', this.listener.bind(this));
    };
    PreviewComponent.prototype.listener = function () {
        var element = this.audioElement;
        if (this.file) {
            if (element.currentTime >= element.duration - 0.416) {
                element.pause();
                console.log('/////');
                element.currentTime = 0;
            }
        }
    };
    PreviewComponent.prototype.toggle = function () {
        if (this.audioElement.paused) {
            this.audioElement.play();
        }
        else {
            this.audioElement.pause();
        }
    };
    PreviewComponent.prototype.getTimecode = function (str, type) {
        if (this.audioElement) {
            var time_1 = type === 'current' ? this.convertTime(this.audioElement.currentTime) : this.convertTime(this.audioElement.duration);
            Object.keys(time_1).forEach(function (p) {
                str = str.replace('{' + p + '}', time_1[p]);
            });
            return str;
        }
        return "0:00";
    };
    PreviewComponent.prototype.convertTime = function (time) {
        var result = { h: null, m: null, s: null, hh: null, mm: null, ss: null, i: null, time: time };
        result.h = Math.floor(time / 60 / 60);
        result.m = Math.floor((time / 60) - (result.h * 60));
        result.s = Math.round(time - (result.m * 60) - (result.h * 60));
        result.hh = (result.h.toString().length < 2 ? '0' : null) + result.h;
        result.mm = (result.m.toString().length < 2 ? '0' : null) + result.m;
        result.ss = (result.s.toString().length < 2 ? '0' : null) + result.s;
        return result;
    };
    PreviewComponent.ctorParameters = function () { return [
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PreviewComponent.prototype, "fileId", void 0);
    PreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/preview/preview.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preview.component.scss */ "./src/app/components/preview/preview.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/components/preview/preview.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/preview/preview.module.ts ***!
  \******************************************************/
/*! exports provided: PreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewModule", function() { return PreviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview.component */ "./src/app/components/preview/preview.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PreviewModule = /** @class */ (function () {
    function PreviewModule() {
    }
    PreviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            entryComponents: [_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"]],
            exports: [_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"]]
        })
    ], PreviewModule);
    return PreviewModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-files-files-module~pages-playlist-playlist-module.js.map