const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Swam, !help");
    console.log("Le bot a bien ete connecte");
    
})

bot.on('message', function (message) {
    if (message.content === '!ping') {
        message.channel.send('pong')
    }
})

bot.o,('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur le channel ' + member.displayName)
    }).catch(console.error)
})

bot.login("Mjg5MDUwNzE1ODk1MjM0NTcw.DQzDJA.FZfPWOZ9uzXNPhMDG8Ebjp2RzG4");
