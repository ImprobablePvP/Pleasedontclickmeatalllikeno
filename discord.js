const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Welcome 2taTheOg#7063!`);
    console.log(`To use commands please go into the bot testing discord`);
    console.log(`A list of commands are:`);
    console.log(`ping, role, mute, warn, and all sorts of other commands`);
    client.user.setGame(`>info`);
  });


const prefix = '>';
client.on('message', (msg)=>{
    if(msg.author.bot) return;
    if(msg.content == (prefix+"ping")) { 
        msg.channel.send("Pong to " + msg.author + "!");



    }
    if(msg.content == (prefix + "info")) { 
        msg.channel.send("Created by **@2taTheOg#7063**");
        msg.channel.send("Use >commands to see what commands they are");
    }
    if(msg.content == (prefix + "commands")) { 
        msg.channel.send("**List of commands are:**");
        msg.channel.send("```Buy, info, ping** Please type >dm to see the full list of commands!");
    }
    const dm = new Discord.RichEmbed()
    .setAuthor("Disturb Bot", "https://cdn.discordapp.com/emojis/426843743287771176.png?v=1")
    .setTitle("Commands")
    .setDescription("-Ping -> Sends a nice message! \n-Buy -> Tells you how to buy \n-info -> Sends you the bot info \n-Dm -> Sends the full list of commands")
    .setColor(0xFF0000)
    .setFooter("More commands coming soon!")
    ;
    if(msg.content == (prefix + "dm")) { 
        msg.channel.send(msg.author + ", I have sent a list of commands to your dms!");
        msg.author.send(dm)
        
    }
    const buy = new Discord.RichEmbed()
    .setAuthor("Disturb Bot", "https://cdn.discordapp.com/emojis/426843743287771176.png?v=1")
    .setTitle("How to buy! \n\n ")
    .setDescription(msg.author + ", This product is offsale for now!")
    .setColor(0xFF0000)
    .setFooter("Please check back again")
    ;
    if(msg.content == (prefix + "buy")) { 
        msg.channel.send(buy)
    }
  });
  client.on('guildMemberAdd', member => {
    const role = member.guild.roles.find('name', 'Tester');
    member.addRole(role)
  const welcome = new Discord.RichEmbed()
  .setAuthor("Disturb Bot", "https://cdn.discordapp.com/emojis/426843743287771176.png?v=1")
  .setTitle("Welcome to the bot testing!")
  .setDescription("Hello welcome to the Bot Testing discord! \n\nIf you wish to chat with us message the general text channel in the discord! \n\nInvite Link: NULL")
  .setColor(0xFF0000)
  .setFooter("Enjoy!")
  ;
  member.send(welcome)

  });
client.login("process.env.BOT_TOKEN")
