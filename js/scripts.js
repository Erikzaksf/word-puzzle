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
    $(".results").append("<p>" + puzzleSentence + "</p>");
  });

  $("#sentence-guess").submit(function(event) {
    event.preventDefault();
    var userGuess = $("#user-guess").val();
    if (userGuess === originalSentence) {
      alert("Correct!");
    } else {
      alert("Please Try Again.");
    }
  });
});
