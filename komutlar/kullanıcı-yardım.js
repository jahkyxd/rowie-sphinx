const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { //Rowie Developer
  
  const embed = new Discord.MessageEmbed()
  .setColor("2d3136")//Rowie Developer
  .setAuthor(client.user.username, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
  //.setFooter("Sphinx Yardım Menüsü", client.user.avatarURL())
  .setTitle('Sphinx User Menüsü')
  .setImage('https://share.creavite.co/rDlVEbfzJvmRlneT.gif')
  .setDescription(`**Sphinx User Menüsüne Hoşgeldin!\n\`Botun User Kommutunu Kullanmak İçin Botun Rolünü Yukarı Taşıyınız.\`\n**━━━━━━━━━━━━━━━━━━━**\n• |\`${prefix}avatar\` : Bir Üyenin Avatarını Alırsın.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}davet\` : Botu Davet Etmeye Yarar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}herkeserolver\`**:**herkese rol verir.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}herkestenrolal\`**:**Herkesten rol al.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}kurallar\` : Kuralları Açar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}nuke\` : Kanalları Sıfırlar Yeniden Açar.**\n• |\`${prefix}oylama\` : Oylama Yapar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}say\` : sunucudaki istatislikleri gösterir.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}sil\` : Mesajları Siler.**\n`)
  
 message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,//Rowie Developer
  aliases: ['kss', 'ks', 'k', 'user-sistemi']
}
exports.help = {
  name: 'Kullanıcı-sistemi',
  description: 'rowie',
  usage: 'Kullanıcı'
}
