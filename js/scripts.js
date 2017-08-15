$(document).ready(function () {
  $('#sentence').submit(function (event) {
    var originalSentence = $('#original-sentence').val();
    var sentenceArray = originalSentence.split("");
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var puzzleSentence = [];
    for (var i = 0; i < sentenceArray.length; i++) {
      var char = sentenceArray[i];
      if (vowels.includes(char)) {
        char = "-";
      }
      puzzleSentence.push(char);
    }
    var result = puzzleSentence.join('');
    alert(result);
  });
});
