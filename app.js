var tmi = require('tmi.js');
var consts = require('./consts');

var options = {
	options: {
		debug: true
	},
	connection: {
		reconnect: true
	},
	identity: {
		username: "stormbot1000",
		password: consts.twitchPass
	},
	channels: ["stormhenry"]

}

var client = new tmi.client(options)
client.connect();

client.on("message", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Handle different message types..
    switch(userstate["message-type"]) {
        case "action":
            // This is an action message..
            break;
        case "chat":
            // This is a chat message..
            console.log(userstate);
            console.log("the message is" + message);
            var n = message.startsWith("!stormbot");
            console.log(n);

            if(n === true && message.trim() === "!stormbot no more"){
            	var nomore = "http://imgur.com/a/LZAmL";
            	client.say("stormhenry", nomore).catch((err) => {
            		console.log(err);
            	});
            	console.log("Do no more logic here");
            } else if (n === false) {
            	console.log(n);
            	console.log("This didnt start with the command we wanted")
            	}
            break;
            
            
        case "whisper":
            // This is a whisper..
            break;
        default:
            // Something else ?
            break;
    }
});