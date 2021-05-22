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