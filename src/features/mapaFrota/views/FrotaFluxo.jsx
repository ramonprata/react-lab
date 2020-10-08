import React from 'react';
import {
  getObjetoNaEstacao,
  getEstacoesComPosicoes,
  getObjetosNasEstacoes,
  MAX_WIDTH_OBJ,
  MAX_HEIGHT_OBJ,
  calcPositionYObjetos,
} from '../utils';
import { estacoesPatios, objetosNasEstacoes } from './dados.mock';

const FrotaFluxo = (props) => {
  const {
    containerFluxo,
    paradaContainer,
    objeto,
    paradaLine,
    containerTexto,
    paradaPonto,
    paradaContainerTexto,
    container,
  } = styles;
  const estacoesComCoordenadas = getEstacoesComPosicoes(estacoesPatios);
  const objetosParados = getObjetosNasEstacoes(
    estacoesComCoordenadas,
    objetosNasEstacoes
  );
  const objetosPositionY = calcPositionYObjetos(objetosParados);

  return (
    <div style={containerFluxo}>
      <div style={containerTexto}>
        <span>Carregados</span>
      </div>
      {estacoesComCoordenadas.map((estacao, idx) => {
        const objetoNaEstacao = getObjetoNaEstacao(
          objetosPositionY,
          estacao.estacaoPatio
        );

        return (
          <React.Fragment key={idx}>
            {objetoNaEstacao && (
              <div
                style={{
                  ...objeto,
                  left: estacao.positionX - objeto.width / 2,
                  bottom: objetoNaEstacao.positionY,
                }}
              />
            )}

            <div
              style={{
                ...paradaContainer,
                left: estacao.positionX,
              }}
            >
              {objetoNaEstacao && (
                <div
                  style={{
                    ...paradaLine,
                    height: objetoNaEstacao.positionY,
                  }}
                />
              )}
              <div style={paradaPonto}></div>
              <div style={paradaContainerTexto}>
                <span style={{ fontSize: 12, fontWeight: 'bold' }}>
                  {estacao.estacaoPatio}
                </span>
              </div>
            </div>
          </React.Fragment>
        );
      })}
      <div />
    </div>
  );
};

const styles = {
  containerFluxo: {
    backgroundColor: 'violet',
    position: 'absolute',
    display: 'grid',
    height: '100%',
    width: '100%',
    overflow: 'auto',
  },

  paradaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: 16,
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

  containerTexto: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: '100%',
    textOrientation: 'mixed',
    writingMode: 'vertical-rl',
    zIndex: 4,
    color: '#000',
  },
};

export default FrotaFluxo;
