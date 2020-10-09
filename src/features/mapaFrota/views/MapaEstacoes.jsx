import React from 'react';
import {
  calcPercentualPosicaObjeto,
  getObjetoNaEstacao,
  getPositionX,
} from '../utils';

const MapaEstacoes = (props) => {
  const { sentidoFluxo, estacoesComPosicoes, trens } = props;

  const {
    paradaContainer,
    marcadorEstacao,
    linha,
    containerTexto,
  } = getStyles();

  return estacoesComPosicoes.map((estacao, idx) => {
    const { indexEstacaoEntreMarcos } = getObjetoNaEstacao(trens, estacao);
    const floxoSubindo = sentidoFluxo === 'Subindo';

    const positionX = getPositionX(idx, estacao.marco);
    const positionObjeto = calcPercentualPosicaObjeto(
      indexEstacaoEntreMarcos,
      estacao.positionX
    );

    const larguraObjeto = 32;

    return (
      <React.Fragment>
        {indexEstacaoEntreMarcos > 0 && (
          <div
            style={{
              width: larguraObjeto,
              height: 32,
              position: 'absolute',
              backgroundColor: '#166188',
              left: positionObjeto - larguraObjeto / 2,
              bottom: !floxoSubindo ? linha.height + 50 : 'unset',
              top: floxoSubindo ? linha.height + 50 : 'unset',
            }}
          />
        )}
        {indexEstacaoEntreMarcos > 0 && (
          <div
            style={{
              ...linha,
              left: positionObjeto,
              bottom: !floxoSubindo ? 50 : 'unset',
              top: floxoSubindo ? 50 : 'unset',
              zIndex: 99,
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
              color: estacao.marco ? '#000' : 'transparent',
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
    height: 60,
  },
  marcadorEstacao: {
    width: 8,
    height: 8,
    borderRadius: 4,
    zIndex: 2,
  },

  linha: {
    backgroundColor: '#ccc',
    width: 2,
    position: 'absolute',
    height: 100,
  },

  containerTexto: {
    textOrientation: 'mixed',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    textAlign: 'left',
    fontSize: 14,
  },
});

export default MapaEstacoes;
