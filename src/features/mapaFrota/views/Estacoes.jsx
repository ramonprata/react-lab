import React from 'react';
import { getPosicaoX, isFluxoSubindo } from '../utils';
import EstacaoPatio from './EstacaoPatio';

const Estacoes = (props) => {
  const { sentidoFluxo, estacoesComPosicoes } = props;

  return estacoesComPosicoes.map((estacao, idx) => {
    const fluxoSubindo = isFluxoSubindo(sentidoFluxo);
    const posicaoX = getPosicaoX(idx, estacao.marco);
    return (
      <EstacaoPatio
        key={`estacao-${idx}`}
        estacao={estacao}
        posicaoX={posicaoX}
        fluxoSubindo={fluxoSubindo}
      />
    );
  });
};

export default Estacoes;
