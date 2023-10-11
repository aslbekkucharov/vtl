import { Telegram } from 'src/api'
import { LibOptionsTypes } from "src/types"

class LoggerPlugin {

    private bot: Telegram

    constructor(options: LibOptionsTypes) {
        this.bot = new Telegram(options)
    }

    public sendLog(message: string) {
        return this.bot.sendMessage(message)
    }
}

export {  LoggerPlugin }