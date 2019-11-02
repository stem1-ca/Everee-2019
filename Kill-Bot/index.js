const discord = require("discord.js")
const client = new discord.Client()
const token = "Add-Token-Here"

client.on("login", () => {
    console.log("I has logged in. yey")
})

client.on("message", (message) => {
    var waysToKill = [
        "User died by choking on their own saliva.",
        "User was pushed off a roof.",
        "User slipped and fell while sitting up.",
        "User died while waking up.",
        "User inhaled a tarantula in their sleep.",
        "User went to a zoo and greeted a zookeeper who turned out to be a hungry crocodile in disguise.",
        "User spoiled Endgame.",
        "User ate a dictionary.",
        "User didn't get out of the outdoor pool in time when it started raining powered toasters.",
        "User stuck their head in a washing machine while it was washing their underwear because 'it looked cool'.",
        "User collided with Harambe while Naruto running and got yeeted 50000 feet into the air as punishment from Harambe.",
        "User Naruto ran into a wall with their eyes open.",
        "User offended Elmo. Guess who's burning in hell now.",
        "User leaped into a sinkhole because they thought it was a footprint of a dinosaur and wanted to explore.",
        "User fought the sidewalk. One of them is dead now.",
        "User challenged the wall to a death match. The wall won.",
        "User hit their head on a sharp table corner after slipping in a puddle of their spilt dihydrogen monoxide.",
        "User kicked a cat.",
        "User bit a sea urchin.",
        "User dived into an octopus.",
        "User glared at their teacher.",
        "User disappeared off the face of the Earth.",
        "User consumed a cloud and floated away to the brink of existence."
    ]
    if(message.content.startsWith("m`kill")) {
        message.reply("kill who?")
    }
})

client.login(token)
