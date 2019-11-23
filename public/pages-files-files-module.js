(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-files-files-module"],{

/***/ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js ***!
  \***************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = /** @class */ (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        var isInput = isElement(fileOrInput);
        /** @type {?} */
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        var method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    FileLikeObject.prototype._createFromFakePath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    /**
     * @param {?} object
     * @return {?}
     */
    FileLikeObject.prototype._createFromObject = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileItem = /** @class */ (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    FileItem.prototype.upload = /**
     * @return {?}
     */
    function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    /**
     * @return {?}
     */
    FileItem.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.uploader.cancelItem(this);
    };
    /**
     * @return {?}
     */
    FileItem.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.uploader.removeFromQueue(this);
    };
    /**
     * @return {?}
     */
    FileItem.prototype.onBeforeUpload = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FileItem.prototype.onBuildForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        return { form: form };
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileItem.prototype.onProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        return { progress: progress };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onSuccess = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onError = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onCancel = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype.onComplete = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    /**
     * @return {?}
     */
    FileItem.prototype._onBeforeUpload = /**
     * @return {?}
     */
    function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FileItem.prototype._onBuildForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        this.onBuildForm(form);
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileItem.prototype._onProgress = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onSuccess = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onError = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onCancel = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileItem.prototype._onComplete = /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    FileItem.prototype._prepareToUploading = /**
     * @return {?}
     */
    function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileType = /** @class */ (function () {
    function FileType() {
    }
    /**
     * @param {?} file
     * @return {?}
     */
    FileType.getMimeClass = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    FileType.fileTypeDetection = /**
     * @param {?} inputFilename
     * @return {?}
     */
    function (inputFilename) {
        /** @type {?} */
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        /** @type {?} */
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    /*  MS office  */
    FileType.mime_doc = [
        'application/msword',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'application/vnd.ms-word.document.macroEnabled.12',
        'application/vnd.ms-word.template.macroEnabled.12'
    ];
    FileType.mime_xsl = [
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'application/vnd.ms-excel.sheet.macroEnabled.12',
        'application/vnd.ms-excel.template.macroEnabled.12',
        'application/vnd.ms-excel.addin.macroEnabled.12',
        'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    ];
    FileType.mime_ppt = [
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.presentationml.template',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
    ];
    /* PSD */
    FileType.mime_psd = [
        'image/photoshop',
        'image/x-photoshop',
        'image/psd',
        'application/photoshop',
        'application/psd',
        'zz-application/zz-winassoc-psd'
    ];
    /* Compressed files */
    FileType.mime_compress = [
        'application/x-gtar',
        'application/x-gcompress',
        'application/compress',
        'application/x-tar',
        'application/x-rar-compressed',
        'application/octet-stream',
        'application/x-zip-compressed',
        'application/zip-compressed',
        'application/x-7z-compressed',
        'application/gzip',
        'application/x-bzip2'
    ];
    return FileType;
}());
if (false) {}

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
var FileUploader = /** @class */ (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item._file; }),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    FileUploader.prototype.addToQueue = /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    function (files, options, filters) {
        var e_1, _a;
        var _this = this;
        /** @type {?} */
        var list = [];
        try {
            for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                list.push(file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        var count = this.queue.length;
        /** @type {?} */
        var addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        function (some) {
            if (!options) {
                options = _this.options;
            }
            /** @type {?} */
            var temp = new FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                var fileItem = new FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.removeFromQueue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.clearQueue = /**
     * @return {?}
     */
    function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.uploadItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        /** @type {?} */
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.cancelItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.getIndexOfItem(value);
        /** @type {?} */
        var item = this.queue[index];
        /** @type {?} */
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.uploadAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.isUploading; }));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._prepareToUploading(); }));
        items[0].upload();
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.cancelAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.cancel(); }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.isFile = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isFile(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.isFileLikeObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof FileLikeObject;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FileUploader.prototype.getIndexOfItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.getNotUploadedItems = /**
     * @return {?}
     */
    function () {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.isUploaded; }));
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.getReadyItems = /**
     * @return {?}
     */
    function () {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.isReady && !item.isUploading); }))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        function (item1, item2) { return item1.index - item2.index; }));
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.destroy = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} fileItems
     * @return {?}
     */
    FileUploader.prototype.onAfterAddingAll = /**
     * @param {?} fileItems
     * @return {?}
     */
    function (fileItems) {
        return { fileItems: fileItems };
    };
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    FileUploader.prototype.onBuildItemForm = /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    /**
     * @param {?} fileItem
     * @return {?}
     */
    FileUploader.prototype.onAfterAddingFile = /**
     * @param {?} fileItem
     * @return {?}
     */
    function (fileItem) {
        return { fileItem: fileItem };
    };
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype.onWhenAddingFileFailed = /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    /**
     * @param {?} fileItem
     * @return {?}
     */
    FileUploader.prototype.onBeforeUploadItem = /**
     * @param {?} fileItem
     * @return {?}
     */
    function (fileItem) {
        return { fileItem: fileItem };
    };
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype.onProgressItem = /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    /**
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype.onProgressAll = /**
     * @param {?} progress
     * @return {?}
     */
    function (progress) {
        return { progress: progress };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onSuccessItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onErrorItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onCancelItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype.onCompleteItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    /**
     * @return {?}
     */
    FileUploader.prototype.onCompleteAll = /**
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._mimeTypeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._fileSizeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._fileTypeFilter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onErrorItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onCompleteItem = /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    FileUploader.prototype._headersGetter = /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    function (parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._xhrTransport = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_2, _a, e_3, _b;
        var _this = this;
        /** @type {?} */
        var that = this;
        /** @type {?} */
        var xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            var appendFile = (/**
             * @return {?}
             */
            function () { return sendable.append(item.alias, item._file, item.file.name); });
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            /** @type {?} */
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            var method = '_on' + gist + 'Item';
            ((/** @type {?} */ (_this)))[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            try {
                for (var _c = __values(this.options.headers), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var header = _d.value;
                    xhr.setRequestHeader(header.name, header.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (item.headers.length) {
            try {
                for (var _e = __values(item.headers), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var header = _f.value;
                    xhr.setRequestHeader(header.name, header.value);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return xhr.send(JSON.stringify(result)); }));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    FileUploader.prototype._getTotalProgress = /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        var notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        var ratio = 100 / this.queue.length;
        /** @type {?} */
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    FileUploader.prototype._getFilters = /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) { return names_1.indexOf(filter.name) !== -1; }));
        }
        return this.options.filters;
    };
    /**
     * @protected
     * @return {?}
     */
    FileUploader.prototype._render = /**
     * @protected
     * @return {?}
     */
    function () {
        return void 0;
    };
    /**
     * @protected
     * @return {?}
     */
    FileUploader.prototype._queueLimitFilter = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype._isValidFile = /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        }));
    };
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    FileUploader.prototype._isSuccessCode = /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._transformResponse = /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    function (response, headers) {
        return response;
    };
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._parseHeaders = /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        /** @type {?} */
        var parsed = {};
        /** @type {?} */
        var key;
        /** @type {?} */
        var val;
        /** @type {?} */
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    FileUploader.prototype._onWhenAddingFileFailed = /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._onAfterAddingFile = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.onAfterAddingFile(item);
    };
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    FileUploader.prototype._onAfterAddingAll = /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.onAfterAddingAll(items);
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    FileUploader.prototype._onBeforeUploadItem = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    FileUploader.prototype._onBuildItemForm = /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    FileUploader.prototype._onProgressItem = /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    function (item, progress) {
        /** @type {?} */
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onSuccessItem = /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    FileUploader.prototype._onCancelItem = /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileSelectDirective = /** @class */ (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.isEmptyAfterSelection = /**
     * @return {?}
     */
    function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    /**
     * @return {?}
     */
    FileSelectDirective.prototype.onChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var files = this.element.nativeElement.files;
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    FileSelectDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileSelect]' },] }
    ];
    /** @nocollapse */
    FileSelectDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FileSelectDirective.propDecorators = {
        uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
    };
    return FileSelectDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileDropDirective = /** @class */ (function () {
    function FileDropDirective(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        return this.uploader.options;
    };
    /**
     * @return {?}
     */
    FileDropDirective.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return {};
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        var options = this.getOptions();
        /** @type {?} */
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._getTransfer = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    FileDropDirective.prototype._preventAndStop = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    FileDropDirective.prototype._haveFiles = /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    FileDropDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileDrop]' },] }
    ];
    /** @nocollapse */
    FileDropDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FileDropDirective.propDecorators = {
        uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
    };
    return FileDropDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [FileDropDirective, FileSelectDirective],
                    exports: [FileDropDirective, FileSelectDirective]
                },] }
    ];
    return FileUploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-file-upload.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/import/import.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/import/import.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"ion-text-left ion-padding-top\">\n        <ion-button (tap)=\"reset()\"\n                    *ngIf=\"deviceId\"\n                    fill=\"clear\"\n                    slot=\"start\"\n                    size=\"large\"\n                    color=\"light\">\n            <fa-icon icon=\"chevron-left\"></fa-icon>\n        </ion-button>\n\n        <div class=\"ion-padding-start\">\n            Import\n        </div>\n        <ion-button slot=\"end\" size=\"large\" [fill]=\"'clear'\" [color]=\"'light'\" (tap)=\"close()\">\n            <fa-icon icon=\"times\"></fa-icon>\n        </ion-button>\n    </ion-toolbar>\n\n    <ion-toolbar *ngIf=\"!importItems && deviceId\">\n        <ion-checkbox slot=\"start\" margin (ngModelChange)=\"onchange(true)\" [(ngModel)]=\"allSelected\"></ion-checkbox>\n        <ion-searchbar color=\"light\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\"></ion-searchbar>\n    </ion-toolbar>\n\n</ion-header>\n<ion-content #content class=\"ion-padding-start\">\n    <div class=\"square-container\" *ngIf=\"!importItems && !deviceId\">\n        <div class=\"square\"\n             *ngFor=\"let device of devices; let i = index\"\n             [attr.data-index]=\"i\"\n             (tap)=\"openDevice(device.id)\">\n            <div class=\"content\">\n                <div>{{device.label}}</div>\n                <ion-badge color=\"light\" slot=\"end\">\n                    {{ (device.size / 1024 / 1024 / 1024) | number:'1.2-2'}}GB\n                </ion-badge>\n\n            </div>\n        </div>\n    </div>\n\n    <ion-list *ngIf=\"!importItems && result\">\n        <ion-item *ngIf=\"result.length < 1\">\n            <ion-label text-center>\n                No new files to import.\n            </ion-label>\n        </ion-item>\n\n\n        <ion-item *ngFor=\"let item of result\">\n            <ion-checkbox slot=\"start\" (ngModelChange)=\"onchange()\"\n                          [(ngModel)]=\"selected[item.integrity_hash]\"></ion-checkbox>\n            <ion-label>\n                <small>{{item.filename}}</small>\n            </ion-label>\n\n            <ion-badge slot=\"end\">\n                {{item.filesize / 1024 / 1024 | number:'1.0-0'}} MB\n            </ion-badge>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngIf=\"!importCompleted && importItems\">\n        <ion-item *ngFor=\"let item of importItems;\">\n\n            <ion-badge *ngIf=\"this.processed[item.integrity_hash]\"\n                       color=\"success\" slot=\"end\">\n                <fa-icon icon=\"check\"></fa-icon>\n            </ion-badge>\n\n            <ion-badge\n                    *ngIf=\"this.processed.hasOwnProperty(item.integrity_hash) && !this.processed[item.integrity_hash]\"\n                    color=\"danger\" slot=\"end\">\n                <fa-icon icon=\"times\"></fa-icon>\n            </ion-badge>\n\n\n            <ion-label>{{item.filename}}</ion-label>\n            <ion-spinner *ngIf=\"!this.processed.hasOwnProperty(item.integrity_hash)\" slot=\"end\"></ion-spinner>\n        </ion-item>\n    </ion-list>\n\n\n    <div class=\"importCompleted\" *ngIf=\"importCompleted\">\n        <ion-card>\n            <ion-card-content text-center>\n                <h1>Import completed</h1>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n</ion-content>\n<ion-footer *ngIf=\"!importItems && canImport\">\n    <ion-toolbar color=\"success\">\n        <ion-button color=\"light\" fill=\"clear\" expand=\"block\" (tap)=\"startImport()\">\n            Start Import\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload/upload.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload/upload.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"ion-text-left ion-padding-top\">\n        <div class=\"ion-padding-start\">\n            Upload\n        </div>\n        <ion-button slot=\"end\" size=\"large\" [fill]=\"'clear'\" [color]=\"'light'\" (tap)=\"close()\">\n            <fa-icon icon=\"times\"></fa-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n<ion-content #content class=\"ion-padding-start\">\n    <div class=\"file-input-container\" *ngIf=\"!importItems\">\n        <ion-button color=\"primary\" (tap)=\"inputFile.click()\">\n            <ion-icon name=\"attach\"></ion-icon>\n            Cloose File(s)\n        </ion-button>\n        <input #inputFile id=\"input-file\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple accept=\"audio/*\"/>\n    </div>\n\n    <h2 *ngIf=\"!importItems\">Files: {{ uploader?.queue?.length }}</h2>\n\n    <ion-list *ngIf=\"!importItems\">\n        <ion-item *ngFor=\"let item of uploader.queue\">\n            <ion-label>\n                {{ item?.file?.name }}\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n\n\n    <ion-list *ngIf=\"!importCompleted && importItems\">\n        <ion-item *ngFor=\"let item of importItems;\">\n\n            <ion-badge *ngIf=\"this.processed[item.integrity_hash]\"\n                       color=\"success\" slot=\"end\">\n                <fa-icon icon=\"check\"></fa-icon>\n            </ion-badge>\n\n            <ion-badge\n                    *ngIf=\"this.processed.hasOwnProperty(item.integrity_hash) && !this.processed[item.integrity_hash]\"\n                    color=\"danger\" slot=\"end\">\n                <fa-icon icon=\"times\"></fa-icon>\n            </ion-badge>\n\n\n            <ion-label>{{item.filename}}</ion-label>\n            <ion-spinner *ngIf=\"!this.processed.hasOwnProperty(item.integrity_hash)\" slot=\"end\"></ion-spinner>\n        </ion-item>\n    </ion-list>\n\n    <div class=\"importCompleted\" *ngIf=\"importCompleted\">\n        <ion-card>\n            <ion-card-content text-center>\n                <h1>Import completed</h1>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-toolbar color=\"success\" [hidden]=\"uploader?.queue?.length < 1 || importItems\">\n        <ion-button (tap)=\"upload()\" color=\"light\" fill=\"clear\" expand=\"block\">\n            Start Upload\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/actions/actions.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/actions/actions.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list mode=\"md\" no-padding>\n    <ion-item color=\"light\" [button]=\"true\" (tap)=\"modify()\" [detail]=\"false\">\n        <ion-label text-center>Modify</ion-label>\n    </ion-item>\n    <ion-item color=\"light\" [button]=\"true\" (tap)=\"remove()\" [detail]=\"false\">\n        <ion-label text-center color=\"danger\">Remove</ion-label>\n    </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/add/add.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/add/add.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-list mode=\"md\" no-padding>-->\n<!--<ion-item color=\"light\" mode=\"ios\" [button]=\"true\" (tap)=\"add()\" [detail]=\"false\">-->\n<!--<ion-label text-center>-->\n<!--Create New Playlist-->\n<!--</ion-label>-->\n<!--</ion-item>-->\n<!--</ion-list>-->\n\n<ion-header>\n    <ion-toolbar class=\"ion-text-left ion-padding-top\">\n        <div class=\"ion-padding-start\">\n            Choose Playlist\n        </div>\n        <ion-button slot=\"end\" size=\"large\" [fill]=\"'clear'\" [color]=\"'light'\" (tap)=\"close()\">\n            <fa-icon icon=\"times\"></fa-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list lines=\"none\">\n        <ion-item [button]=\"true\" *ngFor=\"let playlist of playlists\"\n                  [detail]=\"false\">\n            <ion-checkbox slot=\"start\" [disabled]=\"playlist.disabled\" [(ngModel)]=\"selected[playlist.id]\"\n                          (ngModelChange)=\"onchange()\"></ion-checkbox>\n            <ion-label>\n                <h2>{{playlist.name}}</h2>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-button slot=\"start\" (tap)=\"add()\">\n            Add New\n        </ion-button>\n        <ion-button slot=\"end\" color=\"success\" [disabled]=\"!canImport\" (tap)=\"select()\">\n            Select\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/files.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/files.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [hidden]=\"files || files === null\"></app-loader>\n\n<ion-header>\n    <ion-toolbar class=\"ion-text-left ion-padding-top\">\n        <div class=\"ion-padding-start\">\n            Files\n        </div>\n        <ion-button tappable slot=\"end\" size=\"large\" [fill]=\"'clear'\" [color]=\"'light'\" (tap)=\"importUpload()\">\n            <fa-icon icon=\"upload\"></fa-icon>\n        </ion-button>\n        <ion-button tappable slot=\"end\" size=\"large\" [fill]=\"'clear'\" [color]=\"'light'\" (tap)=\"importDevice()\">\n            <fa-icon icon=\"download\"></fa-icon>\n        </ion-button>\n\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-header [hidden]=\"!files\" padding-top>\n    <ion-toolbar>\n        <ion-searchbar color=\"light\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list *ngIf=\"files\" lines=\"none\">\n        <ion-item *ngFor=\"let file of files\"\n                  [class.active]=\"playerService.isSong(file.id)\"\n                  (dblclick)=\"playerService.setSong(file.id)\"\n                  (contextmenu)=\"$event.preventDefault();actions($event, file)\">\n            <ion-avatar class=\"icon\" slot=\"start\">\n                <ion-button\n                        (tap)=\"playerService.isSong(file.id) ? playerService.toggleState() :playerService.setSong(file.id)\"\n                        class=\"icon-hover\"\n                        color=\"primary\">\n                    <fa-icon [icon]=\"playerService.isSong(file.id, 'Playing') ? 'pause' : 'play'\"\n                             slot=\"icon-only\"></fa-icon>\n                </ion-button>\n                <ion-button (tap)=\"playerService.setSong(file.id)\" class=\"icon-default\"\n                            color=\"tertiary\">\n                    <fa-icon [icon]=\"playerService.isSong(file.id, 'Playing') ? 'volume-up' : 'music'\"\n                             slot=\"icon-only\"></fa-icon>\n                </ion-button>\n            </ion-avatar>\n\n            <ion-label>\n                <h2>\n                    <span *ngIf=\"!file.title && !file.artist\">\n                        {{file.filename}}\n                    </span>\n\n                    <span *ngIf=\"file.title\">{{file.title}}</span>\n                    <span *ngIf=\"file.title && file.artist\"> - </span>\n                    <small *ngIf=\"file.artist\">{{file.artist}}</small>\n                </h2>\n                <p *ngIf=\"file.title || file.artist\">{{file.filename}}</p>\n            </ion-label>\n            <ion-avatar class=\"icon\" slot=\"end\">\n                <ion-button tappable fill=\"clear\" color=\"light\" (tap)=\"preview(file)\">\n                    <fa-icon icon=\"headphones\"></fa-icon>\n                </ion-button>\n            </ion-avatar>\n            <ion-avatar class=\"icon\" slot=\"end\">\n                <ion-button tappable fill=\"clear\" color=\"light\" (tap)=\"actions($event, file)\">\n                    <fa-icon icon=\"ellipsis-v\"></fa-icon>\n                </ion-button>\n            </ion-avatar>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer>\n    <app-player></app-player>\n</ion-footer>");

