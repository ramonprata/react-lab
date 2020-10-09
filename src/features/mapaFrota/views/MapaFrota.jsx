import React from 'react';
import FrotaFluxo from './FrotaFluxo';
import { ReactComponent as Arrow } from '../assets/arrow-svg.svg';
import { Paper } from '@material-ui/core';

const MapaFrota = (props) => {
  const { container, containerTexto } = styles;

  const renderStatus = (status) => {
    return (
      <div style={containerTexto}>
        <span>{status}</span>
      </div>
    );
  };

  const renderSentidoFluxo = (sentido) => {
    const fluxoSubindo = sentido === 'Subindo';
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          // backgroundColor: 'green',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            color: '#aaa',
            width: 120,
          }}
        >
          {fluxoSubindo && <Arrow />}
          <span>{'sentidoFluxo'}</span>
          {!fluxoSubindo && <Arrow style={{ transform: 'rotate(180deg)' }} />}
        </div>
      </div>
    );
  };

  return (
    <div style={container}>
      <Paper variant="outlined">
        <div
          style={{
            display: 'grid',
            justifyItems: 'center',
            gridTemplateColumns: 'auto 1fr',
            gridTemplateRows: 'repeat(2, 300px)',
            // rowGap: 1,
            overflowX: 'auto',
            width: '80vw',
            // border: 'solid 1px black',
          }}
        >
          {renderStatus('Vazios')}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridTemplateRows: '1fr 28px',
              width: '100%',
            }}
          >
            <FrotaFluxo status="Vazios" sentidoFluxo="Subindo" />
            {renderSentidoFluxo('Subindo')}
          </div>
          {renderStatus('Carregados')}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridTemplateRows: '28px 1fr',
              width: '100%',
              borderTop: 'dotted 1px #ccc',
            }}
          >
            {renderSentidoFluxo('Descendo')}

            <FrotaFluxo status="Carregados" sentidoFluxo="Descendo" />
          </div>
        </div>
      </Paper>
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
  containerTexto: {
    width: 24,
    height: '100%',
    textOrientation: 'mixed',
    writingMode: 'vertical-rl',
    color: '#aaa',
    transform: 'rotate(180deg)',
    textAlign: 'center',
  },
};
export default MapaFrota;
