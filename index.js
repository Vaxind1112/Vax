const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "sb!"

client.on('ready', () => {
  client.user.setGame('sb!help and more ', 'https://www.twitch.tv/csruhub')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('YonlyBOT(beta) INFO')
    .setDescription(`•prefix --> sb!
:beginner: COMMANDS:zap:
  =====================================
  || sb!mass 
  || sb!support 
  || sb!info 
  || sb!say 
  || sb!ping 
  || sb!serverinfo 
  || sb!restart 
  || sb!invite 
  || sb!botinfo  
  || sb!assistance
  || sb!botmode
  || sb!pricegenerator
  || sb!buygenerator
  || sb!checkgenerator
  ||
  =====================================
  power by After Night `)
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '300268467322486785') {
    if (message.content.startsWith(`sb!restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor('RANDOM')
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'botinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('BOT INFO')
  embed.addField('Name', 'YonlyBOT(beta)', true)
  embed.addField('Prefix', 'sb!', true)
  embed.addField('Tag:', '6777', true)
  embed.addField('Created at:', '2018-06-13 12:52:59.660000', true)
  embed.addField('ID', '300268467322486785', true)
  embed.addField('Made with:', 'Node')
  embed.addField('Creator', '@Yonly#4995', true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});    
   
  client.on('message', message => {    
    if(message.content.startsWith('sb!mass')) {
    if(message.author.id === "300268467322486785" ||
message.author.id === "405337137735663618"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === 'sb!invite') {
      msg.channel.send('Invite **SBOT** https://discordapp.com/api/oauth2/authorize?client_id=463697410707816448&permissions=0&scope=bot  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === 'sb!support') {
      msg.channel.send('support server ---> https://discord.gg/2vwmHNm');
    }
  });

client.on('message', msg => {
    if (msg.content === 'sb!assistance') {
      msg.channel.send('SCRIPTER YONLY ---> @Yonly#4995');
    }
  });
  
client.on('message', msg => {
    if (msg.content === 'sb!botmode') {
      msg.channel.send('This bot is in premium mode!');
    }
  });
    

client.on('message', msg => {
    if (msg.content === 'sb!info') {
      msg.channel.send('My Owner : @Yonly#4995');
    }
  });
  
client.on('message', msg => {
    if (msg.content === 'sb!buygenerator') {
      msg.channel.send('Your request to buy the generator has been sent! You will receive a private message from the founder! stay online!');
    }
  });
  
client.on('message', msg => {
    if (msg.content === 'sb!pricegenerator') {
      msg.channel.send('All the generator price information you will find here # buy-generator !');
    }
  });

client.on('guildMemberAdd', member => {
    var joinrole = member.guild.roles.find('name', '✅MEMBER');
    member.addRole(joinrole);
    let channel  = member.guild.channels.find('name', 's');
    let memberavatar  = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', `**:v: Bine ai venit pe YonlyServerRo-comunity!:smiley: :heavy_check_mark:**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 's');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Bye -', `**A iesit :sob:... Speram sa te mai intorci pe la noi ... Esti mereu bine venit**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.TOKEN);
