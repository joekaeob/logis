// Fixture data
if (Rfids.find().count() === 0) {
  var now = new Date().getTime();
  
  Rfids.insert({
    rfid: '900833B2DDD9014000000001',
    timestamp: new Date(now * 3600 * 1000),
    status: true
  });
}