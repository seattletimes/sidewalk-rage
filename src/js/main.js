// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var $ = document.querySelector.bind(document);
var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));

var score = 0;
var id = 0;
var leftMargin = 0;
var quizLength = Object.keys(quizData).length;
var width = $(".outer").offsetWidth;
var increment = width / (quizLength - 1);

document.querySelectorAll(".answer")

qsa(".answer").forEach(function(el) {
  el.addEventListener("click", function(e) {
    var answer = e.target.innerHTML;
    if (answer == "yes") { score += 1 }

    if ((id + 1) < quizLength) {
      id += 1;
      showQuestion(id);
    } else {
      $(".question").innerHTML = require("./resultsText")(score);
      $(".index").innerHTML = "Results";
      $(".yes").classList.add("hidden");
      $(".no").classList.add("hidden");
      $(".dot-box").classList.add("hidden");
    }
  });
});
  
var showQuestion = function(id) {
  $(".question").innerHTML = quizData[id].question;
  $(".index").innerHTML = (id + 1) + " of " + quizLength;
  $(".dot").style.left = leftMargin + "px";
  leftMargin += increment;
};

showQuestion(id);