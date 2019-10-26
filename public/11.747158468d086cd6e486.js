(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9sDO":function(t,n,e){"use strict";e.d(n,"a",function(){return u});var r=e("mrSG"),i=e("Ovi0"),o=e("ZZ/e"),l=e("CcnG"),a=e("t/Na"),u=function(t){function n(n,e){var r=t.call(this,n)||this;return r.httpClient=n,r.alertController=e,r.name="playlists",r.location="/api/v1/playlists",r}return r.d(n,t),n.prototype.create=function(){var n=this;return new Promise(function(e,i){return r.b(n,void 0,void 0,function(){var n=this;return r.e(this,function(o){switch(o.label){case 0:return[4,this.alertController.create({header:"New Playlist",inputs:[{name:"name",type:"text",placeholder:"Enter Playlist Name...",value:""}],buttons:[{text:"Cancel",role:"cancel"},{text:"Create",handler:function(o){o&&t.prototype.create.call(n,{name:o.name}).then(function(t){return r.b(n,void 0,void 0,function(){return r.e(this,function(n){return e(t),[2]})})}).catch(function(t){return i(t)})}}]})];case 1:return[4,o.sent().present()];case 2:return o.sent(),[2]}})})})},n.ngInjectableDef=l.S({factory:function(){return new n(l.W(a.c),l.W(o.a))},token:n,providedIn:"root"}),n}(i.b)},Ovi0:function(t,n,e){"use strict";var r,i=function(){function t(){}return t.where=function(n,e){var r=Object.keys(e);return!r.length||r.filter(function(r){return t.operatorFilter(n[r],e[r])}).length>0},t.operatorFilter=function(n,e){var r="=";if("object"==typeof e){if(e[0])return e.filter(function(e){if("object"==typeof e){var i=t.validOperator(e.operator),o=e.value?e.value:null;return null!==o&&t.matches(n,i,o)}return t.matches(n,r,e)}).length>0;e.operator&&(r=t.validOperator(e.operator)),e=e.value}return t.matches(n,r,e)},t.matches=function(n,e,r){switch("string"==typeof n&&(n=n.toLowerCase()),"string"==typeof r&&(r=r.toLowerCase()),"undefined"!==r&&"null"!==r||(r=""),e){case"neq":case"<>":case"!=":return n!==r;case"lt":case"<":return n<r;case"gt":case">":return n>r;case"lte":case"<=":return n<=r;case"gte":case">=":return n>=r;case"not like":case"!like":return!t.like(n,r);case"like":return t.like(n,r);case"!regexp":case"not regexp":return!new RegExp(r).test(n);case"regexp":return new RegExp(r).test(n);case"eq":case"<=>":default:return n===r}},t.validOperator=function(n){return t.validOperators.indexOf(n)?t.mapOperator(n):"="},t.mapOperator=function(n){return t.mappings[n]?t.mappings[n]:n},t.like=function(n,e){return"%"===e.substr(0,1)&&"%"===e.substr(e.length-1,1)?n.indexOf(t.clear(e.substring(1,e.length-1)))>-1:"%"===e.substr(0,1)?n.indexOf(t.clear(e.substring(1,e.length)))>0:"%"===e.substr(e.length-1,1)&&0===n.indexOf(t.clear(e.substring(0,e.length-1)))},t.clear=function(t){return"undefined"!==t&&"null"!==t||(t=""),t},t.validOperators=["eq","neq","lt","gt","lte","gte","!regexp","!like","<",">","<=",">=","<>","!=","<=>","like","not like","regexp","not regexp"],t.mappings={eq:"=",neq:"!=",lt:"<",gt:">",lte:"<=",gte:">=","!regexp":"not regexp","!like":"not like"},t}(),o=function(){function t(t){this.parent=t,this._listeners=[],this._isFullyload=!1}return t.prototype.addListener=function(t){console.log("Add listener: "+t.constructor.name),this._listeners.push(t)},t.prototype.validate=function(t){var n=this;return t.with.length===t.with.filter(function(t){return"string"!=typeof t&&n[t.name]}).length&&t.wheres.length===t.wheres.filter(function(t){return i.where(n,t)}).length&&(!t.full||this._isFullyload)},t.prototype.update=function(t){var n=this;return this.parent.call("patch",this.parent.location+"/"+this.id,{data:t}).then(function(t){return n.fill(t.data)}).catch(function(t){console.log(t)})},t.prototype.fill=function(t,n){var e=this,r=Object.assign(this,t);if(n&&(n.full&&(this._isFullyload=!0),n.with.forEach(function(t){"string"!=typeof t&&r.hasOwnProperty(t.name)&&(r[t.name]=r[t.name].map(function(n){var r=t.findOrCreate(n);return r.addListener(e),r}))}),n.sort&&n.sort.indexOf(".")>-1)){var i=n.sort.split(".");r[i[0]]=r[i[0]].sort(function(t,r){return e.parent.sort(t,r,i[1],n.order)}),console.log(r[i[0]])}return r},t.prototype.delete=function(){var t=this;return this.parent.call("delete",this.parent.location+"/"+this.id).then(function(){t._listeners.forEach(function(n){n.cleanup(t.id,t.parent),n.parent.refresh()}),t.parent.delete(t.id),t.parent.refresh()}).catch(function(t){console.log(t)})},t.prototype.cleanup=function(t,n){this.hasOwnProperty(n.name)&&(this[n.name]=this[n.name].filter(function(n){return n.id!==t}))},t.prototype.attach=function(t){var n,e=this,r=t.parent.name;return this.parent.call("post",this.parent.location+"/"+this.id+"/"+r,{data:(n={},n[r]=[t.id],n)}).then(function(){e[r]||(e[r]=[]),e[r].push(t),t.addListener(e)})},t.prototype.detach=function(t){var n=this,e=t.parent.name;return this.parent.call("delete",this.parent.location+"/"+this.id+"/"+e+"/"+t.id).then(function(){n[e]&&(n[e]=n[e].filter(function(n){return n.id!==t.id}),t.addListener(n))})},t.prototype.sync=function(t){var n=this;return new Promise(function(e){if(n.hasOwnProperty(t.name)){var r=n[t.name].map(function(t,n){return{id:t.id,position:n+1}});n.parent.call("put",n.parent.location+"/"+n.id+"/"+t.name,{data:r}).catch(function(t){console.log(t)})}e()})},t}(),l=e("K9Ia"),a=e("26FU"),u=e("vY5A"),s=e("CcnG"),c=e("t/Na");e.d(n,"a",function(){return r}),e.d(n,"b",function(){return f}),function(t){t.ASC="ASC",t.DESC="DESC"}(r||(r={}));var f=function(){function t(t){this.httpClient=t,this._searchWheres=new l.a,this.collection=new a.a([]),this.subscriptions=[],this.reset()}return t.prototype.where=function(t){return this._options.wheres.push(t),this},t.prototype.with=function(t){return this._options.with.push(t),this},t.prototype.find=function(t){var n=this,e=Object.assign({},this._options,{full:!0});return this.reset(),new Promise(function(r,i){var o=n.collection.getValue().find(function(n){return n.id===t});if(o&&o.validate(e))return r(o);n.call("get",n.location+"/"+t+n.params(e),e).then(function(t){return r(n.update([t.data],e).find(function(n){return n.id===t.data.id}))}).catch(function(t){return i(t)})})},t.prototype.orderBy=function(t,n){return this._options.sort=t,this._options.order=n,this},t.prototype.limit=function(t){return this._options.limit=t,this},t.prototype.page=function(t){return this._options.page=t,this},t.prototype.search=function(t){this._searchWheres.next(t)},t.prototype.subscribe=function(t,n){var e=this;void 0===n&&(n=function(t){return console.log(t)});var r=Object.assign({},this._options);this.reset();var i=[],o=function(){var n=i.filter(function(t){return t.validate(r)}).sort(function(t,n){return e.sort(t,n,r.sort,r.order)}).slice(0,r.limit);return t(n),n},l=[];return l.push(this.collection.subscribe(function(t){i=t,o()})),l.push(this._searchWheres.subscribe(function(t){Object.assign(r,{wheres:t}),o().length<r.limit&&e.fetch(r).catch(function(t){return n(t)})})),this.collection.getValue().filter(function(t){return t.validate(r)}).length<r.limit&&this.fetch(r).catch(function(t){return n(t)}),Object.assign(this,{subscriptions:l})},t.prototype.unsubscribe=function(){this.subscriptions.forEach(function(t){return t.unsubscribe()})},t.prototype.create=function(t){var n=this,e=Object.assign({},this._options);return this.reset(),this.call("post",this.location,{data:t}).then(function(t){return n.update([t.data],e).find(function(n){return n.id===t.data.id})})},t.prototype.delete=function(t){this.collection.next(this.collection.getValue().filter(function(n){return n.id!==t}))},t.prototype.findOrCreate=function(t){return this.collection.getValue().find(function(n){return n.id===t.id})||this.update([t],null).find(function(n){return n.id===t.id})},t.prototype.call=function(t,n,e){var r={headers:{Accept:"application/json","Content-Type":"application/json"}};switch(e&&e.data&&Object.keys(e.data).forEach(function(t){""!==e.data[t]&&null!==e.data[t]||delete e.data[t]}),t){case"get":case"delete":return this.httpClient[t](u.a.host+n,r).toPromise();case"post":case"put":case"patch":return this.httpClient[t](u.a.host+n,e.data,r).toPromise()}},t.prototype.refresh=function(){},t.prototype.fetch=function(t){var n,e=this;return t.wheres.length>0?(t.data={wheres:t.wheres},n=this.call("post",this.location+"/search"+this.params(t),t)):n=this.call("get",this.location+this.params(t)),n.then(function(n){e.update(n.data,t)})},t.prototype.reset=function(){this._options={sort:"id",order:r.ASC,limit:20,page:1,with:[],wheres:[],full:!1}},t.prototype.update=function(t,n){var e=this,r=this.collection.getValue();return t.forEach(function(t){var i=r.find(function(n){return n.id===t.id});if(i)return i.fill(t,n);r.push(new o(e).fill(t,n))}),this.collection.next(r),r},t.prototype.params=function(t){var n=[];return t.with.length&&(n.with=t.with.map(function(t){return"string"==typeof t?t:t.name}).join(",")),"?"+Object.keys(n).filter(function(t){return null!==n[t]}).map(function(t){return t+"="+n[t]}).join("&")},t.prototype.sort=function(t,n,e,i){console.log(this);var o=t[e],l=n[e];return+o==+o?i===r.DESC?l-o:o-l:o.localeCompare(l)>0?i===r.DESC?-1:1:o.localeCompare(l)<0?i===r.DESC?1:-1:void 0},t.ngInjectableDef=s.S({factory:function(){return new t(s.W(c.c))},token:t,providedIn:"root"}),t}()},S8bb:function(t,n,e){"use strict";var r=e("CcnG"),i=e("Ip0R"),o=e("oBZk"),l=e("ZZ/e"),a=e("fNgX"),u=e("Hf/j"),s=e("ZYjt"),c=e("gIcY"),f=e("hsZO"),h=e("gRba");e.d(n,"a",function(){return b});var p=r.nb({encapsulation:0,styles:[["[_nghost-%COMP%]{border-radius:15px;background:#fff;padding:15px}[_nghost-%COMP%]   .file-label[_ngcontent-%COMP%]{font-size:13px;padding:0 20px 15px;overflow-x:hidden;overflow-y:hidden;white-space:nowrap;text-overflow:ellipsis}[_nghost-%COMP%]   .time-slider[_ngcontent-%COMP%]{--knob-size:0;--bar-border-radius:2px}[_nghost-%COMP%]   .time-slider[_ngcontent-%COMP%]:hover{--knob-size:20px}[_nghost-%COMP%]   audio[_ngcontent-%COMP%]{visibility:hidden}"]],data:{}});function d(t){return r.Ib(0,[(t()(),r.pb(0,0,null,null,1,"div",[["class","file-label"],["text-center",""]],null,null,null,null,null)),(t()(),r.Gb(1,null,[" ","\n"]))],null,function(t,n){var e=n.component;t(n,1,0,e.file.title?e.file.artist+" - "+e.file.title:e.file.filename)})}function m(t){return r.Ib(0,[(t()(),r.pb(0,0,null,null,1,"audio",[["controls",""]],null,[[null,"loadstart"]],function(t,n,e){var r=!0;return"loadstart"===n&&(r=!1!==t.component.loadAudioElement(e.target)&&r),r},null,null)),(t()(),r.pb(1,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null))],null,function(t,n){t(n,1,0,r.rb(1,"",n.component.file.url,""))})}function g(t){return r.Ib(0,[(t()(),r.gb(16777216,null,null,1,null,d)),r.ob(1,16384,null,0,i.j,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(t()(),r.pb(2,0,null,null,11,"ion-toolbar",[["text-center",""]],null,null,null,o.fb,o.C)),r.ob(3,49152,null,0,l.Ab,[r.h,r.k],null,null),(t()(),r.pb(4,0,null,0,3,"ion-button",[["slot","start"]],null,[[null,"click"]],function(t,n,e){var r=!0;return"click"===n&&(r=!1!==t.component.toggle()&&r),r},o.G,o.d)),r.ob(5,49152,null,0,l.j,[r.h,r.k],null,null),(t()(),r.pb(6,0,null,0,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,a.b,a.a)),r.ob(7,573440,null,0,u.a,[s.b,u.b],{iconProp:[0,"iconProp"]},null),(t()(),r.pb(8,0,null,0,3,"ion-range",[["class","time-slider"],["color","danger"],["min","0"],["mode","md"]],null,[[null,"pointerup"],[null,"pointerdown"],[null,"ionChange"],[null,"ionBlur"]],function(t,n,e){var i=!0,o=t.component;return"ionBlur"===n&&(i=!1!==r.zb(t,11)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==r.zb(t,11)._handleChangeEvent(e.target.value)&&i),"pointerup"===n&&(i=!1!==(1===e.which?o.audioElement.play():e.preventDefault())&&i),"pointerdown"===n&&(i=!1!==(1===e.which?o.audioElement.pause():e.preventDefault())&&i),"ionChange"===n&&(i=!1!==(o.audioElement.paused?o.audioElement.currentTime=e.detail.value:null)&&i),i},o.Y,o.v)),r.Db(5120,null,c.d,function(t){return[t]},[l.Kb]),r.ob(10,49152,null,0,l.ab,[r.h,r.k],{color:[0,"color"],mode:[1,"mode"],min:[2,"min"],max:[3,"max"],value:[4,"value"]},null),r.ob(11,16384,null,0,l.Kb,[r.k],null,null),(t()(),r.pb(12,0,null,0,1,"span",[["slot","end"]],null,null,null,null,null)),(t()(),r.Gb(13,null,[""," / ",""])),(t()(),r.gb(16777216,null,null,1,null,m)),r.ob(15,16384,null,0,i.j,[r.O,r.L],{ngIf:[0,"ngIf"]},null)],function(t,n){var e=n.component;t(n,1,0,e.file),t(n,7,0,null!=e.audioElement&&e.audioElement.paused?"play":"pause"),t(n,10,0,"danger","md","0",null==e.audioElement?null:e.audioElement.duration,null==e.audioElement?null:e.audioElement.currentTime),t(n,15,0,e.file)},function(t,n){var e=n.component;t(n,6,0,r.zb(n,7).renderedIconHTML),t(n,13,0,e.getTimecode("{m}:{ss}","current"),e.getTimecode("{m}:{ss}","total"))})}function v(t){return r.Ib(0,[(t()(),r.pb(0,0,null,null,1,"app-preview",[],null,null,null,g,p)),r.ob(1,114688,null,0,f.a,[h.a],null,null)],function(t,n){t(n,1,0)},null)}var b=r.lb("app-preview",f.a,v,{fileId:"fileId"},{},[])},fNgX:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var r=e("CcnG"),i=(e("Hf/j"),e("Ip0R"),e("ZYjt"),r.nb({encapsulation:2,styles:[],data:{}}));function o(t){return r.Ib(0,[],null,null)}},gRba:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var r=e("mrSG"),i=e("Ovi0"),o=e("CcnG"),l=e("t/Na"),a=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.name="files",n.location="/api/v1/files",n}return r.d(n,t),n.ngInjectableDef=o.S({factory:function(){return new n(o.W(l.c))},token:n,providedIn:"root"}),n}(i.b)},hsZO:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e("gRba");var r=function(){function t(t){this.fileService=t,this.isFading=!1}return t.prototype.ngOnInit=function(){var t=this;this.fileService.find(this.fileId).then(function(n){t.file=n})},t.prototype.loadAudioElement=function(t,n){void 0===n&&(n=!0),this.audioElement=t,this.audioElement.currentTime=this.file.trimAtStart?this.file.trimAtStart:0,n&&this.toggle(),t.addEventListener("timeupdate",this.listener.bind(this))},t.prototype.listener=function(){var t=this.audioElement;this.file&&t.currentTime>=t.duration-.416-(this.file.trimAtEnd?this.file.trimAtEnd:0)&&this.fadeOut().then(function(){t.pause(),t.currentTime=0})},t.prototype.toggle=function(){var t=this;this.audioElement.paused?this.audioElement.play().then(function(){t.fadeIn()}):this.fadeOut().then(function(){t.audioElement.pause()})},t.prototype.fadeIn=function(){var t=this;if(this.isFading)return!1;this.isFading=!0;var n=0,e=setInterval(function(){var r=.024*n;r>1&&(r=1),r>=t.audioElement.volume&&(t.audioElement.volume=r,t.audioElement.volume>=1&&(clearInterval(e),t.isFading=!1)),n++},10)},t.prototype.fadeOut=function(){var t=this;return new Promise(function(n){if(t.isFading)return!1;t.isFading=!0;var e=0,r=setInterval(function(){var i=1-.024*e;i<0&&(i=0),i<=t.audioElement.volume&&(t.audioElement.volume=i,t.audioElement.volume<=0&&(clearInterval(r),n(),t.isFading=!1)),e++},10)})},t.prototype.getTimecode=function(t,n){if(this.audioElement){var e=this.convertTime("current"===n?this.audioElement.currentTime:this.audioElement.duration);return Object.keys(e).forEach(function(n){t=t.replace("{"+n+"}",e[n])}),t}return"0:00"},t.prototype.convertTime=function(t){var n={h:null,m:null,s:null,hh:null,mm:null,ss:null,i:null,time:t};return n.h=Math.floor(t/60/60),n.m=Math.floor(t/60-60*n.h),n.s=Math.round(t-60*n.m-60*n.h),n.hh=(n.h.toString().length<2?"0":null)+n.h,n.mm=(n.m.toString().length<2?"0":null)+n.m,n.ss=(n.s.toString().length<2?"0":null)+n.s,n},t}()},lglH:function(t,n,e){"use strict";var r=e("CcnG");e("vPOg"),e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var i=r.nb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;position:absolute;width:100%;height:100%}[_nghost-%COMP%]   .spinner[_ngcontent-%COMP%]{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}[_nghost-%COMP%]   .path[_ngcontent-%COMP%]{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}"]],data:{}});function o(t){return r.Ib(0,[(t()(),r.pb(0,0,null,null,1,":svg:svg",[["class","spinner"],["height","65px"],["viewBox","0 0 66 66"],["width","65px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(t()(),r.pb(1,0,null,null,0,":svg:circle",[["class","path"],["cx","33"],["cy","33"],["fill","none"],["r","30"],["stroke-linecap","round"],["stroke-width","6"]],null,null,null,null,null))],null,null)}},mRNh:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(){}}()},ufXd:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(){}}()},vPOg:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(){}}()}}]);