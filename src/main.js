//Startup consts in order to run the bot
require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client({
  intents: [
    Discord.IntentsBitField.Flags.Guilds,
    Discord.IntentsBitField.Flags.GuildMembers,
    Discord.IntentsBitField.Flags.GuildMessages,
    Discord.IntentsBitField.Flags.MessageContent,
  ],
});

//Main code
client.on("ready", (c) => {
  console.log(`${c.user.tag} is now online`);
});

client.on("messageCreate", (msg) => {
  console.log(msg.content);
  if (msg.author.bot) {
    return;
  }

  if (msg.author.id == 296277940877000705) {
    console.log("Welcome EssentialBee");
    msg.reply("Hello nerd");
  } else {
    msg.reply("Hello other nerd");
  }
});

//Client login
client.login(process.env.TOKEN);
