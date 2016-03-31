var Backbone = require('backbone');
var $ = require('jquery');

var Like = Backbone.Model.extend({ // ... like: function() { // do some stuff } });

  defaults: {
    'likes': 0,
    'buttonLabel': 'Like'
  },

  initialize: function(){
    $('.like').text('0');
    $('.likeLabel').text('Likes');
  },

  addLikes: function(){
    this.set({'likes': this.get('likes') + 1});
    //console.log(this.get('likes'));
    return this.get('likes');
  },

  toJSON: function(){
    if (this.get('likes') != 1){
    this.set('buttonLabel', 'Likes');
    }
    // return toJSON original functionality
    return Backbone.Model.prototype.toJSON.call(this);
  }

});

module.exports = Like;
