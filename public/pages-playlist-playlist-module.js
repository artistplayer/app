(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-playlist-playlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n    <ion-card-content text-center>\n        <ng-content></ng-content>\n    </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/files/files.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/files/files.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"ion-text-left ion-padding-top\">\n        <div class=\"ion-padding-start\">\n            Add File(s)\n        </div>\n        <ion-button slot=\"end\" size=\"large\" [fill]=\"'clear'\" [color]=\"'light'\" (tap)=\"close()\">\n            <fa-icon icon=\"times\"></fa-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-header [hidden]=\"!files\" padding-top>\n    <ion-toolbar>\n        <ion-searchbar color=\"light\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list *ngIf=\"files\" lines=\"none\">\n        <ion-item *ngFor=\"let file of files\" (contextmenu)=\"$event.preventDefault();actions($event, file)\">\n\n\n            <ion-avatar *ngIf=\"file.selected\" class=\"icon\" slot=\"start\">\n                <ion-button tappable (tap)=\"remove(file)\" class=\"icon-hover\"\n                            color=\"danger\">\n                    <fa-icon [icon]=\"'times'\" slot=\"icon-only\"></fa-icon>\n                </ion-button>\n                <ion-button tappable (tap)=\"remove(file)\" color=\"primary\">\n                    <fa-icon [icon]=\"'check'\" slot=\"icon-only\"></fa-icon>\n                </ion-button>\n            </ion-avatar>\n\n            <ion-avatar *ngIf=\"!file.selected\" class=\"icon\" slot=\"start\">\n                <ion-button tappable (tap)=\"add(file)\" class=\"icon-hover\"\n                            color=\"tertiary\">\n                    <fa-icon [icon]=\"'plus'\" slot=\"icon-only\"></fa-icon>\n                </ion-button>\n                <ion-button tappable (tap)=\"add(file)\" class=\"icon-default\" color=\"tertiary\">\n                    <fa-icon [icon]=\"'plus'\" slot=\"icon-only\"></fa-icon>\n                </ion-button>\n            </ion-avatar>\n\n            <ion-label>\n                <h2>\n                    <span *ngIf=\"!file.title && !file.artist\">\n                        {{file.filename}}\n                    </span>\n\n                    <span *ngIf=\"file.title\">{{file.title}}</span>\n                    <span *ngIf=\"file.title && file.artist\"> - </span>\n                    <small *ngIf=\"file.artist\">{{file.artist}}</small>\n                </h2>\n                <p *ngIf=\"file.title || file.artist\">{{file.filename}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-toolbar color=\"success\">\n        <ion-button (tap)=\"close()\" color=\"light\" fill=\"clear\" expand=\"block\">\n            Done\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reorder-list/reorder-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/reorder-list/reorder-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-reorder-group #reorderGroup [disabled]=\"disabled\">\n    <ng-content></ng-content>\n</ion-reorder-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/playlist/actions/actions.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/playlist/actions/actions.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list mode=\"md\" no-padding>\n    <ion-item color=\"light\" [button]=\"true\" (tap)=\"addFiles()\" [detail]=\"false\">\n        <ion-label text-center>Modify</ion-label>\n    </ion-item>\n    <ion-item color=\"light\" [button]=\"true\" (tap)=\"rename()\" [detail]=\"false\">\n        <ion-label text-center>Rename</ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"playlist?.files.length > 1\" color=\"light\" [button]=\"true\" (tap)=\"reorder()\" [detail]=\"false\">\n        <ion-label text-center>Reorder</ion-label>\n    </ion-item>\n    <ion-item color=\"light\" [button]=\"true\" (tap)=\"remove()\" [detail]=\"false\">\n        <ion-label text-center color=\"danger\">Remove</ion-label>\n    </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/playlist/more/more.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/playlist/more/more.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list mode=\"md\" no-padding>\n    <ion-item color=\"light\" mode=\"ios\" [button]=\"true\" (tap)=\"remove()\" [detail]=\"false\">\n        <ion-label color=\"danger\" text-center>\n            Remove from playlist\n        </ion-label>\n    </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/playlist/playlist.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/playlist/playlist.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"ion-text-left ion-padding-top\">\n        <ion-button [fill]=\"'clear'\" [color]=\"'light'\" size=\"large\" slot=\"start\" [routerLink]=\"'/'\">\n            <fa-icon size=\"large\" icon=\"chevron-left\"></fa-icon>\n        </ion-button>\n        <div class=\"ion-padding-start\">\n            {{playlist?.name}}\n        </div>\n\n        <ion-button [fill]=\"'clear'\" [color]=\"'light'\" size=\"large\" slot=\"end\" [hidden]=\"reorder\"\n                    (tap)=\"actions($event)\">\n            <fa-icon icon=\"ellipsis-h\" size=\"large\"></fa-icon>\n        </ion-button>\n\n        <ion-button slot=\"end\" [hidden]=\"!reorder\" color=\"success\" (tap)=\"saveOrder()\" class=\"ion-margin-end\">Save\n        </ion-button>\n\n    </ion-toolbar>\n</ion-header>\n\n\n<app-loader [hidden]=\"playlist || playlist === null\"></app-loader>\n\n\n<ion-content>\n    <div *ngIf=\"playlist && playlist?.files.length < 1\">\n        <app-error>\n            <h1>Empty Playlist</h1>\n            <p>The playlist you requested is empty.</p>\n        </app-error>\n    </div>\n    <ion-list lines=\"none\">\n        <app-reorder-list #reorderList [disabled]=\"!reorder\">\n            <ion-item *ngFor=\"let item of playlist?.files;\"\n                      [class.active]=\"playerService.isSong(item.id)\"\n                      (dblclick)=\"playerService.setSong(item.id, playlist.id)\"\n                      (contextmenu)=\"$event.preventDefault();more($event, item)\">\n\n                <ion-avatar class=\"icon\" *ngIf=\"!reorder\" slot=\"start\">\n                    <ion-button\n                            (tap)=\"playerService.isSong(item.id) ? playerService.toggleState() :playerService.setSong(item.id, playlist.id)\"\n                            class=\"icon-hover\"\n                            color=\"primary\">\n                        <fa-icon [icon]=\"playerService.isSong(item.id, 'Playing') ? 'pause' : 'play'\"\n                                 slot=\"icon-only\"></fa-icon>\n                    </ion-button>\n                    <ion-button (tap)=\"playerService.setSong(item.id, playlist.id)\" class=\"icon-default\"\n                                color=\"tertiary\">\n                        <fa-icon [icon]=\"playerService.isSong(item.id, 'Playing') ? 'volume-up' : 'music'\"\n                                 slot=\"icon-only\"></fa-icon>\n                    </ion-button>\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{item.title ? item.title : item.filename}}</h2>\n                    <h3 *ngIf=\"item.artist\">{{item.artist}}</h3>\n                </ion-label>\n\n                <ion-avatar class=\"icon\" slot=\"end\">\n                    <ion-button fill=\"clear\" color=\"light\" (tap)=\"preview(item)\">\n                        <fa-icon icon=\"headphones\"></fa-icon>\n                    </ion-button>\n                </ion-avatar>\n\n                <ion-reorder slot=\"start\"></ion-reorder>\n            </ion-item>\n        </app-reorder-list>\n    </ion-list>\n\n\n    <ion-item>\n        <ion-label>\n            Total time: {{playlist?.playtime}}\n        </ion-label>\n    </ion-item>\n</ion-content>\n\n<ion-footer>\n    <app-player></app-player>\n</ion-footer>");

