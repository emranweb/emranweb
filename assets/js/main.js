$(document).ready(function () {

  'use strict';

  //progressbar
  $('#html-bar').barfiller({
    barColor: "#484848",
  });
  $('#css-bar').barfiller({
    barColor: "#484848",
  });
  $('#jquery-bar').barfiller({
    barColor: "#484848",
  });
  $('#javascript-bar').barfiller({
    barColor: "#484848",
  });
  $('#bootstrap-bar').barfiller({
    barColor: "#484848",
  });

  //---------------------------

  //Isotope  Plugin
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-sizer'
    }
  });

  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({
      filter: filterValue
    });
  });


  // Bootstrap Carousel interval
  $('.carousel').carousel({
    interval: 3000
  });

  //Scroll top 
  $(document).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("bg-change")
    } else {
      $(".navbar").removeClass('bg-change')
    }
  });


  //wow animation

  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  });
  wow.init();


});