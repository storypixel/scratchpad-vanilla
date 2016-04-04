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
var tl = new TimelineMax({repeat: -1, yoyo:true, repeatDelay:1});

// var tt3 = $('tt-1-body');
var tt3 = $('.ico-1');
var tubeLine = $('#tt-1-line');
var tubeLine2 = $('#tt-2-line');
var tubeLine3 = $('#tt-3-line');


tt3.mouseenter( function() {
         console.log('click on icon worked');
         TweenLite.to(tubeLine, 2,{
           y: -50,
           // transformOrigin:"left top",
           // scaleY:30,
           ease: Back.easeOut.config(1.7)});

           TweenLite.to(tubeLine2, 2, {
             y: -20,
             ease: Back.easeOut.config(1),
             // opacity: .5,
           });

           TweenLite.to(tubeLine3, 1, {
             y: 25,
             ease: Back.easeOut.config(2),
             // opacity: .5,
           });
});

tt3.mouseleave( function() {
  console.log('click on icon worked');
  TweenLite.to(tubeLine, 2,{
    scaleY: 0,
    ease: Back.easeOut.config(1.7)});

    TweenLite.to(tubeLine2, 2, {
      y: -5,
      ease: Back.easeOut.config(1),
      // opacity: .5,
    });

    TweenLite.to(tubeLine3, 1, {
      y: -5,
      ease: Back.easeOut.config(2),
      // opacity: .5,
    });
});



// tl.add(
// );
// tl.play();
