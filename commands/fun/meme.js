const randomPuppy = require("random-puppy");
const Discord = require("discord.js");

module.exports = {
  name: "meme",
    category: "Fun",
  description: "get a random meme",
  async run(client, message, args) {
    if(!message.content.startsWith('!'))return;   
    const subReddits = ["dankmemes", "meme", "memes"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);

    const memeEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setTitle(`Your meme. From r/${random}`)
      .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(memeEmbed);
  }
};

module.exports.help = {
  name: "meme",
  description: "get a random meme!",
  aliases: []
};