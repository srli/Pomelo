$(document).ready(function() {

$('.button').on('click', function(){
  toggleEmotion();
});

var emotions = [
  'smile',
  'oh',
  'square',
  'small-oh'
  ];

var $bmoFace = $('.bmo .face');

function toggleEmotion(){
  if (hasEmotion()){
    removeEmotions();
    return;
  }
  var emotion = emotions[Math.floor(Math.random() * (emotions.length))];
  $bmoFace.toggleClass(emotion);
}
function removeEmotions(){
  $bmoFace.removeClass(emotions.join(' '));
}
function getCurrentEmotions(){
  return $.map(emotions, function(e, i){
    console.log(e);
    if ($bmoFace.hasClass(e)){
      return e;
    }
  });
}
function hasEmotion(){
  return getCurrentEmotions().length > 0;
}
});