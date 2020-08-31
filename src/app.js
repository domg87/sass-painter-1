const $ = require('jquery');

function openNavbarOnClick(){
    console.log("Click");
    $('#navbar').toggleClass('toggle');
}


function openNavbarMenuOnClick(){
  var list = $('#navbar-top li.parent-dropdown, #navbar-top li.dropdown-submenu');
  list.on("click" , (ev)  => {
    event.stopPropagation();
    var elem = ev.target;
    $(elem).next('ul').toggle();

      // $(elem).next('ul').toggleClass("collapsed");


    // $(elem).next('ul').toggleClass("bg-grey");
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

  // var imgFirst = $('li:first-of-type');
  // var imgLast = $('li:last-of-type');

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

// MAIN FUNCTION-----------------------------------------------------
function init(){
  console.log("Hello World");

  changeNavbarPosition();

  var navBtn = $('#navBtn');
  navBtn.click(openNavbarOnClick);


  openNavbarMenuOnClick();



  var nextBtn= $('#transition-carousel .controls >i#next');
  var prevBtn = $('#transition-carousel .controls >i#prev');

  nextBtn.click(carouselNextImage);
  prevBtn.click(carouselPrevImage);


}

$(document).ready(init);
