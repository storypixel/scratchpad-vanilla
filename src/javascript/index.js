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

var element = $('#hi');
TweenLite.to(hi, 1, {opacity: .25, scale: 3});
