declare module 'node:path' {
  export * from 'path'
}

declare const __dirname: string
declare const process: {
  env: Record<string, string | undefined>
} 