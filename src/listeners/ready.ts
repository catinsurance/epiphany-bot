import { Client } from "discord.js";
import Config from "../classes/config";

export default (client: Client, _: Config): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return
        }

        console.log(`${client.user.username} is online!`)
    })
}