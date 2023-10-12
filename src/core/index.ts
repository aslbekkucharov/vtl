import { Telegram } from '../api'
import { pretty } from 'js-object-pretty-print'
import { LibOptionsTypes, LogMessageType, LogOptions } from "src/types"

class LoggerPlugin {

    private bot: Telegram

    constructor(options: LibOptionsTypes) {
        this.bot = new Telegram(options)
    }

    public sendLog(message: LogMessageType, options?: LogOptions) {

        if (options?.shouldBeFormatted) {

            message = pretty(message)

            return this.bot.sendMessage('<code>' + message + '</code>', { parse_mode: 'html' })
        }

        return this.bot.sendMessage(message)
    }
}

export { LoggerPlugin }