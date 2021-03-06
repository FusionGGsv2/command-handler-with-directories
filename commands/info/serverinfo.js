
const Discord = require('discord.js')
const moment = require('moment');

module.exports =   {
name: "serverinfo",
 category: "Info",
  description: "get all the servers info",
   run: async(client, message, args) => {
if(!message.content.startsWith('!'))return; 
        // Variables
        const then = moment(message.guild.createdAt);
        const time = then.from(moment());
        const ca = then.format("MMM Do, YYYY");

    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setAuthor(`${message.guild.name} \| ID: ${message.guild.id}`, message.guild.iconURL())
      .setThumbnail(message.guild.iconURL())
      .addField('**Owner**', `<@${message.guild.ownerID}>`, true)
      .addField('**Created At**', `${ca} \n(${time})`, true)
      .addField('\u200B', "\u200B", true)
      .addField('**Roles**', message.guild.roles.cache.size, true)
      .addField('**Emojis**', message.guild.emojis.cache.size, true)
      .addField('Boosting Tier', `Tier ${message.guild.premiumTier}`, true)
      .addField('**Verification Level**', message.guild.verificationLevel, true)
      .addField('**Explicit Content Filter**', message.guild.explicitContentFilter, true)
      .addField('**Region**', message.guild.region, true)
      .addField('**Members**', `🧍 ${message.guild.memberCount}`, true)
      .addField('**Channels**', `⌨️ ${message.guild.channels.cache.filter(channel => channel.type == 'text').size} \| 🔈 ${message.guild.channels.cache.filter(channel => channel.type == 'voice').size} \| 📁 ${message.guild.channels.cache.filter(channel => channel.type == 'category').size} \| 📢 ${message.guild.channels.cache.filter(channel => channel.type == 'news').size}`, true)
      .addField('**Community Features**', `${message.guild.features.join(", ") || "No Community Features!"}`, false)
    message.channel.send(embed);
  }
}

module.exports.help = {
name: "serverinfo",
  aliases: []
}