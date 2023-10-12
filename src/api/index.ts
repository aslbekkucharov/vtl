import { AxiosInstance } from 'axios'
import { createHttpClient } from "../shared"
import { LibOptionsTypes, LogMessageType } from "src/types"

class Telegram {
    private apiUrl: string
    private http: AxiosInstance

    constructor(options: LibOptionsTypes) {
        this.apiUrl = 'https://api.telegram.org/bot'

        this.http = createHttpClient({ baseURL: this.apiUrl }, options.token, options.chatId)
    }

    sendMessage(message: LogMessageType, options?: object) {
        return this.http.post('/sendMessage', {
            ...options,
            text: message
        })
    }
}

export { Telegram }