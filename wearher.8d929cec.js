!function(){function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===r(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(e){if(t(1,arguments),!n(e)&&"number"!=typeof e)return!1;var r=o(e);return!isNaN(Number(r))}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function s(e,n){t(2,arguments);var r=o(e).getTime(),a=i(n);return new Date(r+a)}function u(e,n){t(2,arguments);var r=i(n);return s(e,-r)}var c=864e5;function d(e){t(1,arguments);var n=o(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var a=n.getTime(),i=r-a;return Math.floor(i/c)+1}function l(e){t(1,arguments);var n=1,r=o(e),a=r.getUTCDay(),i=(a<n?7:0)+a-n;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function h(e){t(1,arguments);var n=o(e),r=n.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var i=l(a),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var u=l(s);return n.getTime()>=i.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function f(e){t(1,arguments);var n=h(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var o=l(r);return o}var m=6048e5;function y(e){t(1,arguments);var n=o(e),r=l(n).getTime()-f(n).getTime();return Math.round(r/m)+1}var g={};function p(){return g}function v(e,n){var r,a,s,u,c,d,l,h;t(1,arguments);var f=p(),m=i(null!==(r=null!==(a=null!==(s=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==s?s:f.weekStartsOn)&&void 0!==a?a:null===(l=f.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==r?r:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=o(e),g=y.getUTCDay(),v=(g<m?7:0)+g-m;return y.setUTCDate(y.getUTCDate()-v),y.setUTCHours(0,0,0,0),y}function w(e,n){var r,a,s,u,c,d,l,h;t(1,arguments);var f=o(e),m=f.getUTCFullYear(),y=p(),g=i(null!==(r=null!==(a=null!==(s=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:y.firstWeekContainsDate)&&void 0!==a?a:null===(l=y.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==r?r:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(m+1,0,g),w.setUTCHours(0,0,0,0);var b=v(w,n),T=new Date(0);T.setUTCFullYear(m,0,g),T.setUTCHours(0,0,0,0);var C=v(T,n);return f.getTime()>=b.getTime()?m+1:f.getTime()>=C.getTime()?m:m-1}function b(e,n){var r,o,a,s,u,c,d,l;t(1,arguments);var h=p(),f=i(null!==(r=null!==(o=null!==(a=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(u=n.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==a?a:h.firstWeekContainsDate)&&void 0!==o?o:null===(d=h.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:1),m=w(e,n),y=new Date(0);y.setUTCFullYear(m,0,f),y.setUTCHours(0,0,0,0);var g=v(y,n);return g}var T=6048e5;function C(e,n){t(1,arguments);var r=o(e),a=v(r,n).getTime()-b(r,n).getTime();return Math.round(a/T)+1}function x(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var D={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return x("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):x(n+1,2)},d:function(t,e){return x(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return x(t.getUTCHours()%12||12,e.length)},H:function(t,e){return x(t.getUTCHours(),e.length)},m:function(t,e){return x(t.getUTCMinutes(),e.length)},s:function(t,e){return x(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return x(Math.floor(r*Math.pow(10,n-3)),e.length)}},M="midnight",P="noon",S="morning",U="afternoon",k="evening",E="night";function A(t,e){var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=e||"";return n+String(o)+i+x(a,2)}function O(t,e){return t%60==0?(t>0?"-":"+")+x(Math.abs(t)/60,2):_(t,e)}function _(t,e){var n=e||"",r=t>0?"-":"+",o=Math.abs(t);return r+x(Math.floor(o/60),2)+n+x(o%60,2)}var j={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return D.y(t,e)},Y:function(t,e,n,r){var o=w(t,r),a=o>0?o:1-o;return"YY"===e?x(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):x(a,e.length)},R:function(t,e){return x(h(t),e.length)},u:function(t,e){return x(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return x(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return D.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var o=C(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):x(o,e.length)},I:function(t,e,n){var r=y(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):x(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):D.d(t,e)},D:function(t,e,n){var r=d(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):x(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return x(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return x(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return x(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,o=t.getUTCHours();switch(r=12===o?P:0===o?M:o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,o=t.getUTCHours();switch(r=o>=17?k:o>=12?U:o>=4?S:E,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return D.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):D.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):x(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):x(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):D.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):D.s(t,e)},S:function(t,e){return D.S(t,e)},X:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return O(o);case"XXXX":case"XX":return _(o);default:return _(o,":")}},x:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return O(o);case"xxxx":case"xx":return _(o);default:return _(o,":")}},O:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+A(o,":");default:return"GMT"+_(o,":")}},z:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+A(o,":");default:return"GMT"+_(o,":")}},t:function(t,e,n,r){var o=r._originalDate||t;return x(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return x((r._originalDate||t).getTime(),e.length)}},B=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},W=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Y={p:W,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return B(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",B(o,e)).replace("{{time}}",W(a,e))}};function q(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var N=["D","DD"],H=["YY","YYYY"];function F(t){return-1!==N.indexOf(t)}function R(t){return-1!==H.indexOf(t)}function L(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var z={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},G=function(t,e,n){var r,o=z[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function I(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var Q={date:I({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:I({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:I({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},J=function(t,e,n,r){return X[t]};function V(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=t.formattingValues[a]||t.formattingValues[o]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var $={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:V({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:V({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:V({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:V({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:V({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function K(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;var i,s=a[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?tt(u,(function(t){return t.test(s)})):Z(u,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(s.length);return{value:i,rest:d}}}function Z(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function tt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var et,nt={ordinalNumber:(et={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(et.matchPattern);if(!n)return null;var r=n[0],o=t.match(et.parsePattern);if(!o)return null;var a=et.valueCallback?et.valueCallback(o[0]):o[0];a=e.valueCallback?e.valueCallback(a):a;var i=t.slice(r.length);return{value:a,rest:i}}),era:K({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:K({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:K({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:K({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:K({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},rt={code:"en-US",formatDistance:G,formatLong:Q,formatRelative:J,localize:$,match:nt,options:{weekStartsOn:0,firstWeekContainsDate:1}},ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,st=/''/g,ut=/[a-zA-Z]/;function ct(e,n,r){var s,c,d,l,h,f,m,y,g,v,w,b,T,C,x,D,M,P;t(2,arguments);var S=String(n),U=p(),k=null!==(s=null!==(c=null==r?void 0:r.locale)&&void 0!==c?c:U.locale)&&void 0!==s?s:rt,E=i(null!==(d=null!==(l=null!==(h=null!==(f=null==r?void 0:r.firstWeekContainsDate)&&void 0!==f?f:null==r||null===(m=r.locale)||void 0===m||null===(y=m.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==h?h:U.firstWeekContainsDate)&&void 0!==l?l:null===(g=U.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==d?d:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var A=i(null!==(w=null!==(b=null!==(T=null!==(C=null==r?void 0:r.weekStartsOn)&&void 0!==C?C:null==r||null===(x=r.locale)||void 0===x||null===(D=x.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==T?T:U.weekStartsOn)&&void 0!==b?b:null===(M=U.locale)||void 0===M||null===(P=M.options)||void 0===P?void 0:P.weekStartsOn)&&void 0!==w?w:0);if(!(A>=0&&A<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var O=o(e);if(!a(O))throw new RangeError("Invalid time value");var _=q(O),B=u(O,_),W={firstWeekContainsDate:E,weekStartsOn:A,locale:k,_originalDate:O},N=S.match(at).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Y[e])(t,k.formatLong):t})).join("").match(ot).map((function(t){if("''"===t)return"'";var o=t[0];if("'"===o)return dt(t);var a=j[o];if(a)return null!=r&&r.useAdditionalWeekYearTokens||!R(t)||L(t,n,String(e)),null!=r&&r.useAdditionalDayOfYearTokens||!F(t)||L(t,n,String(e)),a(B,t,k.localize,W);if(o.match(ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return t})).join("");return N}function dt(t){var e=t.match(it);return e?e[1].replace(st,"'"):t}var lt={photo:"https://api.pexels.com/v1/",video:"https://api.pexels.com/videos/",collections:"https://api.pexels.com/v1/collections/"};function ht(t,e){var n={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","User-Agent":"Pexels/JavaScript",Authorization:t}},r=lt[e];return function(t,e){return fetch(""+r+t+"?"+(o=e||{},Object.keys(o).map((function(t){return t+"="+o[t]})).join("&")),n).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}));var o}}function ft(t){return!(!t||!t.photos)}var mt={__proto__:null,isPhotos:ft,isVideos:function(t){return!(!t||!t.videos)},isError:function(t){return!!t.error}};function yt(t){if(!t||"string"!=typeof t)throw new TypeError("An ApiKey must be provided when initiating the Pexel's client.");return{typeCheckers:mt,photos:(a=t,i=ht(a,"photo"),{search:function(t){return i("/search",t)},curated:function(t){return void 0===t&&(t={}),i("/curated",t)},show:function(t){return i("/photos/"+t.id)},random:function(){try{var t=Math.floor(1e3*Math.random());return Promise.resolve(this.curated({page:t,per_page:1})).then((function(t){return ft(t)?t.photos[0]:t}))}catch(t){return Promise.reject(t)}}}),videos:(r=t,o=ht(r,"video"),{search:function(t){return o("/search",t)},popular:function(t){return void 0===t&&(t={}),o("/popular",t)},show:function(t){return o("/videos/"+t.id)}}),collections:(e=t,n=ht(e,"collections"),{all:function(t){return void 0===t&&(t={}),n("",t)},media:function(t){var e=t.id,r=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e.indexOf(n=a[r])>=0||(o[n]=t[n]);return o}(t,["id"]);return n(""+e,r)},featured:function(t){return void 0===t&&(t={}),n("featured",t)}})};var e,n,r,o,a,i}var gt="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==gt&&gt,pt="URLSearchParams"in gt,vt="Symbol"in gt&&"iterator"in Symbol,wt="FileReader"in gt&&"Blob"in gt&&function(){try{return new Blob,!0}catch(t){return!1}}(),bt="FormData"in gt,Tt="ArrayBuffer"in gt;if(Tt)var Ct=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],xt=ArrayBuffer.isView||function(t){return t&&Ct.indexOf(Object.prototype.toString.call(t))>-1};function Dt(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function Mt(t){return"string"!=typeof t&&(t=String(t)),t}function Pt(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return vt&&(e[Symbol.iterator]=function(){return e}),e}function St(t){this.map={},t instanceof St?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function Ut(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function kt(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function Et(t){var e=new FileReader,n=kt(e);return e.readAsArrayBuffer(t),n}function At(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function Ot(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:wt&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:bt&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:pt&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():Tt&&wt&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=At(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):Tt&&(ArrayBuffer.prototype.isPrototypeOf(t)||xt(t))?this._bodyArrayBuffer=At(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):pt&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},wt&&(this.blob=function(){var t=Ut(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=Ut(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(Et)}),this.text=function(){var t,e,n,r=Ut(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=kt(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},bt&&(this.formData=function(){return this.text().then(Bt)}),this.json=function(){return this.text().then(JSON.parse)},this}St.prototype.append=function(t,e){t=Dt(t),e=Mt(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},St.prototype.delete=function(t){delete this.map[Dt(t)]},St.prototype.get=function(t){return t=Dt(t),this.has(t)?this.map[t]:null},St.prototype.has=function(t){return this.map.hasOwnProperty(Dt(t))},St.prototype.set=function(t,e){this.map[Dt(t)]=Mt(e)},St.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},St.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),Pt(t)},St.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),Pt(t)},St.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),Pt(t)},vt&&(St.prototype[Symbol.iterator]=St.prototype.entries);var _t=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function jt(t,e){if(!(this instanceof jt))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n,r,o=(e=e||{}).body;if(t instanceof jt){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new St(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new St(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),_t.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var a=/([?&])_=[^&]*/;if(a.test(this.url))this.url=this.url.replace(a,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function Bt(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function Wt(t,e){if(!(this instanceof Wt))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new St(e.headers),this.url=e.url||"",this._initBody(t)}jt.prototype.clone=function(){return new jt(this,{body:this._bodyInit})},Ot.call(jt.prototype),Ot.call(Wt.prototype),Wt.prototype.clone=function(){return new Wt(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new St(this.headers),url:this.url})},Wt.error=function(){var t=new Wt(null,{status:0,statusText:""});return t.type="error",t};var Yt=[301,302,303,307,308];Wt.redirect=function(t,e){if(-1===Yt.indexOf(e))throw new RangeError("Invalid status code");return new Wt(null,{status:e,headers:{location:t}})};var qt=gt.DOMException;try{new qt}catch(t){(qt=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),qt.prototype.constructor=qt}function Nt(t,e){return new Promise((function(n,r){var o=new jt(t,e);if(o.signal&&o.signal.aborted)return r(new qt("Aborted","AbortError"));var a=new XMLHttpRequest;function i(){a.abort()}a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new St,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;setTimeout((function(){n(new Wt(o,r))}),0)},a.onerror=function(){setTimeout((function(){r(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){r(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){r(new qt("Aborted","AbortError"))}),0)},a.open(o.method,function(t){try{return""===t&&gt.location.href?gt.location.href:t}catch(e){return t}}(o.url),!0),"include"===o.credentials?a.withCredentials=!0:"omit"===o.credentials&&(a.withCredentials=!1),"responseType"in a&&(wt?a.responseType="blob":Tt&&o.headers.get("Content-Type")&&-1!==o.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof St?o.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,Mt(e.headers[t]))})),o.signal&&(o.signal.addEventListener("abort",i),a.onreadystatechange=function(){4===a.readyState&&o.signal.removeEventListener("abort",i)}),a.send(void 0===o._bodyInit?null:o._bodyInit)}))}Nt.polyfill=!0,gt.fetch||(gt.fetch=Nt,gt.Headers=St,gt.Request=jt,gt.Response=Wt),self.fetch.bind(self);var Ht="https://api.openweathermap.org/data/2.5",Ft="95632b02f9162f375a368971925f5209",Rt="5799f8036ce54ed6a10655a7a6619046",Lt=document.querySelector(".js-weather__wrapper");navigator.geolocation.getCurrentPosition((function(t){var e,n,r=t.coords;(function(t,e){var n=new URLSearchParams({lang:"ua",units:"metric",appid:Ft,lon:e,lat:t});console.log(n.toString());var r="".concat(Ht,"/weather?").concat(n);return fetch(r).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))})(r.latitude,r.longitude).then((function(t){!function(t,e){var n=ct(new Date(1e3*t.sys.sunrise),"HH:mm"),r=ct(new Date(1e3*t.sys.sunset),"HH:mm");e.innerHTML='<div class="weather__card">\n        <h2 class="city-name">'.concat(t.name,'</h2>\n        <ul class="weather-info list">\n            <li class="weather-info-item">\n                <p class="temp">Температура: ').concat(t.main.temp,'<sup>&#176;</sup></p>\n            </li>\n            <li class="weather-info-item">\n                <p class="feels-like-temp">Відчувається як: ').concat(t.main.feels_like,'<sup>&#176;</sup></p>\n            </li>\n            <li class="weather-info-item">\n                <p class="sunrise-time">Схід сонця: ').concat(n,'</p>\n            </li>\n            <li class="weather-info-item">\n                <p class="sunset-time">Захід сонця: ').concat(r,'</p>\n            </li>\n            <li class="weather-info-item">\n                <p class="clouds">Хмарність: ').concat(t.clouds.all,"%</p>\n            </li>\n        </ul>\n    </div>")}(t,Lt)})),(e=r.latitude,n=r.longitude,fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(e,",+").concat(n,"&key=").concat(Rt)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){return t.results[0].components.city})).then((function(t){var e=t;yt("563492ad6f91700001000001a1215475e7a64958baadc8684534de88").photos.search({query:e,per_page:2}).then((function(t){console.log(t),document.body.style.cssText="background-image: url('".concat(t.photos[0].src.original,"'); background-size: cover; background-repeat: no-repeat\n")}))}))}),(function(t){console.warn("ERROR(".concat(t.code,"): ").concat(t.message))}))}();
//# sourceMappingURL=wearher.8d929cec.js.map
