// A slider developed for radius
class MasSliderReveal {

  constructor(sel) {
    // start with $el as the root
    this.$el = $(sel);
    this.lasty = 0;
    if (this.$el.length === 0) {
      console.log('Oh no: root element '+sel+'  was empty, nothing with happen')
    }
    // console.log(this.$el.length);
    this.clicking = false;
    // the thing which the user tries to grab

    this.$fallback = this.$el.find('[data-ui-role="fallback"]');
    this.$handle = this.$el.find('[data-ui-role="handle"]');
    // the 'left' element
    this.$el1 = this.$el.find('[data-ui-role="to"]');
    // the 'right' element
    this.$el2 = this.$el.find('[data-ui-role="from"]');
    // console.log('this.$el2')
  }

  // Kick start event listening
  init() {
    this.$el.on('mousemove mousedown mouseup mouseleave mousecancel touchmove touchstart touchend touchcancel', (e) =>  {
      // console.log('yeah')
      let where = this.getCoordinatesOfEvent(e); // will return obj ..kind of {x:20,y:40}
      if (where && typeof where.x === "number") {
        this.update(where);
      } else {
        // console.log("invalid")
      }
    })
  }

  // Confine a positive number n between two numbers floor and ceil
  range (n, floor, ceil) {
    return Math.max(Math.min(n, ceil), floor);
  }

  // Update the UI based on drag behavior
  update (where) {
    let xpos = where.x;
    let width = this.$el.width();
    let pct = xpos/width * 100;
    // make first element as wide as it needs to be
    this.$handle.css({'left': this.range(pct, 0, 100) + '%'});

    // put the handle where it goes
    this.$el1.css({
      'right': this.range(100-pct, 0, 100) + '%'
    });

    this.$el2.css({
      'left':  this.range(pct, 0, 100) + '%',
      'text-indent': - this.range(xpos, 0, width) // can all browsers handle neg text indent?
    });
  }

  //
  getCoordinatesOfEvent(e) {
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
      // if (e.type == 'mouseleave' || e.type == 'mousecancel') {
      //   console.log(e.type);
      //   console.log(rel);
      // }

      if (e.type == 'mousedown') {
        this.clicking = true;
      }

      if (e.type == 'mouseleave') {
        // console.log('leaving');
        // console.log(this.lasty);
        let height = this.$el.height();
        let hpct = this.lasty/height;
        // console.log(hpct)
        // if person leaving div is within middle 90% let's ignore
        // because they probably dragged off the end in the direction
        // of the drag
        if (hpct > .1 && hpct < .9) {
        } else {
          this.clicking = false;
        }
      }

      if (e.type == 'mouseup' || e.type == 'mousecancel') {
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

    this.lasty = rel.y;

    return rel;
  }
}

// // Requirements
// function log(msg) {
//   var p = document.getElementById('log');
//   p.innerHTML = msg + "\n" + p.innerHTML;
// }


var masSliderReveal = new MasSliderReveal ('#test');
masSliderReveal.init();
