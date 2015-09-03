// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },

  enqueue: function(song) {
    this.unshift(song);
  },

  dequeue: function() {
    this.pop();
  }
});