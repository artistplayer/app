(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3n8g":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("mrSG"),i=n("Ovi0"),o=n("CcnG"),s=n("t/Na"),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="stats",e.location="/api/v1/stats",e}return r.d(e,t),e.ngInjectableDef=o.S({factory:function(){return new e(o.W(s.c))},token:e,providedIn:"root"}),e}(i.b)},"9sDO":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("mrSG"),i=n("Ovi0"),o=n("ZZ/e"),s=n("CcnG"),a=n("t/Na"),u=function(t){function e(e,n){var r=t.call(this,e)||this;return r.httpClient=e,r.alertController=n,r.name="playlists",r.location="/api/v1/playlists",r}return r.d(e,t),e.prototype.create=function(){var e=this;return new Promise(function(n,i){return r.b(e,void 0,void 0,function(){var e=this;return r.e(this,function(o){switch(o.label){case 0:return[4,this.alertController.create({header:"New Playlist",inputs:[{name:"name",type:"text",placeholder:"Enter Playlist Name...",value:""}],buttons:[{text:"Cancel",role:"cancel"},{text:"Create",handler:function(o){o&&t.prototype.create.call(e,{name:o.name}).then(function(t){return r.b(e,void 0,void 0,function(){return r.e(this,function(e){return n(t),[2]})})}).catch(function(t){return i(t)})}}]})];case 1:return[4,o.sent().present()];case 2:return o.sent(),[2]}})})})},e.ngInjectableDef=s.S({factory:function(){return new e(s.W(a.c),s.W(o.a))},token:e,providedIn:"root"}),e}(i.b)},Ovi0:function(t,e,n){"use strict";var r,i=function(){function t(){}return t.where=function(e,n){var r=Object.keys(n);return!r.length||r.filter(function(r){return t.operatorFilter(e[r],n[r])}).length>0},t.operatorFilter=function(e,n){var r="=";if("object"==typeof n){if(n[0])return n.filter(function(n){if("object"==typeof n){var i=t.validOperator(n.operator),o=n.value?n.value:null;return null!==o&&t.matches(e,i,o)}return t.matches(e,r,n)}).length>0;n.operator&&(r=t.validOperator(n.operator)),n=n.value}return t.matches(e,r,n)},t.matches=function(e,n,r){switch("string"==typeof e&&(e=e.toLowerCase()),"string"==typeof r&&(r=r.toLowerCase()),"undefined"!==r&&"null"!==r||(r=""),n){case"neq":case"<>":case"!=":return e!==r;case"lt":case"<":return e<r;case"gt":case">":return e>r;case"lte":case"<=":return e<=r;case"gte":case">=":return e>=r;case"not like":case"!like":return!t.like(e,r);case"like":return t.like(e,r);case"!regexp":case"not regexp":return!new RegExp(r).test(e);case"regexp":return new RegExp(r).test(e);case"eq":case"<=>":default:return e===r}},t.validOperator=function(e){return t.validOperators.indexOf(e)?t.mapOperator(e):"="},t.mapOperator=function(e){return t.mappings[e]?t.mappings[e]:e},t.like=function(e,n){return"%"===n.substr(0,1)&&"%"===n.substr(n.length-1,1)?e.indexOf(t.clear(n.substring(1,n.length-1)))>-1:"%"===n.substr(0,1)?e.indexOf(t.clear(n.substring(1,n.length)))>0:"%"===n.substr(n.length-1,1)&&0===e.indexOf(t.clear(n.substring(0,n.length-1)))},t.clear=function(t){return"undefined"!==t&&"null"!==t||(t=""),t},t.validOperators=["eq","neq","lt","gt","lte","gte","!regexp","!like","<",">","<=",">=","<>","!=","<=>","like","not like","regexp","not regexp"],t.mappings={eq:"=",neq:"!=",lt:"<",gt:">",lte:"<=",gte:">=","!regexp":"not regexp","!like":"not like"},t}(),o=function(){function t(t){this.parent=t,this._listeners=[],this._isFullyload=!1}return t.prototype.addListener=function(t){console.log("Add listener: "+t.constructor.name),this._listeners.push(t)},t.prototype.validate=function(t){var e=this;return t.with.length===t.with.filter(function(t){return"string"!=typeof t&&e[t.name]}).length&&t.wheres.length===t.wheres.filter(function(t){return i.where(e,t)}).length&&(!t.full||this._isFullyload)},t.prototype.update=function(t){var e=this;return this.parent.call("patch",this.parent.location+"/"+this.id,{data:t}).then(function(t){return e.fill(t.data)}).catch(function(t){console.log(t)})},t.prototype.fill=function(t,e){var n=this,r=Object.assign(this,t);return e&&(e.full&&(this._isFullyload=!0),e.with.forEach(function(t){"string"!=typeof t&&r.hasOwnProperty(t.name)&&(r[t.name]=r[t.name].map(function(e){var r=t.findOrCreate(e);return r.addListener(n),r}))})),r},t.prototype.delete=function(){var t=this;return this.parent.call("delete",this.parent.location+"/"+this.id).then(function(e){t._listeners.forEach(function(e){e.cleanup(t.id,t.parent),e.parent.refresh()}),t.parent.delete(t.id),t.parent.refresh()}).catch(function(t){console.log(t)})},t.prototype.cleanup=function(t,e){this.hasOwnProperty(e.name)&&(this[e.name]=this[e.name].filter(function(e){return e.id!==t}))},t.prototype.attach=function(t){var e,n=this,r=t.parent.name;return this.parent.call("post",this.parent.location+"/"+this.id+"/"+r,{data:(e={},e[r]=[t.id],e)}).then(function(e){n[r]||(n[r]=[]),n[r].push(t),t.addListener(n)})},t.prototype.detach=function(t){var e=this,n=t.parent.name;return this.parent.call("delete",this.parent.location+"/"+this.id+"/"+n+"/"+t.id).then(function(r){e[n]&&(e[n]=e[n].filter(function(e){return e.id!==t.id}),t.addListener(e))})},t}(),s=n("K9Ia"),a=n("26FU"),u=n("vY5A"),c=n("CcnG"),l=n("t/Na");n.d(e,"a",function(){return r}),n.d(e,"b",function(){return f}),function(t){t.ASC="ASC",t.DESC="DESC"}(r||(r={}));var f=function(){function t(t){this.httpClient=t,this._searchWheres=new s.a,this.collection=new a.a([]),this.subscriptions=[],this.reset()}return t.prototype.where=function(t){return this._options.wheres.push(t),this},t.prototype.with=function(t){return this._options.with.push(t),this},t.prototype.find=function(t){var e=this,n=Object.assign({},this._options,{full:!0});return this.reset(),new Promise(function(r,i){var o=e.collection.getValue().find(function(e){return e.id===t});if(o&&o.validate(n))return r(o);e.call("get",e.location+"/"+t+e.params(n),n).then(function(t){return r(e.update([t.data],n).find(function(e){return e.id===t.data.id}))}).catch(function(t){return i(t)})})},t.prototype.orderBy=function(t,e){return this._options.sort=t,this._options.order=e,this},t.prototype.limit=function(t){return this._options.limit=t,this},t.prototype.page=function(t){return this._options.page=t,this},t.prototype.search=function(t){this._searchWheres.next(t)},t.prototype.subscribe=function(t,e){var n=this;void 0===e&&(e=function(t){return console.log(t)});var r=Object.assign({},this._options);this.reset();var i=[],o=function(){var e=i.filter(function(t){return t.validate(r)});return t(e.sort(function(t,e){return n.sort(t,e,r)}).slice(0,r.limit)),e},s=[];return s.push(this.collection.subscribe(function(t){i=t,o()})),s.push(this._searchWheres.subscribe(function(t){Object.assign(r,{wheres:t}),o().length<r.limit&&n.fetch(r).catch(function(t){return e(t)})})),this.collection.getValue().filter(function(t){return t.validate(r)}).length<r.limit&&this.fetch(r).catch(function(t){return e(t)}),Object.assign(this,{subscriptions:s})},t.prototype.unsubscribe=function(){this.subscriptions.forEach(function(t){return t.unsubscribe()})},t.prototype.create=function(t){var e=this,n=Object.assign({},this._options);return this.reset(),this.call("post",this.location,{data:t}).then(function(t){return e.update([t.data],n).find(function(e){return e.id===t.data.id})})},t.prototype.delete=function(t){this.collection.next(this.collection.getValue().filter(function(e){return e.id!==t}))},t.prototype.findOrCreate=function(t){return this.collection.getValue().find(function(e){return e.id===t.id})||this.update([t],null).find(function(e){return e.id===t.id})},t.prototype.call=function(t,e,n){var r={headers:{Accept:"application/json","Content-Type":"application/json"}};switch(t){case"get":case"delete":return this.httpClient[t](u.a.host+e,r).toPromise();case"post":case"put":case"patch":return this.httpClient[t](u.a.host+e,n.data,r).toPromise()}},t.prototype.refresh=function(){},t.prototype.fetch=function(t){var e,n=this;return t.wheres.length>0?(t.data={wheres:t.wheres},e=this.call("post",this.location+"/search"+this.params(t),t)):e=this.call("get",this.location+this.params(t)),e.then(function(e){n.update(e.data,t)})},t.prototype.reset=function(){this._options={sort:"id",order:r.ASC,limit:20,page:1,with:[],wheres:[],full:!1}},t.prototype.update=function(t,e){var n=this,r=this.collection.getValue();return t.forEach(function(t){var i=r.find(function(e){return e.id===t.id});if(i)return i.fill(t,e);r.push(new o(n).fill(t,e))}),this.collection.next(r),r},t.prototype.params=function(t){var e=[];return t.with.length&&(e.with=t.with.map(function(t){return"string"==typeof t?t:t.name}).join(",")),"?"+Object.keys(e).filter(function(t){return null!==e[t]}).map(function(t){return t+"="+e[t]}).join("&")},t.prototype.sort=function(t,e,n){var i=t[n.sort],o=e[n.sort];return+i==+i?n.order===r.DESC?o-i:i-o:i.localeCompare(o)>0?n.order===r.DESC?-1:1:i.localeCompare(o)<0?n.order===r.DESC?1:-1:void 0},t.ngInjectableDef=c.S({factory:function(){return new t(c.W(l.c))},token:t,providedIn:"root"}),t}()},QIP1:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("26FU"),i=n("gRba"),o=n("9sDO"),s=n("3n8g"),a=n("CcnG"),u=function(){function t(t,e,n){this.fileService=t,this.playlistService=e,this.statsService=n,this._state="paused",this._mode="normal",this._speakerMode="pa",this._volume=new r.a(100),this._muted=!1,this._currentTime=0,this._timer=null,this._delay=null,this._volume.subscribe(function(t){console.log(t)})}return t.prototype.setSong=function(t,e){var n=this;this.file&&this.file.id===t?this.toggleState():(this.fileService.find(t).then(function(t){n.file=t,n._currentTime=0,n.setState("running")}),this.playlistService.find(e).then(function(t){n.playlist=t}))},t.prototype.isSong=function(t,e){return!!this.file&&t===this.file.id&&(!e||this.isState(e))},t.prototype.totalTime=function(){return this.convertTime(this.file?this.file.playtime:0)},t.prototype.isPlaylist=function(t){var e=this.getPlaylist();return!!e&&e.id===t},t.prototype.getPlaylist=function(){return this.playlist},t.prototype.addToQueue=function(t,e){},t.prototype.next=function(){return!(!this.file||2!==this.file.id||(this.file.id=3,0))},t.prototype.prev=function(){},t.prototype.setState=function(t){var e=this;this._state=t,clearInterval(this._timer),clearTimeout(this._delay),"running"===t&&(this._delay=setTimeout(function(){e.statsService.create({file:e.file.id})},1e4),this._timer=setInterval(function(){e._currentTime+=.1,e.endCheck()},100))},t.prototype.toggleState=function(){this.file&&this.setState(this.isState("running")?"paused":"running")},t.prototype.isState=function(t){return this._state===t},t.prototype.isMode=function(t){return this._mode===t},t.prototype.toggleMode=function(){var t=["normal","repeat","single"],e=t.indexOf(this._mode)+1;console.log(e),e>t.length-1&&(e=0),this._mode=t[e]},t.prototype.setMode=function(t){this._mode=t},t.prototype.isSpeakerMode=function(t){return this._speakerMode===t},t.prototype.toggleSpeakerMode=function(){this._speakerMode=this.isSpeakerMode("monitoring")?"pa":"monitoring"},t.prototype.setVolume=function(t){this._muted&&0===t||(this._muted=0===t,this._volume.next(t))},t.prototype.getVolume=function(){return this.isMuted()?0:this._volume.getValue()},t.prototype.toggleMute=function(){this._muted=!this._muted},t.prototype.isMuted=function(){return this._muted},t.prototype.currentTime=function(){return this.convertTime(this._currentTime)},t.prototype.getTimecode=function(t,e){var n="current"===e?this.currentTime():this.totalTime();return Object.keys(n).forEach(function(e){t=t.replace("{"+e+"}",n[e])}),t},t.prototype.setCurrentTime=function(t){console.log(t),this._currentTime=t},t.prototype.convertTime=function(t){var e={h:null,m:null,s:null,hh:null,mm:null,ss:null,i:null,time:t};return e.h=Math.floor(t/60/60),e.m=Math.floor(t/60-60*e.h),e.s=Math.round(t-60*e.m-60*e.h),e.hh=(e.h.toString().length<2?"0":null)+e.h,e.mm=(e.m.toString().length<2?"0":null)+e.m,e.ss=(e.s.toString().length<2?"0":null)+e.s,e},t.prototype.endCheck=function(){if(this._currentTime>this.file.playtime)switch(this._currentTime=0,!0){case this.isMode("replaySong"):case this.isMode("replayList")&&this.next():return;default:return this.file=null,void this.setState("paused")}},t.ngInjectableDef=a.S({factory:function(){return new t(a.W(i.a),a.W(o.a),a.W(s.a))},token:t,providedIn:"root"}),t}()},fNgX:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("CcnG"),i=(n("Hf/j"),n("Ip0R"),n("ZYjt"),r.nb({encapsulation:2,styles:[],data:{}}));function o(t){return r.Hb(0,[],null,null)}},gRba:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("mrSG"),i=n("Ovi0"),o=n("CcnG"),s=n("t/Na"),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="files",e.location="/api/v1/files",e}return r.d(e,t),e.ngInjectableDef=o.S({factory:function(){return new e(o.W(s.c))},token:e,providedIn:"root"}),e}(i.b)},lglH:function(t,e,n){"use strict";var r=n("CcnG");n("vPOg"),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=r.nb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;position:absolute;width:100%;height:100%}[_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}[_nghost-%COMP%]   .path[_ngcontent-%COMP%]{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}"]],data:{}});function o(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,":svg:svg",[["class","spinner"],["height","65px"],["viewBox","0 0 66 66"],["width","65px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(t()(),r.pb(1,0,null,null,0,":svg:circle",[["class","path"],["cx","33"],["cy","33"],["fill","none"],["r","30"],["stroke-linecap","round"],["stroke-width","6"]],null,null,null,null,null))],null,null)}},mRNh:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return function(){}}()},vPOg:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return function(){}}()}}]);