const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const help = new discord.MessageEmbed()
    .setColor('#b434eb')
    .setTitle('TikTokStats - Help')
    .addField("Profile","Rechercher le profil d'un utilisateur TikTok affichant ses informations. \n ** Utilisation: ** t!profile TikTok \n")
    .addField("Hashtag","Rechercher un hashtag TikTok affichant des informations. \n ** Utilisation: ** t!hash TikTok \n")
    .addField("Help","Envoie ce message d'aide \n ** Utilisation: ** t!help")
    .setFooter("Bot by Julioju#1015", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
    message.channel.send({embed: help })
};