/***/ }),

/***/ "./src/app/components/import/import.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/import/import.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background: #151836;\n  border-radius: 25px;\n}\n:host .square-container {\n  padding: 8px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n:host .square {\n  cursor: pointer;\n  width: 100%;\n  float: left;\n  position: relative;\n  padding-bottom: calc(100% / 2);\n}\n@media screen and (min-width: 768px) {\n  :host .square {\n    width: calc(100% / 2);\n    padding-bottom: calc(100% / 3);\n  }\n}\n:host .square .content {\n  width: calc(100% - 16px);\n  height: calc(100% - 16px);\n  position: absolute;\n  padding-top: calc(25% - 38px);\n  font-size: 24px;\n  color: white;\n  border-radius: 20px;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n  :host .square .content {\n    padding-top: calc(25% - 18px);\n  }\n}\n:host ion-footer::before {\n  background-image: none;\n}\n:host .importCompleted {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n:host .importCompleted ion-card {\n  box-shadow: none;\n  -webkit-box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL2NvbXBvbmVudHMvaW1wb3J0L2ltcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbXBvcnQvaW1wb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7QURFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNBSjtBREVJO0VBUEY7SUFRSSxxQkFBQTtJQUNBLDhCQUFBO0VDQ0o7QUFDRjtBREVFO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdJO0VBWEY7SUFZSSw2QkFBQTtFQ0FKO0FBQ0Y7QURNSTtFQUNFLHNCQUFBO0FDSk47QURTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BKO0FEU0k7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltcG9ydC9pbXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6ICMxNTE4MzY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbiAgLnNxdWFyZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5zcXVhcmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoMTAwJSAvIDIpO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEwMCUgLyAzKTtcbiAgICB9XG4gIH1cblxuICAuc3F1YXJlIC5jb250ZW50IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoMjUlIC0gMzhweCk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDI1JSAtIDE4cHgpO1xuICAgIH1cblxuICB9XG5cblxuICBpb24tZm9vdGVyIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICB9XG4gIH1cblxuXG4gIC5pbXBvcnRDb21wbGV0ZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgfVxuXG59IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiAjMTUxODM2O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuOmhvc3QgLnNxdWFyZS1jb250YWluZXIge1xuICBwYWRkaW5nOiA4cHg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IC5zcXVhcmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygxMDAlIC8gMik7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAuc3F1YXJlIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMik7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoMTAwJSAvIDMpO1xuICB9XG59XG46aG9zdCAuc3F1YXJlIC5jb250ZW50IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDI1JSAtIDM4cHgpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgLnNxdWFyZSAuY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoMjUlIC0gMThweCk7XG4gIH1cbn1cbjpob3N0IGlvbi1mb290ZXI6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG46aG9zdCAuaW1wb3J0Q29tcGxldGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5pbXBvcnRDb21wbGV0ZWQgaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/import/import.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/import/import.component.ts ***!
  \*******************************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/device.service */ "./src/app/services/api/device.service.ts");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/file.service */ "./src/app/services/api/file.service.ts");





