// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var template = require("./lib/dot").compile(require("./_card.html"));
var $ = require("./lib/qsa");

var shuffle = require("lodash.shuffle");
var strings = require("./strings.txt").split("\n").filter(s => s);

var makeCard = function() {
  var selected = shuffle(strings).slice(0, 24);

  document.querySelector(".card-container").innerHTML = template(selected);

  $(".cell:not(.free)").forEach(el => el.addEventListener("click", function() { this.classList.toggle("tapped") }));
};

makeCard();
document.querySelector(".reshuffle").addEventListener("click", makeCard);