declare module '@xyflow/react' {
  import { FC } from 'react'

  export interface Node {
    id: string
    type?: string
    data: any
    position: { x: number; y: number }
    style?: any
  }

  export interface Edge {
    id: string
    source: string
    target: string
    animated?: boolean
    style?: any
  }

  export const ReactFlow: FC<any>
  export const Background: FC<any>
  export function useNodesState(initialNodes: Node[]): [Node[], any, any]
  export function useEdgesState(initialEdges: Edge[]): [Edge[], any, any]
  export function addEdge(params: any, edges: Edge[]): Edge[]
} 