var ImportComponent = /** @class */ (function () {
    function ImportComponent(alertController, modalController, deviceService, fileService, loadingCtrl) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.deviceService = deviceService;
        this.fileService = fileService;
        this.loadingCtrl = loadingCtrl;
        this.selected = [];
        this.allSelected = false;
        this.processed = [];
        this.importCompleted = false;
    }
    ImportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceService.subscribe(function (devices) {
            _this.devices = devices;
            if (devices.length === 1) {
                // this.openDevice(devices[0].id);
            }
        });
    };
    ImportComponent.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.importItems && !this.importCompleted)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Are you sure?',
                                message: 'Are you sure you want to stop importing the files?',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }, {
                                        text: 'Stop Import',
                                        handler: function () {
                                            _this.modalController.dismiss();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.modalController.dismiss();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ImportComponent.prototype.reset = function () {
        this.deviceId = null;
        this.files = null;
        this.result = null;
        this.selected = [];
    };
    ImportComponent.prototype.openDevice = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.selected = [];
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        this.deviceService.with(this.fileService).find(id).then(function (device) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.files = device.files;
                                        this.deviceId = id;
                                        this.selected = [];
                                        this.search();
                                        return [4 /*yield*/, loader.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ImportComponent.prototype.search = function () {
        var _this = this;
        this.result = this.files.filter(function (file) {
            if (!_this.searchTerm) {
                return true;
            }
            return file.filename.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    ImportComponent.prototype.onchange = function (all) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var list_1, isAll_1, list;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (all) {
                    list_1 = this.result.map(function (item) { return (_this.selected[item.integrity_hash] ? _this.selected[item.integrity_hash] : false); });
                    isAll_1 = list_1.length === list_1.filter(function (v) { return v; }).length;
                    this.files.forEach(function (item) {
                        _this.selected[item.integrity_hash] = !isAll_1;
                    });
                }
                list = this.result.map(function (item) { return (_this.selected[item.integrity_hash] ? _this.selected[item.integrity_hash] : false); });
                this.allSelected = list.length === list.filter(function (v) { return v; }).length;
                this.canImport = list.filter(function (v) { return v; }).length > 0;
                return [2 /*return*/];
            });
        });
    };
    ImportComponent.prototype.select = function (all) {
        var _this = this;
        if (all === void 0) { all = false; }
        if (all) {
            var list = this.result.map(function (item) { return (_this.selected[item.integrity_hash] ? _this.selected[item.integrity_hash] : false); });
            var isAll_2 = list.length === list.filter(function (v) { return v; }).length;
            this.files.forEach(function (item) {
                _this.selected[item.integrity_hash] = !isAll_2;
            });
        }
        else {
            var list = this.result.map(function (item) { return (_this.selected[item.integrity_hash] ? _this.selected[item.integrity_hash] : false); });
            this.allSelected = list.length === list.filter(function (v) { return v; }).length;
            this.canImport = list.filter(function (v) { return v; }).length > 0;
        }
        // setTimeout(() => {
        // }, 100);
    };
    ImportComponent.prototype.startImport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, _loop_1, this_1, _i, _a, item, importer;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.importItems = this.result.map(function (item) { return _this.selected[item.integrity_hash] ? item : false; }).filter(function (v) { return v; });
                        i = 0;
                        _loop_1 = function (item) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.fileService.create({ filepath: item.filepath, filename: item.filename })
                                            .then(function () { return _this.processed[item.integrity_hash] = true; })
                                            .catch(function () { return _this.processed[item.integrity_hash] = false; })];
                                    case 1:
                                        _a.sent();
                                        this_1.content.scrollToPoint(null, i * 50, 300);
                                        i++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = this.importItems;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        item = _a[_i];
                        return [5 /*yield**/, _loop_1(item)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        importer = this;
                        setTimeout(function () {
                            importer.importCompleted = true;
                            setTimeout(function () {
                                importer.modalController.dismiss();
                            }, 1500);
                        }, 1500);
                        return [2 /*return*/];
                }
            });
        });
    };
    ImportComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_api_device_service__WEBPACK_IMPORTED_MODULE_3__["DeviceService"] },
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('deviceId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImportComponent.prototype, "deviceId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], ImportComponent.prototype, "content", void 0);
    ImportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./import.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/import/import.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./import.component.scss */ "./src/app/components/import/import.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_api_device_service__WEBPACK_IMPORTED_MODULE_3__["DeviceService"],
            _services_api_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], ImportComponent);
    return ImportComponent;
}());



