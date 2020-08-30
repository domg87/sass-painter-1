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


function carouselNextImage(){
  var imgActive =  $('#transition-carousel > div.image > ul > li.active');
  var imgFirst = $('li[data-id = 0]');
  var imgLast = $('li[data-id = 3]');

    if ( imgActive.data() === imgLast.data()  ) {
    imgFirst.addClass('active');
      imgActive.removeClass('active');
    }
    else{
      imgActive.next().addClass('active');
      imgActive.removeClass('active');
    }
}


function carouselPrevImage(){
  var imgActive =  $('#transition-carousel > div.image > ul > li.active');
  var imgFirst = $('li[data-id = 0]');
  var imgLast = $('li[data-id = 3]');

    if ( imgActive.data() === imgFirst.data()  ) {
    imgLast.addClass('active');
      imgActive.removeClass('active');
    }
    else{
      imgActive.prev().addClass('active');
      imgActive.removeClass('active');
    }
}

function init(){

  changeNavbarPosition();

  console.log("Hello World");
  openNavbarOnClick();
  openDropDownMenuOnClick();
  openDropDownSubMenuOnClick();


  var nextBtn= $('#transition-carousel .controls >i#next');
  var prevBtn = $('#transition-carousel .controls >i#prev');

  nextBtn.click(carouselNextImage);
  prevBtn.click(carouselPrevImage);


}

$(document).ready(init);
