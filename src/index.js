const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(131071)
const client = new Discord.Client({ intents })

client.on(Discord.Events.ClientReady, () => {
    console.log("Client ready! Login as: " + client.user.tag)
})
client.login("MTEwMDYzNTk5Njk1NTEwMzI3Mg.GdO1Ib.Zomh0_bw8ydtG70CtJ8hY1EPM0lZVHSpItlruA")