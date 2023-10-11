import { defineConfig } from 'vite'

import path from "path"
import typescript from "@rollup/plugin-typescript"
import { typescriptPaths } from "rollup-plugin-typescript-paths"

export default defineConfig({
    resolve: {
        alias: [{
            find: "@",
            replacement: path.resolve(__dirname, "./src"),
        }],
    },

    build: {
        minify: true,
        manifest: true,
        reportCompressedSize: true,

        lib: {
            formats: ["es", "cjs"],
            fileName: "vue-telegram-error-logger",
            entry: path.resolve(__dirname, "src/main.ts")
        },

        rollupOptions: {

            plugins: [
                
                typescriptPaths({
                    preserveExtensions: true,
                }),
                
                typescript({
                    sourceMap: false,
                    declaration: true,
                    outDir: "dist",
                })
            ]
        },
    }
})