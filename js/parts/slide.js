function slide(){
    let link = document.querySelectorAll('.menu__link'),
        section = document.querySelectorAll('.section'),
        overlay = document.querySelector('.overlay'),
        
        menu = document.querySelector('.menu');
        function display(a){
            section.forEach((item)=> item.style.display = 'none');
            section[a].style.display = 'block';
        }
        display(0);
        function links(){
            link.forEach((item, i)=> item.addEventListener('click', function(){
                display(i);
                overlay.style.display = 'none';
                menu.style.transform = 'translateX(-100%)';
            }));
            
               
            
        }
        links();
}
module.exports = slide;