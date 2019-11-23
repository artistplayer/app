(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-files-files-module~pages-playlist-playlist-module~pag~8dddc23c"],{

/***/ "./src/app/providers/api/entity.ts":
/*!*****************************************!*\
  !*** ./src/app/providers/api/entity.ts ***!
  \*****************************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./src/app/providers/api/query.ts");


var Entity = /** @class */ (function () {
    function Entity(parent) {
        this.parent = parent;
        this._listeners = [];
        this._isFullyload = false;
    }
    Entity.prototype.addListener = function (listener) {
        console.debug('Add listener: ' + listener.constructor.name);
        this._listeners.push(listener);
    };
    Entity.prototype.validate = function (options) {
        var _this = this;
        if (options.with.length !== options.with.filter(function (w) { return typeof w !== 'string' && _this[w.name]; }).length) {
            return false;
        }
        if (options.wheres.length !== options.wheres.filter(function (where) { return _query__WEBPACK_IMPORTED_MODULE_1__["Query"].where(_this, where); }).length) {
            return false;
        }
        if (options.full) {
            return this._isFullyload;
        }
        return true;
    };
    Entity.prototype.update = function (data) {
        var _this = this;
        return this.parent.call('patch', this.parent.location + '/' + this.id, { data: data }).then(function (response) {
            return _this.fill(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    };
    Entity.prototype.fill = function (data, options) {
        var _this = this;
        var entity = Object.assign(this, data);
        if (options) {
            if (options.full) {
                this._isFullyload = true;
            }
            options.with.forEach(function (relation) {
                if (typeof relation !== 'string' && entity.hasOwnProperty(relation.name)) {
                    entity[relation.name] = entity[relation.name].map(function (item) {
                        var e = relation.findOrCreate(item);
                        e.addListener(_this);
                        return e;
                    });
                }
            });
            if (options.sort && options.sort.indexOf('.') > -1) {
                var kv_1 = options.sort.split('.');
                entity[kv_1[0]] = entity[kv_1[0]].sort(function (a, b) { return _this.parent.sort(a, b, kv_1[1], options.order); });
            }
        }
        return entity;
    };
    Entity.prototype.delete = function () {
        var _this = this;
        return this.parent.call('delete', this.parent.location + '/' + this.id).then(function () {
            _this._listeners.forEach(function (listener) {
                listener.cleanup(_this.id, _this.parent);
                listener.parent.refresh();
            });
            _this.parent.delete(_this.id);
            _this.parent.refresh();
        }).catch(function (error) {
            console.log(error);
        });
    };
    Entity.prototype.cleanup = function (id, relation) {
        if (this.hasOwnProperty(relation.name)) {
            this[relation.name] = this[relation.name].filter(function (item) { return item.id !== id; });
        }
    };
    Entity.prototype.attach = function (entity) {
        var _a;
        var _this = this;
        var resource = entity.parent.name;
        return this.parent.call('post', this.parent.location + '/' + this.id + '/' + resource, { data: (_a = {}, _a[resource] = [entity.id], _a) })
            .then(function (r) {
            Object.keys(r.data).forEach(function (k) {
                if (!Array.isArray(r.data[k])) {
                    _this[k] = r.data[k];
                }
            });
            if (!_this[resource]) {
                _this[resource] = [];
            }
            _this[resource].push(entity);
            entity.addListener(_this);
        });
    };
    Entity.prototype.detach = function (entity) {
        var _this = this;
        var resource = entity.parent.name;
        return this.parent.call('delete', this.parent.location + '/' + this.id + '/' + resource + '/' + entity.id)
            .then(function (r) {
            if (_this[resource]) {
                Object.keys(r.data).forEach(function (k) {
                    if (!Array.isArray(r.data[k])) {
                        _this[k] = r.data[k];
                    }
                });
                _this[resource] = _this[resource].filter(function (e) { return e.id !== entity.id; });
                entity.addListener(_this);
            }
        });
    };
    Entity.prototype.sync = function (relation) {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.hasOwnProperty(relation.name)) {
                var data = _this[relation.name].map(function (item, index) {
                    return {
                        id: item.id,
                        position: index + 1
                    };
                });
                _this.parent.call('put', _this.parent.location + '/' + _this.id + '/' + relation.name, {
                    data: data
                }).catch(function (error) {
                    console.log(error);
                });
            }
            resolve();
        });
    };
    return Entity;
}());



/***/ }),

