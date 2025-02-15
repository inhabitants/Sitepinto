import { Node, Edge } from '@xyflow/react';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'default',
    data: { 
      label: 'Caçadores e Coletores (Nível 1)',
    },
    position: { x: 300, y: 50 },
    style: {
      background: '#9b87f5',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '20px',
      width: 280,
      textAlign: 'center' as const
    }
  },
  {
    id: '2',
    type: 'default',
    data: { 
      label: 'Agricultura (Nível 2)',
    },
    position: { x: 150, y: 200 },
    style: {
      background: '#7E69AB',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '20px',
      width: 280,
      textAlign: 'center' as const
    }
  },
  {
    id: '3',
    type: 'default',
    data: { 
      label: 'Ferraria (Nível 3)',
    },
    position: { x: 450, y: 200 },
    style: {
      background: '#6E59A5',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '20px',
      width: 280,
      textAlign: 'center' as const
    }
  },
  {
    id: '4',
    type: 'default',
    data: { 
      label: 'Exploratório (Nível 4)',
    },
    position: { x: 300, y: 350 },
    style: {
      background: '#1A1F2C',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '20px',
      width: 280,
      textAlign: 'center' as const
    }
  },
  {
    id: '1-desc',
    type: 'default',
    data: { 
      label: 'Caça e coleta de oportunidades: drops, whitelists, farms, DeFi em diferentes nichos e chains'
    },
    position: { x: 300, y: -30 },
    style: {
      background: 'rgba(155, 135, 245, 0.1)',
      border: 'none',
      borderRadius: '12px',
      padding: '15px',
      width: 280,
      fontSize: '12px',
      textAlign: 'center' as const
    }
  },
  {
    id: '2-desc',
    type: 'default',
    data: { 
      label: 'Produção de conteúdo e conhecimento para expandir farms e melhorar geração de renda passiva'
    },
    position: { x: 150, y: 120 },
    style: {
      background: 'rgba(126, 105, 171, 0.1)',
      border: 'none',
      borderRadius: '12px',
      padding: '15px',
      width: 280,
      fontSize: '12px',
      textAlign: 'center' as const
    }
  },
  {
    id: '3-desc',
    type: 'default',
    data: { 
      label: 'Laboratório colaborativo para construção de ferramentas úteis para comunidade e clientes'
    },
    position: { x: 450, y: 120 },
    style: {
      background: 'rgba(110, 89, 165, 0.1)',
      border: 'none',
      borderRadius: '12px',
      padding: '15px',
      width: 280,
      fontSize: '12px',
      textAlign: 'center' as const
    }
  },
  {
    id: '4-desc',
    type: 'default',
    data: { 
      label: 'Pesquisa e experimentação de novas tecnologias, incluindo HelenAI como brand compartilhada'
    },
    position: { x: 300, y: 270 },
    style: {
      background: 'rgba(26, 31, 44, 0.1)',
      border: 'none',
      borderRadius: '12px',
      padding: '15px',
      width: 280,
      fontSize: '12px',
      textAlign: 'center' as const
    }
  }
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#9b87f5' } },
  { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#9b87f5' } },
  { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#7E69AB' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#6E59A5' } },
  { id: 'e1-1d', source: '1', target: '1-desc', style: { stroke: 'rgba(155, 135, 245, 0.3)' } },
  { id: 'e2-2d', source: '2', target: '2-desc', style: { stroke: 'rgba(126, 105, 171, 0.3)' } },
  { id: 'e3-3d', source: '3', target: '3-desc', style: { stroke: 'rgba(110, 89, 165, 0.3)' } },
  { id: 'e4-4d', source: '4', target: '4-desc', style: { stroke: 'rgba(26, 31, 44, 0.3)' } },
];