/***/ }),

/***/ "./src/app/components/error/error.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n:host ion-card {\n  --color: var(--ion-color-primary-contrast);\n  box-shadow: none;\n  -webkit-box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsMENBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGlvbi1jYXJkIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCBpb24tY2FyZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(platform) {
        this.platform = platform;
    }
    ErrorComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/components/error/error.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/error/error.module.ts ***!
  \**************************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            exports: [_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/components/files/files.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/files/files.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background: #151836;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL2NvbXBvbmVudHMvZmlsZXMvZmlsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmlsZXMvZmlsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9maWxlcy9maWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzE1MTgzNjtcbn0iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQ6ICMxNTE4MzY7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/files/files.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/files/files.component.ts ***!
  \*****************************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/file.service */ "./src/app/services/api/file.service.ts");
/* harmony import */ var _providers_api_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/api/resource */ "./src/app/providers/api/resource.ts");





var FilesComponent = /** @class */ (function () {
    function FilesComponent(fileService, modalController) {
        this.fileService = fileService;
        this.modalController = modalController;
        this.files = [];
    }
    FilesComponent.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                setTimeout(function () {
                    _this.modalController.dismiss();
                }, 100);
                return [2 /*return*/];
            });
        });
    };
    FilesComponent.prototype.ngOnInit = function () {
    };
    FilesComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.searcher = this.fileService;
        if (this.searchTerm) {
            this.searcher.where({
                filename: {
                    operator: 'like',
                    value: '%' + this.searchTerm + '%'
                }
            });
        }
        this.searcher.orderBy('id', _providers_api_resource__WEBPACK_IMPORTED_MODULE_4__["Order"].DESC)
            .limit(100)
            .page(1)
            .subscribe(function (result) {
            _this.files = result.map(function (file) {
                file.selected = !!_this.playlist.files.find(function (f) { return f.id === file.id; });
                return file;
            });
        });
    };
    FilesComponent.prototype.ionViewWillLeave = function () {
        this.searcher.unsubscribe();
    };
    FilesComponent.prototype.search = function () {
        this.searcher.search([
            {
                filename: {
                    operator: 'like',
                    value: '%' + this.searchTerm + '%'
                }
            }
        ]);
    };
    FilesComponent.prototype.add = function (file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.playlist.attach(file).then(function () { return _this.search(); });
                return [2 /*return*/];
            });
        });
    };
    FilesComponent.prototype.remove = function (file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.playlist.detach(file).then(function () { return _this.search(); });
                return [2 /*return*/];
            });
        });
    };
    FilesComponent.ctorParameters = function () { return [
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilesComponent.prototype, "playlist", void 0);
    FilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./files.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/files/files.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./files.component.scss */ "./src/app/components/files/files.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], FilesComponent);
    return FilesComponent;
}());



