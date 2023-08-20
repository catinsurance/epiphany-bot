import { Client, GatewayIntentBits } from "discord.js"
import Config from "./classes/config"
import listeners from "./utils/listeners"

function main() {
    // Start the bot
    console.log("Starting Epiphany bot...")

    var config = new Config()
    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
        ]
    })
    client.login(config.getBotToken())

    // Establist the listeners
    listeners.forEach(listener => {
        listener(client, config)
    })
}

main()