$(document).ready(function(){ $('.myslick').slick({ centerPadding: '50px'  });  });
$('.autoplay').slick({ slidesToShow: 3,  slidesToScroll: 1,  autoplay: true,  autoplaySpeed: 2000,});
$('.lazy').slick({lazyLoad: 'ondemand', slidesToShow: 3, slidesToScroll: 1});