/***/ }),

/***/ "./src/app/components/import/import.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/import/import.module.ts ***!
  \****************************************************/
/*! exports provided: ImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportModule", function() { return ImportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _import_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import.component */ "./src/app/components/import/import.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");







var ImportModule = /** @class */ (function () {
    function ImportModule() {
    }
    ImportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _import_component__WEBPACK_IMPORTED_MODULE_3__["ImportComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            entryComponents: [_import_component__WEBPACK_IMPORTED_MODULE_3__["ImportComponent"]],
            exports: [_import_component__WEBPACK_IMPORTED_MODULE_3__["ImportComponent"]]
        })
    ], ImportModule);
    return ImportModule;
}());



/***/ }),

/***/ "./src/app/components/upload/upload.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/upload/upload.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background: #151836;\n  border-radius: 25px;\n}\n:host .file-input-container {\n  text-align: center;\n}\n:host .file-input-container input[type=file] {\n  display: none;\n}\n:host h2 {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURHRTtFQUNFLFdBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzE1MTgzNjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcblxuICAuZmlsZS1pbnB1dC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgaDIge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiAjMTUxODM2O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuOmhvc3QgLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmZpbGUtaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgaDIge1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/upload/upload.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/upload/upload.component.ts ***!
  \*******************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/file.service */ "./src/app/services/api/file.service.ts");







