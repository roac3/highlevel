window.addEventListener('load', ()=>{

    let menu = document.querySelector('.menu-container');
    let btn_menu = document.querySelector('.btn-menu');

    let hide = document.querySelector('.fa-minus');
    let pg = document.querySelector('.hide-p');


    btn_menu.addEventListener('click',()=>{
        menu.classList.toggle('active-menu')
    })

    hide.addEventListener('click', ()=>{
        pg.style.display = "none"
    })

})