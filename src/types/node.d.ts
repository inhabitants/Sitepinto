/// <reference types="node" />

declare module 'node:path' {
  export * from 'path'
}

declare const __dirname: string
declare const process: {
  cwd(): string
  env: Record<string, string | undefined>
} 