import React from 'react';
import { getMaximoTamanhoMapa, isFluxoSubindo } from '../utils';
import Estacoes from './Estacoes';

const FrotaFluxo = (props) => {
  const { sentidoFluxo, maxWidthMapa, estacoes, objetosEstacoes } = props;
  const { mapa, linhaPontilhada, containerEstacoes } = getStyles(maxWidthMapa);
  const fluxoSubindo = isFluxoSubindo(sentidoFluxo);
  const posicaoEstacoes = {
    top: fluxoSubindo ? 0 : 'unset',
    bottom: !fluxoSubindo ? 0 : 'unset',
  };

  return (
    <div style={{ ...mapa }}>
      <div style={{ ...containerEstacoes, ...posicaoEstacoes }}>
        {estacoes}
        {objetosEstacoes}
        <hr
          style={{
            ...linhaPontilhada,
            bottom: posicaoEstacoes.top - 3,
            top: posicaoEstacoes.bottom - 3,
          }}
        />
      </div>
    </div>
  );
};

const getStyles = (maxWidthMapa) => {
  return {
    mapa: {
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
    linhaPontilhada: {
      border: 'none',
      borderTop: '2px dotted #aaa',
      width: maxWidthMapa,
      left: 0,
      position: 'absolute',
      zIndex: 0,
    },
    containerEstacoes: {
      position: 'absolute',
      height: 48,
      width: '100%',
      bottom: 0,
    },
  };
};

export default FrotaFluxo;
