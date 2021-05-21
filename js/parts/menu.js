function menu(){
    let mainBtn = document.querySelector('.button__menu'),
        overlay = document.querySelector('.overlay'),
        menu = document.querySelector('.menu');
    mainBtn.addEventListener('click', function(){
        overlay.getElementsByClassName.display = 'block';
        menu.style.transform = 'translateX(0%)';
    });
}
module.exports = menu;