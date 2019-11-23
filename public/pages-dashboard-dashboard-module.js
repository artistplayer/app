(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"ion-text-left ion-padding-top\">\n        <div class=\"ion-padding-start\">\n            Playlists\n        </div>\n        <ion-button slot=\"end\" size=\"large\" [fill]=\"'clear'\" [color]=\"'light'\" (tap)=\"addPlaylist()\">\n            <fa-icon icon=\"plus\"></fa-icon>\n        </ion-button>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-start\">\n    <div class=\"square-container\">\n        <div class=\"square\"\n             *ngFor=\"let playlist of playlists; let i = index\"\n             [attr.data-index]=\"i % 10\"\n             [routerLink]=\"'/playlist/'+playlist.id\"\n             routerLinkActive=\"active\">\n            <div class=\"content\">\n                {{playlist.name}}\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <app-player></app-player>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _components_player_player_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/player/player.module */ "./src/app/components/player/player.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");









var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_player_player_module__WEBPACK_IMPORTED_MODULE_7__["PlayerModule"]
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .square-container {\n  padding: 8px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n:host .square {\n  cursor: pointer;\n  width: calc(100% / 2);\n  float: left;\n  position: relative;\n  padding-bottom: calc(100% / 2.5);\n}\n@media screen and (min-width: 768px) {\n  :host .square {\n    width: calc(100% / 4);\n    padding-bottom: calc(100% / 5);\n  }\n}\n:host .square .content {\n  width: calc(100% - 16px);\n  height: calc(100% - 16px);\n  position: absolute;\n  padding-top: calc(100% / 2.5 - 24px);\n  font-size: 24px;\n  color: white;\n  border-radius: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNESjtBREdJO0VBUEY7SUFRSSxxQkFBQTtJQUNBLDhCQUFBO0VDQUo7QUFDRjtBREdFO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuc3F1YXJlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLnNxdWFyZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoMTAwJSAvIDIuNSk7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMTAwJSAvIDUpO1xuICAgIH1cbiAgfVxuXG4gIC5zcXVhcmUgLmNvbnRlbnQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLXRvcDogY2FsYygxMDAlIC8gMi41IC0gMjRweCk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSIsIjpob3N0IC5zcXVhcmUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCAuc3F1YXJlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC8gMik7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDEwMCUgLyAyLjUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgLnNxdWFyZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxufVxuOmhvc3QgLnNxdWFyZSAuY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogY2FsYygxMDAlIC8gMi41IC0gMjRweCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/playlist.service */ "./src/app/services/api/playlist.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var DashboardPage = /** @class */ (function () {
    function DashboardPage(playlistService, navController) {
        this.playlistService = playlistService;
        this.navController = navController;
    }
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.playlistService.subscribe(function (playlists) { return _this.playlists = playlists; });
    };
    DashboardPage.prototype.addPlaylist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.playlistService.create().then(function (playlist) {
                    _this.navController.navigateForward('/playlist/' + playlist.id);
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_playlist_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map