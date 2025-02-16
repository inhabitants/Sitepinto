/// <reference types="vite/client" />

declare module 'vite' {
  interface ConfigEnv {
    mode: string
    command: string
  }

  interface UserConfig {
    plugins?: any[]
    server?: {
      host?: string
      port?: number
    }
    resolve?: {
      alias?: Record<string, string>
    }
    build?: {
      outDir?: string
      sourcemap?: boolean
    }
  }

  export function defineConfig(config: UserConfig | ((env: ConfigEnv) => UserConfig)): UserConfig
}

declare module '@vitejs/plugin-react' {
  import type { Plugin } from 'vite'
  export default function react(options?: any): Plugin
}

declare module 'lovable-tagger' {
  import type { Plugin } from 'vite'
  export const componentTagger: () => Plugin
}

declare module 'node:path' {
  export function resolve(...paths: string[]): string
}

declare const __dirname: string
declare const process: { cwd(): string } 