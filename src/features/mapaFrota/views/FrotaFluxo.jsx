import React from 'react';
import {
  getObjetoNaEstacao,
  getEstacoesComPosicoes,
  getObjetosNasEstacoes,
  MAX_WIDTH_OBJ,
  MAX_HEIGHT_OBJ,
  calcPositionYObjetos,
} from '../utils';
import { estacoesPatios, objetosNasEstacoes } from '../dados.mock';
import MapaEstacoes from './MapaEstacoes';

const FrotaFluxo = (props) => {
  const { status, sentidoFluxo } = props;
  const {
    mapa,
    containerFluxo,
    linhaPontilhada,
    objeto,
    paradaLine,
    containerTexto,
    paradaPonto,
    paradaContainerTexto,
    sentidoFluxoSubindo,
    sentidoFluxoDescendo,
    container,
  } = getStyles();

  const fluxoSubindo = sentidoFluxo === 'Subindo';

  return (
    <div style={containerFluxo}>
      <div style={{ ...mapa }}>
        <MapaEstacoes sentidoFluxo={sentidoFluxo} />
        {fluxoSubindo && <hr style={{ ...linhaPontilhada, top: 0 }} />}
        {!fluxoSubindo && <hr style={{ ...linhaPontilhada, bottom: 0 }} />}
      </div>
    </div>
  );
};

const getStyles = () => {
  return {
    containerFluxo: {
      display: 'flex',
      position: 'relative',
      width: '100%',
      height: '100%',
      overflowX: 'auto',
    },
    mapa: {
      backgroundColor: 'violet',
      position: 'absolute',
      height: '100%',
    },

    paradaLine: {
      width: 2,
      backgroundColor: 'black',
      position: 'absolute',
      bottom: 0,
      zIndex: 0,
    },

    paradaPonto: {
      height: 8,
      width: 8,
      backgroundColor: 'purple',
      borderRadius: 4,
      zIndex: 2,
    },

    paradaContainerTexto: {
      textOrientation: 'sideways-right',
      writingMode: 'vertical-rl',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      zIndex: 2,
      padding: '2px 0 0 0',
      height: 48,
      color: '#000',
      // backgroundColor: 'azure',
      backgroundColor: 'violet',
      // border: 'solid 1px',
    },

    objeto: {
      position: 'absolute',
      bottom: 100,
      width: MAX_WIDTH_OBJ,
      height: MAX_HEIGHT_OBJ,
      backgroundColor: 'green',
      zIndex: 1,
    },

    sentidoFluxoSubindo: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: 36,
      backgroundColor: 'brown',
      minWidth: 100,
    },
    sentidoFluxoDescendo: {
      position: 'sticky',
      top: 0,
      right: 0,
      height: 36,
      backgroundColor: 'orange',
      minWidth: 100,
    },
    linhaPontilhada: {
      border: 'none',
      borderTop: '2px dotted #000',
      width: 1024,
      position: 'absolute',
      left: 0,
    },
  };
};

export default FrotaFluxo;
