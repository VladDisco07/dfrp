const DiscordRPC = require("discord-rpc");

const ClientId = 'beep';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("Thank you for using Discord Fast Rich Presence! Wait few seconds for status...");
  rpc.setActivity({
    details: `Discord Fast Rich Presence`,
    state: 'Well, hello there!',
    // largeImageKey: 'DFRP',
    // largeImageText: 'test1',
    // smallImageKey: 'DFRP',
    // smallImageText: 'test2',
    instance: false,
  });
});

rpc.login(ClientId).catch(console.error)