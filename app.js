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
//
            
			var deaths = 0;
           if(n === true && message.trim() === "!stormbot add death"){

           		function addDeathCounter(val){
           			var qty = deaths;
           			var new_qty = parseInt(qty, 10) + val;
           			if (new_qty < 0) {
        				new_qty = 0;
   					 }
   					 deaths = new_qty;
    				return new_qty;
           		}
           		addDeathCounter(1);
            	console.log(deaths);
            	var deathsaying = "added, death count is now " + deaths;
            	console.log("Logic to get add death working... now function time")
            	client.say("stormhenry", deathsaying).catch((err) => {
            		console.log(err);
            	});
}
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

