

  
  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  
  
  
  $('body').scrollspy({target:".navbar"});
  
  
  
  
  var html_body = $('html, body');
  $('nav a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 0
              }, 1200, );
              return false;
          }
      }
  });
  
  
  
  
  /*==================================================
                banner part start
==================================================*/


$('#html').LineProgressbar({
  percentage:90,
  radius: '3px',
  height: '15px',
  fillBackgroundColor: '#f3b969'
  });
  $('#php').LineProgressbar({
  percentage:80,
  radius: '3px',
  height: '15px',
  fillBackgroundColor: '#f3b969'
  });
  $('#python').LineProgressbar({
  percentage:70,
  radius: '3px',
  height: '15px',
  fillBackgroundColor: '#f3b969'
  });


  $('.circlechart').circlechart();


var typed = new Typed('.element', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
      'Web Designer',
      'Web Developer',
      'IOS Developer',
    ],
    stringsElement: null,
    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 100,
  
    /**
     * @property {number} startDelay time before typing starts in milliseconds
     */
    startDelay: 100,
  
    /**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
    backSpeed: 100,
  
    /**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
    smartBackspace: true,
  
    /**
     * @property {boolean} shuffle shuffle the strings
     */
    shuffle: false,
  
    /**
     * @property {number} backDelay time before backspacing in milliseconds
     */
    backDelay: 700,
  
    /**
     * @property {boolean} fadeOut Fade out instead of backspace
     * @property {string} fadeOutClass css class for fade animation
     * @property {boolean} fadeOutDelay Fade out delay in milliseconds
     */
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
  
    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: true,
    loopCount: Infinity,
  
    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: false,
    cursorChar: '|',
    autoInsertCss: true,
  
    /**
     * @property {string} attr attribute for typing
     * Ex: input placeholder, value, or just HTML text
     */
    attr: null,
  
    /**
     * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
     */
    bindInputFocusEvents: false,
  
    /**
     * @property {string} contentType 'html' or 'null' for plaintext
     */
    contentType: 'html',
  
    /**
     * Before it begins typing
     * @param {Typed} self
     */
    onBegin: (self) => {},
  
    /**
     * All typing is complete
     * @param {Typed} self
     */
    onComplete: (self) => {},
  
    /**
     * Before each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    preStringTyped: (arrayPos, self) => {},
  
    /**
     * After each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStringTyped: (arrayPos, self) => {},
  
    /**
     * During looping, after last string is typed
     * @param {Typed} self
     */
    onLastStringBackspaced: (self) => {},
  
    /**
     * Typing has been stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingPaused: (arrayPos, self) => {},
  
    /**
     * Typing has been started after being stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingResumed: (arrayPos, self) => {},
  
    /**
     * After reset
     * @param {Typed} self
     */
    onReset: (self) => {},
  
    /**
     * After stop
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStop: (arrayPos, self) => {},
  
    /**
     * After start
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStart: (arrayPos, self) => {},
  
    /**
     * After destroy
     * @param {Typed} self
     */
    onDestroy: (self) => {}
  });

/*==================================================
                banner part ends
==================================================*/ 





/*==================================================
                about part start
==================================================*/
$('.client-member').slick({
  dots: true,
  infinite: false,
  speed: 300,
  arrows:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
/*==================================================
                about part ends
==================================================*/





/*==================================================
                portfolio part start
==================================================*/
var mixer = mixitup('.mixit');
/*==================================================
                portfolio part ends
==================================================*/





/*==================================================
                venu part start
==================================================*/
$('.venobox').venobox(); 
/*==================================================
                venu part ends
==================================================*/




/*==================================================
                about part start
==================================================*/
$('.team-member').slick({
  dots: true,
  infinite: false,
  speed: 300,
  arrows:false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
/*==================================================
                about part ends
==================================================*/



$offset = $('.navbar').offset().top;


$(window).scroll(function(){
  $scrolling = $(this).scrollTop();
  if($scrolling > $offset){
    $('.navbar').addClass('nav-fixed');
  }
  else{
    $('.navbar').removeClass('nav-fixed');
  }
  if($scrolling > 1000){
    $('#back-to').fadeIn();
  }
  else{
    $('#back-to').fadeOut();
  }
})

$('#back-to').click(function(){
  $('html').animate({
    scrollTop:0,
  },1200)
})