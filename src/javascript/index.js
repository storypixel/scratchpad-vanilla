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

// [left, top] positions
var dpos = [[0, 0], [25, 0], [50, 0], [75, 0], [100, 0], [100, 25], [100, 50], [100, 75], [100, 100], [75, 100], [50, 100], [25, 100], [0, 100], [0, 75], [0, 50], [0, 25]];

TweenLite.to($('.dancer'), 20, { rotation: 360 * 2 });

dpos.forEach(function (el, i) {
  var leftv = el[0] + '%';
  var topv = el[1] + '%';
  var kolor = "hsl(" + i * 20 % 360 + ", 100%, 50%)";
  TweenLite.to($('.dancer--' + (i % dpos.length + 1)), 1, { delay: i * .25, opacity: 1, width: '1vw', height: '1vw', left: leftv, top: topv, 'background-color': kolor, 'border-radius': '50%' });
});
