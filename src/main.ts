import { LoggerPlugin } from "src/core"
import type { LibOptionsTypes } from 'src/types/index';

const VueTelegramErrorLogger = {
    install(app: any, options: LibOptionsTypes) {

        const logger = new LoggerPlugin(options)
        
        app.provide('$vtl', logger)
        
    }
}

export { VueTelegramErrorLogger }