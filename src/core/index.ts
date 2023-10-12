import { Telegram } from '../api'
import beautify from 'json-beautify'
import { LibOptionsTypes, LogMessageType, LogOptions } from "src/types"

class LoggerPlugin {

    private bot: Telegram

    constructor(options: LibOptionsTypes) {
        this.bot = new Telegram(options)
    }

    public sendLog(message: LogMessageType, options?: LogOptions) {

        if (options?.sendAsCode) {
            
            message = beautify(message, null, 2, 50)
            
            return this.bot.sendMessage('<code>' + message + '</code>', { parse_mode: 'html' })
        }

        return this.bot.sendMessage(message)
    }
}

export {  LoggerPlugin }