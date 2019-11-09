const discord = require("discord.js")
const client = new discord.Client()
const token = "Add-Token-Here"

client.on("login", () => {
    console.log("I has logged in. yey")
})

client.on("message", (message) => {
    var waysToKill = [
        "died by choking on their own saliva.",
        "was pushed off a roof.",
        "slipped and fell while sitting up.",
        "died while waking up.",
        "inhaled a tarantula in their sleep.",
        "went to a zoo and greeted a zookeeper who turned out to be a hungry crocodile in disguise.",
        "spoiled Endgame.",
        "ate a dictionary.",
        "didn't get out of the outdoor pool in time when it started raining powered toasters.",
        "stuck their head in a washing machine while it was washing their underwear because 'it looked cool'.",
        "collided with Harambe while Naruto running and got yeeted 50000 feet into the air as punishment from Harambe.",
        "Naruto ran into a wall with their eyes open.",
        "offended Elmo. Guess who's burning in hell now.",
        "leaped into a sinkhole because they thought it was a footprint of a dinosaur and wanted to explore.",
        "fought the sidewalk. One of them is dead now.",
        "challenged the wall to a death match. The wall won.",
        "hit their head on a sharp table corner after slipping in a puddle of their spilt dihydrogen monoxide.",
        "kicked a cat.",
        "bit a sea urchin.",
        "dived into an octopus.",
        "glared at their teacher.",
        "disappeared off the face of the Earth.",
        "consumed a cloud and floated away to the brink of existence."
    ]
    if (message.content.startsWith("m`kill")) {
        var username = message.content.split(" ")
        var wayToDie = waysToKill[Math.floor(Math.random() * waysToKill.length - 1) + 1];
        message.reply(`${username[1]} ${wayToDie}`)
    } else if (message.content.startsWith("m`help")) {
        message.reply("Type 'm`kill' and then someone's name to kill them.")
    }
})

client.login(token)
