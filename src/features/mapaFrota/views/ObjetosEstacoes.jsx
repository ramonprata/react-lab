import React from 'react';
import {
  isFluxoSubindo,
  atualizaPositionYObjetos,
  getTremNaEstacao,
  MAX_HEIGHT_OBJ,
} from '../utils';
import { trens, vagoes } from '../dados.mock';
import Trem from './Trem';
import Vagao from './Vagao';

const ObjetosEstacoes = (props) => {
  const { sentidoFluxo, estacoesComPosicoes } = props;
  const { objetoContainer, linha } = getStyles(props);
  const fluxoSubindo = isFluxoSubindo(sentidoFluxo);

  const trensRender = trens.map((trem) => {
    return getTremNaEstacao(trem, estacoesComPosicoes);
  });

  const vagoesRender = vagoes.map((vagao) => {
    return getTremNaEstacao(vagao, estacoesComPosicoes, 'vagao');
  });

  const rendeTrem = (trem) => {
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
    const paradaContainer = 42;
    return (
      <React.Fragment key={`objeto-estacao-${idx}`}>
        <div
          style={{
            ...objetoContainer,
            left: tremVagao.positionX - tremVagao.width / 2,
            bottom: !fluxoSubindo ? tremVagao.positionY : 'unset',
            top: fluxoSubindo ? tremVagao.positionY : 'unset',
            flexDirection: fluxoSubindo ? 'row' : 'row-reverse',
            maxWidth: tremVagao.width,
            justifyContent: fluxoSubindo ? 'flex-start' : 'flex-end',
          }}
        >
          {renderizaTrem && rendeTrem(tremVagao)}
          {!renderizaTrem && renderVagao(tremVagao)}
        </div>
        <div
          style={{
            ...linha,
            height: tremVagao.positionY - MAX_HEIGHT_OBJ,
            left: tremVagao.positionX,
            bottom: !fluxoSubindo ? paradaContainer : 'unset',
            top: fluxoSubindo ? paradaContainer : 'unset',
          }}
        />
      </React.Fragment>
    );
  });
};
const getStyles = () => {
  return {
    objetoContainer: {
      height: MAX_HEIGHT_OBJ,
      position: 'absolute',
      zIndex: 1,
      display: 'flex',
    },
    linha: {
      backgroundColor: '#ddd',
      width: 2,
      position: 'absolute',
    },
  };
};

export default ObjetosEstacoes;
