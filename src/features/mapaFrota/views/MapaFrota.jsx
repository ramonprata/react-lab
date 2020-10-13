import React from 'react';
import FrotaFluxo from './FrotaFluxo';
import { getMaximoTamanhoMapa, STATUS_FROTA, FLUXOS_FROTA } from '../utils';
import StatusFrota from './StatusFrota';
import SentidoFluxo from './SentidoFluxo';
import Estacoes from './Estacoes';
import ObjetosEstacoes from './ObjetosEstacoes';

const MapaFrota = (props) => {
  const { trens, estacoesComPosicoes } = props;
  const maxWidthMapa = getMaximoTamanhoMapa(estacoesComPosicoes);

  const { subindo, descendo } = FLUXOS_FROTA;
  const { vazios, carregados } = STATUS_FROTA;

  const {
    page,
    container,
    gridMapa,
    gridFluxoFrota,
    sentidoFluxoContainer,
  } = getStyles(maxWidthMapa);

  return (
    <React.Fragment>
      <div style={page}>
        <div style={container}>
          <StatusFrota />

          <div style={gridMapa}>
            <div style={gridFluxoFrota}>
              <FrotaFluxo
                status={vazios}
                sentidoFluxo={subindo}
                maxWidthMapa={maxWidthMapa}
                estacoes={
                  <Estacoes
                    sentidoFluxo={subindo}
                    estacoesComPosicoes={estacoesComPosicoes}
                    trens={trens}
                  />
                }
                objetosEstacoes={
                  <ObjetosEstacoes
                    estacoesComPosicoes={estacoesComPosicoes}
                    sentidoFluxo={subindo}
                  />
                }
              />
            </div>

            <div
              style={{
                ...gridFluxoFrota,
                ...gridFluxoFrota.fluxoDescendo,
              }}
            >
              <FrotaFluxo
                status={carregados}
                sentidoFluxo={descendo}
                maxWidthMapa={maxWidthMapa}
                estacoes={
                  <Estacoes
                    sentidoFluxo={descendo}
                    estacoesComPosicoes={estacoesComPosicoes}
                    trens={trens}
                  />
                }
                objetosEstacoes={
                  <ObjetosEstacoes
                    estacoesComPosicoes={estacoesComPosicoes}
                    sentidoFluxo={descendo}
                  />
                }
              />
            </div>
          </div>
          <div style={sentidoFluxoContainer}>
            <SentidoFluxo sentido={subindo} />
            <SentidoFluxo sentido={descendo} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const getStyles = (maxWidthMapa) => {
  return {
    page: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      height: '100vh',
      width: '100vw',
    },

    container: {
      border: '1px solid #ccc',
      display: 'grid',
      gridTemplateColumns: '32px auto',
      gridTemplateRows: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },

    gridMapa: {
      display: 'grid',
      justifyItems: 'center',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '300px 300px',
      overflowX: 'auto',
      width: '80vw',
    },

    gridFluxoFrota: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 28px',
      width: maxWidthMapa,
      position: 'relative',
      fluxoDescendo: {
        gridTemplateRows: '28px 1fr',
        borderTop: 'dotted 1px #ccc',
      },
    },

    sentidoFluxoContainer: {
      position: 'absolute',
      right: 0,
      bottom: 260,
    },
  };
};
export default MapaFrota;
