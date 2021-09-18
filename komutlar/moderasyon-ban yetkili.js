const Discord = require('discord.js');//Rowie Developer
const data = require('quick.db');//Rowie Developer//Rowie Developer
//Rowie Developer
exports.run = async (client, message, args) => {//Rowie Developer//Rowie Developer
//Rowie Developer
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}ban-yetki-role \` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  if(!message.mentions.roles.first()) return message.channel.send(new Discord.MessageEmbed().setColor("2d3136").setTitle('Bir hata oldu!').setDescription('Bir rol etiketlemeyi unuttunuz.'));
  let mentionRole = message.mentions.roles.first();
  data.set(`ban.yetkilirole.${message.guild.id}`, mentionRole.id);//Rowie Developer
  message.channel.send(new Discord.MessageEmbed().setTitle('İşte bu kadar!').setDescription(`Yasaklama da kullanılacak: ${mentionRole} olarak seçtiniz.`));//Rowie Developer

};
exports.conf = {//Rowie Developer//Rowie Developer
  enabled: true,//Rowie Developer//Rowie Developer
  guildOnly: true,
  aliases: [],//Rowie Developer//Rowie Developer//Rowie Developer
  permLevel: 0//Rowie Developer//Rowie Developer
}//Rowie Developer
//Rowie Developer
exports.help = {//Rowie Developer
  name: 'yargı-yetkili-role'//Rowie Developer
};//Rowie Developer