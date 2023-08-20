import { AnyThreadChannel, Client, Embed, EmbedBuilder, Message, MessagePayload } from "discord.js";
import Config from "../classes/config";

export default (client: Client, config: Config): void => {
    client.on("threadCreate", async (thread: AnyThreadChannel<boolean>, newlyCreated: boolean) => {

        if (thread.parentId !== config.tomlData.channels.bug_reports) {
            return
        }

        if (!newlyCreated) {
            return
        }

        let embedConfig = config.tomlData.strings.bug_reports_message
        let embed = new EmbedBuilder()
            .setColor(embedConfig.color)
            .setTitle(embedConfig.title)
            .setThumbnail("https://i.imgur.com/lFVrRyc.jpeg")
            .setTimestamp()

        let finalDescription = ""
        embedConfig.paragraphs.forEach((paragraph: string) => {
            finalDescription += "\n" + paragraph
        })

        embed.setDescription(finalDescription)
        await thread.send({embeds: [embed]})
    })
}