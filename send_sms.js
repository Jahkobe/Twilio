
const client = require('twilio')(accountSid, authToken);

var productiveStuff = ["Its time to do a coding challenge!", "Lets go on a run!", "Maybe you should give you parents a call.", "Lets play fetch with the dog!"];

client.messages
  .create({
     body: productiveStuff[Math.floor(Math.random() * productiveStuff.length)],
     from: '+fromnum',
     to: '+yournum'
   })
  .then(message => console.log(message.sid));