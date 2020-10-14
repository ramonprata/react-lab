import React from 'react';
import { getPositionX, isFluxoSubindo, TAMANHO_PONTO_ESTACAO } from '../utils';

const Estacoes = (props) => {
  const { sentidoFluxo, estacoesComPosicoes, trens } = props;

  const {
    paradaContainer,
    marcadorEstacao,
    linha,
    containerTexto,
  } = getStyles();

  return estacoesComPosicoes.map((estacao, idx) => {
    const floxoSubindo = isFluxoSubindo(sentidoFluxo);
    const positionX = getPositionX(idx, estacao.marco);

    return (
      <React.Fragment key={`estacao-${idx}`}>
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
