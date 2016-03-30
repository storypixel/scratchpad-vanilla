// Requirements

var TweenLite = require('../../bower_components/gsap/src/uncompressed/TweenLite.js');
var TweenMax = require('../../bower_components/gsap/src/uncompressed/TweenMax.js');
var TimelineLite = require('../../bower_components/gsap/src/uncompressed/TimelineLite.js');
var TimelineMax = require('../../bower_components/gsap/src/uncompressed/TimelineMax.js');
var CSSPlugin = require('../../bower_components/gsap/src/uncompressed/plugins/CSSPlugin.js');

// Animating code
// see http://greensock.com/forums/topic/8370-gsap-demos-snippets-pens/
// see https://greensock.com/jump-start-js#basic-tween
// see https://ihatetomatoes.net/simple-greensock-tutorial-your-first-steps-with-gsap/
//
// var element = $('.obj');
//
// var tl = new TimelineMax({repeat:2, repeatDelay:1});
// tl.add( TweenLite.to(element, 1, {left:100}) );
// tl.add( TweenLite.to(element, 1, {top:50}) );
// tl.add( TweenLite.to(element, 1, {opacity:0}) );
//
// //then later, control the whole thing...
// tl.play();

var randomNum = Math.floor((Math.random() * 1000) + 1);
var tl = new TimelineMax({repeat:2, repeatDelay:1});

var block1 = $('#block1');
var block2 = $('#block2');
var block3 = $('#block3');
var block4 = $('#block4');


tl.add(
TweenLite.to(block1, 2, {
  x: 900,
  y: 900,
  ease: Power1.easeInOut,
  // opacity: .5,
  })
);

tl.add(
TweenLite.to(block2, 2, {
  x: -900,
  y: 900,
  ease: Power1.easeInOut,
  // opacity: .25,
  })
);

tl.add(
TweenLite.to(block3, 3, {
  x: 500,
  y: -900,
  ease: Power1.easeInOut,
  // opacity: .25,
  })
);

tl.add(
TweenLite.to(block4, 4, {
  y: -900,
  ease: Power2.easeInOut,
  // opacity: .25,
  })
);

  tl.play();
