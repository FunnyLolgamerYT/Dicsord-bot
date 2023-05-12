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

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    interaction.reply(`The sum is ${num1 + num2}`);
  }
});

//Client login
client.login(process.env.TOKEN);
