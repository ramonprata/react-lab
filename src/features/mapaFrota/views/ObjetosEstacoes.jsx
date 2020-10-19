import React from 'react';
import {
  isFluxoSubindo,
  atualizaPosicaoYObjetos,
  getObjetoNaEstacao,
  ordenaObjetosPosicaoY,
  ordenaObjetosLocalidade,
  TIPOS_OBJETO_PLOTAR,
} from '../utils';
import Trem from './Trem';
import Vagao from './Vagao';
import ObjetoEstacaoWrapper from './ObjetoEstacaoWrapper';
import LinhaAncora from './LinhaAncora';

const ObjetosEstacoes = (props) => {
  const {
    sentidoFluxo,
    estacoesComPosicoes,
    plotarObjetoNoMapa,
    trens,
    vagoes,
  } = props;
  const fluxoSubindo = isFluxoSubindo(sentidoFluxo);

  const trensRender = ordenaObjetosLocalidade(trens).map((trem) => {
    return getObjetoNaEstacao(trem, estacoesComPosicoes);
  });

  const { vagao, trem } = TIPOS_OBJETO_PLOTAR;
  const vagoesRender = ordenaObjetosLocalidade(vagoes).map((objetoVagao) => {
    return getObjetoNaEstacao(objetoVagao, estacoesComPosicoes, vagao);
  });

  const onClick = (objetoNaEstacao) => {
    const { tipo } = objetoNaEstacao;
    if (tipo) {
      if (tipo === vagao) {
        console.log('vagao :>> ', objetoNaEstacao);
      } else if (tipo === 'trem') {
        console.log('trem :>> ', objetoNaEstacao);
      }
    }
    return;
  };

  const renderTrem = (trem) => {
    return (
      <React.Fragment>
        <Trem subindo={fluxoSubindo} trem={trem} onClick={onClick} />
        {trem.Vagoes &&
          trem.Vagoes.map((vagao, idx) => {
            const { Vagoes, ...tremInfo } = trem;
            return (
              <Vagao
                key={`vagao-${idx}`}
                subindo={fluxoSubindo}
                acoplado={true}
                vagao={{ ...vagao, tipo: vagao, posicaoNoTrem: idx }}
                tremInfo={tremInfo}
                onClick={onClick}
              />
            );
          })}
      </React.Fragment>
    );
  };

  const renderVagao = (vagao) => {
    return (
      <Vagao
        subindo={fluxoSubindo}
        acoplado={false}
        vagao={vagao}
        onClick={onClick}
      />
    );
  };

  vagoesRender.forEach((tremVagao, idx, self) =>
    atualizaPosicaoYObjetos(tremVagao, idx, self)
  );
  const vagoesOrdenadosPosicaoY = ordenaObjetosPosicaoY(vagoesRender);
  const trensOrdenadosPosicaoY = ordenaObjetosPosicaoY(trensRender);

  const alturaMinimaPlotarObjetos =
    vagoesOrdenadosPosicaoY[vagoesOrdenadosPosicaoY.length - 1].posicaoY;

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
