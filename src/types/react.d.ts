/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react' {
  export * from 'react'
  export type KeyboardEvent<T> = React.KeyboardEvent<T>
  export const useState: typeof React.useState
  export const useCallback: typeof React.useCallback
  export const useEffect: typeof React.useEffect
  export const useRef: typeof React.useRef
  export const useMemo: typeof React.useMemo
  export const useId: typeof React.useId
  export const useContext: typeof React.useContext
  export const createContext: typeof React.createContext
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
  export type ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> = React.ReactElement<P, T>
  export type JSXElementConstructor<P> = React.JSXElementConstructor<P>
  export type CSSProperties = React.CSSProperties
  export type ComponentPropsWithoutRef<T> = React.ComponentPropsWithoutRef<T>
  export const forwardRef: typeof React.forwardRef
}

declare module '@radix-ui/react-sheet' {
  import type { ComponentProps } from 'react'
  
  export interface SheetContentProps extends ComponentProps<'div'> {
    side?: 'top' | 'right' | 'bottom' | 'left'
  }
  
  export interface SheetProps {
    Content: React.FC<SheetContentProps>
  }
  
  const Sheet: SheetProps
  export = Sheet
}

declare module 'recharts' {
  import { ComponentProps } from 'react'
  
  interface TooltipPayload {
    value: any
    name: string
    dataKey: string
    payload: any
    color?: string
  }

  interface TooltipProps {
    active?: boolean
    payload?: TooltipPayload[]
    label?: string
    formatter?: (value: any, name: string) => [string, string]
    labelFormatter?: (label: any) => string
    labelClassName?: string
  }
  
  interface LegendProps {
    payload?: Array<{
      value: any
      type?: string
      id?: string
      color?: string
      payload?: any
      dataKey?: string
    }>
    verticalAlign?: 'top' | 'bottom' | 'middle'
  }
  
  export interface ResponsiveContainerProps extends ComponentProps<'div'> {
    aspect?: number
    width?: string | number
    height?: string | number
    children: React.ReactNode
  }

  export const ResponsiveContainer: React.FC<ResponsiveContainerProps>
  export const Tooltip: React.FC<TooltipProps>
  export const Legend: React.FC<LegendProps>
}

declare module 'embla-carousel-react' {
  export interface EmblaOptionsType {
    align?: 'start' | 'center' | 'end'
    axis?: 'x' | 'y'
    direction?: 'ltr' | 'rtl'
    startIndex?: number
    loop?: boolean
    dragFree?: boolean
    draggable?: boolean
    containScroll?: boolean | 'trimSnaps' | 'keepSnaps'
  }

  export type EmblaCarouselApi = {
    canScrollNext: () => boolean
    canScrollPrev: () => boolean
    scrollNext: () => void
    scrollPrev: () => void
    on: (eventName: string, callback: (api: EmblaCarouselApi) => void) => void
    off: (eventName: string, callback: (api: EmblaCarouselApi) => void) => void
  }

  export type UseEmblaCarouselType = [(node: HTMLElement | null) => void, EmblaCarouselApi | null]

  export default function useEmblaCarousel(
    options?: EmblaOptionsType,
    plugins?: any[]
  ): UseEmblaCarouselType
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
  import { ComponentProps } from 'react'
  
  const Root: React.FC<any>
  const Trigger: React.FC<any>
  const Portal: React.FC<any>
  const Overlay: React.FC<ComponentProps<'div'>>
  const Content: React.FC<ComponentProps<'div'>>
  const Title: React.FC<ComponentProps<'h2'>>
  const Description: React.FC<ComponentProps<'p'>>
  const Action: React.FC<ComponentProps<'button'>>
  const Cancel: React.FC<ComponentProps<'button'>>

  export {
    Root,
    Trigger,
    Portal,
    Overlay,
    Content,
    Title,
    Description,
    Action,
    Cancel
  }
}
