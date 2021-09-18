const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 
  
  const embed = new Discord.MessageEmbed()//Rowie Developer
  .setColor("2d3136")
  .setThumbnail(client.user.avatarURL())
  .setFooter("Sphinx Abone Sistemi", client.user.avatarURL())//Rowie Developer
  .setTitle('Sphinx Abone Menüsü')//Rowie Developer
  .setImage('https://share.creavite.co/rDlVEbfzJvmRlneT.gif')
  .setDescription(`**Sphinx Abone Menüsüne Hoşgeldin!\n\`Botu Abone Komutunu kullanmadan önce rolünü en üste alınız.\`\n**━━━━━━━━━━━━━━━━━━━**\n• |\`${prefix}abonerol @rol\`**:**Abone Rol Etiketlelisiniz.\n**━━━━━━━━━━━━━━━━━━━**\n• |\`${prefix}abonelog\`**:**Abonelog girmelisiniz.\n**━━━━━━━━━━━━━━━━━━━**\n• |\`${prefix}abone\`**:**abone etiketlemelisiniz.**\n**━━━━━━━━━━━━━━━━━━━**\n• |\`${prefix}aboneyetkili @rol\`**:Abone Yetkili Rol etiketlemesiniz.**\n`)
  //.setAuthor(client.user.username, client.user.avatarURL())
 message.channel.send(embed)
}//Rowie Developer

exports.conf = {
  enabled: false,//Rowie Developer
  guildOnly: false,//Rowie Developer
  permLevel: 0,//Rowie Developer
  aliases: ['abone-sistemi', 'ab', 'abone', 'abone']//Rowie Developer
}
//Rowie Developer
exports.help = {//Rowie Developer
  name: 'abone',
  description: 'rowie',
  usage: 'abone'
}

//const Discord = require("discord.js");
//const db = require("quick.db");


//exports.run = async (client, message, args) => {
//  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
 // 
////const yardım = new Discord.MessageEmbed()
//.setColor("2d3136")
//.setThumbnail(client.user.avatarURL())
////.setFooter(client.user.username, client.user.avatarURL())
//.setTitle("<a:tikkkk:870958250386923571>** Sphinx Abone Menüsü **<a:tikkkk:870958250386923571>")
// .setTimestamp()
// .setImage('https://share.creavite.co/rDlVEbfzJvmRlneT.gif')
//.setDescription("**<a:tikkkk:870958250386923571>s!abonerol @rol**\n\n**<a:tikkkk:870958250386923571>s!abonelog #kanal**\n\n**<a:tikkkk:870958250386923571>s!abone**\n\n**<a:tikkkk:870958250386923571>s!aboneyetkili @rol**")
//message.channel.send(yardım)
//}

//exports.conf = {
//  enabled: true, 
//  guildOnly: false, 
//   aliases: ["abone","a"],
//  permLevel: `Yetki gerekmiyor.` 
//};

//exports.help = {
//  name: 'abone',
//  category: 'abone',
//  description: 'abone Menüsü.',
//   usage:'abone'
//}
