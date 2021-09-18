let Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Rowie Developer

//Rowie Developer
exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`Abone rolü ayarlanmamış!`)
  if(!abonelog) return message.channel.send(`Abone log kanalı ayarlanmamış!`)
  if(!aboneyetkilisi) return message.channel.send(`Abone yetkili rolü ayarlanmamış!`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  
  await(abonekisi.roles.add(abonerol))//Rowie Developer
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Abone Rolü Verildi!  <a:856541534228578324:861992543692390411>`)//Rowie Developer
  .addField(`Abone Rolünü Veren Kişi:`, `${message.author.tag}`, true)
  .addField(`Abone Rolü Verilen Kişi`, `${user}`, true)
  .setThumbnail(user.avatarURL())
  .setColor("2d3136")
//Rowie Developer
  .setImage('https://share.creavite.co/rDlVEbfzJvmRlneT.gif');
  message.guild.channels.cache.get(abonelog).send(embed)
}//Rowie Developer

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone',"a"],
  perm: 0
}//Rowie Developer
exports.help = {
  name: 'a'//Rowie Developer
}

exports.play = {
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',//Rowie Developer
  kategori: 'Abone'//Rowie Developer
}
