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

export { Vtl }