var UploadComponent = /** @class */ (function () {
    function UploadComponent(modalController, httpClient, fileService) {
        this.modalController = modalController;
        this.httpClient = httpClient;
        this.fileService = fileService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({});
        this.processed = [];
        this.importCompleted = false;
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.getFiles = function () {
        return this.uploader.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    UploadComponent.prototype.upload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData, files;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        files = this.getFiles();
                        files.forEach(function (file) {
                            formData.append('files[]', file.rawFile, file.name);
                        });
                        return [4 /*yield*/, this.httpClient.post(_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"].host + '/api/v1/upload', formData).toPromise().then(function (files) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var i, _loop_1, this_1, _i, _a, item, importer;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            this.importItems = files;
                                            i = 0;
                                            _loop_1 = function (item) {
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this_1.fileService.create({ filepath: item.filepath, filename: item.filename })
                                                                .then(function () { return _this.processed[item.integrity_hash] = true; })
                                                                .catch(function () { return _this.processed[item.integrity_hash] = false; })];
                                                        case 1:
                                                            _a.sent();
                                                            this_1.content.scrollToPoint(null, i * 50, 300);
                                                            i++;
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            this_1 = this;
                                            _i = 0, _a = this.importItems;
                                            _b.label = 1;
                                        case 1:
                                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                                            item = _a[_i];
                                            return [5 /*yield**/, _loop_1(item)];
                                        case 2:
                                            _b.sent();
                                            _b.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            importer = this;
                                            setTimeout(function () {
                                                importer.importCompleted = true;
                                                setTimeout(function () {
                                                    importer.modalController.dismiss();
                                                }, 1500);
                                            }, 1500);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadComponent.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    UploadComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], UploadComponent.prototype, "content", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload/upload.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.scss */ "./src/app/components/upload/upload.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_api_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/components/upload/upload.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/upload/upload.module.ts ***!
  \****************************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");








var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            entryComponents: [_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]],
            exports: [_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]]
        })
    ], UploadModule);
    return UploadModule;
}());



