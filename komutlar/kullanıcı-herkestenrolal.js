const Discord = require('discord.js');
const db = require('quick.db')//Rowie Developer

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('| Üzgünüm Bu Komutu Kullana Bilmen İçin `Yönetici` Yetkisine Sahip Olmalısın!')
  let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Alıcagım Rolu Etiketle')

  //Rowie Developer
   const embed = new Discord.MessageEmbed()//Rowie Developer
     .setDescription(`Herkesten ${rol} adlı rol alındı!`)
     .setColor("2d3136")
   
   
   message.guild.members.cache.forEach(u => {//Rowie Developer
u.roles.remove(rol)
   })
  message.channel.send(embed)//Rowie Developer//Rowie Developer
}
exports.conf = {
    enabled: true,//Rowie Developer
    guildOnly: false,
    aliases: ['toplu-rol-al','herkestenrolal'],
    permLevel: 3
}

exports.help = {
    name: 'herkesten-rol-al',
    description: 'Etiketelediğin Rolu Herkesten Alır.',
    usage: 'herkestenrolal rol / rol-ismi'
}