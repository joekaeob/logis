Rfids = new Mongo.Collection('rfids');

Rfids.allow({
  //update: function(userId, post) { return ownsDocument(userId, post); },
  update: function(userId, post) { return !! userId; },
  remove: function(userId, post) { return !! userId; }
});
