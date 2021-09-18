const rowiediscord = require('discord.js');

exports.conf = {
  enabled: true,//Rowie Developer
  guildOnly: true,
  aliases: ["bilgi", "sunucubilgi", "sunucu-bilgi", "sb"],
  permLevel: 0,
  kategori: "bot",
};//Rowie Developer

exports.help = {
  name: 'say',//Rowie Developer
  description: 'rowie',
  usage: 'rowie',

};
exports.run = async (client, message, args) => {
  const seskanallari = message.guild.channels.cache.filter(c => c.type === 'voice'); 
  let rowie3 = 0
  let  rowie2 = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size 
  let metinkanallari = message.guild.channels.cache.filter(m => m.type == "text").size; 
  for (const [id, voiceChannel] of seskanallari) rowie3 += voiceChannel.members.size;
  const rowieembed = new rowiediscord.MessageEmbed()
  .setColor("2d3136")
  .setFooter("Sphinx Sistemi", client.user.avatarURL())
  .setTimestamp()
  .setDescription(`
  ⭄ Toplam üye sayısı: **${message.guild.memberCount}**
  ⭄ Toplam çevrimiçi üye sayısı: **${rowie2}**
  ⭄ Toplam metin kanalı sayısı: **${metinkanallari}**
  ⭄ Toplam ses kanalı sayısı: **${seskanallari.size}**
  ⭄ Toplam çevrimiçi durumda olan üye sayısı: **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}**
  ⭄ Toplam rahatsız etme durumda olan üye sayısı: **${message.guild.members.cache.filter(i => i.presence.status === 'dnd').size}**
`)
  message.channel.send(rowieembed)
  }//Rowie Developer