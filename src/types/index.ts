export type LogMessageType = string | object

export interface LibOptionsTypes {
    token: string
    chatId: string | number
    codeLang?: string
}

export interface LogOptions {
    shouldBeFormatted?: boolean
    lang?: string
}