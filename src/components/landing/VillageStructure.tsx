
import { useCallback } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'default',
    data: { 
      label: 'Caçadores e Coletores (Nível 1)',
    },
    position: { x: 400, y: 0 },
    style: {
      background: '#9b87f5',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '20px',
      width: 280,
      textAlign: 'center'
    }
  },
  {
    id: '2',
    type: 'default',
    data: { 
      label: 'Agricultura (Nível 2)',
    },
    position: { x: 200, y: 150 },
    style: {
      background: '#7E69AB',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '20px',
      width: 280,
      textAlign: 'center'
    }
  },
  {
    id: '3',
    type: 'default',
    data: { 
      label: 'Ferraria (Nível 3)',
    },
    position: { x: 600, y: 150 },
    style: {
      background: '#6E59A5',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '20px',
      width: 280,
      textAlign: 'center'
    }
  },
  {
    id: '4',
    type: 'default',
    data: { 
      label: 'Exploratório (Nível 4)',
    },
    position: { x: 400, y: 300 },
    style: {
      background: '#1A1F2C',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '20px',
      width: 280,
      textAlign: 'center'
    }
  },
  // Descrições
  {
    id: '1-desc',
    type: 'default',
    data: { 
      label: 'Caça e coleta de oportunidades: drops, whitelists, farms, DeFi em diferentes nichos e chains'
    },
    position: { x: 400, y: -80 },
    style: {
      background: 'rgba(155, 135, 245, 0.1)',
      border: 'none',
      borderRadius: '12px',
      padding: '15px',
      width: 280,
      fontSize: '12px',
      textAlign: 'center'
    }
  },
  {
    id: '2-desc',
    type: 'default',
    data: { 
      label: 'Produção de conteúdo e conhecimento para expandir farms e melhorar geração de renda passiva'
    },
    position: { x: 200, y: 70 },
    style: {
      background: 'rgba(126, 105, 171, 0.1)',
      border: 'none',
      borderRadius: '12px',
      padding: '15px',
      width: 280,
      fontSize: '12px',
      textAlign: 'center'
    }
  },
  {
    id: '3-desc',
    type: 'default',
    data: { 
      label: 'Laboratório colaborativo para construção de ferramentas úteis para comunidade e clientes'
    },
    position: { x: 600, y: 70 },
    style: {
      background: 'rgba(110, 89, 165, 0.1)',
      border: 'none',
      borderRadius: '12px',
      padding: '15px',
      width: 280,
      fontSize: '12px',
      textAlign: 'center'
    }
  },
  {
    id: '4-desc',
    type: 'default',
    data: { 
      label: 'Pesquisa e experimentação de novas tecnologias, incluindo HelenAI como brand compartilhada'
    },
    position: { x: 400, y: 220 },
    style: {
      background: 'rgba(26, 31, 44, 0.1)',
      border: 'none',
      borderRadius: '12px',
      padding: '15px',
      width: 280,
      fontSize: '12px',
      textAlign: 'center'
    }
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#9b87f5' } },
  { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#9b87f5' } },
  { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#7E69AB' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#6E59A5' } },
  { id: 'e1-1d', source: '1', target: '1-desc', style: { stroke: 'rgba(155, 135, 245, 0.3)' } },
  { id: 'e2-2d', source: '2', target: '2-desc', style: { stroke: 'rgba(126, 105, 171, 0.3)' } },
  { id: 'e3-3d', source: '3', target: '3-desc', style: { stroke: 'rgba(110, 89, 165, 0.3)' } },
  { id: 'e4-4d', source: '4', target: '4-desc', style: { stroke: 'rgba(26, 31, 44, 0.3)' } },
];

const VillageStructure = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <section className="py-24 bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            ESTRUTURA DO VILAREJO
          </span>
          <h2 className="heading-lg mt-6">Como nos organizamos</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Nossa comunidade é estruturada em níveis que se complementam e evoluem juntos
          </p>
        </div>
        
        <div className="h-[600px] w-full rounded-xl shadow-lg bg-neutral-50">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="bottom-right"
          >
            <Background />
            <Controls />
            <MiniMap 
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
              }}
              maskColor="rgba(0, 0, 0, 0.1)"
            />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
};

export default VillageStructure;