/***/ }),

/***/ "./src/app/components/files/files.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/files/files.module.ts ***!
  \**************************************************/
/*! exports provided: FilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesModule", function() { return FilesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files.component */ "./src/app/components/files/files.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");







var FilesModule = /** @class */ (function () {
    function FilesModule() {
    }
    FilesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _files_component__WEBPACK_IMPORTED_MODULE_3__["FilesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            entryComponents: [_files_component__WEBPACK_IMPORTED_MODULE_3__["FilesComponent"]],
            exports: [_files_component__WEBPACK_IMPORTED_MODULE_3__["FilesComponent"]]
        })
    ], FilesModule);
    return FilesModule;
}());



/***/ }),

/***/ "./src/app/components/reorder-list/reorder-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/reorder-list/reorder-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVvcmRlci1saXN0L3Jlb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/reorder-list/reorder-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/reorder-list/reorder-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReorderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderListComponent", function() { return ReorderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ReorderListComponent = /** @class */ (function () {
    function ReorderListComponent() {
        this.disabled = true;
    }
    ReorderListComponent.prototype.bind = function (collection) {
        this.subscription = this.reorderGroup.ionItemReorder.subscribe(function (e) {
            collection.splice(e.detail.to, 0, collection.splice(e.detail.from, 1)[0]);
            e.detail.complete(true);
        });
    };
    ReorderListComponent.prototype.unbind = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reorderGroup', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"])
    ], ReorderListComponent.prototype, "reorderGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReorderListComponent.prototype, "disabled", void 0);
    ReorderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reorder-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reorder-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reorder-list/reorder-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reorder-list.component.scss */ "./src/app/components/reorder-list/reorder-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReorderListComponent);
    return ReorderListComponent;
}());



