var Backbone = require('backbone');
var $ = require('jquery');
var Like = require('./models/like');

var like = new Like();

$('.myButton').on('click', function(){
  var storedValue = like.addLikes();
  $('.like').text(storedValue);
  var labelValue = like.toJSON();
  $('.likeLabel').text(labelValue.buttonLabel)
});
