const {ActivityType} = require('discord.js')


module.exports = async (client) => {
    const status = await client.user.setPresence({
        status: 'idle', //can change into other presence (dnd, idle, online, and invisible)
        activities: [{
            type: ActivityType.WATCHING, // can change into different type of activity (WATCHING, LISTENING, PLAYING AND MORE)
            name: "YOUR DISCORD SEVER", // you can change whatever you want inside
        }]
    });

    console.log(`Bot ready as ${client.user.username}`);
    console.log(JSON.stringify(status));
}