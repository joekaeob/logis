Template.postsList.helpers({

  sys_time: function() {
	Session.setDefault('sys_time', new Date);
  },

  rfids: function() {
	return Rfids.find({timestamp:{ $gte: Session.get('sys_time')}}, {sort:{timestamp:-1}});
  },

  rfids_count: function() {
	return Rfids.find({timestamp:{ $gte: Session.get('sys_time')}}).count();
  },

  rfids_dup: function() {
    return RfidsDup.find({timestamp:{ $gte: Session.get('sys_time')}});
  },

  rfids_dup_count: function() {
    return RfidsDup.find({timestamp:{ $gte: Session.get('sys_time')}}).count();
  },

  //Find different time between duplicate RFID: in case that the different time is less than 8 sec, it means that item sill struct in the  gate.
  rfids_dup_display : function(ref, rfid){
	var diff = (ref.getTime() - Rfids.findOne({rfid:rfid}).timestamp.getTime())/1000;
	console.log(diff);
	if(diff < 8){
		RfidsDup.remove(RfidsDup.findOne({rfid:rfid})._id);
		return false;
	}else{
		return true;
	}
  }

});