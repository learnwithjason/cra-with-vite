var t,e,n,i,a=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},r=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(i){}},o=!1,c=function(t,e){o||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),o=!0),addEventListener("visibilitychange",(function n(i){"hidden"===document.visibilityState&&(t(i),e&&removeEventListener("visibilitychange",n,!0))}),!0)},u=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},s="function"==typeof WeakSet?new WeakSet:new Set,f=function(t,e,n){var i;return function(){e.value>=0&&(n||s.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},m=function(t,e){var n,i=a("CLS",0),o=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},s=r("layout-shift",o);s&&(n=f(t,i,e),c((function(){s.takeRecords().map(o),n()})),u((function(){i=a("CLS",0),n=f(t,i,e)})))},d=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},p=function(){c((function(t){var e=t.timeStamp;d=e}),!0)},l=function(){return d<0&&(d=v(),p(),u((function(){setTimeout((function(){d=v(),p()}),0)}))),{get timeStamp(){return d}}},S=function(t,e){var n,i=l(),o=a("FCP"),c=r("paint",(function(t){"first-contentful-paint"===t.name&&(c&&c.disconnect(),t.startTime<i.timeStamp&&(o.value=t.startTime,o.entries.push(t),s.add(o),n()))}));c&&(n=f(t,o,e),u((function(i){o=a("FCP"),n=f(t,o,e),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,s.add(o),n()}))}))})))},h={passive:!0,capture:!0},g=new Date,y=function(i,a){t||(t=a,e=i,n=new Date,T(removeEventListener),E())},E=function(){if(e>=0&&e<n-g){var a={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+e};i.forEach((function(t){t(a)})),i=[]}},L=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?(n=e,i=t,a=function(){y(n,i),o()},r=function(){o()},o=function(){removeEventListener("pointerup",a,h),removeEventListener("pointercancel",r,h)},addEventListener("pointerup",a,h),addEventListener("pointercancel",r,h)):y(e,t)}var n,i,a,r,o},T=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,L,h)}))},w=function(n,o){var m,d=l(),v=a("FID"),p=function(t){t.startTime<d.timeStamp&&(v.value=t.processingStart-t.startTime,v.entries.push(t),s.add(v),m())},S=r("first-input",p);m=f(n,v,o),S&&c((function(){S.takeRecords().map(p),S.disconnect()}),!0),S&&u((function(){var r;v=a("FID"),m=f(n,v,o),i=[],e=-1,t=null,T(addEventListener),r=p,i.push(r),E()}))},b=function(t,e){var n,i=l(),o=a("LCP"),m=function(t){var e=t.startTime;e<i.timeStamp&&(o.value=e,o.entries.push(t)),n()},d=r("largest-contentful-paint",m);if(d){n=f(t,o,e);var v=function(){s.has(o)||(d.takeRecords().map(m),d.disconnect(),s.add(o),n())};["keydown","click"].forEach((function(t){addEventListener(t,v,{once:!0,capture:!0})})),c(v,!0),u((function(i){o=a("LCP"),n=f(t,o,e),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,s.add(o),n()}))}))}))}},F=function(t){var e,n=a("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],t(n)}catch(i){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)};export{m as getCLS,S as getFCP,w as getFID,b as getLCP,F as getTTFB};