/***/ }),

/***/ "./src/app/pages/files/actions/actions.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/files/actions/actions.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  overflow: hidden;\n  background: #fff;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL3BhZ2VzL2ZpbGVzL2FjdGlvbnMvYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmlsZXMvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWxlcy9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59IiwiOmhvc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/files/actions/actions.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/files/actions/actions.component.ts ***!
  \**********************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/file.service */ "./src/app/services/api/file.service.ts");




var ActionsComponent = /** @class */ (function () {
    function ActionsComponent(fileService, popoverController, alertController) {
        this.fileService = fileService;
        this.popoverController = popoverController;
        this.alertController = alertController;
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    ActionsComponent.prototype.modify = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.popoverController.dismiss().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertController.create({
                                    header: 'Modify File',
                                    inputs: [
                                        {
                                            name: 'title',
                                            type: 'text',
                                            placeholder: 'Enter Title...',
                                            value: this.file.title
                                        },
                                        {
                                            name: 'artist',
                                            type: 'text',
                                            placeholder: 'Enter Artist...',
                                            value: this.file.artist
                                        }
                                    ],
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel'
                                        }, {
                                            text: 'Modify',
                                            handler: function (data) {
                                                _this.file.update({
                                                    title: data.title,
                                                    artist: data.artist
                                                });
                                            }
                                        }
                                    ],
                                    cssClass: 'modal'
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
                                    message: 'Do you really want to delete this file?',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel'
                                        }, {
                                            text: 'Delete',
                                            handler: function () {
                                                _this.file.delete();
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
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActionsComponent.prototype, "file", void 0);
    ActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/actions/actions.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actions.component.scss */ "./src/app/pages/files/actions/actions.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/files/add/add.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/files/add/add.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  overflow: hidden;\n  background: #151836;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL3BhZ2VzL2ZpbGVzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpbGVzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbGVzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMxNTE4MzY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59IiwiOmhvc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjMTUxODM2O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/files/add/add.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/files/add/add.component.ts ***!
  \**************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/playlist.service */ "./src/app/services/api/playlist.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/file.service */ "./src/app/services/api/file.service.ts");





var AddComponent = /** @class */ (function () {
    function AddComponent(fileService, popoverController, playlistService, alertController, modalController) {
        this.fileService = fileService;
        this.popoverController = popoverController;
        this.playlistService = playlistService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.selected = [];
        this.allSelected = false;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load Playlists
        // const fileId = this.file.id;
        this.playlistService.with(this.fileService).subscribe(function (playlists) {
            _this.playlists = playlists.map(function (playlist) {
                playlist.disabled = playlist.files.find(function (f) { return f.id == _this.file.id; }) !== undefined;
                return playlist;
            });
        });
    };
    AddComponent.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    AddComponent.prototype.add = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.playlistService.create().then(function (playlist) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.update(playlist).then(function (response) {
                            _this.close();
                        });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    AddComponent.prototype.onchange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.canImport = this.selected.filter(function (a) { return !!a; }).length > 0;
                return [2 /*return*/];
            });
        });
    };
    AddComponent.prototype.select = function () {
        var _this = this;
        var playlists = Object.keys(this.selected);
        playlists.filter(function (id) { return !!_this.selected[id]; }).map(function (id) {
            return _this.playlists.find(function (playlist) {
                return playlist.id == id;
            });
        }).forEach(function (playlist) {
            _this.update(playlist);
        });
        this.close();
    };
    AddComponent.prototype.update = function (playlist) {
        return playlist.attach(this.file);
    };
    AddComponent.ctorParameters = function () { return [
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddComponent.prototype, "file", void 0);
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/add/add.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/files/add/add.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _services_api_playlist_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/files/files.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/files/files.module.ts ***!
  \*********************************************/
/*! exports provided: FilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPageModule", function() { return FilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _files_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files.page */ "./src/app/pages/files/files.page.ts");
/* harmony import */ var _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loader/loader.module */ "./src/app/components/loader/loader.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/actions.component */ "./src/app/pages/files/actions/actions.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/files/add/add.component.ts");
/* harmony import */ var _components_preview_preview_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/preview/preview.module */ "./src/app/components/preview/preview.module.ts");
/* harmony import */ var _components_import_import_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/import/import.module */ "./src/app/components/import/import.module.ts");
/* harmony import */ var _components_player_player_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/player/player.module */ "./src/app/components/player/player.module.ts");
/* harmony import */ var _components_upload_upload_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/upload/upload.module */ "./src/app/components/upload/upload.module.ts");















