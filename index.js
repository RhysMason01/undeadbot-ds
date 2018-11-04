/* Constentce */

const Discord = require('discord.js');

const YTDL = require('ytdl-core');

// in your main file
require('discord.js-music');

const request = require("request");

const TOKEN = "NTA2NDI2Mzg1MjcxNjE5NTg0.DriW8w.0csL8FEPvR4xbTfm5kZebBBze0s";

const PREFIX = "!";

// functions

function play(connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(servers.queue[0], { filter: 'audioonly'}));
  server.queue.shift();
  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}

/* Veriables */

var bot = new Discord.Client();

var servers = {};

var fortunes = [
    "Yes",
    "No",
    "Maybe"
]

var advicewords = [
    "Go outside",
    "Make friends",
    "It takes a failure to over come challenges",
    "Be nice to people",
    "Help other people",
    "Work hard",
    "Take time to know yourself",
    "A narrow focus brings big results",
    "Show up fully",
    "Don't make assumptions",
    "Be patient and persistent",
    "In order to get, you have to give",
    "Luck comes from hard work"
]

var jokes = [

]

var SP = [
  "68y45refer4545645tr",
  "hiuhde783medcj0#dsg",
  "khinfi7394056ofjeds",
  "00997645uihihererfe",
  "97984ipuht874yfj94r",
  "£lh98u4£34^wjoi[ef]",
  "iu83u8uj4tjfe8dsdmm",
  "#{l-0i03ihe}erewr33",
  "uej89j90u409uu650i6",
  "09-&564%$232=o-kfer",
  "u8u95^%^$urr983hdds",
  "9u98uj498ir$%$334's",
  "97-8u4jrhfbgntgmnef",
  "i=90tu=jtg9845hejtg",
  "li[ehjd389erdj23e9fejfew]",
  "!i-r0k4r9j40tj40tfjeiof[ej]",
  "83u9h49ewruhfpUWEGEBFCUIHGPVEDHFE",
  "90UJ[049THJ48TH49THFER9FHEFH]",
  "09399URJ9834HR$%r£$T34PEJ",
  "UIY048TJ4ER$£r£%r34HIF",
  "IOHR983JRFRETGHERTGJER",
  "TRFUB6Y98NEOWEWEDkofpeojk",
  "j38-94thje9rhg-05it094",
  "iu9984hr94hrfuiehrfphepihpuhepfhep",
  "£%£$^%g[el[few#{fweoesfwfefwe}]]",
  "oy9rhero9thfnerositgerrwerwerwee",
  "09uu5345£$%$%43534ertjferdsfwes",
  "oiy80hernw[okfpp[wmmew[wqd]]]",
  "h9ehj9ejfeufhehfuwehfweoifhywegfowmeubfuh",
  "o[i9orhngoerngndfgvnerj]e#dsfwefwe,"s
]

bot.on("message", function(message) {
    console.log("[INFO]", message.author.username, ":", message.content, "[", message.createdAt, "]");
});

bot.on("ready", function() {
    console.log("ready!");
    bot.user.setActivity("john's stream!")
});

/* Join */

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").sendMessage(member.toString() + "Welcome to the Undead sever!");

});

/* Commands */