/***/ "./src/app/providers/api/query.ts":
/*!****************************************!*\
  !*** ./src/app/providers/api/query.ts ***!
  \****************************************/
/*! exports provided: Query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Query = /** @class */ (function () {
    function Query() {
    }
    Query.where = function (object, where) {
        var keys = Object.keys(where);
        if (keys.length) {
            return keys.filter(function (key) { return Query.operatorFilter(object[key], where[key]); }).length > 0;
        }
        return true;
    };
    Query.operatorFilter = function (data, value) {
        var operator = '=';
        if (typeof value === 'object') {
            if (value[0]) {
                var result = value.filter(function (v) {
                    if (typeof v === 'object') {
                        var op = Query.validOperator(v['operator']);
                        var val = v['value'] ? v['value'] : null;
                        if (val !== null) {
                            return Query.matches(data, op, val);
                        }
                        return false;
                    }
                    return Query.matches(data, operator, v);
                });
                return result.length > 0;
            }
            if (value['operator']) {
                operator = Query.validOperator(value['operator']);
            }
            value = value['value'];
        }
        return Query.matches(data, operator, value);
    };
    Query.matches = function (data, operator, value) {
        if (typeof data === 'string') {
            data = data.toLowerCase();
        }
        if (typeof value === 'string') {
            value = value.toLowerCase();
        }
        if (value === 'undefined' || value === 'null') {
            value = '';
        }
        switch (operator) {
            case 'neq':
            case '<>':
            case '!=':
                return data !== value;
            case 'lt':
            case '<':
                return data < value;
            case 'gt':
            case '>':
                return data > value;
            case 'lte':
            case '<=':
                return data <= value;
            case 'gte':
            case '>=':
                return data >= value;
            case 'not like':
            case '!like':
                return !Query.like(data, value);
            case 'like':
                return Query.like(data, value);
            case '!regexp':
            case 'not regexp':
                return !(new RegExp(value).test(data));
            case 'regexp':
                return (new RegExp(value).test(data));
            case 'eq':
            case '<=>':
            default:
                return data === value;
        }
    };
    Query.validOperator = function (operator) {
        if (Query.validOperators.indexOf(operator)) {
            return Query.mapOperator(operator);
        }
        return '=';
    };
    Query.mapOperator = function (operator) {
        if (Query.mappings[operator]) {
            return Query.mappings[operator];
        }
        return operator;
    };
    Query.like = function (data, value) {
        if (value.substr(0, 1) === '%' && value.substr(value.length - 1, 1) === '%') {
            return (data.indexOf(Query.clear(value.substring(1, value.length - 1))) > -1);
        }
        if (value.substr(0, 1) === '%') {
            return (data.indexOf(Query.clear(value.substring(1, value.length))) > 0);
        }
        if (value.substr(value.length - 1, 1) === '%') {
            return (data.indexOf(Query.clear(value.substring(0, value.length - 1))) === 0);
        }
        return false;
    };
    Query.clear = function (value) {
        if (value === 'undefined' || value === 'null') {
            value = '';
        }
        return value;
    };
    Query.validOperators = [
        'eq', 'neq', 'lt', 'gt', 'lte', 'gte', '!regexp', '!like',
        '<', '>', '<=', '>=', '<>', '!=', '<=>', 'like', 'not like', 'regexp', 'not regexp'
    ];
    Query.mappings = {
        eq: '=',
        neq: '!=',
        lt: '<',
        gt: '>',
        lte: '<=',
        gte: '>=',
        '!regexp': 'not regexp',
        '!like': 'not like'
    };
    return Query;
}());



/***/ }),

/***/ "./src/app/providers/api/resource.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/api/resource.ts ***!
  \*******************************************/
/*! exports provided: Order, Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity */ "./src/app/providers/api/entity.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");






