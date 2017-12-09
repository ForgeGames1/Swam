const Command = require('./command')

module.exports = class Google extends Command {

    static match (message) {
        return message.content.startWhith('!google')
    }

    static action (message) {
        let args = message.content.split(' ')
        args.split()
        message.delete()
        message.reply('https://www.google.fr/#q=' + args.join('%20'))
    }


}