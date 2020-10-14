import React, { useRef } from 'react';
import FrotaFluxo from './FrotaFluxo';
import { getMaximoTamanhoMapa, STATUS_FROTA, FLUXOS_FROTA } from '../utils';
import StatusFrota from './StatusFrota';
import SentidoFluxo from './SentidoFluxo';
import Estacoes from './Estacoes';
import ObjetosEstacoes from './ObjetosEstacoes';

const MapaFrota = (props) => {
  const { trens, estacoesComPosicoes } = props;
  const maxWidthMapa = getMaximoTamanhoMapa(estacoesComPosicoes);
  const mapaRef = useRef(null);

  const { subindo, descendo } = FLUXOS_FROTA;
  const { vazios, carregados } = STATUS_FROTA;

  const {
    page,
    container,
    gridMapa,
    gridFluxoFrota,
    sentidoFluxoContainer,
    linhaPontilhada,
  } = getStyles(maxWidthMapa);

  const rendeObjetos = (sentido) => {
    return (
      <ObjetosEstacoes
        estacoesComPosicoes={estacoesComPosicoes}
        sentidoFluxo={sentido}
      />
    );
  };

  const handleWeel = (e) => {
    if (mapaRef && mapaRef.current) {
      const amountScroll = mapaRef.current.scrollLeft + e.deltaY;
      mapaRef.current.scrollTo({
        top: 0,
        left: amountScroll,
        behaviour: 'smooth',
      });
    }
  };

  return (
    <React.Fragment>
      <div style={page}>
        <div style={container} onWheel={handleWeel}>
          <StatusFrota />
          <div style={gridMapa} ref={mapaRef}>
            <div style={gridFluxoFrota}>
              <FrotaFluxo
                key={subindo}
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
                objetosEstacoes={rendeObjetos(subindo)}
              />
            </div>

            <div
              style={{
                ...gridFluxoFrota,
                ...gridFluxoFrota.fluxoDescendo,
              }}
            >
              <FrotaFluxo
                key={descendo}
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
                objetosEstacoes={rendeObjetos(descendo)}
              />
            </div>
          </div>
          <div style={sentidoFluxoContainer}>
            <SentidoFluxo sentido={subindo} />
            <hr style={linhaPontilhada} />
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      overflowY: 'auto',
      padding: '16px 0',
    },

    container: {
      border: '1px solid #ccc',
      display: 'grid',
      gridTemplateColumns: '32px auto 16px',
      gridTemplateRows: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    gridMapa: {
      display: 'grid',
      justifyItems: 'center',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '300px 300px',
      overflow: 'auto',
      maxWidth: '80vw',
    },

    gridFluxoFrota: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
      minWidth: maxWidthMapa,
      position: 'relative',
    },

    sentidoFluxoContainer: {
      width: '100%',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    linhaPontilhada: {
      border: 'none',
      borderTop: '1px dotted #aaa',
      minWidth: '100%',
    },
  };
};
export default MapaFrota;
