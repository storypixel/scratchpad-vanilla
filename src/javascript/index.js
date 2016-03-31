// Requirements

var TweenLite = require('../../bower_components/gsap/src/uncompressed/TweenLite.js');
var TweenMax = require('../../bower_components/gsap/src/uncompressed/TweenMax.js');
var TimelineLite = require('../../bower_components/gsap/src/uncompressed/TimelineLite.js');
var TimelineMax = require('../../bower_components/gsap/src/uncompressed/TimelineMax.js');
var CSSPlugin = require('../../bower_components/gsap/src/uncompressed/plugins/CSSPlugin.js');

var CSSPlugin = require('https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ColorPropsPlugin.min.js');
//
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

var tl = new TimelineMax({
  repeat:-1,
  repeatDelay: .5,
  yoyo: true
});

var block1 = $('#wave-1');
var block2 = $('#wave-2');
var block3 = $('#inner');
var block4 = $('#circles');


tl.add(
  TweenLite.to(block1, 2, {
    transformOrigin: "50% 50%",
rotation: 360,
    ease: Bounce.easeInOut,
    opacity: .5,
    })
);

tl.add(
  TweenLite.to(block2, 2, {
    transformOrigin: "50% 50%",
    rotation: -360,
    ease: Elastic.easeInOut,
    opacity: .25,
  })
);

tl.add(
  TweenLite.to(block3, 3, {
    transformOrigin: "50% 50%",
    scale: -100,
    ease: Power1.easeInOut,
    opacity: .25,
  })
);

tl.add(
  TweenLite.to(block4, 4, {
    rotation: 360,
    transformOrigin: "50% 50%",
    ease: Power2.easeInOut,
    opacity: .1
  })
);

tl.play();
