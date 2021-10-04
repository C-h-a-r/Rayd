<p align="center">
  <img width="250" src="https://cdn.discordapp.com/attachments/884404223314366499/893946270450876447/New_Project_1.png">
</p>
<h1 align="center"> Rayd </h1>
<p align="center">
  <b >The Server Destroyer!</b>
</p>

<br>


## **Description**
A Package To Help Create A Server Raiding Bot!


### **Installation**
```
npm i chars-rayd
```
<br>

### **How To Use**
```
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    "GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

const Raid = require('chars-rayd');

Raid(client, {
    deleteCommand: false/true,
    command: "Command Name",
    everyonePing: false/true,
    customID: "User ID",
    autoSpamPing: false/true,
    massChannel: false/true
})


client.login("Bot Token")
```

