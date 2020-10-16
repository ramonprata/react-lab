import React from 'react';
import {
  isFluxoSubindo,
  atualizaPositionYObjetos,
  getTremNaEstacao,
} from '../utils';
import { trens, vagoes } from '../dados.mock';
import Trem from './Trem';
import Vagao from './Vagao';
import ObjetoEstacaoWrapper from './ObjetoEstacaoWrapper';
import LinhaAncora from './LinhaAncora';

const ObjetosEstacoes = (props) => {
  const { sentidoFluxo, estacoesComPosicoes, plotarObjetoNoMapa } = props;
  const fluxoSubindo = isFluxoSubindo(sentidoFluxo);

  const trensRender = trens.map((trem) => {
    return getTremNaEstacao(trem, estacoesComPosicoes);
  });

  const vagoesRender = vagoes.map((vagao) => {
    return getTremNaEstacao(vagao, estacoesComPosicoes, 'vagao');
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

  return [...vagoesRender, ...trensRender].map((tremVagao, idx, self) => {
    const renderizaTrem = tremVagao.tipo === 'trem';
    atualizaPositionYObjetos(tremVagao, idx, self);

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
