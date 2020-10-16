import React from 'react';
import { getPositionX, isFluxoSubindo } from '../utils';
import EstacaoPatio from './EstacaoPatio';

const Estacoes = (props) => {
  const { sentidoFluxo, estacoesComPosicoes } = props;

  return estacoesComPosicoes.map((estacao, idx) => {
    const fluxoSubindo = isFluxoSubindo(sentidoFluxo);
    const positionX = getPositionX(idx, estacao.marco);
    return (
      <EstacaoPatio
        key={`estacao-${idx}`}
        estacao={estacao}
        positionX={positionX}
        fluxoSubindo={fluxoSubindo}
      />
    );
  });
};

export default Estacoes;
