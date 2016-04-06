'use strict';

var SVG = {
  createCanvas: function ( width, height, containerId ) {
    var container = document.getElementById( containerId );
    var canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    container.appendChild( canvas );
    return canvas;
  },

  createLine: function (x1, y1, x2, y2, color, w)  {
    var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    aLine.setAttribute('x1', x1);
    aLine.setAttribute('y1', y1);
    aLine.setAttribute('x2', x2);
    aLine.setAttribute('y2', y2);
    aLine.setAttribute('stroke', color || 'none');
    aLine.setAttribute('stroke-width', w || 3);
    return aLine;
  }
}

module.exports = SVG