/***/ }),

/***/ "./src/app/components/reorder-list/reorder-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/reorder-list/reorder-list.module.ts ***!
  \****************************************************************/
/*! exports provided: ReorderListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderListModule", function() { return ReorderListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reorder_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reorder-list.component */ "./src/app/components/reorder-list/reorder-list.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ReorderListModule = /** @class */ (function () {
    function ReorderListModule() {
    }
    ReorderListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _reorder_list_component__WEBPACK_IMPORTED_MODULE_3__["ReorderListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            exports: [
                _reorder_list_component__WEBPACK_IMPORTED_MODULE_3__["ReorderListComponent"]
            ]
        })
    ], ReorderListModule);
    return ReorderListModule;
}());



/***/ }),

/***/ "./src/app/pages/playlist/actions/actions.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/playlist/actions/actions.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  overflow: hidden;\n  background: #fff;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL3BhZ2VzL3BsYXlsaXN0L2FjdGlvbnMvYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxheWxpc3QvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGF5bGlzdC9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59IiwiOmhvc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/playlist/actions/actions.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/playlist/actions/actions.component.ts ***!
  \*************************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/playlist.service */ "./src/app/services/api/playlist.service.ts");
/* harmony import */ var _components_files_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/files/files.component */ "./src/app/components/files/files.component.ts");





var ActionsComponent = /** @class */ (function () {
    function ActionsComponent(playlistService, popoverController, alertController, navController, modalController) {
        this.playlistService = playlistService;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.navController = navController;
        this.modalController = modalController;
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    ActionsComponent.prototype.rename = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.popoverController.dismiss().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertController.create({
                                    header: 'Rename Playlist',
                                    inputs: [
                                        {
                                            name: 'name',
                                            type: 'text',
                                            placeholder: 'Enter Playlist Name...',
                                            value: this.playlist.name
                                        }
                                    ],
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel'
                                        }, {
                                            text: 'Rename',
                                            handler: function (data) {
                                                _this.playlist.update({ name: data.name });
                                            }
                                        }
                                    ]
                                })];
                            case 1:
                                alert = _a.sent();
                                return [4 /*yield*/, alert.present()];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ActionsComponent.prototype.addFiles = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.popoverController.dismiss().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var modal;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.modalController.create({
                                    component: _components_files_files_component__WEBPACK_IMPORTED_MODULE_4__["FilesComponent"],
                                    componentProps: {
                                        playlist: this.playlist
                                    },
                                    animated: true,
                                    backdropDismiss: false,
                                    keyboardClose: false
                                })];
                            case 1:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ActionsComponent.prototype.reorder = function () {
        this.popoverController.dismiss({ reorder: true });
    };
    ActionsComponent.prototype.remove = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.popoverController.dismiss().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertController.create({
                                    header: 'Warning',
                                    message: 'Do you really want to delete this playlist?',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel'
                                        }, {
                                            text: 'Delete',
                                            handler: function () {
                                                _this.playlist.delete().then(function () {
                                                    _this.navController.navigateBack('/');
                                                });
                                            }
                                        }
                                    ]
                                })];
                            case 1:
                                alert = _a.sent();
                                return [4 /*yield*/, alert.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ActionsComponent.ctorParameters = function () { return [
        { type: _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActionsComponent.prototype, "playlist", void 0);
    ActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/playlist/actions/actions.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actions.component.scss */ "./src/app/pages/playlist/actions/actions.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/playlist/more/more.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/playlist/more/more.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  overflow: hidden;\n  background: #fff;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL3BhZ2VzL3BsYXlsaXN0L21vcmUvbW9yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxheWxpc3QvbW9yZS9tb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wbGF5bGlzdC9tb3JlL21vcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59IiwiOmhvc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/playlist/more/more.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/playlist/more/more.component.ts ***!
  \*******************************************************/
/*! exports provided: MoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreComponent", function() { return MoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/playlist.service */ "./src/app/services/api/playlist.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/file.service */ "./src/app/services/api/file.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/player.service */ "./src/app/services/player.service.ts");






var MoreComponent = /** @class */ (function () {
    function MoreComponent(fileService, popoverController, playlistService, playerService, alertController) {
        this.fileService = fileService;
        this.popoverController = popoverController;
        this.playlistService = playlistService;
        this.playerService = playerService;
        this.alertController = alertController;
    }
    MoreComponent.prototype.ngOnInit = function () {
    };
    MoreComponent.prototype.remove = function () {
        var _this = this;
        this.popoverController.dismiss().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Warning',
                            message: 'Do you really want to delete this song from the playlist?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.playlist.detach(_this.file);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MoreComponent.ctorParameters = function () { return [
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistService"] },
        { type: _services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoreComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoreComponent.prototype, "playlist", void 0);
    MoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./more.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/playlist/more/more.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./more.component.scss */ "./src/app/pages/playlist/more/more.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistService"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], MoreComponent);
    return MoreComponent;
}());



/***/ }),

