import { AxiosInstance } from 'axios'
import { LibOptionsTypes } from "src/types"
import { createHttpClient } from "src/shared"

class Telegram {
    private apiUrl: string
    private http: AxiosInstance

    constructor(options: LibOptionsTypes) {
        this.apiUrl = 'https://api.telegram.org/bot'

        this.http = createHttpClient({ baseURL: this.apiUrl }, options.token, options.chatId)
    }

    sendMessage(message: string) {
        return this.http.post('/sendMessage', {
            text: message
        })
    }
}

export { Telegram }