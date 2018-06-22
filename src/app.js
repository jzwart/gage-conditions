// require d3 (can only do this is d3 has been installed, `npm install d3`)
var d3 = require('d3');

// webpack import functions
import {load_dv_data} from './modules/data_loading';
import {add_circles} from './modules/circles';

// setup
var h = 200;
var w = 700;
var margin = {
  top: 20,
  bottom: 60,
  left: 60,
  right: 60
};
var plotwidth = w - margin.left - margin.right;
var plotheight = h - margin.top - margin.bottom;

// create an svg element
var svg = d3.select("body").select("#mainFig")
    .append("svg")
      .attr("id", "plotarea") // id == #plot in css, class == .plot in css
      .attr("width", w)
      .attr("height", h);
    
var dv_stats_data = load_dv_data();

Promise.all([dv_stats_data]).then(function(data) {
  add_circles(data[0]);
});
