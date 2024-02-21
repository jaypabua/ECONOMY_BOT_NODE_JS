module.exports = async (message) => {
    if (message.content.toLowerCase() === 'hi' && !message.author.bot) {
        
        message.reply('Hello!');

    }
}