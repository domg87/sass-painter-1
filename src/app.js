const $ = require('jquery');

function openNavbarOnClick(){
    console.log("Click");
    $('#navbar').toggleClass('toggle');
}


function openNavbarMenuOnClick(){
  let list = $('#navbar-top li.parent-dropdown, #navbar-top li.dropdown-submenu');
  list.on("click" , (ev)  => {
    event.stopPropagation();
    let target = ev.target;
    $(target).next('ul').toggle();
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


function beforeAfterImageCarousel(m_pos,moving_bar){

  function resize(e){
      var parent = moving_bar.parentNode;
      var xDifference = e.x - m_pos;
      // console.log("m-pos : ",m_pos,"event.x : ",e.x);
      m_pos = e.x;
      parent.style.width = (parseInt(getComputedStyle(parent, '').width) + xDifference) + "px";
  }

  moving_bar.addEventListener("mousedown", function(e)
      {
        m_pos = e.x;
        document.addEventListener("mousemove", resize, false);
      }, false);

  moving_bar.addEventListener("mouseup", function()
      {
        document.removeEventListener("mousemove", resize, false);
      }, false);
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

  var m_pos;
  var moving_bar = document.getElementById("resize");

  beforeAfterImageCarousel(m_pos,moving_bar);

}


$(document).ready(init);
