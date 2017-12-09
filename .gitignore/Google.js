module.exports = class Google {

    static match(message) {
        return message.content.startWith('!google')
    }


    static action (message) {
        args = message.content.split(' ')
        args.shift()
        message.reply('httpls://www.google.fr/#q=' +args.join('%20'))
    }

}
