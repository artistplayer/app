(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{QM5l:function(e,r,t){"use strict";t.r(r),t.d(r,"IonRefresher",function(){return o}),t.d(r,"IonRefresherContent",function(){return l});var n=t("B5Ai"),s=t("cBjU"),i=t("yIUm"),o=function(){function e(){this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.disabled=!1}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return n.a(this,void 0,void 0,function(){var e,r,s,i=this;return n.c(this,function(n){switch(n.label){case 0:return"fixed"!==this.el.getAttribute("slot")?(console.error('Make sure you use: <ion-refresher slot="fixed">'),[2]):(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,3];case 1:return n.sent(),r=this,[4,e.getScrollElement()];case 2:return r.scrollEl=n.sent(),[3,4];case 3:console.error("ion-refresher did not attach, make sure the parent is an ion-content."),n.label=4;case 4:return s=this,[4,t.e(0).then(t.bind(null,"k6lV"))];case 5:return s.gesture=n.sent().createGesture({el:this.el.closest("ion-content"),queue:this.queue,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:function(){return i.canStart()},onStart:function(){return i.onStart()},onMove:function(e){return i.onMove(e)},onEnd:function(){return i.onEnd()}}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.prototype.complete=function(){this.close(32,"120ms")},e.prototype.cancel=function(){this.close(16,"")},e.prototype.getProgress=function(){return Promise.resolve(this.progress)},e.prototype.canStart=function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)},e.prototype.onStart=function(){this.progress=0,this.state=1},e.prototype.onMove=function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0==(56&this.state)){var t=e.deltaY;if(t<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.preventDefault(),this.setCss(t,"0ms",!0,""),0!==t){var n=this.pullMin;this.progress=t/n,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),t<n?this.state=2:t>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}},e.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()},e.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})},e.prototype.close=function(e,r){var t=this;setTimeout(function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)},e.prototype.setCss=function(e,r,t,n){var s=this;this.appliedStyles=e>0,this.queue.write(function(){if(s.scrollEl){var i=s.scrollEl.style;i.transform=e>0?"translateY("+e+"px) translateZ(0px)":"translateZ(0px)",i.transitionDuration=r,i.transitionDelay=n,i.overflow=t?"hidden":""}})},e.prototype.hostData=function(){return{slot:"fixed",class:Object.assign({},Object(i.e)(this.mode,"refresher"),{"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state})}},Object.defineProperty(e,"is",{get:function(){return"ion-refresher"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cancel:{method:!0},closeDuration:{type:String,attr:"close-duration"},complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},getProgress:{method:!0},pullMax:{type:Number,attr:"pull-max"},pullMin:{type:Number,attr:"pull-min"},queue:{context:"queue"},snapbackDuration:{type:String,attr:"snapback-duration"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionRefresh",method:"ionRefresh",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPull",method:"ionPull",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStart",method:"ionStart",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher{right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){}return e.prototype.componentWillLoad=function(){void 0===this.pullingIcon&&(this.pullingIcon=this.config.get("refreshingIcon","arrow-down")),void 0===this.refreshingSpinner&&(this.refreshingSpinner=this.config.get("refreshingSpinner",this.config.get("spinner","lines")))},e.prototype.render=function(){return[Object(s.b)("div",{class:"refresher-pulling"},this.pullingIcon&&Object(s.b)("div",{class:"refresher-pulling-icon"},Object(s.b)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(s.b)("div",{class:"refresher-pulling-text",innerHTML:this.pullingText})),Object(s.b)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(s.b)("div",{class:"refresher-refreshing-icon"},Object(s.b)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(s.b)("div",{class:"refresher-refreshing-text",innerHTML:this.refreshingText}))]},Object.defineProperty(e,"is",{get:function(){return"ion-refresher-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},pullingIcon:{type:String,attr:"pulling-icon",mutable:!0},pullingText:{type:String,attr:"pulling-text"},refreshingSpinner:{type:String,attr:"refreshing-spinner",mutable:!0},refreshingText:{type:String,attr:"refreshing-text"}}},enumerable:!0,configurable:!0}),e}()}}]);