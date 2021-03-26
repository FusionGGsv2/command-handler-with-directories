const { Client, Collection, Discord } = require("discord.js");
const client = new Client({
  disableEveryone: true
});
const { config } = require("dotenv");
const { prefix } = require("./config.json");
const ms = require("ms");
const fetch = require("fetch");
const { addexp } = require("./handlers/xp.js")
//----Handler------
client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.on("message", async message => {
if(message.author.bot) return;
  if(!message.guild) return;
  
return addexp(message)
})

client.on("message", async message => {
  
  let Message = message.content;
  
if(Message == `<@${client.user.id}>`) return message.reply("My prefix is ` ! ` type !help for all my commands!")
})

//--------Message-------
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;
  if (command) command.run(client, message, args);
});

//------status
client.on("ready", () => {
  console.log(`Hey user ${client.user.username} is online`);
  client.user.setActivity(`!help | Coded by FusionGGs ツ`)
});

client.login(process.env.TOKEN);
