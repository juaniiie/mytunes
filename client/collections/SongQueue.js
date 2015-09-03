// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if(this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('remove', function() {
      if(this.length > 0) {
        this.playFirst();
      }
    }, this);
    this.on('removeFromQueue', function(song) {
      this.remove(song);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  enqueue: function(song) {
    this.push(song);
  },

  dequeue: function() {
    this.shift();
  }
});