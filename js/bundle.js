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
        closeBtn = document.querySelector('.menu__hide'),
        menu = document.querySelector('.menu');
    mainBtn.addEventListener('click', function(){
        overlay.style.display = 'block';
        menu.style.transform = 'translateX(0%)';
    });
    closeBtn.addEventListener('click', function(){
        overlay.style.display = 'none';
        menu.style.transform = 'translateX(-100%)';
    });
    overlay.addEventListener('click', function(){
        overlay.style.display = 'none';
        menu.style.transform = 'translateX(-100%)';
    });
}
module.exports = menu;

/***/ }),

/***/ "./src/js/parts/slide.js":
/*!*******************************!*\
  !*** ./src/js/parts/slide.js ***!
  \*******************************/
/***/ ((module) => {

function slide(){
    let link = document.querySelectorAll('.menu__link'),
        section = document.querySelectorAll('.section'),
        overlay = document.querySelector('.overlay'),
        secUp = document.querySelectorAll('.section__link'),
        secName = document.querySelectorAll('.section__name'),
        title = document.querySelectorAll('.header__bg'),
        secLinks = document.querySelector('.section__links'),
        btnAbout = document.querySelector('#me'),
        btnPort = document.querySelector('#port'),
        menu = document.querySelector('.menu');
        // it strike is number index of section//
        let strike = 0;
        //its script delete sections
        function display(a){
            section.forEach((item)=> item.style.display = "none");
            section[a].style.display = 'block';
        }
        display(strike);
        //main btns
        btnAbout.addEventListener('click', function(){
            display(1);
            strike = 1;
            checkBanner();
            compStrike();
        });
        btnPort.addEventListener('click', function(){
            display(3);
            strike = 3;
            checkBanner();
            compStrike();
        });
        //check banner
        function checkBanner(){
            if(strike == 0){
                secLinks.style.display = 'none';
            }else{
                secLinks.style.display = 'block';
            }
        }
        checkBanner();
        //check strike
        function compStrike(){
            if(strike !== 0){
                secName[0].innerHTML = link[strike - 1].textContent;
                }else if(strike < 1){
                    secName[0].innerHTML = link[section.length - 1].textContent;
                }
                if(strike < section.length - 1){
                    secName[1].innerHTML = link[strike + 1].textContent;  
                   }else if(strike == 5){
                    secName[1].innerHTML = link[0].textContent;
                   }
        }
        //its script of menu
        link.forEach((item, i)=> item.addEventListener('click', function(){
            
            strike = i;
            display(strike);
            overlay.style.display = 'none';
        menu.style.transform = 'translateX(-100%)';
        checkBanner();
        compStrike();
        }));
        //script of buttons
        secUp.forEach((item, i)=> item.addEventListener('click', function(){
            if(i == 0 && strike !== 0){
                strike--;
                display(strike);
                }else if(i == 0 && strike < 1){
                    strike = section.length - 1;
                    display(strike);
                }
            if(i == 1 && strike < section.length - 1){
                 strike++;
                display(strike);   
                
                }else if(i == 1 && strike == 5){
                    strike = 0;
                    display(strike);
                }
                checkBanner();
                compStrike();
        }));
        //script button fade
       secUp.forEach((item, i)=> item.addEventListener('mouseenter', function(){
            secName[i].classList.add('active');
       }));
       secUp.forEach((item, i)=> item.addEventListener('mouseout', function(){
        secName[i].classList.remove('active');
   }));
        
        
       
        
        
        
}
module.exports = slide;

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
    let menu = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js"),
        slider = __webpack_require__(/*! ./parts/slide.js */ "./src/js/parts/slide.js");


    menu();
    slider();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map