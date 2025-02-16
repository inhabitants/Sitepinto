
/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react' {
  export * from 'react'
  export const useState: any
  export const useCallback: any
  export const useEffect: any
  export const useRef: any
  export const useMemo: any
  export const useId: any
  export const useContext: any
  export const createContext: any
  export type FC<P = {}> = React.FunctionComponent<P>
  export type SVGProps<T> = React.SVGProps<T>
  export type ReactNode = React.ReactNode
  export type ElementRef<T> = React.ElementRef<T>
  export type ComponentProps<T> = React.ComponentProps<T>
  export type HTMLAttributes<T> = React.HTMLAttributes<T>
  export type ButtonHTMLAttributes<T> = React.ButtonHTMLAttributes<T>
  export type InputHTMLAttributes<T> = React.InputHTMLAttributes<T>
  export type TextareaHTMLAttributes<T> = React.TextareaHTMLAttributes<T>
  export type ThHTMLAttributes<T> = React.ThHTMLAttributes<T>
  export type TdHTMLAttributes<T> = React.TdHTMLAttributes<T>
  export type ComponentType<P = any> = React.ComponentType<P>
  export type ReactElement = React.ReactElement
  export type CSSProperties = React.CSSProperties
  export type ComponentPropsWithoutRef<T> = React.ComponentPropsWithoutRef<T>
  export const forwardRef: typeof React.forwardRef
}

declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  export const Menu: FC<SVGProps<SVGSVGElement>>
  export const Check: FC<SVGProps<SVGSVGElement>>
  export const ArrowRight: FC<SVGProps<SVGSVGElement>>
  export const ArrowLeft: FC<SVGProps<SVGSVGElement>>
  export const MessageCircle: FC<SVGProps<SVGSVGElement>>
  export const Coffee: FC<SVGProps<SVGSVGElement>>
  export const BookText: FC<SVGProps<SVGSVGElement>>
  export const LineChart: FC<SVGProps<SVGSVGElement>>
  export const TestTube: FC<SVGProps<SVGSVGElement>>
  export const Users: FC<SVGProps<SVGSVGElement>>
  export const Lightbulb: FC<SVGProps<SVGSVGElement>>
  export const ChevronDown: FC<SVGProps<SVGSVGElement>>
  export const ChevronRight: FC<SVGProps<SVGSVGElement>>
  export const ChevronUp: FC<SVGProps<SVGSVGElement>>
  export const ChevronLeft: FC<SVGProps<SVGSVGElement>>  
  export const X: FC<SVGProps<SVGSVGElement>>
  export const Circle: FC<SVGProps<SVGSVGElement>>
  export const Search: FC<SVGProps<SVGSVGElement>>
  export const Dot: FC<SVGProps<SVGSVGElement>>
  export const MoreHorizontal: FC<SVGProps<SVGSVGElement>>
  export const GripVertical: FC<SVGProps<SVGSVGElement>>
  export const Twitter: FC<SVGProps<SVGSVGElement>>
  export const Youtube: FC<SVGProps<SVGSVGElement>>
  export const Linkedin: FC<SVGProps<SVGSVGElement>>
  export const GraduationCap: FC<SVGProps<SVGSVGElement>>
  export const BookOpen: FC<SVGProps<SVGSVGElement>>
  export const Puzzle: FC<SVGProps<SVGSVGElement>>
  export const Apple: FC<SVGProps<SVGSVGElement>>
  export type LucideIcon = FC<SVGProps<SVGSVGElement>>
}

declare module 'framer-motion' {
  export const motion: any
}

declare module '@radix-ui/react-alert-dialog' {
  export * from '@radix-ui/react-alert-dialog'
}
