Meteor.publish('rfids', function() {
  return Rfids.find();
});

Meteor.publish('rfids_dup', function() {
  return RfidsDup.find({status:true});
});