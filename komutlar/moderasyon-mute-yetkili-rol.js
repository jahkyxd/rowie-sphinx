const Discord = require('discord.js')//Rowie Developer
const data = require('croxydb');//Rowie Developer
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) //Rowie Developer
        return message.channel.send(new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({dynamic: true}))
        .setTitle('Bir hata oldu!')
        .setColor("2d3136")
        .setDescription(`Bu komutu kullanmak için gerekli yetkiye sahip değilsiniz.`));
  
  //Rowie Developer
        if(!message.mentions.roles.first()) 
  return message.channel.send(new Discord.MessageEmbed()
  .setColor("2d3136")
  .setTitle('Bir hata oldu!')
  .setThumbnail(message.author.avatarURL({dynamic: true}))
  .setDescription('Bir rol etiketlemeyi unuttunuz.'));
  
  let mentionRole = message.mentions.roles.first();
//Rowie Developer
  
  data.set(`muteyetki.role.${message.guild.id}`, mentionRole.id);
  
  message.channel.send(new Discord.MessageEmbed()
  .setTitle('Başarılı!')
  .setColor("2d3136")//Rowie Developer
  .setThumbnail(message.author.avatarURL({dynamic: true}))
  .setDescription(`Mute yetkisi olarak kullanılacak: ${mentionRole} rolü olarak seçtiniz.`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["muteyetkilirol"],
  permLevel: 0
};

exports.help = {
  name: 'mute-yetkili-rol',
};