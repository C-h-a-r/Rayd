async function Raid(client, options = []) {
    const chalk = require('chalk');
        const o = options;
    
        client.on("ready", () => {
            console.log(chalk.bold.magenta(`${client.user.tag} is online!`));
        })
    

        client.on("messageCreate", (message) => {
                if (message.content === o.command) {
                    if (o.deleteCommand) message.delete();
                    if (o.everyonePing) {
                        message.channel.send({ content: "@everyone" });
                    } else {
                        if (o.customID) {
                        message.channel.send({ content: `<@${o.customID}>` })
                        }
                    }
                } else {
                    if (message.content === "@everyone" || `<@${o.customID}>`) {
                        if (o.autoSpamPing) {
                            if (o.everyonePing) {
                                message.channel.send({ content: "@everyone" });
                            } else {
                                if (o.customID) {
                                    message.channel.send({ content: `<@${o.customID}>` })

                                }
                            }

                        } else {
                            return;
                        }
                    }
                }



                
 })
    }
    module.exports = Raid;