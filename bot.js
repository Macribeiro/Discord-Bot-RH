require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildModeration,
    ]
});

client.once("ready", () => {
    console.log(`${client.user.tag}`);
})

client.on("messageCreate", async function (message) {
    if (message.content.includes(message.mentions.roles.find(cargo => cargo.name === 'Mod'))) {
        message.react('⚠️');
        /* for (var i = 0; i <= 10; i++) {
            client.users.send('229057753526566912', 'SEXO SEXO SEXO'); SPAMMAR USUÁRIO XD
        } */
        await message.startThread({
            name: `Reclamação #${Math.floor(Math.random() * 99999)}`,
            autoArchiveDuration: 60,
            reason: `${message.content}`,
        });

        //console.log(`channel id: ${message.channelId}`)

        message.thread.join(`${message.thread.id}`)
        message.thread.send({ content: `*Data de Abertura: ${new Date().toISOString().split('T')[0]}*\nOlá, ${message.author.username}! \nRecebemos a sua reclamação e estamos com um time para analisá-la.\n:thumbsup_tone1: :thumbsup_tone1: :thumbsup_tone1: :thumbsup_tone1:\n\nMotivo do contato: ${message.content}`, allowedMentions: { repliedUser: true } })
        console.log(`Created thread: ${message.thread.name} | ${message.thread.id}`);

    }
});

client.login(process.env.TOKEN);