var routes = [
    {
        path: '',
        component: _files_page__WEBPACK_IMPORTED_MODULE_6__["FilesPage"]
    }
];
var FilesPageModule = /** @class */ (function () {
    function FilesPageModule() {
    }
    FilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"],
                _components_preview_preview_module__WEBPACK_IMPORTED_MODULE_11__["PreviewModule"],
                _components_import_import_module__WEBPACK_IMPORTED_MODULE_12__["ImportModule"],
                _components_upload_upload_module__WEBPACK_IMPORTED_MODULE_14__["UploadModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                _components_player_player_module__WEBPACK_IMPORTED_MODULE_13__["PlayerModule"]
            ],
            declarations: [_files_page__WEBPACK_IMPORTED_MODULE_6__["FilesPage"], _actions_actions_component__WEBPACK_IMPORTED_MODULE_9__["ActionsComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"]],
            entryComponents: [_actions_actions_component__WEBPACK_IMPORTED_MODULE_9__["ActionsComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"]]
        })
    ], FilesPageModule);
    return FilesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/files/files.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/files/files.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-item ion-label p {\n  color: #657595;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlrZWx0ZW52b29yZGUvQXJ0aXN0UGxheWVyL0FwcC9zcmMvYXBwL3BhZ2VzL2ZpbGVzL2ZpbGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmlsZXMvZmlsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsY0FBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlsZXMvZmlsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIGlvbi1pdGVtIHtcbiAgICBpb24tbGFiZWwgcCB7XG4gICAgICBjb2xvcjogIzY1NzU5NTtcbiAgICB9XG4gIH1cblxufSIsIjpob3N0IGlvbi1pdGVtIGlvbi1sYWJlbCBwIHtcbiAgY29sb3I6ICM2NTc1OTU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/files/files.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/files/files.page.ts ***!
  \*******************************************/
/*! exports provided: FilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPage", function() { return FilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/actions.component */ "./src/app/pages/files/actions/actions.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/file.service */ "./src/app/services/api/file.service.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/files/add/add.component.ts");
/* harmony import */ var _providers_api_resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/api/resource */ "./src/app/providers/api/resource.ts");
/* harmony import */ var _components_preview_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/preview/preview.component */ "./src/app/components/preview/preview.component.ts");
/* harmony import */ var _components_import_import_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/import/import.component */ "./src/app/components/import/import.component.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");











