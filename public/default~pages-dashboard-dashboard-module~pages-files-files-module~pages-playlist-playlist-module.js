(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-files-files-module~pages-playlist-playlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"playerService.file\">\n    <ion-toolbar color=\"tertiary\" class=\"ion-padding\">\n        <div style=\"cursor: pointer;\" slot=\"start\" class=\"ion-no-margin\" tappable\n             [routerLink]=\"playerService.playlist ? '/playlist/' + playerService.playlist.id : null\">\n            <img [src]=\"playerService.file?.thumbnail ? playerService.file?.thumbnail  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0sSv/DwADoQHyQmSPFwAAAABJRU5ErkJggg=='\"\n                 height=\"50\"/>\n        </div>\n\n        <ion-title style=\"cursor: pointer;\" class=\"ion-text-left\"\n                   [routerLink]=\"playerService.playlist ? '/playlist/' + playerService.playlist.id : null\" tappable>\n            <div>{{playerService.file ? (playerService.file.title ? playerService.file.title : playerService.file.filename) : ''}}</div>\n            <small>{{playerService.file?.artist ? playerService.file.artist : ''}}</small>\n        </ion-title>\n\n        <ion-buttons slot=\"end\">\n            <!--<small>{{playerService.getTimecode('{m}:{ss}', 'current')}}-->\n            <!--/ {{playerService.getTimecode('{m}:{ss}', 'total')}}</small>-->\n\n\n            <ion-button shape=\"round\" class=\"ion-padding-end\" (tap)=\"playerService.toggleState()\" tappable>\n                <fa-icon size=\"lg\" [icon]=\"playerService.isState('Playing') ? 'pause' : 'play'\"\n                         slot=\"icon-only\"></fa-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n\n    <ion-range #timeSlider\n               class=\"time-slider\"\n               color=\"danger\"\n               min=\"0\"\n               [max]=\"playerService.totalTime().time + 0.000000000000000001\"\n               [min]=\"0\"\n               [value]=\"playerService.currentTime().time\"\n               (pointerup)=\"$event.which === 1 ? resume($event) : $event.preventDefault()\"\n               (pointerdown)=\"$event.which === 1 ? pause($event) : $event.preventDefault()\"\n               (contextmenu)=\"$event.preventDefault()\">\n    </ion-range>\n</div>");

/***/ }),

/***/ "./src/app/components/player/player.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/player/player.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-range {\n  padding: 0;\n  height: 4px;\n}\n:host .time-slider {\n  --knob-size: 0;\n  --bar-height: 4px;\n  --bar-border-radius: 2px;\n  --bar-background: transparent;\n}\n:host ion-toolbar {\n  --padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtBQ0RKO0FEUUU7RUFDRSxtQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tcmFuZ2Uge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cblxuICAudGltZS1zbGlkZXIge1xuICAgIC0ta25vYi1zaXplOiAwO1xuICAgIC0tYmFyLWhlaWdodDogNHB4O1xuICAgIC0tYmFyLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtLWJhci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICY6aG92ZXIge1xuICAgICAgLy8tLWtub2Itc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuXG5cbiAgLy8gIC5zb25nVGl0bGUge1xuICAvLyAgICB3aWR0aDogMTgwcHg7XG4gIC8vICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLy8gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC8vICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vXG4gIC8vICAgIC5hcnRpc3Qge1xuICAvLyAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgLy8gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLy8gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLyAgICB9XG4gIC8vXG4gIC8vICAgIC5zb25nIHtcbiAgLy8gICAgICBkaXNwbGF5OiBibG9jaztcbiAgLy8gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgLy8gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLy8gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLyAgICB9XG4gIC8vXG4gIC8vICAgIC5zZXAge1xuICAvLyAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIC8vICAgIH1cbiAgLy9cbiAgLy8gICAgaW9uLWltZyB7XG4gIC8vICAgICAgaGVpZ2h0OiA0OHB4O1xuICAvLyAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAvLyAgICB9XG4gIC8vICB9XG4gIC8vXG4gIC8vICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC8vICAgIC5zb25nVGl0bGUge1xuICAvLyAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gIC8vICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAvLyAgICAgIHdpZHRoOiAxMDAlO1xuICAvLyAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy9cbiAgLy8gICAgICAuc29uZywgLnNlcCwgLmFydGlzdCB7XG4gIC8vICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIC8vICAgICAgfVxuICAvLyAgICB9XG4gIC8vICAgIC5jb250cm9scyB7XG4gIC8vICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIC8vICAgIH1cbiAgLy9cbiAgLy8gIH1cblxuICAvL1xuICAvLyAgLnZvbHVtZS1pY29uLCAubGlzdC1pY29uIHtcbiAgLy8gICAgbWluLXdpZHRoOiA1MHB4O1xuICAvLyAgfVxuICAvL1xuICAvLyAgaW9uLWJ1dHRvbiB7XG4gIC8vICAgIG91dGxpbmU6IG5vbmU7XG4gIC8vXG4gIC8vICAgIGlvbi1iYWRnZSB7XG4gIC8vICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgICAgIHRvcDogMnB4O1xuICAvLyAgICAgIHJpZ2h0OiA1LjVweDtcbiAgLy8gICAgICBmb250LXNpemU6IDlweDtcbiAgLy8gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAvLyAgICAgIHBhZGRpbmc6IDFweDtcbiAgLy8gICAgICB3aWR0aDogMTJweDtcbiAgLy8gICAgICBoZWlnaHQ6IDEycHg7XG4gIC8vICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAvLyAgICB9XG4gIC8vICB9XG4gIC8vXG4gIC8vICBpb24tYnV0dG9uLmFjdGl2ZSB7XG4gIC8vICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIC8vICB9XG4gIC8vXG4gIC8vXG59IiwiOmhvc3QgaW9uLXJhbmdlIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA0cHg7XG59XG46aG9zdCAudGltZS1zbGlkZXIge1xuICAtLWtub2Itc2l6ZTogMDtcbiAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gIC0tYmFyLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLS1iYXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");




