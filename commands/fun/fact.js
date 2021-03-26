const { MessageEmbed } = require("discord.js");
const Random = require("srod-v2");

module.exports = {
  name: "fact",
    category: "Fun",
  description: "Sending random fact",
  run: async (bot, message, args) => {
    if(!message.content.startsWith('!'))return;   
    let Fact = await Random.GetFact("BLUE");
    message.channel.send(Fact);
  },
};