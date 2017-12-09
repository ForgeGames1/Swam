const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Swam, !help");
    console.log("Le bot a bien ete connecte");
})

bot.login("Mjg5MDUwNzE1ODk1MjM0NTcw.DQzDJA.FZfPWOZ9uzXNPhMDG8Ebjp2RzG4");
