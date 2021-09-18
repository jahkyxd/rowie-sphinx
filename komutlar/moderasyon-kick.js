const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
if (!message.guild) {
const ozelmesajuyari = new Discord.MessageEmbed()
.setTitle('UYARI')//Rowie Developer
.setColor("2d3136")
.setImage(`https://cdn.discordapp.com/attachments/860839431153778689/860839899841691668/Thor_Banner_Uzun.gif`)
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription('Lütfen bu komudu özelde kullanmak yerine ekli olduğum sunucuda kullan.')
return message.author.send(ozelmesajuyari);
}//Rowie Developer
let guild = message.guild
let reason = args.slice(1).join(' ');
let dızcılaraselam = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.channel.send(`Lütfen sunucudan atacağınız kişiyi etiketleyin.`).catch(console.error);
if (!message.guild.member(dızcılaraselam).bannable) return message.channel.send(`Belirttiğiniz kişinin Yetkisi Benden Daha Üstün!`);//Rowie Developer
message.guild.member(dızcılaraselam).kick();
message.channel.send(" Başarılı, "+ dızcılaraselam +" İD'li kullanıcı **" + reason + "** sebebiyle sunucudan atıldı.")
     
};

exports.conf = {
  enabled: true,
  guildOnly: true,//Rowie Developer
  aliases: ['at'],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick <@kullanıcı> <sebep>',
 
};