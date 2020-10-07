import React from 'react';
import {
  getObjetoNaEstacao,
  getEstacoesPatiosPosicoes,
  getObjetosNasEstacoes,
  MAX_WIDTH_OBJ,
  MAX_HEIGHT_OBJ,
  calcPositionYObjetos,
} from '../utils';
import { estacoesPatios, objetosNasEstacoes } from './dados.mock';

const MapaFrota = (props) => {
  const { container, mapa, parada, objeto, line } = styles;
  const estacoesComCoordenadas = getEstacoesPatiosPosicoes(estacoesPatios);
  const objetosParados = getObjetosNasEstacoes(
    estacoesComCoordenadas,
    objetosNasEstacoes
  );
  const objetosPositionY = calcPositionYObjetos(objetosParados);
  // console.log('objetosPositionY :>> ', objetosPositionY);
  return (
    <div style={container}>
      <div style={mapa}>
        {estacoesComCoordenadas.map((estacao, idx) => {
          const tremNaEstacao = getObjetoNaEstacao(
            objetosPositionY,
            estacao.nomeEstacao
          );
          console.log('tremNaEstacao :>> ', tremNaEstacao);
          const objetoWidth =
            estacao.positionX + (parada.width - line.width) / 2;
          return (
            <React.Fragment key={idx}>
              {tremNaEstacao && (
                <div
                  style={{
                    ...objeto,
                    left: estacao.positionX - objeto.width / 2,
                    bottom: tremNaEstacao.positionY,
                  }}
                />
              )}
              {tremNaEstacao && (
                <div
                  style={{
                    ...line,
                    left: objetoWidth,
                    height: tremNaEstacao.positionY
                      
                  }}
                />
              )}
              <div style={{ ...parada, left: estacao.positionX }} />
            </React.Fragment>
          );
        })}
        <div />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  mapa: {
    backgroundColor: 'violet',
    position: 'absolute',
    height: 500,
    width: 800,
    overflow: 'auto',
  },
  parada: {
    position: 'absolute',
    bottom: 10,
    width: 10,
    height: 10,
    // borderRadius: 5,
    backgroundColor: 'purple',
    zIndex: 1,
  },
  objeto: {
    position: 'absolute',
    bottom: 100,
    width: MAX_WIDTH_OBJ,
    height: MAX_HEIGHT_OBJ,
    // borderRadius: 5,
    backgroundColor: 'green',
    zIndex: 1,
  },
  line: {
    height: 100,
    width: 4,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 10,
    zIndex: 0,
  },
};
export default MapaFrota;
