const Discord = require("discord.js")

module.exports= {
name: "avatar",
    category: "Fun",
  description: "get a users avatar",
run:async (bot, message, args) => {
if(!message.content.startsWith('!'))return;   
  let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author
  let avatar = user.avatarURL({dynamic: true, size: 4096, format:'png'})
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} Avatar`)
  .setColor("RANDOM")
  .setDescription(`[Avatar Link](${avatar})`)
  .setImage(avatar)
  .setFooter(`Request by ${message.author.tag}`)
  .setTimestamp()
  
  
  message.channel.send(embed)
  
  
}
}