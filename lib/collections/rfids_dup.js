RfidsDup = new Mongo.Collection('rfids_dup');

RfidsDup.allow({
  update: function(userId, post) { return !! userId; },
  remove: function(userId, post) { return !! userId; }
});
