const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const yetkihata = new Discord.MessageEmbed()
    .setColor("2d3136")
    .setDescription('`Erişim Engeli`')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(yetkihata)

let channel = message.mentions.channels.first() || message.channel;

const uyg = new Discord.MessageEmbed()
.setColor("2d3136")
.setDescription("Yok Edilme Başlatılıyor Son 3 Saniye...")
 message.channel.send(uyg);//Rowie Developer
  
  const nuke = new Discord.MessageEmbed()
    .setAuthor(`Yok Edilme Başaralı Şekilde Sonuçlandı Güle Güle ✅`)
    .setColor("2d3136")//Rowie Developer
    .setTimestamp()
    .setImage(`https://c.tenor.com/giN2CZ60D70AAAAC/explosion-mushroom-cloud.gif`)
    .setFooter("Sphinx Sistemi", client.user.avatarURL());//Rowie Developer
    let position = channel.position;
    setTimeout(() => {//Rowie Developer
    channel.delete();
    channel.clone().then(msg => {
    msg.setPosition(position);
    msg.send(nuke);//Rowie Developer
});
}, 280)


};
exports.conf = {
  enabled: true,
  guildOnly: false,//Rowie Developer
  aliases: [],
  permLevel: 0
};
 //Rowie Developer
exports.help = {
  name: 'nuke'
};//Rowie Developer