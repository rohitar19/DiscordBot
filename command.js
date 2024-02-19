import { REST, Routes } from 'discord.js';

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTIwOTI1MzU4MTA0MDEyMzkxNA.Gvkn-g.wQSaGGzG-re68Gdss4bM1vgS79FEYHoYLTB_iY");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1209253581040123914"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}