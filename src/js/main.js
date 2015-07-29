// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var ich = require("icanhaz");
var $ = document.querySelector.bind(document);
var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));

var resultsTemplate = require("./_resultsTemplate.html");
ich.addTemplate("resultsTemplate", resultsTemplate);

var score = 0;
var id = 0;
var quizLength = Object.keys(quizData).length;
var width = $(".outer").offsetWidth - 26;
var increment = width / (quizLength - 1);
var leftMargin = increment;

document.querySelectorAll(".answer")

qsa(".answer").forEach(function(el) {
  el.addEventListener("click", function(e) {
    var answer = e.target.innerHTML;
    if (answer == "yes") { score += 1 }

    if ((id + 1) < quizLength) {
      id += 1;
      showQuestion(id);
    } else {
      var obj = {score: score};
      if (score < 5) {
        obj.green = true;
      } else if (score < 11) {
        obj.yellow = true;
      } else {
        obj.red = true;
      }
      $(".question").innerHTML = ich.resultsTemplate(obj);
      $(".index").innerHTML = "Results";
      $(".yes").classList.add("hidden");
      $(".no").classList.add("hidden");
    }
  });
});
  
var showQuestion = function(id) {
  $(".stand").classList.remove("ing");
  $(".walk").classList.add("ing");
  $(".dot").style.left = leftMargin + "px";
  leftMargin += increment;
  $(".question").innerHTML = quizData[id].question;
  $(".index").innerHTML = (id + 1) + " of " + quizLength;
  setTimeout(function() {
    $(".stand").classList.add("ing");
    $(".walk").classList.remove("ing");
  }, 700);
};

$(".question").innerHTML = quizData[id].question;
$(".index").innerHTML = (id + 1) + " of " + quizLength;