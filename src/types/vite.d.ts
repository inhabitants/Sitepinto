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
  }

  export function defineConfig(config: UserConfig | ((env: ConfigEnv) => UserConfig)): UserConfig
}

declare module '@vitejs/plugin-react' {
  const plugin: any
  export default plugin
}

declare module 'lovable-tagger' {
  const plugin: any
  export const componentTagger: () => any
}

declare module 'path' {
  export function resolve(...paths: string[]): string
}

declare module '@xyflow/react' {
  export * from '@xyflow/react'
}

declare const __dirname: string
declare const process: { cwd(): string } 