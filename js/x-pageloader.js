!function(t){if("function"==typeof define&&define.amd){if("undefined"!=typeof requirejs){var e=requirejs,n="[history"+(new Date).getTime()+"]",i=e.onError;t.toString=function(){return n},e.onError=function(t){-1===t.message.indexOf(n)&&i.call(e,t)}}define([],t)}if("object"!=typeof exports||"undefined"==typeof module)return t();module.exports=t()}(function(){function t(){}function e(t,n,i){var r=/(?:([a-zA-Z0-9\-]+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;if(null==t||""===t||n)t=n?t:b.href,T&&!i||(t=t.replace(/^[^#]*/,"")||"#",t=b.protocol.replace(/:.*$|$/,":")+"//"+b.host+F.basepath+t.replace(new RegExp("^#[/]?(?:"+F.type+")?"),""));else{var a=e(),o=y.getElementsByTagName("base")[0];!i&&o&&o.getAttribute("href")&&(o.href=o.href,a=e(o.href,null,!0));var s=a._pathname,l=a._protocol;t=""+t,t=/^(?:\w+\:)?\/\//.test(t)?0===t.indexOf("/")?l+t:t:l+"//"+a._host+(0===t.indexOf("/")?t:0===t.indexOf("?")?s+t:0===t.indexOf("#")?s+a._search+t:s.replace(/[^\/]+$/g,"")+t)}q.href=t;var c=r.exec(q.href),u=c[2]+(c[3]?":"+c[3]:""),f=c[4]||"/",h=c[5]||"",p="#"===c[6]?"":c[6]||"",d=f+h+p,m=f.replace(new RegExp("^"+F.basepath,"i"),F.type)+h;return{_href:c[1]+"//"+u+d,_protocol:c[1],_host:u,_hostname:c[2],_port:c[3]||"",_pathname:f,_search:h,_hash:p,_relative:d,_nohash:m,_special:m+p}}function n(){var t;try{t=g.sessionStorage,t.setItem($+"t","1"),t.removeItem($+"t")}catch(e){t={getItem:function(t){var e=y.cookie.split(t+"=");return e.length>1&&e.pop().split(";").shift()||"null"},setItem:function(t,e){var n={};(n[b.href]=E.state)&&(y.cookie=t+"="+_.stringify(n))}}}try{V=_.parse(t.getItem($))||{}}catch(t){V={}}M(N+"unload",function(){t.setItem($,_.stringify(V))},!1)}function i(e,n,i,r){var a=0;i||(i={set:t},a=1);var o=!i.set,s=!i.get,l={configurable:!0,set:function(){o=1},get:function(){s=1}};try{j(e,n,l),e[n]=e[n],j(e,n,i)}catch(t){}if(!(o&&s||(e.__defineGetter__&&(e.__defineGetter__(n,l.get),e.__defineSetter__(n,l.set),e[n]=e[n],i.get&&e.__defineGetter__(n,i.get),i.set&&e.__defineSetter__(n,i.set)),o&&s))){if(a)return!1;if(e===g){try{var c=e[n];e[n]=null}catch(t){}if("execScript"in g)g.execScript("Public "+n,"VBScript"),g.execScript("var "+n+";","JavaScript");else try{j(e,n,{value:t})}catch(t){"onpopstate"===n&&(M("popstate",i=function(){A("popstate",i,!1);var t=e.onpopstate;e.onpopstate=null,setTimeout(function(){e.onpopstate=t},1)},!1),U=0)}e[n]=c}else try{try{var u=w.create(e);j(w.getPrototypeOf(u)===e?u:e,n,i);for(var f in e)"function"==typeof e[f]&&(u[f]=e[f].bind(e));try{r.call(u,u,e)}catch(t){}e=u}catch(t){j(e.constructor.prototype,n,i)}}catch(t){return!1}}return e}function r(t,e,n){return n=n||{},t=t===K?b:t,n.set=n.set||function(n){t[e]=n},n.get=n.get||function(){return t[e]},n}function a(t,e,n){t in W?W[t].push(e):arguments.length>3?M(t,e,n,arguments[3]):M(t,e,n)}function o(t,e,n){var i=W[t];if(i){for(var r=i.length;r--;)if(i[r]===e){i.splice(r,1);break}}else A(t,e,n)}function s(e,n){var r=(""+("string"==typeof e?e:e.type)).replace(/^on/,""),a=W[r];if(a){if(n="string"==typeof e?n:e,null==n.target)for(var o=["target","currentTarget","srcElement","type"];e=o.pop();)n=i(n,e,{get:"type"===e?function(){return r}:function(){return g}});U&&(("popstate"===r?g.onpopstate:g.onhashchange)||t).call(g,n);for(var s=0,l=a.length;s<l;s++)a[s].call(g,n);return!0}return R(e,n)}function l(){var t=y.createEvent?y.createEvent("Event"):y.createEventObject();t.initEvent?t.initEvent("popstate",!1,!1):t.type="popstate",t.state=E.state,s(t)}function c(){z&&(z=!1,l())}function u(t,n,i,r){if(T)B=b.href;else{0===Q&&(Q=2);var a=e(n,2===Q&&-1!==(""+n).indexOf("#"));a._relative!==e()._relative&&(B=r,i?b.replace("#"+a._special):b.hash=a._special)}!S&&t&&(V[b.href]=t),z=!1}function f(t){var n=B;if(B=b.href,n){G!==b.href&&l(),t=t||g.event;var i=e(n,!0),r=e();t.oldURL||(t.oldURL=i._href,t.newURL=r._href),i._hash!==r._hash&&s(t)}}function h(t){setTimeout(function(){M("popstate",function(t){G=b.href,S||(t=i(t,"state",{get:function(){return E.state}})),s(t)},!1)},0),!T&&!0!==t&&"location"in E&&(m(k.hash),c())}function p(t){for(;t;){if("A"===t.nodeName)return t;t=t.parentNode}}function d(t){var n=t||g.event,i=p(n.target||n.srcElement),r="defaultPrevented"in n?n.defaultPrevented:!1===n.returnValue;if(i&&"A"===i.nodeName&&!r){var a=e(),o=e(i.getAttribute("href",2));a._href.split("#").shift()===o._href.split("#").shift()&&o._hash&&(a._hash!==o._hash&&(k.hash=o._hash),m(o._hash),n.preventDefault?n.preventDefault():n.returnValue=!1)}}function m(t){var e=y.getElementById(t=(t||"").replace(/^#/,""));if(e&&e.id===t&&"A"===e.nodeName){var n=e.getBoundingClientRect();g.scrollTo(x.scrollLeft||0,n.top+(x.scrollTop||0)-(x.clientTop||0))}}var g=("object"==typeof window?window:this)||{};if(!g.history||"emulate"in g.history)return g.history;var v,y=g.document,x=y.documentElement,w=g.Object,_=g.JSON,b=g.location,P=g.history,E=P,O=P.pushState,L=P.replaceState,T=function(){var t=g.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&!!O}(),S="state"in P,j=w.defineProperty,k=i({},"t")?{}:y.createElement("a"),N="",I=g.addEventListener?"addEventListener":(N="on")&&"attachEvent",D=g.removeEventListener?"removeEventListener":"detachEvent",C=g.dispatchEvent?"dispatchEvent":"fireEvent",M=g[I],A=g[D],R=g[C],F={basepath:"/",redirect:0,type:"/",init:0},$="__historyAPI__",q=y.createElement("a"),B=b.href,G="",U=1,z=!1,Q=0,V={},W={},J=y.title,Z={onhashchange:null,onpopstate:null},H=function(t,e){var n=g.history!==P;n&&(g.history=P),t.apply(P,e),n&&(g.history=E)},X={setup:function(t,e,n){F.basepath=(""+(null==t?F.basepath:t)).replace(/(?:^|\/)[^\/]*$/,"/"),F.type=null==e?F.type:e,F.redirect=null==n?F.redirect:!!n},redirect:function(t,n){if(E.setup(n,t),n=F.basepath,g.top==g.self){var i=e(null,!1,!0)._relative,r=b.pathname+b.search;T?(r=r.replace(/([^\/])$/,"$1/"),i!=n&&new RegExp("^"+n+"$","i").test(r)&&b.replace(i)):r!=n&&(r=r.replace(/([^\/])\?/,"$1/?"),new RegExp("^"+n,"i").test(r)&&b.replace(n+"#"+r.replace(new RegExp("^"+n,"i"),F.type)+b.hash))}},pushState:function(t,e,n){var i=y.title;null!=J&&(y.title=J),O&&H(O,arguments),u(t,n),y.title=i,J=e},replaceState:function(t,e,n){var i=y.title;null!=J&&(y.title=J),delete V[b.href],L&&H(L,arguments),u(t,n,!0),y.title=i,J=e},location:{set:function(t){0===Q&&(Q=1),g.location=t},get:function(){return 0===Q&&(Q=1),k}},state:{get:function(){return"object"==typeof V[b.href]?_.parse(_.stringify(V[b.href])):void 0!==V[b.href]?V[b.href]:null}}},K={assign:function(t){T||0!==(""+t).indexOf("#")?b.assign(t):u(null,t)},reload:function(t){b.reload(t)},replace:function(t){T||0!==(""+t).indexOf("#")?b.replace(t):u(null,t,!0)},toString:function(){return this.href},origin:{get:function(){return void 0!==v?v:b.origin?b.origin:b.protocol+"//"+b.hostname+(b.port?":"+b.port:"")},set:function(t){v=t}},href:T?null:{get:function(){return e()._href}},protocol:null,host:null,hostname:null,port:null,pathname:T?null:{get:function(){return e()._pathname}},search:T?null:{get:function(){return e()._search}},hash:T?null:{set:function(t){u(null,(""+t).replace(/^(#|)/,"#"),!1,B)},get:function(){return e()._hash}}};return function(){var t=y.getElementsByTagName("script"),a=(t[t.length-1]||{}).src||"";(-1!==a.indexOf("?")?a.split("?").pop():"").replace(/(\w+)(?:=([^&]*))?/g,function(t,e,n){F[e]=(n||"").replace(/^(0|false)$/,"")}),M(N+"hashchange",f,!1);var o=[K,k,Z,g,X,E];S&&delete X.state;for(var s=0;s<o.length;s+=2)for(var l in o[s])if(o[s].hasOwnProperty(l))if("object"!=typeof o[s][l])o[s+1][l]=o[s][l];else{var c=r(o[s],l,o[s][l]);if(!i(o[s+1],l,c,function(t,e){e===E&&(g.history=E=o[s+1]=t)}))return A(N+"hashchange",f,!1),!1;o[s+1]===g&&(W[l]=W[l.substr(2)]=[])}return E.setup(),F.redirect&&E.redirect(),F.init&&(Q=1),!S&&_&&n(),T||y[I](N+"click",d,!1),"complete"===y.readyState?h(!0):(T||e()._relative===F.basepath||(z=!0),M(N+"load",h,!1)),!0}()?(E.emulate=!T,g[I]=a,g[D]=o,g[C]=s,E):void 0}),function(t,e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";function t(t,e){var n,i=document.createElement(t||"div");for(n in e)i[n]=e[n];return i}function e(t){for(var e=1,n=arguments.length;e<n;e++)t.appendChild(arguments[e]);return t}function n(t,e,n,i){var r=["opacity",e,~~(100*t),n,i].join("-"),a=.01+n/i*100,o=Math.max(1-(1-t)/e*(100-a),t),s=l.substring(0,l.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return f[r]||(c.insertRule("@"+u+"keyframes "+r+"{0%{opacity:"+o+"}"+a+"%{opacity:"+t+"}"+(a+.01)+"%{opacity:1}"+(a+e)%100+"%{opacity:"+t+"}100%{opacity:"+o+"}}",c.cssRules.length),f[r]=1),r}function i(t,e){var n,i,r=t.style;if(e=e.charAt(0).toUpperCase()+e.slice(1),void 0!==r[e])return e;for(i=0;i<u.length;i++)if(n=u[i]+e,void 0!==r[n])return n}function r(t,e){for(var n in e)t.style[i(t,n)||n]=e[n];return t}function a(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)void 0===t[i]&&(t[i]=n[i])}return t}function o(t,e){return"string"==typeof t?t:t[e%t.length]}function s(t){this.opts=a(t||{},s.defaults,h)}var l,c,u=["webkit","Moz","ms","O"],f={},h={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(s.defaults={},a(s.prototype,{spin:function(e){this.stop();var n=this,i=n.opts,a=n.el=t(null,{className:i.className});if(r(a,{position:i.position,width:0,zIndex:i.zIndex,left:i.left,top:i.top}),e&&e.insertBefore(a,e.firstChild||null),a.setAttribute("role","progressbar"),n.lines(a,n.opts),!l){var o,s=0,c=(i.lines-1)*(1-i.direction)/2,u=i.fps,f=u/i.speed,h=(1-i.opacity)/(f*i.trail/100),p=f/i.lines;!function t(){s++;for(var e=0;e<i.lines;e++)o=Math.max(1-(s+(i.lines-e)*p)%f*h,i.opacity),n.opacity(a,e*i.direction+c,o,i);n.timeout=n.el&&setTimeout(t,~~(1e3/u))}()}return n},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(i,a){function s(e,n){return r(t(),{position:"absolute",width:a.scale*(a.length+a.width)+"px",height:a.scale*a.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*u+a.rotate)+"deg) translate("+a.scale*a.radius+"px,0)",borderRadius:(a.corners*a.scale*a.width>>1)+"px"})}for(var c,u=0,f=(a.lines-1)*(1-a.direction)/2;u<a.lines;u++)c=r(t(),{position:"absolute",top:1+~(a.scale*a.width/2)+"px",transform:a.hwaccel?"translate3d(0,0,0)":"",opacity:a.opacity,animation:l&&n(a.opacity,a.trail,f+u*a.direction,a.lines)+" "+1/a.speed+"s linear infinite"}),a.shadow&&e(c,r(s("#000","0 0 4px #000"),{top:"2px"})),e(i,e(c,s(o(a.color,u),"0 0 1px rgba(0,0,0,.1)")));return i},opacity:function(t,e,n){e<t.childNodes.length&&(t.childNodes[e].style.opacity=n)}}),"undefined"!=typeof document){c=function(){var n=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}();var p=r(t("group"),{behavior:"url(#default#VML)"});!i(p,"transform")&&p.adj?function(){function n(e,n){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}c.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(t,i){function a(){return r(n("group",{coordsize:u+" "+u,coordorigin:-c+" "+-c}),{width:u,height:u})}function s(t,s,l){e(h,e(r(a(),{rotation:360/i.lines*t+"deg",left:~~s}),e(r(n("roundrect",{arcsize:i.corners}),{width:c,height:i.scale*i.width,left:i.scale*i.radius,top:-i.scale*i.width>>1,filter:l}),n("fill",{color:o(i.color,t),opacity:i.opacity}),n("stroke",{opacity:0}))))}var l,c=i.scale*(i.length+i.width),u=2*i.scale*c,f=-(i.width+i.length)*i.scale*2+"px",h=r(a(),{position:"absolute",top:f,left:f});if(i.shadow)for(l=1;l<=i.lines;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=i.lines;l++)s(l);return e(t,h)},s.prototype.opacity=function(t,e,n,i){var r=t.firstChild;i=i.shadow&&i.lines||0,r&&e+i<r.childNodes.length&&(r=r.childNodes[e+i],r=r&&r.firstChild,(r=r&&r.firstChild)&&(r.opacity=n))}}():l=i(p,"animation")}return s}),function(t){if("object"==typeof exports)t(require("jquery"),require("spin.js"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],t);else{if(!window.Spinner)throw new Error("Spin.js not present");t(window.jQuery,window.Spinner)}}(function(t,e){t.fn.spin=function(n,i){return this.each(function(){var r=t(this),a=r.data();a.spinner&&(a.spinner.stop(),delete a.spinner),!1!==n&&(n=t.extend({color:i||r.css("color")},t.fn.spin.presets[n]||n),a.spinner=new e(n).spin(this))})},t.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}});var PG8={};(function(t,e,n,i){"use strict";if("undefined"!=typeof PG8Data){var r=n.history.location||n.location,a=this.PageLoader=function(e){this.thisLink=r.href,this.nextLink=PG8Data.nextLink,this.thisPage=parseInt(PG8Data.startPage,10),this.nextPage=this.thisPage+1,this.maxPages=parseInt(PG8Data.maxPages,10),this.maxedOut=0,this.opts=t.extend({},t.fn.ajaxPageLoader.defaults,e),this.content=t(this.opts.content),this.nextPage<=this.maxPages&&this.init()};a.prototype={init:function(){this.content.children().wrapAll('<div id="content-page-'+parseInt(this.thisPage,10)+'" class="clear" data-href="'+encodeURI(this.thisLink)+'"></div>'),this.holder(),this.handler(),this.spinner()},holder:function(){this.content.append('<div id="content-page-'+parseInt(this.nextPage,10)+'" class="clear" data-href="'+encodeURI(this.nextLink)+'"></div>')},handler:function(){var i=this,r=t(n);t("body").on("click",i.opts.next,function(e){i.nextPage<=i.maxPages&&(e.preventDefault(),t(this).parents("nav:first").before(t("#spinner").show()),i.loader(i.nextPage,i.nextLink))}),r.on("scroll",this.content,function(n){clearTimeout(t.data(this,"pushTimer")),clearTimeout(t.data(this,"infinTimer")),t.data(this,"pushTimer",setTimeout(function(){var e=i.content.children(":first"),n=e.offset().top,a=e.data("href"),o=r.scrollTop();o<=n?i.pusher(a):i.content.children().each(function(){var e=t(this),n=e.offset().top-i.opts.scrollOffset,r=e.outerHeight()+n;n<=o&&o<r&&i.pusher(e.data("href"))})},i.opts.pushDelay)),0===i.maxedOut&&!0===i.opts.infinScroll&&t.data(this,"infinTimer",setTimeout(function(){var n=t(e),a=n.height(),o=r.height()+r.scrollTop(),s=i.content.children(":last").offset().top,l=a-o;o>s+i.opts.scrollOffset&&o<=s+i.opts.scrollOffset+i.opts.infinOffset&&l>=i.opts.infinFooter&&t(i.opts.next).trigger("click")},i.opts.infinDelay))})},spinner:function(){t.isFunction(n.Spinner)&&(this.content.after('<div id="spinner" style="position: relative;"></div>'),t("#spinner").spin(this.opts.spinOpts).hide())},pusher:function(t){void 0!==t&&t!==r.href&&history.pushState(null,null,t)},loader:function(e,n){var i=this;t("#content-page-"+e).load(n+" "+i.opts.content+" > *",function(){var a=t(i.opts.next);i.thisPage=e,i.thisLink=n,i.nextPage=e+1,i.nextLink=n.replace(/\/page\/[0-9]*/,"/page/"+i.nextPage),i.pusher(i.thisLink),i.holder(),i.nextPage>i.maxPages?(a.remove(),i.maxedOut=1):a.is("[href]")?a.attr("href",i.nextLink):t("[href]",a).attr("href",i.nextLink),t("#spinner").hide(),t(i.opts.prev).hide(),i.loaded(),i.scroll(),i.analytics("/"+r.href.replace(i.root(),""))})},loaded:function(){var t=e.createEvent("Event");t.initEvent("DOMContentLoaded",!0,!0),n.document.dispatchEvent(t)},scroll:function(){var e=t("#content-page-"+this.thisPage).children(":first").offset().top-this.opts.scrollOffset;t("body, html").animate({scrollTop:e},this.opts.scrollDelay,"swing")},analytics:function(t){void 0!==n.ga?n.ga("send","pageview",t):void 0!==n._gaq&&n._gaq.push(["_trackPageview",t])},root:function(){var t=e.location.port?":"+e.location.port:"";return e.location.protocol+"//"+(e.location.hostname||e.location.host)+t+"/"}},t.fn.ajaxPageLoader=function(e){return this.each(function(){t.data(this,"ajaxPageLoader")||t.data(this,"ajaxPageLoader",new a(e))})},t.fn.ajaxPageLoader.defaults={content:"main",next:".next-page",prev:".prev-page",scrollDelay:300,scrollOffset:30,pushDelay:250,infinScroll:!0,infinDelay:600,infinOffset:300,infinFooter:1,spinOpts:{lines:25,length:0,width:4,radius:25,speed:1.5,trail:40,top:"15px"}}}}).apply(PG8,[jQuery,document,window]),function(t){t(function(){t(document.body).ajaxPageLoader(),t.timeago&&document.addEventListener("DOMContentLoaded",function(e){t("time").timeago()})})}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(t){function e(){var e=a.settings;if(e.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var o=n(this);return isNaN(o.datetime)||(0===e.cutoff||Math.abs(r(o.datetime))<e.cutoff?t(this).text(i(o.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function n(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:a.datetime(e)});var n=t.trim(e.text());a.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(n.length>0)||a.isTime(e)&&e.attr("title")||e.attr("title",n)}return e.data("timeago")}function i(t){return a.inWords(r(t))}function r(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return i(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var a=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){function n(n,r){var a=t.isFunction(n)?n(r,e):n,o=i.numbers&&i.numbers[r]||r;return a.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,r=i.prefixAgo,a=i.suffixAgo;if(this.settings.allowFuture&&e<0&&(r=i.prefixFromNow,a=i.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var o=Math.abs(e)/1e3,s=o/60,l=s/60,c=l/24,u=c/365,f=o<45&&n(i.seconds,Math.round(o))||o<90&&n(i.minute,1)||s<45&&n(i.minutes,Math.round(s))||s<90&&n(i.hour,1)||l<24&&n(i.hours,Math.round(l))||l<42&&n(i.day,1)||c<30&&n(i.days,Math.round(c))||c<45&&n(i.month,1)||c<365&&n(i.months,Math.round(c/30))||u<1.5&&n(i.year,1)||n(i.years,Math.round(u)),h=i.wordSeparator||"";return void 0===i.wordSeparator&&(h=" "),t.trim([r,f,a].join(h))},parse:function(e){var n=t.trim(e);return n=n.replace(/\.\d+/,""),n=n.replace(/-/,"/").replace(/-/,"/"),n=n.replace(/T/," ").replace(/Z/," UTC"),n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),n=n.replace(/([\+\-]\d\d)$/," $100"),new Date(n)},datetime:function(e){var n=a.isTime(e)?t(e).attr("datetime"):t(e).attr("title");return a.parse(n)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var o={init:function(){o.dispose.call(this);var n=t.proxy(e,this);n();var i=a.settings;i.refreshMillis>0&&(this._timeagoInterval=setInterval(n,i.refreshMillis))},update:function(n){var i=n instanceof Date?n:a.parse(n);t(this).data("timeago",{datetime:i}),a.settings.localeTitle&&t(this).attr("title",i.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:a.parse(a.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var n=t?o[t]:o.init;if(!n)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){n.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),function(){var t=document.getElementById("site-navigation"),e=document.getElementById("responsive-menu"),n=document.getElementById("responsive-menu-toggle");if(t&&void 0!==n)void 0===e?n.style.display="none":n.onclick=function(){-1!==n.className.indexOf("active")?(t.style.display="none",n.className=n.className.replace(" active","")):(t.style.display="inline-block",n.className+=" active")}}(),function(t){t(function(){t.timeago&&t("time").timeago()}),t(".slider").slick({arrows:!1,dots:!0,infinite:!1}),t(".menu-item-has-children").append(t('<i class="fa fa-plus"></i>')),t(".menu-item-has-children .fa-plus").click(function(){t("i").removeClass("fa-minus"),t(this).addClass("fa-minus"),t(".menu-item-has-children").removeClass("sub-menu-active"),t(this).closest(".menu-item-has-children").addClass("sub-menu-active")}),t(".sub-menu-active .fa-minus").click(function(){t(this).removeClass("fa-minus"),t(".menu-item-has-children").removeClass("sub-menu-active")}),t(".menu-item-has-children").hover(function(){t(".wrap-header").toggleClass("sub-active"),console.log("test")}),t(".testSlider").slick({arrows:!1,dots:!0,infinite:!1,autoplay:!0,autoplaySpeed:1e4})}(jQuery);
//# sourceMappingURL=x-pageloader.js.map