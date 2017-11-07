$(document).ready(function(){

  'use strict';
  $('#html-bar').barfiller({
   barColor:"#484848",
  });
  $('#css-bar').barfiller({
    barColor:"#484848",
  });
  $('#jquery-bar').barfiller({
    barColor:"#484848",
  });
  $('#javascript-bar').barfiller({
    barColor:"#484848",
  });
  $('#bootstrap-bar').barfiller({
    barColor:"#484848",
  });

//---------------------------
// init Isotope
$('.grid').isotope({
  layoutMode: 'fitRows',
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer',
  }
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
});




$('.carousel').carousel({
  interval: 3000
});

});

