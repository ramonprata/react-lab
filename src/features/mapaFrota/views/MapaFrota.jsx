import React from 'react';
import { mapaEstacoesGraoDictionaty } from '../dados.mock';
import FrotaFluxo from './FrotaFluxo';
import { ReactComponent as Arrow } from '../assets/arrow-svg.svg';
import { getEstacoesComPosicoes, getMaximoTamanhoMapa } from '../utils';
import { Paper } from '@material-ui/core';
import { useRef } from 'react';

let estacoesComProximos = [];

Object.values(mapaEstacoesGraoDictionaty).forEach((estacao) => {
  const proximosPontos = estacao.proximos
    ? estacao.proximos.slice(0, Math.ceil(0.7 * estacao.proximos.length))
    : [];
  estacoesComProximos.push(estacao, ...proximosPontos);
});

const trens = [{ Patio: 'ZBL' }];

const estacoesComPosicoes = getEstacoesComPosicoes(estacoesComProximos);

const MapaFrota = (props) => {
  const { page, container, containerStatus, paper } = styles;
  const mapaRef = useRef(null);

  const getPosicaoStatus = () => {
    console.log('mapaRef :>> ', mapaRef);
    if (mapaRef.current) {
      console.log(
        'mapaRef.current.offsetHeight :>> ',
        mapaRef.current.offsetHeight
      );
      return mapaRef.current.offsetHeight / 2;
    }
  };

  const renderStatus = (status) => {
    return (
      <div style={containerStatus}>
        <span>{status}</span>
      </div>
    );
  };

  const renderSentidoFluxo = (sentido) => {
    const fluxoSubindo = sentido === 'Subindo';
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          color: '#aaa',
          width: 120,
          height: 40,
        }}
      >
        {fluxoSubindo && <Arrow />}
        <span>{sentido}</span>
        {!fluxoSubindo && <Arrow style={{ transform: 'rotate(180deg)' }} />}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div style={page}>
        <div style={paper} ref={mapaRef}>
          <div style={container}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '300px 300px',
              }}
            >
              {renderStatus('Vazios')}

              {renderStatus('Carregados')}
            </div>

            <div
              style={{
                display: 'grid',
                justifyItems: 'center',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '300px 300px',
                overflowX: 'auto',
                width: '80vw',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gridTemplateRows: '1fr 28px',
                  width: getMaximoTamanhoMapa(estacoesComPosicoes),
                  position: 'relative',
                }}
              >
                <FrotaFluxo
                  status="Vazios"
                  sentidoFluxo="Subindo"
                  estacoesComPosicoes={estacoesComPosicoes}
                  trens={trens}
                />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gridTemplateRows: '28px 1fr',
                  width: getMaximoTamanhoMapa(estacoesComPosicoes),
                  borderTop: 'dotted 1px #ccc',
                  position: 'relative',
                }}
              >
                {/* {renderSentidoFluxo('Descendo')} */}

                <FrotaFluxo
                  status="Carregados"
                  sentidoFluxo="Descendo"
                  estacoesComPosicoes={estacoesComPosicoes}
                  trens={trens}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', right: 120 }}>
          <div>{renderSentidoFluxo('Subindo')}</div>
          <div>{renderSentidoFluxo('Descendo')}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

const styles = {
  page: {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    padding: 16,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '32px auto',
    gridTemplateRows: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    border: '1px solid #ccc',
  },

  containerStatus: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textOrientation: 'mixed',
    writingMode: 'vertical-rl',
    color: '#aaa',
    transform: 'rotate(180deg)',
  },
};
export default MapaFrota;
