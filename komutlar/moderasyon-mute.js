const Discord = require('discord.js')
const data = require('croxydb');
const ms = require('ms')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
const logChannel = await data.fetch(`mute.log.${message.guild.id}`);
        const muteYetkili = await data.fetch(`muteyetki.role.${message.guild.id}`);
        let prefix = ayarlar.prefix;
        if(!logChannel) return;
        if(!muteYetkili) return;
        
        const errorEmbed = new Discord.MessageEmbed()
        .setColor("2d3136");
        const errorEmbed2 = new Discord.MessageEmbed()
        .setTitle('Bir hata oldu! <a:carp:879346660579344424>');
        
        if(!message.member.permissions.has(muteYetkili)) return message.channel.send(errorEmbed
            .setTitle(`Bir hata oldu! <a:carp:879346660579344424>`)
            .setColor("2d3136")
            .setDescription(`${message.guild.roles.cache.get(muteYetkili)} | Rolüne sahip olman gerekiyor.`));
        
            
        
            if(!args[0]) return message.channel.send(errorEmbed
                .setTitle('Bir hata oldu! <a:carp:879346660579344424>')
                .setDescription(`Kullanıcı etiketleyerek dener misin?
        **Örnek olarak**:
        \`\`\`${prefix}mute @üyeetiketi 1m merhaba
        ${prefix}mute 686185592899633200 1m merhaba\`\`\``));
        
        let member;
        
        if(message.mentions.members.first()) {
        member = message.mentions.members.first();
        } else if(args[0]) {
       
            member = message.guild.members.cache.get(args[0]);
        if(!member) return message.channel.send(errorEmbed
            .setTitle('Bir hata oldu! <a:carp:879346660579344424>')
            .setDescription(`Kullanıcı etiketleyerek dener misin?
        **Örnek olarak**:
        \`\`\`${prefix}mute @üyeetiketi 1m merhaba
        ${prefix}mute 686185592899633200 1m merhaba\`\`\``));
        }
        
        if(message.author.id === member.id) return message.channel.send(new Discord.MessageEmbed()
        .setColor("2d3136")
        .setTitle('Agaa beeeeeeeee!')
        .setDescription(`O kadar yürekli olamazsın.. 🙄`))
        
        if(member.permissions.has('ADMINISTRATOR')) return message.channel.send(errorEmbed2
            .setColor("2d3136")
            .setTitle(`Bir hata oldu! <a:carp:879346660579344424>`)
            .setThumbnail(message.author.avatarURL({dynamic:true}))
            .setDescription('Yönetici bir kullanıcıya karışamam!'));
            
        
        if(!args[1]) return message.channel.send(errorEmbed
            .setTitle('Bir hata oldu! <a:carp:879346660579344424>')
            .setColor("2d3136")
        .setDescription(`${message.author} **Süre** Belirtmeyi unutma lütfen! \`1s & 1m & 1h & 1d\` kullanarak dener misin?
        **Örnek olarak**:
        \`\`\`${prefix}mute @üyetiketi 1m merhaba\`\`\``)); //Rowie Developer
        //Rowie Developer
        let cooldown = ms(args[1]);//Rowie Developer
        let reason;
        if(args[2]) reason = args[2];//Rowie Developer
        if(!args[2]) reason = 'Bir açıklama yok.';
        //Rowie Developer
        message.guild.channels.cache.filter(a => a.type === 'text').forEach(s => {
        s.overwritePermissions([{ id: member.id, deny: ['SEND_MESSAGES'] }]);//Rowie Developer
        });
        
        message.channel.send(new Discord.MessageEmbed()//Rowie Developer
        .setColor("2d3136")
        .setDescription(`
        <a:ok:880069220883378197>  ${member} **kullanıcısı için mute verildi.**
        <a:ok:880069220883378197>  **Açıklama:** \`${reason}\`
        <a:ok:880069220883378197>  **Ceza Süre:** \`${args[1]}\``));//Rowie Developer
        
        message.guild.channels.cache.get(logChannel).send(new Discord.MessageEmbed()//Rowie Developer
        .setColor("2d3136")//Rowie Developer
        .setTitle('Sphinx - Chat Mute Sistem')
        .setDescription(`
        <a:ok:880069220883378197>  **Kullanan Yetkili:** \`${message.author.tag}\`
        <a:ok:880069220883378197>  **Kullanılan kişi:** \`${member.user.tag}\`
        <a:ok:880069220883378197>  **Açıklama:** \`${reason}\`
        <a:ok:880069220883378197>  **Ceza Süre:** \`${args[1]}\``)
        .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''));

        
        setTimeout(() => {
        
        message.guild.channels.cache.get(logChannel).send(new Discord.MessageEmbed()//Rowie Developer
        .setTitle('Sphinx - Chat Mute Sistem')//Rowie Developer
        .setDescription(`
        <a:ok:880069220883378197>  ${member.user} **kullanıcısının chat mute süresi bitti!**//Rowie Developer
        `))
        //Rowie Developer
        message.guild.channels.cache.filter(a => a.type === 'text').forEach(s => {//Rowie Developer
        s.overwritePermissions([{ id: member.id, null: ['SEND_MESSAGES'] }]);
        });
        }, cooldown);//Rowie Developer
         

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute',
};