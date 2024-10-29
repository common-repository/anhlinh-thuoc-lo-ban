!function(t,s){var o=Math,i=s.createElement("div").style,e=function(){for(var t="t,webkitT,MozT,msT,OT".split(","),s=0,o=t.length;s<o;s++)if(t[s]+"ransform"in i)return t[s].substr(0,t[s].length-1);return!1}(),r=e?"-"+e.toLowerCase()+"-":"",l=E("transform"),n=E("transitionProperty"),a=E("transitionDuration"),h=E("transformOrigin"),c=E("transitionTimingFunction"),p=E("transitionDelay"),m=/android/gi.test(navigator.appVersion),u=/iphone|ipad/gi.test(navigator.appVersion),S=/hp-tablet/gi.test(navigator.appVersion),d=E("perspective")in i,b="ontouchstart"in t&&!S,f=!1!==e,x=E("transition")in i,g="onorientationchange"in t?"orientationchange":"resize",y=b?"touchstart":"mousedown",v=b?"touchmove":"mousemove",Y=b?"touchend":"mouseup",T=b?"touchcancel":"mouseup",X=function(){if(!1===e)return!1;return{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[e]}(),w=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,1)},_=t.cancelRequestAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame||t.mozCancelRequestAnimationFrame||t.oCancelRequestAnimationFrame||t.msCancelRequestAnimationFrame||clearTimeout,z=d?" translateZ(0)":"",M=function(o,i){var e,p=this;for(e in p.wrapper="object"==typeof o?o:s.getElementById(o),p.wrapper.style.overflow="hidden",p.scroller=p.wrapper.children[0],p.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:m,hideScrollbar:u,fadeScrollbar:u&&d,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(t){t.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null},i)p.options[e]=i[e];p.x=p.options.x,p.y=p.options.y,p.options.useTransform=f&&p.options.useTransform,p.options.hScrollbar=p.options.hScroll&&p.options.hScrollbar,p.options.vScrollbar=p.options.vScroll&&p.options.vScrollbar,p.options.zoom=p.options.useTransform&&p.options.zoom,p.options.useTransition=x&&p.options.useTransition,p.options.zoom&&m&&(z=""),p.scroller.style[n]=p.options.useTransform?r+"transform":"top left",p.scroller.style[a]="0",p.scroller.style[h]="0 0",p.options.useTransition&&(p.scroller.style[c]="cubic-bezier(0.33,0.66,0.66,1)"),p.options.useTransform?p.scroller.style[l]="translate("+p.x+"px,"+p.y+"px)"+z:p.scroller.style.cssText+=";position:absolute;top:"+p.y+"px;left:"+p.x+"px",p.options.useTransition&&(p.options.fixedScrollbar=!0),p.refresh(),p._bind(g,t),p._bind(y),b||"none"!=p.options.wheelAction&&(p._bind("DOMMouseScroll"),p._bind("mousewheel")),p.options.checkDOMChanges&&(p.checkDOMTime=setInterval(function(){p._checkDOMChanges()},500))};function E(t){return""===e?t:(t=t.charAt(0).toUpperCase()+t.substr(1),e+t)}M.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(t){switch(t.type){case y:if(!b&&0!==t.button)return;this._start(t);break;case v:this._move(t);break;case Y:case T:this._end(t);break;case g:this._resize();break;case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case X:this._transitionEnd(t)}},_checkDOMChanges:function(){this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(t){var i;this[t+"Scrollbar"]?(this[t+"ScrollbarWrapper"]||(i=s.createElement("div"),this.options.scrollbarClass?i.className=this.options.scrollbarClass+t.toUpperCase():i.style.cssText="position:absolute;z-index:100;"+("h"==t?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),i.style.cssText+=";pointer-events:none;"+r+"transition-property:opacity;"+r+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(i),this[t+"ScrollbarWrapper"]=i,i=s.createElement("div"),this.options.scrollbarClass||(i.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+r+"background-clip:padding-box;"+r+"box-sizing:border-box;"+("h"==t?"height:100%":"width:100%")+";"+r+"border-radius:3px;border-radius:3px"),i.style.cssText+=";pointer-events:none;"+r+"transition-property:"+r+"transform;"+r+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+r+"transition-duration:0;"+r+"transform: translate(0,0)"+z,this.options.useTransition&&(i.style.cssText+=";"+r+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[t+"ScrollbarWrapper"].appendChild(i),this[t+"ScrollbarIndicator"]=i),"h"==t?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=o.max(o.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=o.max(o.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(t,!0)):this[t+"ScrollbarWrapper"]&&(f&&(this[t+"ScrollbarIndicator"].style[l]=""),this[t+"ScrollbarWrapper"].parentNode.removeChild(this[t+"ScrollbarWrapper"]),this[t+"ScrollbarWrapper"]=null,this[t+"ScrollbarIndicator"]=null)},_resize:function(){var t=this;setTimeout(function(){t.refresh()},m?200:0)},_pos:function(t,s){this.zoomed||(t=this.hScroll?t:0,s=this.vScroll?s:0,this.options.useTransform?this.scroller.style[l]="translate("+t+"px,"+s+"px) scale("+this.scale+")"+z:(t=o.round(t),s=o.round(s),this.scroller.style.left=t+"px",this.scroller.style.top=s+"px"),this.x=t,this.y=s,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(t,s){var i,e="h"==t?this.x:this.y;this[t+"Scrollbar"]&&((e=this[t+"ScrollbarProp"]*e)<0?(this.options.fixedScrollbar||((i=this[t+"ScrollbarIndicatorSize"]+o.round(3*e))<8&&(i=8),this[t+"ScrollbarIndicator"].style["h"==t?"width":"height"]=i+"px"),e=0):e>this[t+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?e=this[t+"ScrollbarMaxScroll"]:((i=this[t+"ScrollbarIndicatorSize"]-o.round(3*(e-this[t+"ScrollbarMaxScroll"])))<8&&(i=8),this[t+"ScrollbarIndicator"].style["h"==t?"width":"height"]=i+"px",e=this[t+"ScrollbarMaxScroll"]+(this[t+"ScrollbarIndicatorSize"]-i))),this[t+"ScrollbarWrapper"].style[p]="0",this[t+"ScrollbarWrapper"].style.opacity=s&&this.options.hideScrollbar?"0":"1",this[t+"ScrollbarIndicator"].style[l]="translate("+("h"==t?e+"px,0)":"0,"+e+"px)")+z)},_start:function(s){var i,e,r,n,a,h=b?s.touches[0]:s;this.enabled&&(this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,s),(this.options.useTransition||this.options.zoom)&&this._transitionTime(0),this.moved=!1,this.animating=!1,this.zoomed=!1,this.distX=0,this.distY=0,this.absDistX=0,this.absDistY=0,this.dirX=0,this.dirY=0,this.options.zoom&&b&&s.touches.length>1&&(n=o.abs(s.touches[0].pageX-s.touches[1].pageX),a=o.abs(s.touches[0].pageY-s.touches[1].pageY),this.touchesDistStart=o.sqrt(n*n+a*a),this.originX=o.abs(s.touches[0].pageX+s.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=o.abs(s.touches[0].pageY+s.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,s)),this.options.momentum&&(this.options.useTransform?(e=+((i=getComputedStyle(this.scroller,null)[l].replace(/[^0-9\-.,]/g,"").split(","))[12]||i[4]),r=+(i[13]||i[5])):(e=+getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),r=+getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),e==this.x&&r==this.y||(this.options.useTransition?this._unbind(X):_(this.aniTime),this.steps=[],this._pos(e,r),this.options.onScrollEnd&&this.options.onScrollEnd.call(this))),this.absStartX=this.x,this.absStartY=this.y,this.startX=this.x,this.startY=this.y,this.pointX=h.pageX,this.pointY=h.pageY,this.startTime=s.timeStamp||Date.now(),this.options.onScrollStart&&this.options.onScrollStart.call(this,s),this._bind(v,t),this._bind(Y,t),this._bind(T,t))},_move:function(t){var s,i,e,r=b?t.touches[0]:t,n=r.pageX-this.pointX,a=r.pageY-this.pointY,h=this.x+n,c=this.y+a,p=t.timeStamp||Date.now();if(this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,t),this.options.zoom&&b&&t.touches.length>1)return s=o.abs(t.touches[0].pageX-t.touches[1].pageX),i=o.abs(t.touches[0].pageY-t.touches[1].pageY),this.touchesDist=o.sqrt(s*s+i*i),this.zoomed=!0,(e=1/this.touchesDistStart*this.touchesDist*this.scale)<this.options.zoomMin?e=.5*this.options.zoomMin*Math.pow(2,e/this.options.zoomMin):e>this.options.zoomMax&&(e=2*this.options.zoomMax*Math.pow(.5,this.options.zoomMax/e)),this.lastScale=e/this.scale,h=this.originX-this.originX*this.lastScale+this.x,c=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[l]="translate("+h+"px,"+c+"px) scale("+e+")"+z,void(this.options.onZoom&&this.options.onZoom.call(this,t));this.pointX=r.pageX,this.pointY=r.pageY,(h>0||h<this.maxScrollX)&&(h=this.options.bounce?this.x+n/2:h>=0||this.maxScrollX>=0?0:this.maxScrollX),(c>this.minScrollY||c<this.maxScrollY)&&(c=this.options.bounce?this.y+a/2:c>=this.minScrollY||this.maxScrollY>=0?this.minScrollY:this.maxScrollY),this.distX+=n,this.distY+=a,this.absDistX=o.abs(this.distX),this.absDistY=o.abs(this.distY),this.absDistX<6&&this.absDistY<6||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(c=this.y,a=0):this.absDistY>this.absDistX+5&&(h=this.x,n=0)),this.moved=!0,this._pos(h,c),this.dirX=n>0?-1:n<0?1:0,this.dirY=a>0?-1:a<0?1:0,p-this.startTime>300&&(this.startTime=p,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,t))},_end:function(i){if(!b||0===i.touches.length){var e,r,n,h,c,p,m,u=this,S=b?i.changedTouches[0]:i,d={dist:0,time:0},f={dist:0,time:0},x=(i.timeStamp||Date.now())-u.startTime,g=u.x,y=u.y;if(u._unbind(v,t),u._unbind(Y,t),u._unbind(T,t),u.options.onBeforeScrollEnd&&u.options.onBeforeScrollEnd.call(u,i),u.zoomed)return m=u.scale*u.lastScale,m=Math.max(u.options.zoomMin,m),m=Math.min(u.options.zoomMax,m),u.lastScale=m/u.scale,u.scale=m,u.x=u.originX-u.originX*u.lastScale+u.x,u.y=u.originY-u.originY*u.lastScale+u.y,u.scroller.style[a]="200ms",u.scroller.style[l]="translate("+u.x+"px,"+u.y+"px) scale("+u.scale+")"+z,u.zoomed=!1,u.refresh(),void(u.options.onZoomEnd&&u.options.onZoomEnd.call(u,i));if(!u.moved)return b&&(u.doubleTapTimer&&u.options.zoom?(clearTimeout(u.doubleTapTimer),u.doubleTapTimer=null,u.options.onZoomStart&&u.options.onZoomStart.call(u,i),u.zoom(u.pointX,u.pointY,1==u.scale?u.options.doubleTapZoom:1),u.options.onZoomEnd&&setTimeout(function(){u.options.onZoomEnd.call(u,i)},200)):this.options.handleClick&&(u.doubleTapTimer=setTimeout(function(){for(u.doubleTapTimer=null,e=S.target;1!=e.nodeType;)e=e.parentNode;"SELECT"!=e.tagName&&"INPUT"!=e.tagName&&"TEXTAREA"!=e.tagName&&((r=s.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,i.view,1,S.screenX,S.screenY,S.clientX,S.clientY,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,0,null),r._fake=!0,e.dispatchEvent(r))},u.options.zoom?250:0))),u._resetPos(400),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,i));if(x<300&&u.options.momentum&&(d=g?u._momentum(g-u.startX,x,-u.x,u.scrollerW-u.wrapperW+u.x,u.options.bounce?u.wrapperW:0):d,f=y?u._momentum(y-u.startY,x,-u.y,u.maxScrollY<0?u.scrollerH-u.wrapperH+u.y-u.minScrollY:0,u.options.bounce?u.wrapperH:0):f,g=u.x+d.dist,y=u.y+f.dist,(u.x>0&&g>0||u.x<u.maxScrollX&&g<u.maxScrollX)&&(d={dist:0,time:0}),(u.y>u.minScrollY&&y>u.minScrollY||u.y<u.maxScrollY&&y<u.maxScrollY)&&(f={dist:0,time:0})),d.dist||f.dist)return c=o.max(o.max(d.time,f.time),10),u.options.snap&&(n=g-u.absStartX,h=y-u.absStartY,o.abs(n)<u.options.snapThreshold&&o.abs(h)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(g=(p=u._snap(g,y)).x,y=p.y,c=o.max(p.time,c))),u.scrollTo(o.round(g),o.round(y),c),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,i));if(u.options.snap)return n=g-u.absStartX,h=y-u.absStartY,o.abs(n)<u.options.snapThreshold&&o.abs(h)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(p=u._snap(u.x,u.y)).x==u.x&&p.y==u.y||u.scrollTo(p.x,p.y,p.time),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,i));u._resetPos(200),u.options.onTouchEnd&&u.options.onTouchEnd.call(u,i)}},_resetPos:function(t){var s=this.x>=0?0:this.x<this.maxScrollX?this.maxScrollX:this.x,o=this.y>=this.minScrollY||this.maxScrollY>0?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;if(s==this.x&&o==this.y)return this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==e&&(this.hScrollbarWrapper.style[p]="300ms"),this.hScrollbarWrapper.style.opacity="0"),void(this.vScrollbar&&this.options.hideScrollbar&&("webkit"==e&&(this.vScrollbarWrapper.style[p]="300ms"),this.vScrollbarWrapper.style.opacity="0"));this.scrollTo(s,o,t||0)},_wheel:function(t){var s,o,i,e,r,l=this;if("wheelDeltaX"in t)s=t.wheelDeltaX/12,o=t.wheelDeltaY/12;else if("wheelDelta"in t)s=o=t.wheelDelta/12;else{if(!("detail"in t))return;s=o=3*-t.detail}if("zoom"==l.options.wheelAction)return(r=l.scale*Math.pow(2,1/3*(o?o/Math.abs(o):0)))<l.options.zoomMin&&(r=l.options.zoomMin),r>l.options.zoomMax&&(r=l.options.zoomMax),void(r!=l.scale&&(!l.wheelZoomCount&&l.options.onZoomStart&&l.options.onZoomStart.call(l,t),l.wheelZoomCount++,l.zoom(t.pageX,t.pageY,r,400),setTimeout(function(){l.wheelZoomCount--,!l.wheelZoomCount&&l.options.onZoomEnd&&l.options.onZoomEnd.call(l,t)},400)));i=l.x+s,e=l.y+o,i>0?i=0:i<l.maxScrollX&&(i=l.maxScrollX),e>l.minScrollY?e=l.minScrollY:e<l.maxScrollY&&(e=l.maxScrollY),l.maxScrollY<0&&l.scrollTo(i,e,0)},_transitionEnd:function(t){t.target==this.scroller&&(this._unbind(X),this._startAni())},_startAni:function(){var t,s,i,e=this,r=e.x,l=e.y,n=Date.now();if(!e.animating)if(e.steps.length){if((t=e.steps.shift()).x==r&&t.y==l&&(t.time=0),e.animating=!0,e.moved=!0,e.options.useTransition)return e._transitionTime(t.time),e._pos(t.x,t.y),e.animating=!1,void(t.time?e._bind(X):e._resetPos(0));(i=function(){var a,h,c=Date.now();if(c>=n+t.time)return e._pos(t.x,t.y),e.animating=!1,e.options.onAnimationEnd&&e.options.onAnimationEnd.call(e),void e._startAni();c=(c-n)/t.time-1,s=o.sqrt(1-c*c),a=(t.x-r)*s+r,h=(t.y-l)*s+l,e._pos(a,h),e.animating&&(e.aniTime=w(i))})()}else e._resetPos(400)},_transitionTime:function(t){t+="ms",this.scroller.style[a]=t,this.hScrollbar&&(this.hScrollbarIndicator.style[a]=t),this.vScrollbar&&(this.vScrollbarIndicator.style[a]=t)},_momentum:function(t,s,i,e,r){var l,n=o.abs(t)/s,a=n*n/.0012;return t>0&&a>i?(n=n*(i+=r/(6/(a/n*6e-4)))/a,a=i):t<0&&a>e&&(n=n*(e+=r/(6/(a/n*6e-4)))/a,a=e),l=n/6e-4,{dist:a*=t<0?-1:1,time:o.round(l)}},_offset:function(t){for(var s=-t.offsetLeft,o=-t.offsetTop;t=t.offsetParent;)s-=t.offsetLeft,o-=t.offsetTop;return t!=this.wrapper&&(s*=this.scale,o*=this.scale),{left:s,top:o}},_snap:function(t,s){var i,e,r,l,n;for(r=this.pagesX.length-1,i=0,e=this.pagesX.length;i<e;i++)if(t>=this.pagesX[i]){r=i;break}for(r==this.currPageX&&r>0&&this.dirX<0&&r--,t=this.pagesX[r],l=(l=o.abs(t-this.pagesX[this.currPageX]))?o.abs(this.x-t)/l*500:0,this.currPageX=r,r=this.pagesY.length-1,i=0;i<r;i++)if(s>=this.pagesY[i]){r=i;break}return r==this.currPageY&&r>0&&this.dirY<0&&r--,s=this.pagesY[r],n=(n=o.abs(s-this.pagesY[this.currPageY]))?o.abs(this.y-s)/n*500:0,this.currPageY=r,{x:t,y:s,time:o.round(o.max(l,n))||200}},_bind:function(t,s,o){(s||this.scroller).addEventListener(t,this,!!o)},_unbind:function(t,s,o){(s||this.scroller).removeEventListener(t,this,!!o)},destroy:function(){this.scroller.style[l]="",this.hScrollbar=!1,this.vScrollbar=!1,this._scrollbar("h"),this._scrollbar("v"),this._unbind(g,t),this._unbind(y),this._unbind(v,t),this._unbind(Y,t),this._unbind(T,t),this.options.hasTouch||(this._unbind("DOMMouseScroll"),this._unbind("mousewheel")),this.options.useTransition&&this._unbind(X),this.options.checkDOMChanges&&clearInterval(this.checkDOMTime),this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var t,s,i,e,r=0,l=0;if(this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin),this.wrapperW=this.wrapper.clientWidth||1,this.wrapperH=this.wrapper.clientHeight||1,this.minScrollY=-this.options.topOffset||0,this.scrollerW=o.round(this.scroller.offsetWidth*this.scale),this.scrollerH=o.round((this.scroller.offsetHeight+this.minScrollY)*this.scale),this.maxScrollX=this.wrapperW-this.scrollerW,this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY,this.dirX=0,this.dirY=0,this.options.onRefresh&&this.options.onRefresh.call(this),this.hScroll=this.options.hScroll&&this.maxScrollX<0,this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH),this.hScrollbar=this.hScroll&&this.options.hScrollbar,this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH,t=this._offset(this.wrapper),this.wrapperOffsetLeft=-t.left,this.wrapperOffsetTop=-t.top,"string"==typeof this.options.snap)for(this.pagesX=[],this.pagesY=[],s=0,i=(e=this.scroller.querySelectorAll(this.options.snap)).length;s<i;s++)(r=this._offset(e[s])).left+=this.wrapperOffsetLeft,r.top+=this.wrapperOffsetTop,this.pagesX[s]=r.left<this.maxScrollX?this.maxScrollX:r.left*this.scale,this.pagesY[s]=r.top<this.maxScrollY?this.maxScrollY:r.top*this.scale;else if(this.options.snap){for(this.pagesX=[];r>=this.maxScrollX;)this.pagesX[l]=r,r-=this.wrapperW,l++;for(this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]),r=0,l=0,this.pagesY=[];r>=this.maxScrollY;)this.pagesY[l]=r,r-=this.wrapperH,l++;this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}this._scrollbar("h"),this._scrollbar("v"),this.zoomed||(this.scroller.style[a]="0",this._resetPos(400))},scrollTo:function(t,s,o,i){var e,r,l=t;for(this.stop(),l.length||(l=[{x:t,y:s,time:o,relative:i}]),e=0,r=l.length;e<r;e++)l[e].relative&&(l[e].x=this.x-l[e].x,l[e].y=this.y-l[e].y),this.steps.push({x:l[e].x,y:l[e].y,time:l[e].time||0});this._startAni()},scrollToElement:function(t,s){var i;(t=t.nodeType?t:this.scroller.querySelector(t))&&((i=this._offset(t)).left+=this.wrapperOffsetLeft,i.top+=this.wrapperOffsetTop,i.left=i.left>0?0:i.left<this.maxScrollX?this.maxScrollX:i.left,i.top=i.top>this.minScrollY?this.minScrollY:i.top<this.maxScrollY?this.maxScrollY:i.top,s=void 0===s?o.max(2*o.abs(i.left),2*o.abs(i.top)):s,this.scrollTo(i.left,i.top,s))},scrollToPage:function(t,s,o){var i,e;o=void 0===o?400:o,this.options.onScrollStart&&this.options.onScrollStart.call(this),this.options.snap?(t="next"==t?this.currPageX+1:"prev"==t?this.currPageX-1:t,s="next"==s?this.currPageY+1:"prev"==s?this.currPageY-1:s,t=t<0?0:t>this.pagesX.length-1?this.pagesX.length-1:t,s=s<0?0:s>this.pagesY.length-1?this.pagesY.length-1:s,this.currPageX=t,this.currPageY=s,i=this.pagesX[t],e=this.pagesY[s]):(i=-this.wrapperW*t,e=-this.wrapperH*s,i<this.maxScrollX&&(i=this.maxScrollX),e<this.maxScrollY&&(e=this.maxScrollY)),this.scrollTo(i,e,o)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(v,t),this._unbind(Y,t),this._unbind(T,t)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(X):_(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(t,s,o,i){var e=o/this.scale;this.options.useTransform&&(this.zoomed=!0,i=void 0===i?200:i,t=t-this.wrapperOffsetLeft-this.x,s=s-this.wrapperOffsetTop-this.y,this.x=t-t*e+this.x,this.y=s-s*e+this.y,this.scale=o,this.refresh(),this.x=this.x>0?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[a]=i+"ms",this.scroller.style[l]="translate("+this.x+"px,"+this.y+"px) scale("+o+")"+z,this.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},i=null,"undefined"!=typeof exports?exports.iScroll=M:t.iScroll=M}(window,document);