const Discord = require('discord.js');
const bot = new Discord.Client();
new Discord.RichEmbed();
const newUsers = new Discord.Collection();
const music = require('discord.js-music');



const config = require("./config.json")

bot.on('ready', () => {
  console.log('Slime is bouncing');
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);




if (command === "say") {
    message.channel.send({embed: {
  color: 7506394,
  description: args.join(" ")
}});
}

if (command === "SirDevonsquire") {
    message.channel.send("is stupid");
} 

if (command === "slime") {
    message.channel.send("https://discord.gg/ufuJ4qg");
} 

if (command === "hentai") {
    message.channel.send("https://www.youtube.com/watch?v=5krxsUDnops");
} 

if (command === "ross") {
    message.channel.send({embed: {
    color: 7506394, 
    author: {
    name: "Ross/Ninja",
    icon_url: bot.user.avatarURL
},
 fields: [{
        name: "Slime Bot Dev, Empire Trading Co. Admin, JS God. ",
        value: "<@148953784280809474>",
      },
      
      
      
   //   {
   //     name: "other contributers",
   //     value: "",
       ],
    timestamp: new Date(),
    footer: {
      name: "",
      text: "",
    }
  }
});
}



});

bot.login(config.token);
