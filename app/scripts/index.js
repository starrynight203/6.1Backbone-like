var Backbone = require('backbone');
var $ = require('jquery');

var Like = Backbone.Model.extend({ // ... like: function() { // do some stuff } });
  initialize: function(){
    $('.like').text('0 likes');
  },
  addLikes: function(){
    this.set({'likes': this.get('likes') + 1});
    //console.log(this.get('likes'));
    return this.get('likes');
  }
});

var like = new Like({'likes': 0});


$('.like').on('click', function(){
  var storedValue = like.addLikes();
  $('.like').text(storedValue + ' likes');
})
