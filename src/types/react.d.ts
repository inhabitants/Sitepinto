/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react' {
  export * from 'react'
  export const useState: any
  export const useCallback: any
  export const useEffect: any
  export const useRef: any
  export type FC<P = {}> = React.FunctionComponent<P>
  export type SVGProps<T> = React.SVGProps<T>
}

declare module 'react/jsx-runtime' {
  export * from 'react/jsx-runtime'
}

declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  export const Menu: FC<SVGProps<SVGSVGElement>>
  export const Check: FC<SVGProps<SVGSVGElement>>
  export const ArrowRight: FC<SVGProps<SVGSVGElement>>
  export const MessageCircle: FC<SVGProps<SVGSVGElement>>
  export const Coffee: FC<SVGProps<SVGSVGElement>>
  export const BookText: FC<SVGProps<SVGSVGElement>>
  export const LineChart: FC<SVGProps<SVGSVGElement>>
  export const TestTube: FC<SVGProps<SVGSVGElement>>
  export const Users: FC<SVGProps<SVGSVGElement>>
  export const Lightbulb: FC<SVGProps<SVGSVGElement>>
}

declare module 'framer-motion' {
  export const motion: any
} 