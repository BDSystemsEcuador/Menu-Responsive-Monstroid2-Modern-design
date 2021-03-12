let btnmenu = document.getElementById("btnmenu");
let menu = document.getElementById('menu');
let main2 = document.getElementById('fondo');
btnmenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
    main2.classList.toggle('fondo');
});