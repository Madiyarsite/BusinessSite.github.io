/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/***/ ((module) => {

function menu(){
    let mainBtn = document.querySelector('.button__menu'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.menu__hide');
        menu = document.querySelector('.menu');
    mainBtn.addEventListener('click', function(){
        overlay.style.display = 'block';
        menu.style.transform = 'translateX(0%)';
    });
    closeBtn.addEventListener('click', function(){
        overlay.style.display = 'none';
        menu.style.transform = 'translateX(-100%)';
    });
}
module.exports = menu;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
document.addEventListener('DOMContentLoaded', function(){
    let menu = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js");

    menu();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map