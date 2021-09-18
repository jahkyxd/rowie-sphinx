const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {//Rowie Developer
  var bot = "851148996772364299"//botunuzun idsini giriniz.
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
   let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkese rol verebilmem için bir rol etiketlemelisin.')
  
  
   const embed = new Discord.MessageEmbed()
     .setDescription(`Herkese ${rol} adlı rol verildi!`)//Rowie Developer
        .setColor("2d3136")//Rowie Developer
   
   message.guild.members.cache.forEach(u => {
u.roles.add(rol)//Rowie Developer
})
  //Rowie Developer
  message.channel.send(embed)
}
exports.conf = {//Rowie Developer//Rowie Developer
    enabled: true,
    guildOnly: false,
    aliases: ['herkeserolver'],//Rowie Developer
    permLevel: 4,//Rowie Developer
  kategori: 'moderasyon'//Rowie Developer
}

exports.help = {
    name: 'herkese-rol-ver',
    description: 'Sunucudaki kullanıcılara toplu olarak rol verir.',
    usage: 'toplu-rol-ver <@rol>'
}