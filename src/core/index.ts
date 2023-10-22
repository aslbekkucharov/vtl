import { Telegram } from '../api'
import { pretty } from 'js-object-pretty-print'
import { LibOptionsTypes, LogMessageType, LogOptions } from "src/types"

class LoggerPlugin {

    private bot: Telegram
    private codeLang: string

    constructor(options: LibOptionsTypes) {
        this.bot = new Telegram(options)
        this.codeLang = options.codeLang || 'js'
    }

    public sendLog(message: LogMessageType, options?: LogOptions) {

        if (options?.shouldBeFormatted) {
            let codeLang = this.codeLang

            message = pretty(message)

            if (options.lang) {
                codeLang = options.lang
            }

            
            return this.bot.sendMessage("```" + `${codeLang}\n` + message + "\n```", { parse_mode: 'MarkdownV2' })
        }

        return this.bot.sendMessage(message)
    }
}

export { LoggerPlugin }