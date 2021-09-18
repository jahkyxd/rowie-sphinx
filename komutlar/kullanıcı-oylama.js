const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return;//Rowie Developer
  if (message.channel.type !== "text") return;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu Komutu Kullanabilmek İçin **Mesajları Yönet** İznine Sahip Olmalısın Ama Senin Yok Kullanamazsın`).then(m => m.delete({ timeout: 10000}));

  message.delete();//Rowie Developer

  let question = args.join(" ");

  let user = message.author.username;

  if (!question) return message.channel.send(new Discord.MessageEmbed().setTitle(`Yazı Yazmayı Unuttun`)).then(m => m.delete(({ timeout: 5000})));

  message.channel.send(new Discord.MessageEmbed()
  .setColor("2d3136")
  
        .setTimestamp()
        .setFooter("Sphinx Sistemi", client.user.avatarURL())
        .addField(`${client.user.username}`, `**${question}**`)
    )//Rowie Developer
    .then(function(message) {
      message.react("👍");
      message.react("👎");
    });
};
//Rowie Developer
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama","voting"],
  permLevel: 0//Rowie Developer
};

exports.help = {//Rowie Developer
  name: "oylama",//Rowie Developer
  description: "Oylama yapmanızı sağlamaktadır.",//Rowie Developer
  usage: "oylama <oylamaismi>"
};//Rowie Developer