bot.on("message", function(message) {

    if(message.content == "nigger") {
        message.delete();
        message.reply("Do not be racist!");
        console.log("[INFO]" , message.author.username, ":", "has just been racist and will be kicked if he does it again!");

    }

    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    if(!message.member.hasPermission("ADMINISTRATOR")) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLocaleLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "joke":
          if(args[1]){
            message.channel.sendMessage(jokes[Maths.floor(Math.random() * jokes.length)]);
          }
        case "info":
            message.channel.sendMessage("Made By Downre!");
        case "8ball":
            if(args[1]){
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            }
            break;
        case "kick":
            let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!kuser) return message.channel.send("Can't find him! ");
            let kreson = args.join(" ").slice(22);

            let kickEmbed = new Discord.RichEmbed()
            .setDescription("~KICK~")
            .setColor("#ff3642")
            .addField("User was successfully kicked", "The user was kicked for breaking server rules!")


            message.guild.member(kuser).kick(kreson);

            message.channel.sendMessage(kickEmbed);

            break;
            case "ban":
            let buser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!buser) return message.channel.send("Can't find him! ");
            let breson = args.join(" ").slice(22);

            let banEmbed = new Discord.RichEmbed()
            .setDescription("~BAN~")
            .setColor("#ff3642")
            .addField("User was successfully banned", "The user was banned for breaking server rules!")


            message.guild.member(buser).ban(breson);

            message.channel.sendMessage(banEmbed);

            break;
        case "help":
            let helpEmbed = new Discord.RichEmbed()
            .setColor("#e2f442")
            .setTitle("Here are some valid commands:")
            .addField("!ping:", "It replys with Pong!", true)
            .addField("!8ball:", "Ask it a question!", true)
            .addField("!ban:", "To ban a player!", true)
            .addField("!kick:", "To kick a player!", true)
            .addField("!twitch", "Shows you his twitch!", true)
            .addField("!play", "coming soon!", true)
            .addField("!pause", "comming soon!", true)
            .addField("!stop", "comming soon!", true)
            .addField("!queue", "comming soon!", true)
            .addField("!ping", "Pong!", true)
            .addField("!info", "Shows who made it!", true)
            .addField("!cat", "comming soon!", true)
            .addField("!youtube", "For his youtube page!", true)
            .setFooter("Made by Downre | Version: 1.0 open beta")

            message.channel.sendMessage(helpEmbed);
            break;
        case "Advise":
            if(args[1]){
                message.channel.sendMessage(advicewords[Math.floor(Math.random() * advicewords.length)]);
            }
            break;
        case "twitch":
            let twitchEmbed = new Discord.RichEmbed()
            .setColor("#e56boo")
            .setTitle("Join UndeadJohn's twitch!")
            .setDescription("http://twitch.tv/undeadjohns")
            .setImage("https://pbs.twimg.com/profile_images/934834974976610306/VY9B5p88_400x400.jpg")
            .setFooter("Made by Downre | Version: 1.0 open open beta")

            message.channel.sendMessage(twitchEmbed);

            break;
        case "youtube":
            let youtubeEmbed = new Discord.RichEmbed()
            .setColor("#e56boo")
            .setTitle("Join UndeadJohn's Youtube!")
            .setDescription("http://twitch.tv/undeadjohns")
            .setImage("https://pbs.twimg.com/profile_images/934834974976610306/VY9B5p88_400x400.jpg")
            .setFooter("Made by Downre | Version: 1.0 open beta")

            message.channel.sendMessage(youtubeEmbed);

            break;
        case "puzzle":
            let riddleEmbed = new Discord.RichEmbed()
            .setColor("#e56boo")
            .setTitle("Weekly Riddle")
            .setDescription("You can carry it everywhere you go, and it does not get heavy. What is it?")
            .addField("You can carry it everywhere you go, and it does not get heavy. What is it?", "Answer in 4 days..", true)
            .setDescription("The weekly riddle!")
            .setFooter("Made by Downre | Version: 1.0 open beta")
            message.channel.sendMessage(riddleEmbed);
            break;
        case "fun":
            let funEmbed = new Discord.RichEmbed()
            .setTitle("Fun Tab!")
            .setColor("#e56boo")
            .addField("!ping", "It will say pong!", true)
            .addField("!8ball", "Ask it a question!", true)
            .setFooter("Made by Downre | Version: 1.0 open beta")
            message.channel.sendMessage(funEmbed);
            break;
        case "web":
            message.channel.sendMessage("http://rhysmason.github.io/983746278764hhjdf?");
            break;
        case "h:code":
            message.channel.sendMessage("Please, wait getting the download link!");
            break;
        default:
            message.channel.sendMessage("**Invalid Command:** Do !help for the commands!");
    }
});
/* Music */



/* Admin */

bot.on("message", function(message) {

if(message.author.equals(bot.user)) return;

if(!message.content.startsWith(PREFIX)) return;

if(!message.member.hasPermission("ADMINISTRATOR")) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLocaleLowerCase()) {
  case "a:music":
    message.channel.sendMessage("Working");
  break;
 }
});

/* User */

bot.on("message", function(message) {
  if(message.author.equals(bot.user)) return;

  if(!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLocaleLowerCase()) {
    case "play":
      if (!args[1]){
        message.channel.sendMessage('Please, provide a link!');
        return;
      }

      if (!message.member.voiceChannel){
        message.channel.sendMessage('Please, be in a voice channel!')
        return;
      }


      if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
      });
    break;
  };
});


/* Login */

bot.login(TOKEN);
