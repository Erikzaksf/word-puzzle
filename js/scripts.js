$(document).ready(function () {
  var originalSentence = "";
  var puzzleSentence = "";

  $('#sentence').submit(function (event) {
    event.preventDefault();
    originalSentence = $('#original-sentence').val();
    var sentenceArray = originalSentence.split("");
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var puzzleSentenceArray = [];
    for (var i = 0; i < sentenceArray.length; i++) {
      var char = sentenceArray[i];
      if (vowels.includes(char)) {
        char = "-";
      }
      puzzleSentenceArray.push(char);
    }
    puzzleSentence = puzzleSentenceArray.join('');
    $("#sentence").hide();
    $("#sentence-guess").show();
    $(".results").append("<p>" + puzzleSentence + "</p>");
  });

  $("#sentence-guess").submit(function(event) {
    event.preventDefault();
    $("#wrong-answer").remove();
    var userGuess = $("#user-guess").val();
    if (userGuess === originalSentence) {
      $(".results").empty();
      $(".results").append("<p>Correct!</p>");
      $(".results").append("<p>Original Sentence: " + originalSentence + "</p>");
      $(".results").addClass("alert alert-success");
    } else {
      $("#user-guess").addClass("is-invalid");
      $(".results").append("<p id='wrong-answer'>Please Try Again</p>");
      $("#wrong-answer").addClass("alert alert-danger");
    }
  });

  $("#user-guess").focus(function() {
      $("#user-guess").removeClass("is-invalid");
  });
});
