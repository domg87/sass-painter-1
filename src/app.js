const $ = require('jquery');

function openNavbarOnClick(){
  var btn = $('#navBtn');
  btn.click( () => {
    console.log("Click");
    $('#navbar').toggleClass('toggle');
  })
}

function openDropDownMenuOnClick(){
  var list = $('#navbar-top li.parent-dropdown');
  list.on("click" , (ev) => {
    var elem = ev.target;
    console.log("elemento cliccato",elem);
    $(elem).next('ul').toggleClass("collapsed");
    $(elem).next('ul').toggleClass("bg-grey");// elem.addClass('casaas');
  })
}



function openDropDownSubMenuOnClick(){
  var lista = $('#navbar-top li.dropdown-submenu');
  lista.on("click" , (ev)  => {
    event.stopPropagation();
    var elem = ev.target;
    console.log("subelemento cliccato",elem);
    $(elem).next('ul').toggleClass("collapsed");// elem.addClass('casaas');
  })
}


function changeNavbarPosition() {
      $(window).on("scroll" , function(){
        if(window.pageYOffset>560) {
          $("#product-nav").addClass("stick");
        } else {
          $("#product-nav").removeClass("stick");}
    })
}

function init(){

  // window.onscroll = changePos();

  changeNavbarPosition();


  console.log("Hello World");
  openNavbarOnClick();
  openDropDownMenuOnClick();
  openDropDownSubMenuOnClick();

}

$(document).ready(init);
