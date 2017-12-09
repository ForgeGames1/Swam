const Command = require('/command')

module.exports = class Play extends Command {

    static match (message) {
        return message.content.startWhith('!play')
    }

    static action (message) {
        message.reply('pong')
    }

}