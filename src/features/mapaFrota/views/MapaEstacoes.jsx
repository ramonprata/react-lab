import React from 'react';
import { mapaEstacoesGraoDictionaty } from '../dados.mock';
import {
  calcPercentualPosicaObjeto,
  getEstacoesComPosicoes,
  getObjetoNaEstacao,
  getPositionX,
} from '../utils';

let estacoesComProximos = [];

Object.values(mapaEstacoesGraoDictionaty).forEach((estacao) => {
  const proximosPontos = estacao.proximos
    ? estacao.proximos.slice(0, Math.ceil(0.7 * estacao.proximos.length))
    : [];
  estacoesComProximos.push(estacao, ...proximosPontos);
});

const trens = [{ Patio: 'ZBL' }];

const estacoesComPosicoes = getEstacoesComPosicoes(estacoesComProximos);
const MapaEstacoes = (props) => {
  const { sentidoFluxo } = props;

  const { paradaContainer, marcadorEstacao, linha } = getStyles();

  const posicaoPontos =
    sentidoFluxo === 'Subindo'
      ? {
          top: 5,
        }
      : {
          bottom: 6,
        };

  return estacoesComPosicoes.map((estacao, idx) => {
    const { indexEstacaoEntreMarcos } = getObjetoNaEstacao(trens, estacao);

    const positionX = getPositionX(idx, estacao.marco);
    const positionObjeto = calcPercentualPosicaObjeto(
      indexEstacaoEntreMarcos,
      estacao.positionX
    );
    return (
      <React.Fragment>
        {indexEstacaoEntreMarcos > 0 && (
          <div
            style={{
              ...linha,
              left: positionObjeto,
              height: '70%',
              ...posicaoPontos,
              bottom: 10,
            }}
          />
        )}

        <div
          style={{
            ...marcadorEstacao,
            ...posicaoPontos,
            left: positionX,

            backgroundColor: estacao.marco ? 'orange' : 'green',
          }}
        />
      </React.Fragment>
    );
  });
};

const getStyles = () => ({
  paradaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: 16,
    height: 16,
    backgroundColor: 'green',
    border: '1px solid black',
  },
  marcadorEstacao: {
    width: 8,
    height: 8,
    backgroundColor: 'green',
    borderRadius: 4,
    position: 'absolute',
    zIndex: 4,
  },
  linha: {
    backgroundColor: 'black',
    width: 2,
    height: '100%',
    left: 200,
    position: 'absolute',
  },
});

export default MapaEstacoes;
