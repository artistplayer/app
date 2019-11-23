(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-statistics-statistics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistics.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistics.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"ion-text-left ion-padding-top\">\n    <div class=\"ion-padding-start\">\n      Statistics\n    </div>\n    <ion-button slot=\"end\" size=\"large\" [fill]=\"'clear'\" [color]=\"'light'\" (tap)=\"uploadStats()\">\n      <fa-icon icon=\"upload\"></fa-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h2>14-11-2019</h2>\n  <ul>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n\n  <h2>14-11-2019</h2>\n  <ul>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/statistics/statistics.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/statistics/statistics.module.ts ***!
  \*******************************************************/
/*! exports provided: StatisticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageModule", function() { return StatisticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statistics.page */ "./src/app/pages/statistics/statistics.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var routes = [
    {
        path: '',
        component: _statistics_page__WEBPACK_IMPORTED_MODULE_6__["StatisticsPage"]
    }
];
var StatisticsPageModule = /** @class */ (function () {
    function StatisticsPageModule() {
    }
    StatisticsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_statistics_page__WEBPACK_IMPORTED_MODULE_6__["StatisticsPage"]]
        })
    ], StatisticsPageModule);
    return StatisticsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/statistics/statistics.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/statistics/statistics.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/statistics/statistics.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/statistics/statistics.page.ts ***!
  \*****************************************************/
/*! exports provided: StatisticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPage", function() { return StatisticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/stats.service */ "./src/app/services/api/stats.service.ts");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/file.service */ "./src/app/services/api/file.service.ts");
/* harmony import */ var _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/playlist.service */ "./src/app/services/api/playlist.service.ts");





var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(statsService, fileService, playlistService) {
        this.statsService = statsService;
        this.fileService = fileService;
        this.playlistService = playlistService;
    }
    StatisticsPage.prototype.ngOnInit = function () {
        var d = new Date();
        d.setHours(d.getHours() - 1);
        this.statsService.where({
            created_at: {
                operator: '>',
                value: d.toJSON().split('T').join(' ').split('.')[0]
            }
        }).subscribe(function (d) {
            console.log(d);
        });
    };
    StatisticsPage.prototype.uploadStats = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    StatisticsPage.ctorParameters = function () { return [
        { type: _services_api_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"] },
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] },
        { type: _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_4__["PlaylistService"] }
    ]; };
    StatisticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statistics.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistics.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statistics.page.scss */ "./src/app/pages/statistics/statistics.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"],
            _services_api_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_4__["PlaylistService"]])
    ], StatisticsPage);
    return StatisticsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-statistics-statistics-module.js.map