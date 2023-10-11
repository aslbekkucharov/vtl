import { LoggerPlugin } from "src/core"
import type { LibOptionsTypes } from 'src/types/index';

const Vtl = {
    install(app: any, options: LibOptionsTypes) {

        console.log(app);
        

        const logger = new LoggerPlugin(options)
        const vueVersion = app.version.split('.')[0]

        switch (vueVersion) {
            case '2':
                console.log(app)
                break

            case '3':
                app.provide('$vtl', logger)
                break

            default:
                throw new Error('Invalid vue version')
        }

    }
}

export { Vtl }