var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [ "#Dragons",
                    "#Trolls",
                    "The gunslinger walks into a bar,"
                    "waffles are everywhere."
                    "Roll your D20 dice.
                    "player throws dice",
                    "One group member starts playing music"
                    "Maybe this will help distract him."
                  ];

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);

Bot.tweet(phrase);
