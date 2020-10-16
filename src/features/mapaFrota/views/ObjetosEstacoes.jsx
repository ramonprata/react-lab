import React from 'react';
import {
  isFluxoSubindo,
  atualizaPosicaoYObjetos,
  getObjetoNaEstacao,
  MAX_HEIGHT_OBJ,
  ordenaObjetosPosicaoY,
  ordenaObjetosLocalidade,
} from '../utils';
import { trens, vagoes } from '../dados.mock';
import Trem from './Trem';
import Vagao from './Vagao';
import ObjetoEstacaoWrapper from './ObjetoEstacaoWrapper';
import LinhaAncora from './LinhaAncora';

const ObjetosEstacoes = (props) => {
  const { sentidoFluxo, estacoesComPosicoes, plotarObjetoNoMapa } = props;
  const fluxoSubindo = isFluxoSubindo(sentidoFluxo);

  const trensRender = ordenaObjetosLocalidade(trens).map((trem) => {
    return getObjetoNaEstacao(trem, estacoesComPosicoes);
  });

  const vagoesRender = ordenaObjetosLocalidade(vagoes).map((vagao) => {
    return getObjetoNaEstacao(vagao, estacoesComPosicoes, 'vagao');
  });

  const renderTrem = (trem) => {
    return (
      <React.Fragment>
        <Trem subindo={fluxoSubindo} trem={trem} />
        {trem.Vagoes &&
          trem.Vagoes.map((vagao, idx) => (
            <Vagao
              key={`vagao-${idx}`}
              subindo={fluxoSubindo}
              acoplado={true}
              vagao={vagao}
            />
          ))}
      </React.Fragment>
    );
  };

  const renderVagao = (vagao) => {
    return <Vagao subindo={fluxoSubindo} acoplado={false} vagao={vagao} />;
  };

  vagoesRender.forEach((tremVagao, idx, self) =>
    atualizaPosicaoYObjetos(tremVagao, idx, self)
  );
  const vagoesOrdenadosPosicaoY = ordenaObjetosPosicaoY(vagoesRender);
  const trensOrdenadosPosicaoY = ordenaObjetosPosicaoY(trensRender);

  const alturaMinimaPlotarObjetos =
    vagoesOrdenadosPosicaoY[vagoesOrdenadosPosicaoY.length - 1].positionY;

  const todosObjetosRender = [
    ...vagoesOrdenadosPosicaoY,
    ...trensOrdenadosPosicaoY,
  ];

  todosObjetosRender.forEach((tremVagao, idx, self) =>
    atualizaPosicaoYObjetos(tremVagao, idx, self, alturaMinimaPlotarObjetos)
  );

  return [...todosObjetosRender].map((tremVagao, idx) => {
    const renderizaTrem = tremVagao.tipo === 'trem';
    return (
      <React.Fragment key={`objeto-estacao-${idx}`}>
        <ObjetoEstacaoWrapper
          tremVagao={tremVagao}
          fluxoSubindo={fluxoSubindo}
          plotarObjetoNoMapa={plotarObjetoNoMapa}
        >
          {renderizaTrem ? renderTrem(tremVagao) : renderVagao(tremVagao)}
        </ObjetoEstacaoWrapper>

        <LinhaAncora tremVagao={tremVagao} fluxoSubindo={fluxoSubindo} />
      </React.Fragment>
    );
  });
};

export default ObjetosEstacoes;
