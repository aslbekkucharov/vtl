import { LoggerPlugin } from "./core"
import type { LibOptionsTypes } from 'src/types/index';

const Vtl = {
    install(Vue: any, options: LibOptionsTypes) {
        const logger = new LoggerPlugin(options)
        const vueVersion = Vue.version.split('.')[0]

        switch (vueVersion) {
            case '2':

                if (Vue.prototype.$vtl) {
                    return
                }

                Object.defineProperty(Vue.prototype, '$vtl', {
                    get: () => logger
                })

                break

            case '3':
                Vue.provide('$vtl', logger)
                break

            default:
                throw new Error('Invalid vue version')
        }

    }
}

const plugin = new LoggerPlugin({ token: '6317048249:AAHGNQy9DJQJVAvF4O8nedGgY0B8l4Ia9lE', chatId: -1001976912026 })

plugin.sendLog({ name: 'Aslbek', nationality: { lang: 'uz', nat: 'Uzbek' } }, { sendAsCode: true })

export { Vtl }