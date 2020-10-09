import React from 'react';
import { MAX_WIDTH_OBJ, MAX_HEIGHT_OBJ, getMaximoTamanhoMapa } from '../utils';
import MapaEstacoes from './MapaEstacoes';

const FrotaFluxo = (props) => {
  const { sentidoFluxo, estacoesComPosicoes, trens } = props;
  const { mapa, linhaPontilhada, containerEstacoes } = getStyles(
    estacoesComPosicoes
  );

  const fluxoSubindo = sentidoFluxo === 'Subindo';
  const posicaoEstacoes = fluxoSubindo
    ? {
        top: 0,
      }
    : {
        bottom: 0,
      };

  return (
    <div style={{ ...mapa }}>
      <div style={{ ...containerEstacoes, ...posicaoEstacoes }}>
        <MapaEstacoes
          sentidoFluxo={sentidoFluxo}
          estacoesComPosicoes={estacoesComPosicoes}
          trens={trens}
        />
        <hr
          style={{
            ...linhaPontilhada,
            bottom: fluxoSubindo ? 0 : 'unset',
            top: !fluxoSubindo ? 0 : 'unset',
          }}
        />
      </div>
    </div>
  );
};

const getStyles = (estacoesComPosicoes) => {
  return {
    mapa: {
      // backgroundColor: 'violet',
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
    linhaPontilhada: {
      border: 'none',
      borderTop: '2px dotted #000',
      width: getMaximoTamanhoMapa(estacoesComPosicoes),
      left: 0,
      position: 'absolute',
    },
    containerEstacoes: {
      position: 'absolute',
      height: 60,
      width: '100%',
      bottom: 0,
    },
  };
};

export default FrotaFluxo;
