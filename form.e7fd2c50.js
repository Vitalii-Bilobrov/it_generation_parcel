!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return a.default(e)||l.default(e,t)||f.default(e,t)||i.default()};var a=s(o("8slrw")),l=s(o("7AJDX")),i=s(o("ifqQW")),f=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var d,c=document.querySelector(".js-form"),p="Hello, User";(d=localStorage.getItem(p))&&(d=JSON.parse(d),Object.entries(d).forEach((function(t){var r=e(u)(t,2),n=r[0],o=r[1];c.elements[n].value=o}))),c.addEventListener("input",(function(e){var t=localStorage.getItem(p);(t=t?JSON.parse(t):{})[e.target.name]=e.target.value,localStorage.setItem(p,JSON.stringify(t))})),c.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(c),r={};t.forEach((function(e,t){r[t]=e})),console.log(r),e.target.reset(),localStorage.removeItem(p)}))}();
//# sourceMappingURL=form.e7fd2c50.js.map
