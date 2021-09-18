const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    var embed = new Discord.MessageEmbed()//Rowie Developer
    .setTitle("⭐Developer ⭐")
    .setFooter("Sphinx Sistemi", client.user.avatarURL())//Rowie Developer
    .setDescription("<:rowie:866231094784163850><@773521227117625366>\n⭐**Yardımcılar**⭐\n⭐<@673235133675077692>\n⭐<@700014116059742289>\n⭐<@508276194110603286>")
    .setColor("2d3136")
    message.channel.send({embed})
}};
//Rowie Developer
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapimci','yapımcı','yapımcılarım','yapımcılar',],
  permLevel: 0
};//Rowie Developer

exports.help = {//Rowie Developer
  name: 'yapımcım',
  kategori: 'genel',
  description: 'Yapımcımı Gosterir.',
 usage: 'yapımcım'//Rowie Developer
};

//Code Universe <3