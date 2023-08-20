import * as dotenv from "dotenv"
import toml from "toml"
import fs from "fs"
import { join } from "path"

class Config {
    tomlData: any

    constructor() {
        dotenv.config()
        const path = join(__dirname, "..", "settings.toml")
        this.tomlData = toml.parse(fs.readFileSync(path, "utf-8"))
    }

    getBotToken() {
        return process.env.BOT_TOKEN
    }

    getAdmins() {
        return this.tomlData.bot.admins
    }

    isAdmin(id: string | number) {
        // Question mark prevents error if ADMIN_IDS is not defined
        return this.tomlData.bot.admins.includes(id.toString())
    }
}

export default Config