var FilesPage = /** @class */ (function () {
    function FilesPage(fileService, popoverController, modalController, playerService) {
        this.fileService = fileService;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.playerService = playerService;
        this.files = [];
    }
    FilesPage.prototype.ngOnInit = function () {
    };
    FilesPage.prototype.ionViewWillEnter = function () {
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
        this.searcher.orderBy('id', _providers_api_resource__WEBPACK_IMPORTED_MODULE_6__["Order"].DESC)
            .limit(100)
            .page(1)
            .subscribe(function (result) {
            _this.files = result;
        });
    };
    FilesPage.prototype.ionViewWillLeave = function () {
        this.searcher.unsubscribe();
    };
    FilesPage.prototype.search = function () {
        this.searcher.search([
            {
                filename: {
                    operator: 'like',
                    value: '%' + this.searchTerm + '%'
                }
            }
        ]);
    };
    FilesPage.prototype.add = function (ev, file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"],
                            cssClass: 'add-modal',
                            componentProps: {
                                file: file
                            }
                        })];
                    case 1: return [2 /*return*/, (_a.sent()).present()];
                }
            });
        });
    };
    FilesPage.prototype.actions = function (ev, file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["ActionsComponent"],
                            componentProps: {
                                file: file
                            },
                            event: ev,
                            translucent: false,
                            mode: 'ios',
                        })];
                    case 1: return [2 /*return*/, (_a.sent()).present()];
                }
            });
        });
    };
    FilesPage.prototype.preview = function (file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_preview_preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"],
                            cssClass: 'preview-modal',
                            componentProps: {
                                'fileId': file.id
                            }
                        })];
                    case 1: return [2 /*return*/, (_a.sent()).present()];
                }
            });
        });
    };
    FilesPage.prototype.importDevice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_import_import_component__WEBPACK_IMPORTED_MODULE_8__["ImportComponent"],
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
        });
    };
    FilesPage.prototype.importUpload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"],
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
        });
    };
    FilesPage.ctorParameters = function () { return [
        { type: _services_api_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _services_player_service__WEBPACK_IMPORTED_MODULE_10__["PlayerService"] }
    ]; };
    FilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./files.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/files/files.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./files.page.scss */ "./src/app/pages/files/files.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_player_service__WEBPACK_IMPORTED_MODULE_10__["PlayerService"]])
    ], FilesPage);
    return FilesPage;
}());



/***/ }),

/***/ "./src/app/services/api/device.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/api/device.service.ts ***!
  \************************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/api/resource */ "./src/app/providers/api/resource.ts");



var DeviceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeviceService, _super);
    function DeviceService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'devices';
        _this.location = '/api/v1/devices';
        return _this;
    }
    DeviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DeviceService);
    return DeviceService;
}(_providers_api_resource__WEBPACK_IMPORTED_MODULE_2__["Resource"]));



/***/ })

}]);
//# sourceMappingURL=pages-files-files-module.js.map