/***/ "./src/app/pages/playlist/playlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/playlist/playlist.module.ts ***!
  \***************************************************/
/*! exports provided: PlaylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPageModule", function() { return PlaylistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _playlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist.page */ "./src/app/pages/playlist/playlist.page.ts");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/actions.component */ "./src/app/pages/playlist/actions/actions.component.ts");
/* harmony import */ var _components_error_error_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/error/error.module */ "./src/app/components/error/error.module.ts");
/* harmony import */ var _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/loader/loader.module */ "./src/app/components/loader/loader.module.ts");
/* harmony import */ var _components_reorder_list_reorder_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/reorder-list/reorder-list.module */ "./src/app/components/reorder-list/reorder-list.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _more_more_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./more/more.component */ "./src/app/pages/playlist/more/more.component.ts");
/* harmony import */ var _components_preview_preview_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/preview/preview.module */ "./src/app/components/preview/preview.module.ts");
/* harmony import */ var _components_player_player_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/player/player.module */ "./src/app/components/player/player.module.ts");
/* harmony import */ var _components_files_files_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/files/files.module */ "./src/app/components/files/files.module.ts");
















var routes = [
    {
        path: '',
        component: _playlist_page__WEBPACK_IMPORTED_MODULE_6__["PlaylistPage"]
    }
];
var PlaylistPageModule = /** @class */ (function () {
    function PlaylistPageModule() {
    }
    PlaylistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
                _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"],
                _components_error_error_module__WEBPACK_IMPORTED_MODULE_8__["ErrorModule"],
                _components_preview_preview_module__WEBPACK_IMPORTED_MODULE_13__["PreviewModule"],
                _components_reorder_list_reorder_list_module__WEBPACK_IMPORTED_MODULE_10__["ReorderListModule"],
                _components_player_player_module__WEBPACK_IMPORTED_MODULE_14__["PlayerModule"],
                _components_files_files_module__WEBPACK_IMPORTED_MODULE_15__["FilesModule"]
            ],
            declarations: [_playlist_page__WEBPACK_IMPORTED_MODULE_6__["PlaylistPage"], _actions_actions_component__WEBPACK_IMPORTED_MODULE_7__["ActionsComponent"], _more_more_component__WEBPACK_IMPORTED_MODULE_12__["MoreComponent"]],
            entryComponents: [_actions_actions_component__WEBPACK_IMPORTED_MODULE_7__["ActionsComponent"], _more_more_component__WEBPACK_IMPORTED_MODULE_12__["MoreComponent"]]
        })
    ], PlaylistPageModule);
    return PlaylistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/playlist/playlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/playlist/playlist.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host span {\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL3BhZ2VzL3BsYXlsaXN0L3BsYXlsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxheWxpc3QvcGxheWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXlsaXN0L3BsYXlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgc3BhbiB7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiOmhvc3Qgc3BhbiB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/playlist/playlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/playlist/playlist.page.ts ***!
  \*************************************************/
/*! exports provided: PlaylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPage", function() { return PlaylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/actions.component */ "./src/app/pages/playlist/actions/actions.component.ts");
/* harmony import */ var _components_reorder_list_reorder_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/reorder-list/reorder-list.component */ "./src/app/components/reorder-list/reorder-list.component.ts");
/* harmony import */ var _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/playlist.service */ "./src/app/services/api/playlist.service.ts");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api/file.service */ "./src/app/services/api/file.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _more_more_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./more/more.component */ "./src/app/pages/playlist/more/more.component.ts");
/* harmony import */ var _components_preview_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/preview/preview.component */ "./src/app/components/preview/preview.component.ts");
/* harmony import */ var _providers_api_resource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../providers/api/resource */ "./src/app/providers/api/resource.ts");