var Order;
(function (Order) {
    Order["ASC"] = "ASC";
    Order["DESC"] = "DESC";
})(Order || (Order = {}));
var Resource = /** @class */ (function () {
    function Resource(httpClient) {
        this.httpClient = httpClient;
        this._searchWheres = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.collection = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        // Fix this....
        this.subscriptions = [];
        this.reset();
    }
    Resource.prototype.where = function (where) {
        this._options.wheres.push(where);
        return this;
    };
    Resource.prototype.with = function (relation) {
        this._options.with.push(relation);
        return this;
    };
    Resource.prototype.find = function (id) {
        var _this = this;
        var options = Object.assign({}, this._options, { full: true });
        this.reset();
        return new Promise(function (resolve, reject) {
            var item = _this.collection.getValue().find(function (e) { return e.id === id; });
            if (item && item.validate(options)) {
                return resolve(item);
            }
            _this.call('get', _this.location + '/' + id + _this.params(options), options).then(function (response) {
                return resolve(_this.update([response.data], options).find(function (entity) { return entity.id === response.data.id; }));
            }).catch(function (error) { return reject(error); });
        });
    };
    Resource.prototype.orderBy = function (sort, order) {
        this._options.sort = sort;
        this._options.order = order;
        return this;
    };
    Resource.prototype.limit = function (limit) {
        this._options.limit = limit;
        return this;
    };
    Resource.prototype.page = function (page) {
        this._options.page = page;
        return this;
    };
    Resource.prototype.search = function (wheres) {
        this._searchWheres.next(wheres);
    };
    Resource.prototype.subscribe = function (result, error) {
        var _this = this;
        if (error === void 0) { error = function (e) { return console.debug(e); }; }
        var options = Object.assign({}, this._options);
        this.reset();
        var collection = [];
        var render = function () {
            var response = collection
                .filter(function (entity) { return entity.validate(options); })
                .sort(function (a, b) { return _this.sort(a, b, options.sort, options.order); })
                .slice(0, options.limit);
            result(response);
            return response;
        };
        var subscriptions = [];
        subscriptions.push(this.collection.subscribe(function (c) {
            collection = c;
            render();
        }));
        subscriptions.push(this._searchWheres.subscribe(function (wheres) {
            Object.assign(options, { wheres: wheres });
            if (render().length < options.limit) {
                _this.fetch(options).catch(function (e) { return error(e); });
            }
        }));
        if (this.collection.getValue().filter(function (entity) { return entity.validate(options); }).length < options.limit) {
            this.fetch(options).catch(function (e) { return error(e); });
        }
        return Object.assign(this, { subscriptions: subscriptions });
    };
    Resource.prototype.unsubscribe = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    Resource.prototype.create = function (data) {
        var _this = this;
        var options = Object.assign({}, this._options);
        this.reset();
        return this.call('post', this.location, { data: data }).then(function (response) {
            return _this.update([response.data], options).find(function (entity) { return entity.id === response.data.id; });
        });
    };
    Resource.prototype.delete = function (id) {
        this.collection.next(this.collection.getValue().filter(function (entity) { return entity.id !== id; }));
    };
    Resource.prototype.findOrCreate = function (data) {
        var item = this.collection.getValue().find(function (e) { return e.id === data.id; });
        if (item) {
            return item.fill(data);
        }
        return this.update([data], null).find(function (entity) { return entity.id === data.id; });
    };
    Resource.prototype.call = function (method, url, options) {
        var requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        if (options && options.data) {
            Object.keys(options.data).forEach(function (key) {
                if (options.data[key] === '' || options.data[key] === null) {
                    delete options.data[key];
                }
            });
        }
        switch (method) {
            case 'get':
            case 'delete':
                return this.httpClient[method](_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"].host + url, requestOptions).toPromise();
            case 'post':
            case 'put':
            case 'patch':
                return this.httpClient[method](_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"].host + url, options.data, requestOptions).toPromise();
        }
    };
    Resource.prototype.refresh = function () {
        // console.log('Refresh: ' + this.constructor.name);
    };
    Resource.prototype.fetch = function (options) {
        var _this = this;
        var call;
        if (options.wheres.length > 0) {
            options.data = { wheres: options.wheres };
            call = this.call('post', this.location + '/search' + this.params(options), options);
        }
        else {
            call = this.call('get', this.location + this.params(options));
        }
        return call.then(function (response) {
            _this.update(response.data, options);
        });
    };
    Resource.prototype.reset = function () {
        this._options = {
            sort: 'id',
            order: Order.ASC,
            limit: 20,
            page: 1,
            with: [],
            wheres: [],
            full: false
        };
    };
    Resource.prototype.update = function (data, options) {
        var _this = this;
        var collection = this.collection.getValue();
        data.forEach(function (object) {
            var exist = collection.find(function (item) { return item.id === object.id; });
            if (exist) {
                exist.fill(object, options);
            }
            else {
                collection.push((new _entity__WEBPACK_IMPORTED_MODULE_2__["Entity"](_this)).fill(object, options));
            }
        });
        this.collection.next(collection);
        return collection;
    };
    Resource.prototype.params = function (options) {
        var params = [];
        if (options.with.length) {
            params['with'] = options.with.map(function (relation) { return typeof relation === 'string' ? relation : relation.name; }).join(',');
        }
        return '?' + Object.keys(params).filter(function (o) { return params[o] !== null; }).map(function (o) { return o + '=' + params[o]; }).join('&');
    };
    Resource.prototype.sort = function (a, b, sort, order) {
        var valueA = a[sort];
        var valueB = b[sort];
        if (+valueA === +valueA) {
            return order === Order.DESC ? valueB - valueA : valueA - valueB;
        }
        else {
            if (valueA.localeCompare(valueB) > 0) {
                return order === Order.DESC ? -1 : 1;
            }
            else if (valueA.localeCompare(valueB) < 0) {
                return order === Order.DESC ? 1 : -1;
            }
        }
    };
    Resource.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    Resource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Resource);
    return Resource;
}());



/***/ }),

