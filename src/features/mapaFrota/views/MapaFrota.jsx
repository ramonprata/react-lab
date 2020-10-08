import React from 'react';
import FrotaFluxo from './FrotaFluxo';
const MapaFrota = (props) => {
  const { container, containerFluxo } = styles;

  return (
    <div style={container}>
      <div
        style={{
          display: 'grid',
          backgroundColor: 'orange',
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'repeat(2, 300px)',
          width: '80%',
        }}
      >
        <div>vazios</div>
        <div style={containerFluxo}>
          <FrotaFluxo />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'auto',
  },
  containerFluxo: {
    display: 'grid',
    alignItems: 'center',
    position: 'relative',
    gridTemplateColumns: 'auto, 1fr',
    borderTop: 'dashed 1px',
  },
  mapa: {},
};
export default MapaFrota;
