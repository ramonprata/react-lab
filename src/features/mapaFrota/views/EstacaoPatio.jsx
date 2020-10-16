import React from 'react';
import { TAMANHO_PONTO_ESTACAO } from '../utils';

const EstacaoPatio = (props) => {
  const { estacao, positionX, fluxoSubindo } = props;
  const {
    estacaoContent,
    container,
    marcadorEstacao,
    estacaoContainer,
  } = getStyles(estacao, positionX, fluxoSubindo);

  return (
    <React.Fragment>
      <div style={container}>
        <div style={marcadorEstacao} />
        <div style={estacaoContainer}>
          <div style={estacaoContent}>{estacao.estacaoPatio}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

const getStyles = (estacao, positionX, fluxoSubindo) => {
  return {
    container: {
      display: 'flex',
      position: 'absolute',
      backgroundColor: '#fff',
      height: 48,
      left: positionX,
      flexDirection: fluxoSubindo ? 'column-reverse' : 'column',
      justifyContent: 'space-around',
    },

    marcadorEstacao: {
      width: TAMANHO_PONTO_ESTACAO,
      height: TAMANHO_PONTO_ESTACAO,
      borderRadius: 4,
      zIndex: 1,
      left: positionX,
      backgroundColor: estacao.marco ? '#000' : '#aaa',
    },

    estacaoContainer: {
      textOrientation: 'mixed',
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
      color: estacao.marco ? '#aaa' : 'transparent',
    },

    estacaoContent: {
      height: 32,
    },
  };
};

export default EstacaoPatio;
