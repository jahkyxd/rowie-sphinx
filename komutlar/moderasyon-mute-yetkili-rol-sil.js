const Discord = require('discord.js')
const data = require('croxydb');//Rowie Developer
exports.run = async(client, message, args) => {//Rowie Developer
if(!message.member.permissions.has('ADMINISTRATOR')) 
        return message.channel.send(new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({dynamic:true}))//Rowie Developer
        .setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif')
        .setTitle('Bir hata oldu!')
        .setColor("2d3136")
        .setDescription(`Bu komutu kullanmak için \`YÖNETİCİ\` yetkisine sahip olmanız lazım.`))
        //Rowie Developer
  
        data.delete(`muteyetki.role.${message.guild.id}`);
  //Rowie Developer
        message.channel.send(new Discord.MessageEmbed()
  .setTitle('Başarılı!')
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setColor("2d3136")
  .setDescription(`Ayarlanmış mute yetkili rolü başarıyla silindi.`));
}//Rowie Developer

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],//Rowie Developer
  permLevel: 0
};

exports.help = {
  name: 'muteyetki-sil',
};