import React from 'react';
import {
  calcPercentualPosicaObjeto,
  getObjetoNaEstacao,
  getPositionX,
  isFluxoSubindo,
} from '../utils';

const TAMANHO_PONTO_ESTACAO = 8;

const Estacoes = (props) => {
  const { sentidoFluxo, estacoesComPosicoes, trens } = props;

  const {
    paradaContainer,
    marcadorEstacao,
    linha,
    containerTexto,
  } = getStyles();

  return estacoesComPosicoes.map((estacao, idx) => {
    const { indexEstacaoEntreMarcos } = getObjetoNaEstacao(trens, estacao);
    const floxoSubindo = isFluxoSubindo(sentidoFluxo);

    const positionX = getPositionX(idx, estacao.marco);
    const positionObjeto = calcPercentualPosicaObjeto(
      indexEstacaoEntreMarcos,
      estacao.positionX
    );

    const larguraObjeto = 28;

    return (
      <React.Fragment>
        {indexEstacaoEntreMarcos > 0 && (
          <div
            style={{
              width: larguraObjeto,
              height: 28,
              position: 'absolute',
              backgroundColor: '#166188',
              left: positionObjeto - larguraObjeto / 2,
              bottom: !floxoSubindo
                ? linha.height + paradaContainer.height - TAMANHO_PONTO_ESTACAO
                : 'unset',
              top: floxoSubindo
                ? linha.height + paradaContainer.height - TAMANHO_PONTO_ESTACAO
                : 'unset',
            }}
          />
        )}
        {indexEstacaoEntreMarcos > 0 && (
          <div
            style={{
              ...linha,
              left: positionObjeto,
              bottom: !floxoSubindo
                ? paradaContainer.height - TAMANHO_PONTO_ESTACAO
                : 'unset',
              top: floxoSubindo
                ? paradaContainer.height - TAMANHO_PONTO_ESTACAO
                : 'unset',
            }}
          />
        )}
        <div
          style={{
            ...paradaContainer,
            left: positionX,
            flexDirection: floxoSubindo ? 'column-reverse' : 'column',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              ...marcadorEstacao,
              left: positionX,
              backgroundColor: estacao.marco ? '#000' : '#aaa',
            }}
          />
          <div
            style={{
              ...containerTexto,
              color: estacao.marco ? '#aaa' : 'transparent',
            }}
          >
            <div style={{ height: 32 }}>{estacao.estacaoPatio}</div>
          </div>
        </div>
      </React.Fragment>
    );
  });
};

const getStyles = () => ({
  paradaContainer: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#fff',
    height: 48,
  },

  marcadorEstacao: {
    width: TAMANHO_PONTO_ESTACAO,
    height: TAMANHO_PONTO_ESTACAO,
    borderRadius: 4,
    zIndex: 1,
  },

  linha: {
    backgroundColor: '#ddd',
    width: 2,
    position: 'absolute',
    height: 100,
  },

  containerTexto: {
    textOrientation: 'mixed',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Estacoes;
