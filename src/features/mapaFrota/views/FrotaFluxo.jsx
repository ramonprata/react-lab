import React, { useRef, useEffect, useState } from 'react';
import { isFluxoSubindo } from '../utils';
import ObjetosEstacoes from './ObjetosEstacoes';

const FrotaFluxo = (props) => {
  const containerObjetosRef = useRef(null);
  const [mapHeight, setHeight] = useState('auto');
  const { sentidoFluxo, maxWidthMapa, estacoes, estacoesComPosicoes } = props;
  const { mapa, linhaPontilhada, containerEstacoes } = getStyles(maxWidthMapa);
  const fluxoSubindo = isFluxoSubindo(sentidoFluxo);
  const posicaoEstacoes = {
    top: fluxoSubindo ? 0 : 'unset',
    bottom: !fluxoSubindo ? 0 : 'unset',
  };

  useEffect(() => {
    if (Boolean(containerObjetosRef.current)) {
      setHeight(containerObjetosRef.current.offsetHeight * 1.5);
    }
  }, [containerObjetosRef]);

  const plotarObjetoNoMapa = mapHeight !== 'auto';

  const renderObjetos = () => {
    return (
      <ObjetosEstacoes
        estacoesComPosicoes={estacoesComPosicoes}
        sentidoFluxo={sentidoFluxo}
        plotarObjetoNoMapa={plotarObjetoNoMapa}
      />
    );
  };

  return (
    <div style={{ ...mapa, height: mapHeight }} ref={containerObjetosRef}>
      {renderObjetos()}
      <div style={{ ...containerEstacoes, ...posicaoEstacoes }}>
        {estacoes}
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
      position: 'relative',
    },
    linhaPontilhada: {
      border: 'none',
      borderTop: '2px dotted #aaa',
      minWidth: maxWidthMapa,
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
