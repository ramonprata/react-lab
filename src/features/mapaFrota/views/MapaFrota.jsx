import React, { useRef } from 'react';
import FrotaFluxo from './FrotaFluxo';
import { getMaximoTamanhoMapa, STATUS_FROTA, FLUXOS_FROTA } from '../utils';
import StatusFrota from './StatusFrota';
import SentidoFluxo from './SentidoFluxo';
import Estacoes from './Estacoes';
import { useWeelListener } from '../useWeelListener';

const MapaFrota = (props) => {
  const { trens, vagoes, estacoesComPosicoes } = props;
  const maxWidthMapa = getMaximoTamanhoMapa(estacoesComPosicoes);
  const mapaRef = useRef(null);
  useWeelListener(mapaRef, 'horizontal', 0.5);
  const { subindo, descendo } = FLUXOS_FROTA;
  const { vazios, carregados } = STATUS_FROTA;

  const {
    page,
    container,
    content,
    gridMapa,
    gridFluxoFrota,
    sentidoFluxoContainer,
    linhaPontilhada,
  } = getStyles(maxWidthMapa);

  const objetosFluxoSubindo = {
    trens: trens.filter((trem) => trem.Subindo),
    vagoes: vagoes.filter((vagao) => !vagao.Carregado),
  };

  const objetosFluxoDescendo = {
    trens: trens.filter((trem) => !trem.Subindo),
    vagoes: vagoes.filter((vagao) => vagao.Carregado),
  };

  return (
    <React.Fragment>
      <div style={page}>
        <div style={container}>
          <div style={content}>
            <StatusFrota />
            <div style={gridMapa} ref={mapaRef}>
              <div style={gridFluxoFrota}>
                <FrotaFluxo
                  key={subindo}
                  status={vazios}
                  sentidoFluxo={subindo}
                  objetosRender={objetosFluxoSubindo}
                  maxWidthMapa={maxWidthMapa}
                  estacoesComPosicoes={estacoesComPosicoes}
                  estacoes={
                    <Estacoes
                      sentidoFluxo={subindo}
                      estacoesComPosicoes={estacoesComPosicoes}
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
                  key={descendo}
                  status={carregados}
                  sentidoFluxo={descendo}
                  objetosRender={objetosFluxoDescendo}
                  maxWidthMapa={maxWidthMapa}
                  estacoesComPosicoes={estacoesComPosicoes}
                  estacoes={
                    <Estacoes
                      sentidoFluxo={descendo}
                      estacoesComPosicoes={estacoesComPosicoes}
                      trens={trens}
                    />
                  }
                />
              </div>
              <div style={sentidoFluxoContainer}>
                <SentidoFluxo sentido={subindo} />
                <hr style={linhaPontilhada} />
                <SentidoFluxo sentido={descendo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const getStyles = (maxWidthMapa, mapaRef) => {
  return {
    page: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      maxHeight: '100vh',
    },

    container: {
      width: '80%',
      height: '90%',
      overflowY: 'auto',
      padding: '16px 32px',
      bottom: 0,
      position: 'absolute',
    },

    content: {
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
      gridTemplateRows: 'minmax(180px, auto) minmax(180px, auto)',
      overflow: 'auto',
      maxWidth: '80vw',
    },

    gridFluxoFrota: {
      display: 'grid',
      gridTemplateColumns: 'minmax(80vw, auto)',
      gridTemplateRows: 'auto',
    },

    sentidoFluxoContainer: {
      width: '100%',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      height: 60,
      right: 0,
    },
    linhaPontilhada: {
      border: 'none',
      borderTop: '1px dotted #aaa',
      minWidth: '100%',
    },
  };
};
export default MapaFrota;