/***/ "./src/app/services/api/file.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/api/file.service.ts ***!
  \**********************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/api/resource */ "./src/app/providers/api/resource.ts");



var FileService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FileService, _super);
    function FileService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'files';
        _this.location = '/api/v1/files';
        return _this;
    }
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FileService);
    return FileService;
}(_providers_api_resource__WEBPACK_IMPORTED_MODULE_2__["Resource"]));



/***/ }),

/***/ "./src/app/services/api/playlist.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/api/playlist.service.ts ***!
  \**************************************************/
/*! exports provided: PlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistService", function() { return PlaylistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/api/resource */ "./src/app/providers/api/resource.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PlaylistService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaylistService, _super);
    function PlaylistService(httpClient, alertController) {
        var _this = _super.call(this, httpClient) || this;
        _this.httpClient = httpClient;
        _this.alertController = alertController;
        _this.name = 'playlists';
        _this.location = '/api/v1/playlists';
        return _this;
    }
    PlaylistService.prototype.create = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'New Playlist',
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    placeholder: 'Enter Playlist Name...',
                                    value: ''
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Create',
                                    handler: function (data) {
                                        if (!data) {
                                            return;
                                        }
                                        _super.prototype.create.call(_this, { name: data.name }).then(function (playlist) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                resolve(playlist);
                                                return [2 /*return*/];
                                            });
                                        }); }).catch(function (error) { return reject(error); });
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
    PlaylistService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    PlaylistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], PlaylistService);
    return PlaylistService;
}(_providers_api_resource__WEBPACK_IMPORTED_MODULE_2__["Resource"]));



/***/ }),

/***/ "./src/app/services/api/stats.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/api/stats.service.ts ***!
  \***********************************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/api/resource */ "./src/app/providers/api/resource.ts");



var StatsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StatsService, _super);
    function StatsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'stats';
        _this.location = '/api/v1/stats';
        return _this;
    }
    StatsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StatsService);
    return StatsService;
}(_providers_api_resource__WEBPACK_IMPORTED_MODULE_2__["Resource"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-files-files-module~pages-playlist-playlist-module~pag~8dddc23c.js.map