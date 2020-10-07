import { estacoesPatios } from "./views/dados.mock";

export const MAX_WIDTH_OBJ = 100;
export const MAX_HEIGHT_OBJ = 32;
export const DISTANCIA_ENTRE_ESTACOES = 20;


export const getPositionX = (idx = 0) => {
  return idx > 0 ? idx * DISTANCIA_ENTRE_ESTACOES : 0;
};

export const getObjetoNaEstacao = (objetosNasEstacoes, estacao) => {
  const trem = objetosNasEstacoes.find((trem) => trem.estacaoPatio === estacao);
  return trem;
};

export const getEstacoesPatiosPosicoes = (estacoesPatios) => {
  return estacoesPatios.map((estacao, idx) => {
    return {
      ...estacao,
      positionX: getPositionX(idx),
    };
  });
};

export const getObjetosNasEstacoes = (
  estacoesComPosicoes,
  objetosNasEstacoes
) => {
  return objetosNasEstacoes.map((objeto) => {
    const estacaoObjeto = estacoesComPosicoes.find(estacao => estacao.nomeEstacao === objeto.estacaoPatio)
  
    if (estacaoObjeto) {
      return {
        ...estacaoObjeto,
        ...objeto,
        width: MAX_WIDTH_OBJ,
        positionY: 100
      };
    }

    return null;
  });
};


export const calcPositionYObjetos = (objetos) => {
  return objetos.sort((a, b)=> {
    if(a.estacaoId > b.estacaoId) {
      return 1;
    } else if(a.estacaoId < b.estacaoId) {
      return -1;
    }
    return -0;
  }).map((objeto, idx, self) => {
    const next = self[idx + 1];
    if(next) {
      const diff = next.positionX -  objeto.positionX;
      if(diff <= MAX_WIDTH_OBJ) {
        next.positionY = objeto.positionY + MAX_HEIGHT_OBJ + 10;
      }
    }
    return objeto;
  });
};
