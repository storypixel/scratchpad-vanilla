
class MasSliderReveal {

  constructor(sel) {
    // start with $el as the root
    this.$el = $(sel);
    if (this.$el.length === 0) {
      console.log('root element '+sel+'  was empty, nothing with happen')
    }
    console.log(this.$el.length);
    this.clicking = false;
    // the thing which the user tries to grab
    this.$handle = this.$el.find('[data-ui-role="handle"]');
    // the 'left' element
    this.$el1 = this.$el.find('[data-ui-role="to"]');
    // the 'right' element
    this.$el2 = this.$el.find('[data-ui-role="from"]');
    // console.log('this.$el2')
  }

  init() {
    this.$el.on('mousemove mousedown mouseup mousecancel touchmove touchstart touchend touchcancel', (e) =>  {
      console.log('yeah')
      let where = this.pointerEventToXY(e); // will return obj ..kind of {x:20,y:40}
      this.update(where);
    })
  }

  update (where) {
    let xpos = where.x;
    let width = this.$el.width();
    let pct = xpos/width * 100;
    // make first element as wide as it needs to be
    this.$handle.css({'left': pct + '%'});

    // put the handle where it goes
    this.$el1.css({
      'right': 100-pct + '%'
    });

    this.$el2.css({
      'left':  pct + '%',
      'text-indent': - pct + '%' // can all browsers handle neg text indent?
    });
  }

  //
  pointerEventToXY(e) {
    // console.log(e);
    // var out = {x:0, y:0};
    var rel = {x:0, y:0};

    if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      // out.x = touch.pageX;
      // out.y = touch.pageY;
      rel.x = touch.pageX;
      rel.y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave' || e.type == 'mousecancel') {
      // console.log(this.clicking);

      if (e.type == 'mousedown') {
        this.clicking = true;
      }

      if (e.type == 'mouseup') {
        this.clicking = false;
      }

      if (e.type == 'mousecancel') {
        console.log('mouse is cancelled')
        this.clicking = false;
      }


      if (e.type == 'mousemove') {
        if(this.clicking == false) return;
      }

      // if we're gotten this far it means
      // 1. mouse is dragging across the surface of the el
      // out.x = e.pageX;
      // out.y = e.pageY;
      rel.x = e.offsetX;
      rel.y = e.offsetY;

    }
    console.log(rel);
    return rel;
  }
}

// Requirements
function log(msg) {
  var p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}


// var TweenLite = require('../../bower_components/gsap/src/uncompressed/TweenLite.js');
// var TweenMax = require('../../bower_components/gsap/src/uncompressed/TweenMax.js');
// var TimelineLite = require('../../bower_components/gsap/src/uncompressed/TimelineLite.js');
// var TimelineMax = require('../../bower_components/gsap/src/uncompressed/TimelineMax.js');
// var CSSPlugin = require('../../bower_components/gsap/src/uncompressed/plugins/CSSPlugin.js');
//
// var ongoingTouches = new Array();
//
// function startup() {
//   var el = document.getElementsByTagName("figure")[0];
//   el.addEventListener("touchstart", handleStart, false);
//   el.addEventListener("touchend", handleEnd, false);
//   el.addEventListener("touchcancel", handleCancel, false);
//   el.addEventListener("touchmove", handleMove, false);
//   el.addEventListener("mousedown", handleMove, false);
//   el.addEventListener("mouseup", handleEnd, false);
//   log("initialized.");
// }
//
// function handleStart(evt) {
//   evt.preventDefault();
//   log("touchstart.");
//   var el = document.getElementsByTagName("figure")[0];
//   // var ctx = el.getContext("2d");
//   var touches = evt.changedTouches;
//
//   for (var i = 0; i < touches.length; i++) {
//     log("touchstart:" + i + "...");
//     ongoingTouches.push(copyTouch(touches[i]));
//     var color = colorForTouch(touches[i]);
//     // ctx.beginPath();
//     // ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
//     // ctx.fillStyle = color;
//     // ctx.fill();
//     log("touchstart:" + i + ".");
//   }
// }
//
// function handleMove(evt) {
//   evt.preventDefault();
//   var el = document.getElementsByTagName("figure")[0];
//   // var ctx = el.getContext("2d");
//   var touches = evt.changedTouches;
//
//   for (var i = 0; i < touches.length; i++) {
//     var color = colorForTouch(touches[i]);
//     var idx = ongoingTouchIndexById(touches[i].identifier);
//
//     if (idx >= 0) {
//       log("continuing touch "+idx);
//       // ctx.beginPath();
//       log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
//       // ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
//       log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
//       // ctx.lineTo(touches[i].pageX, touches[i].pageY);
//       // ctx.lineWidth = 4;
//       // ctx.strokeStyle = color;
//       // ctx.stroke();
//
//       ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
//       log(".");
//     } else {
//       log("can't figure out which touch to continue");
//     }
//   }
// }
//
// function handleEnd(evt) {
//   evt.preventDefault();
//   log("touchend");
//   var el = document.getElementsByTagName("figure")[0];
//   // var ctx = el.getContext("2d");
//   var touches = evt.changedTouches;
//   console.log(evt);
//
//   for (var i = 0; i < touches.length; i++) {
//     var color = colorForTouch(touches[i]);
//     var idx = ongoingTouchIndexById(touches[i].identifier);
//
//     if (idx >= 0) {
//       // ctx.lineWidth = 4;
//       // ctx.fillStyle = color;
//       // ctx.beginPath();
//       // ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
//       // ctx.lineTo(touches[i].pageX, touches[i].pageY);
//       // ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
//       ongoingTouches.splice(idx, 1);  // remove it; we're done
//     } else {
//       log("can't figure out which touch to end");
//     }
//   }
// }
//
// function colorForTouch(touch) {
//   var r = touch.identifier % 16;
//   var g = Math.floor(touch.identifier / 3) % 16;
//   var b = Math.floor(touch.identifier / 7) % 16;
//   r = r.toString(16); // make it a hex digit
//   g = g.toString(16); // make it a hex digit
//   b = b.toString(16); // make it a hex digit
//   var color = "#" + r + g + b;
//   log("color for touch with identifier " + touch.identifier + " = " + color);
//   return color;
// }
//
// function handleCancel(evt) {
//   evt.preventDefault();
//   log("touchcancel.");
//   var touches = evt.changedTouches;
//
//   for (var i = 0; i < touches.length; i++) {
//     ongoingTouches.splice(i, 1);  // remove it; we're done
//   }
// }
//
// function copyTouch(touch) {
//   return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
// }
//
// function ongoingTouchIndexById(idToFind) {
//   for (var i = 0; i < ongoingTouches.length; i++) {
//     var id = ongoingTouches[i].identifier;
//
//     if (id == idToFind) {
//       return i;
//     }
//   }
//   return -1;    // not found
// }
//
//
// startup();

var masSliderReveal = new MasSliderReveal ('#test');
masSliderReveal.init();
