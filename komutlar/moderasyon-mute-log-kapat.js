const Discord = require('discord.js')
const data = require('croxydb');//Rowie Developer
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) //Rowie Developer
        return message.channel.send(new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({dynamic:true}))
        .setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif')//Rowie Developer
        .setTitle('Bir hata oldu!')
        .setColor("2d3136")
        .setDescription(`Bu komutu kullanmak için gerekli yetkiye sahip değilsiniz.`))
  
        data.delete(`mute.log.${message.guild.id}`);
  //Rowie Developer
  message.channel.send(new Discord.MessageEmbed()
  .setTitle('Başarılı! ')
  .setColor("2d3136")//Rowie Developer
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setDescription(`Mute sistem kanalı başarıyla kapatıldı.`));
}

exports.conf = {//Rowie Developer
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute-log-kapat',
};