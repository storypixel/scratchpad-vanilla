'use strict';
// Requirements

var SVG = require('./sam-svg.js');

// var _ = require('lodash');

// var TweenLite = require('../../bower_components/gsap/src/uncompressed/TweenLite.js');
// var TweenMax = require('../../bower_components/gsap/src/uncompressed/TweenMax.js');
// var TimelineLite = require('../../bower_components/gsap/src/uncompressed/TimelineLite.js');
// var TimelineMax = require('../../bower_components/gsap/src/uncompressed/TimelineMax.js');
// var CSSPlugin = require('../../bower_components/gsap/src/uncompressed/plugins/CSSPlugin.js');

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


var ConnectDots = class {
  constructor (howMany) {
    this.maxDots = howMany || 10;
    this.$dotStage = $('.all-dots');
    this.$lineStage = $('.all-lines');
    this.dots = [];
    this.lines = new Map();

    this.init();
  }

  //
  init () {
    this.dots = this.makeDots();
    // this.makeDotsInteraction();
    this.initLines();

    // Make some constellations
    for (var i = 0; i < 5; i++) {
      this.drawConstellation();
    }
  }

  makeDots () {
    var arr = [];

    for (var i = 0; i < this.maxDots; i++) {
      var l, t, $dot, dotData;

      l = Math.random() * 100;
      t = Math.random() * 100;

      $dot = $('<figure/>').appendTo(this.$dotStage);

      dotData = {
        'left': l,
        'top': t,
        unit: '%', // makes math easier later keeping this seperate
        instance: $dot,
        distance: undefined,
        preDots: new Map(), // dots which connect to this dot
        postDots: new Map(), // dots to which we connect from this dot
        id: i
      };

      $dot
        .addClass('dot')
        .addClass('dot-'+(i%10 + 1))
        .css({
          'left': dotData.left + dotData.unit,
          'top': dotData.top + dotData.unit
        });


      arr.push(dotData)

    }
    return arr;
    // console.log(this.dots)
  }

  initLines () {
    // somewhere to draw lines
    this.lineCanvas = SVG.createCanvas( '100%', '100%' , 'lines' );
    this.lines = new Map();
  }

  drawConstellation () {
    var thisDot = this.dots[Math.floor(Math.random()*this.dots.length)];

    var nextDot;

    nextDot = thisDot;

    var numLines = 3 + Math.floor(Math.random() * 10)

    for (var i = 0; i < numLines; i++) {

      // choose a hanful of nearby dots at random, then pick one
      var nearbyDots = this.getPossibleNeighbors(thisDot, 3);

      nextDot = nearbyDots[Math.floor(Math.random() * nearbyDots.length)];

      // success is true iff line didn't exist already
      var success = this.drawLineTo(thisDot, nextDot);

      thisDot = nextDot;
    }
  }

  drawLineTo (fromDot, toDot) {

    // check to see if line already exists
    if (toDot.preDots.get(fromDot) !== undefined) {
      // console.log('already exists')
      return false;
    }

    // draw a line
    var lineElement = SVG.createLine(fromDot.left + fromDot.unit, fromDot.top + fromDot.unit, toDot.left + fromDot.unit, toDot.top + fromDot.unit, 'pink', 1);

    lineElement.setAttribute('class', 'line');
    this.lineCanvas.appendChild( lineElement );

    fromDot.postDots.set(toDot, lineElement);
    toDot.preDots.set(fromDot, lineElement);

    return true;
  }

  getPossibleNeighbors (startingDot, howManyNeighbors) {
    // console.log(startingDot);
    this.dots = this.getDotsWithDistances(startingDot);
    return this.dots.sort(function(a, b) {
      // we need to filter out any results that already
      return parseFloat(a.distance) - parseFloat(b.distance);
    }).slice(1, howManyNeighbors + 1);
  }

  getDotsWithDistances (startingDot) {
    var dotsWithDistances = [];

    // add distance information to the dots
    dotsWithDistances = this.dots.map(function (dot) {
      var distance = Math.sqrt(Math.pow(startingDot.left - dot.left, 2) + Math.pow(startingDot.top - dot.top, 2));
      // console.log('distance is '+distance);

      return Object.assign(dot, {distance: distance});

    });

    return dotsWithDistances;
  }


}

document.addEventListener("DOMContentLoaded", function(event) {
  var dots = new ConnectDots(50);
});




// TweenLite.to(hi, 1, {opacity: .25, scale: 3});
