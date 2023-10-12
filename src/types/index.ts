export type LogMessageType = string | object

export interface LibOptionsTypes {
    token: string
    chatId: string | number
}

export interface LogOptions {
    shouldBeFormatted?: boolean
}