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
		username: consts.twitchUsername,
		password: consts.twitchPass
	},
	channels: [consts.twitchChannel]

}

var client = new tmi.client(options)
client.connect();

var deaths = 0;
var beer = 0;



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
            // console.log(userstate);
            console.log("the message is" + message);
            //Starting message logic
            var n = message.startsWith("!");
            //Starting message logic end

            console.log(userstate);
            //Death count if statement
            if (userstate["display-name"] !== "stormbot1000") {
            	
           if(n === true && message.trim() === "!addDeath"){


           		//Function to add the a death to the counter
           		function addDeathCounter(val){
           			var qty = deaths;
           			var new_qty = parseInt(qty, 10) + val;
           			if (new_qty < 0) {
        				new_qty = 0;
   					 }
   					 deaths = new_qty;
    				return new_qty;
           		}
           		//Death counter function end
           		//The call for that function
           		addDeathCounter(1);

           		//Variable that is the saying that the bot will say
            	var deathsaying = "added, death count is now " + deaths;

            	// if(deaths <= 10){

            	// }

            	//Say method so the bot will actually take within the chat
            	client.say(consts.twitchChannel, deathsaying).catch((err) => {
            		console.log(err);
            	});
			}
			//END logic for death counter

            	 //Beer count if statement
           if(n === true && message.trim() === "!addBeer"){


           		//Function to add the a beer to the counter
           		function addBeerCounter(val){
           			var qty = beer;
           			var new_qty = parseInt(qty, 10) + val;
           			if (new_qty < 0) {
        				new_qty = 0;
   					 }
   					 beer = new_qty;
    				return new_qty;
           		}
           		
           		addBeerCounter(1);

           		//Variable that is the saying that the bot will say
            	var beersaying = "added, beer count is now " + beer;

            	// if(beers <= 10){

            	// }

            	//Say method so the bot will actually take within the chat
            	client.say(consts.twitchChannel, beersaying).catch((err) => {
            		console.log(err);
            	});
			}
			//END logic for beer counter

			//RESET DEATH
			if(n === true && message.trim() === "!resetDeaths"){
				if(deaths > 0){
				deaths = 0;
				var deathsaying = "reset, death count is now " + deaths;
				client.say(consts.twitchChannel, deathsaying).catch((err) => {
            	console.log(err);
            	});
			} else if (deaths === 0){
				client.say("stormhenry", "The death counter is already 0").catch((err) => {
            	console.log(err);
            	});
           		
            	}

			}
			//RESET BEER
			if(n === true && message.trim() === "!resetBeers"){
				if(beer > 0){
				beer = 0;
				var beersaying = "reset, beer count is now " + beer;
				client.say(consts.twitchChannel, beersaying).catch((err) => {
            	console.log(err);
            	});
			} else if (beer === 0){
				client.say(consts.twitchChannel, "The beer counter is already 0").catch((err) => {
            	console.log(err);
            	});
           		
            	}

			}
		


				//All saying logic... Gotta think of more
				if(n === true && message.trim() === "!noMore"){
            	var nomore = "http://imgur.com/a/LZAmL";
            	client.say(consts.twitchChannel, nomore).catch((err) => {
            		console.log(err);
            	});
            }

            	if(n === true && message.trim() === "!snuSnu"){
            	var snusnu = "http://imgur.com/a/owCFP";
            	client.say(consts.twitchChannel, snusnu).catch((err) => {
            		console.log(err);
            	});
            }

            	if(n === true && message.trim() === "!youreKillingMe"){
            	var killingme = "https://youtu.be/0toEKn3vKDU";
            	client.say(consts.twitchChannel, killingme).catch((err) => {
            		console.log(err);
            	});
            }
            	if(n === true && message.trim() === "!salty"){
            	var salty = "http://imgur.com/mkvxPA6";
            	client.say(consts.twitchChannel, salty).catch((err) => {
            		console.log(err);
            	});
            }
            	if(n === true && message.trim() === "!help"){
            	var message = "Goto this link to find a list of commands: https://pastebin.com/raw/vBRu1NSa";
            	client.say(consts.twitchChannel, message).catch((err) => {
            		console.log(err);
            	});
            }
            	if(n === true && message.trim() === "!about"){
            	var message = "I'm a bot Storm wrote for his channel. You may ask why no night bot? Because he can write a bot so he did";
            	client.say(consts.twitchChannel, message).catch((err) => {
            		console.log(err);
            	});
            }
            	if(n === true && message.trim() === "!re4pb"){
            	var message = "Storm's pb at Resident evil 4 is";
            	client.say(consts.twitchChannel, message).catch((err) => {
            		console.log(err);
            	});

            } else if (n === false) {
            	console.log("This didnt start with the command we wanted")
            	}

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


//What commands do you want
//-Side note, remember the stream labs
//- You need to cut the part from Lucy so you have a clip of "Look at these poor fucks" etc for when you play killer
//- re4central link
//- About the re4 community 
//- And how you are no longer an active member
//- Create a function that can deactivate the counters if you arent using them


//you need to still update the pastebin