var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(platform, playerService) {
        this.platform = platform;
        this.playerService = playerService;
        this.playonResume = false;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.playerService.currentTime();
    };
    PlayerComponent.prototype.resume = function ($event) {
        this.playerService.setCurrentTime(this.timeSlider.value);
    };
    PlayerComponent.prototype.pause = function ($event) {
        if (this.playerService.totalTime().time < 1) {
            $event.preventDefault();
        }
    };
    PlayerComponent.prototype.openPlaylist = function (playlistId) {
    };
    PlayerComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeSlider', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRange"])
    ], PlayerComponent.prototype, "timeSlider", void 0);
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.scss */ "./src/app/components/player/player.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/player/player.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/player/player.module.ts ***!
  \****************************************************/
/*! exports provided: PlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            exports: [_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"]]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ }),

/***/ "./src/app/services/player.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/file.service */ "./src/app/services/api/file.service.ts");
/* harmony import */ var _api_playlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/playlist.service */ "./src/app/services/api/playlist.service.ts");
/* harmony import */ var _api_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/stats.service */ "./src/app/services/api/stats.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/socket.service.ts");






var PlayerService = /** @class */ (function () {
    function PlayerService(fileService, playlistService, statsService, socketService) {
        var _this = this;
        this.fileService = fileService;
        this.playlistService = playlistService;
        this.statsService = statsService;
        this.socketService = socketService;
        this.status = 'Paused';
        this.position = 0;
        this.socketService.subscribe('mplayer', function (data, sender) {
            Object.keys(data).forEach(function (key) {
                if (_this.hasOwnProperty(key)) {
                    _this[key] = data[key];
                }
                if (data.file && data.file.id && (!_this.file || _this.file.id !== data.file.id)) {
                    _this.file = data.file;
                    _this.fileService.find(data.file.id).then(function (file) { return _this.file = file; });
                }
                if (data.playlist && data.playlist.id && (!_this.playlist || _this.playlist.id !== data.playlist.id)) {
                    _this.playlist = data.playlist;
                    _this.playlistService.find(data.playlist.id).then(function (playlist) { return _this.playlist = playlist; });
                }
            });
        });
    }
    // Content of the player
    PlayerService.prototype.setSong = function (fileId, playlistId) {
        var _this = this;
        this.fileService.find(fileId).then(function (file) { return _this.file = file; });
        if (playlistId) {
            this.playlistService.find(playlistId).then(function (playlist) { return _this.playlist = playlist; });
        }
        this.socketService.publish('mplayer', {
            file: fileId,
            playlist: playlistId
        });
    };
    PlayerService.prototype.isSong = function (id, state) {
        if (this.file) {
            return (id === this.file.id && (!state || this.isState(state)));
        }
        return false;
    };
    PlayerService.prototype.totalTime = function () {
        return this.convertTime(this.file ? this.file.playtime : 0);
    };
    PlayerService.prototype.isPlaylist = function (id) {
        var playlist = this.getPlaylist();
        if (playlist) {
            return playlist.id === id;
        }
        return false;
    };
    PlayerService.prototype.getPlaylist = function () {
        return this.playlist;
    };
    PlayerService.prototype.toggleState = function () {
        var state = this.status === 'Playing' ? 'Paused' : 'Playing';
        if (this.file) {
            this.status = state;
        }
        this.setState(this.status);
    };
    PlayerService.prototype.setState = function (state) {
        this.socketService.publish('mplayer', {
            status: state
        });
    };
    PlayerService.prototype.isState = function (state) {
        return this.status === state;
    };
    // Player time
    PlayerService.prototype.currentTime = function () {
        return this.convertTime(this.position);
    };
    PlayerService.prototype.getTimecode = function (str, type) {
        var time = type === 'current' ? this.currentTime() : this.totalTime();
        Object.keys(time).forEach(function (p) {
            str = str.replace('{' + p + '}', time[p]);
        });
        return str;
    };
    PlayerService.prototype.setCurrentTime = function (time) {
        this.socketService.publish('mplayer', {
            position: time
        });
    };
    // Helper functions
    PlayerService.prototype.convertTime = function (time) {
        var result = { h: 0, m: 0, s: 0, hh: null, mm: null, ss: null, i: 0, time: time };
        if (time > 0) {
            result.h = Math.floor(time / 60 / 60);
            result.m = Math.floor((time / 60) - (result.h * 60));
            result.s = Math.round(time - (result.m * 60) - (result.h * 60));
        }
        result.hh = (result.h.toString().length < 2 ? '0' : null) + result.h;
        result.mm = (result.m.toString().length < 2 ? '0' : null) + result.m;
        result.ss = (result.s.toString().length < 2 ? '0' : null) + result.s;
        return result;
    };
    PlayerService.ctorParameters = function () { return [
        { type: _api_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] },
        { type: _api_playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"] },
        { type: _api_stats_service__WEBPACK_IMPORTED_MODULE_4__["StatsService"] },
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }
    ]; };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"],
            _api_playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"],
            _api_stats_service__WEBPACK_IMPORTED_MODULE_4__["StatsService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SocketService = /** @class */ (function () {
    function SocketService() {
        this.stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.create();
    }
    SocketService.prototype.create = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.socket = new WebSocket(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].socket);
            _this.socket.addEventListener('connect', function (msg) {
                resolve();
            });
            _this.socket.addEventListener('message', function (msg) {
                _this.stream.next(JSON.parse(msg.data));
            });
        });
    };
    SocketService.prototype.on = function (event, resolve) {
        this.stream.subscribe(function (msg) {
            if (msg.event === event) {
                resolve(msg.data, (msg.sender ? msg.sender : null));
            }
        });
        return this;
    };
    SocketService.prototype.subscribe = function (channel, resolve) {
        this.stream.subscribe(function (msg) {
            if (msg.channel === channel) {
                resolve(msg.data, (msg.sender ? msg.sender : null));
            }
        });
        return this;
    };
    SocketService.prototype.publish = function (channel, data) {
        var _this = this;
        var fn = function () {
            _this.socket.send(JSON.stringify({
                channel: channel,
                event: 'message',
                'data': data
            }));
        };
        if (this.socket.readyState === this.socket.CLOSED || this.socket.readyState === this.socket.CLOSING) {
            this.create().then(function () { return fn(); });
        }
        else {
            fn();
        }
    };
    SocketService.prototype.send = function (data) {
        var _this = this;
        var fn = function () {
            _this.socket.send(JSON.stringify({
                event: 'message',
                'data': data
            }));
        };
        if (this.socket.readyState === this.socket.CLOSED || this.socket.readyState === this.socket.CLOSING) {
            this.create().then(function () {
                fn();
            });
        }
        else {
            fn();
        }
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-files-files-module~pages-playlist-playlist-module.js.map