var PlaylistPage = /** @class */ (function () {
    function PlaylistPage(playlistService, fileService, route, popoverController, playerService, modalController) {
        this.playlistService = playlistService;
        this.fileService = fileService;
        this.route = route;
        this.popoverController = popoverController;
        this.playerService = playerService;
        this.modalController = modalController;
        this.reorder = false;
    }
    PlaylistPage.prototype.ngOnInit = function () {
        var _this = this;
        var playlistId = Number(this.route.snapshot.paramMap.get('id'));
        this.playlistService
            .with(this.fileService)
            .orderBy('files.position', _providers_api_resource__WEBPACK_IMPORTED_MODULE_11__["Order"].ASC)
            .find(playlistId)
            .then(function (playlist) {
            _this.playlist = playlist;
        }, function (e) {
            _this.playlist = null;
        });
    };
    PlaylistPage.prototype.ngAfterViewInit = function () {
    };
    PlaylistPage.prototype.actions = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _actions_actions_component__WEBPACK_IMPORTED_MODULE_4__["ActionsComponent"],
                            componentProps: {
                                playlist: this.playlist
                            },
                            event: ev,
                            translucent: false,
                            mode: 'ios',
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data && data.hasOwnProperty('reorder')) {
                            this.reorder = true;
                            console.log(this.playlist.files);
                            this.reorderList.bind(this.playlist.files);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistPage.prototype.more = function (ev, file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _more_more_component__WEBPACK_IMPORTED_MODULE_9__["MoreComponent"],
                            componentProps: {
                                file: file,
                                playlist: this.playlist
                            },
                            event: ev,
                            translucent: false,
                            mode: 'ios',
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistPage.prototype.preview = function (file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_preview_preview_component__WEBPACK_IMPORTED_MODULE_10__["PreviewComponent"],
                            cssClass: 'preview-modal',
                            componentProps: {
                                'fileId': file.id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistPage.prototype.saveOrder = function () {
        var _this = this;
        this.playlist.sync(this.fileService).then(function () {
            _this.reorder = false;
            _this.reorderList.unbind();
        });
    };
    PlaylistPage.ctorParameters = function () { return [
        { type: _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_6__["PlaylistService"] },
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reorderList', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_reorder_list_reorder_list_component__WEBPACK_IMPORTED_MODULE_5__["ReorderListComponent"])
    ], PlaylistPage.prototype, "reorderList", void 0);
    PlaylistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/playlist/playlist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist.page.scss */ "./src/app/pages/playlist/playlist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_playlist_service__WEBPACK_IMPORTED_MODULE_6__["PlaylistService"],
            _services_api_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PlaylistPage);
    return PlaylistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-playlist-playlist-module.js.map