
import { Client, GatewayIntentBits, InteractionResponse } from 'discord.js';
const client = new Client(
    { intents: [GatewayIntentBits.Guilds ,
                 GatewayIntentBits.GuildMessages ,
                 GatewayIntentBits.MessageContent
                ]});

client.on("messageCreate" , (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url=message.content.split("create")[1];
        return message.reply({
            content : "Genrating short ID for " + url ,
        }
        )}
    
    message.reply({
        content:"hey , I am Roshi",
    });   
});

client.on("interactionCreate"  , (interaction) => {
    // console.log(interaction);
    interaction.reply("Pong!!!!");

})

client.login("MTIwOTI1MzU4MTA0MDEyMzkxNA.Gvkn-g.wQSaGGzG-re68Gdss4bM1vgS79FEYHoYLTB_iY");


