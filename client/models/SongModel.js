// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // the play method
  // of a song instance 
  // is only called by
  // a click on any
  // one libraryEntryView
  // instance.

  // At least in the library
  // songs collection,
  // songModels have three
  // instance properties:
  //    url:
  //    title:
  //    artist:

  play: function() {
    // Triggering the event from here
    // will trigger the play event in
    // the collection that the song
    // belongs to. For example,
    // triggering play from one of
    // the songs in the library will
    // trigger the play listener in
    // AppModel
    this.trigger('play', this);
  }, 

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});
