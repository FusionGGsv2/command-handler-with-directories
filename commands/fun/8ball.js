const Discord = require("discord.js");
function doMagic8BallVoodoo() {
  var rand = [
    "Yes",
    "No",
    "Why are you even trying?",
    "What do you think? NO",
    "Maybe",
    "Never",
    "Yep",
    "idk"
  ];

  return rand[Math.floor(Math.random() * rand.length)];
}

module.exports= {
name: "8ball",
  category: "Fun",
  descritpion: "ask 8ball a question and see what its answer is",
run: async (client, message, args) => {
  if(!message.content.startsWith('!'))return;   
  if(!args[0]) return message.channel.send("Please ask me question first to access to this command.")
  message.channel.send("My anwser is: " + doMagic8BallVoodoo());
}}

module.exports.help = {
    name: "8ball",
    description: "This command is used for asking the bot what he wanted to answer as 8ball.",
		    aliases: []
}