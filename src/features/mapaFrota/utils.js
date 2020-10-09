export const MAX_WIDTH_OBJ = 100;
export const MAX_HEIGHT_OBJ = 28;
export const DISTANCIA_ENTRE_ESTACOES = 16;

export const getPositionX = (idx = 0, marco = false) => {
  return idx > 0 ? idx * DISTANCIA_ENTRE_ESTACOES : 1;
};

export const objetoNasProximasEstacoes = (objeto, estacaoTrem) => {
  
  let indexEstacaoEntreMarcos =
    estacaoTrem.proximos &&
    estacaoTrem.proximos.findIndex(
      (e) => e.estacaoPatio === objeto.Patio
    );

  return {
    estacaoEncontrada: Boolean(indexEstacaoEntreMarcos >= 0),
    indexEstacaoEntreMarcos,
  };
};

export const calcPercentualPosicaObjeto = (idx, posicaoMarco) => {
  const newPosition = posicaoMarco + (idx * 16 + 8);
  return newPosition;
};

export const getObjetoNaEstacao = (objetosNasEstacoes, estacaoTrem) => {
  let indexEstacaoEntreMarcos;
  for (let objeto of objetosNasEstacoes) {
    const objetoNaEstacao = objeto.Patio === estacaoTrem.estacaoPatio;
    if (objetoNaEstacao) {
      return {
        estacaoEncontrada: true,
        indexEstacaoEntreMarcos,
      };
    } else {
      return objetoNasProximasEstacoes(objeto, estacaoTrem);
    }
  }
};

export const getEstacoesComPosicoes = (estacoesPatios) => {
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
    const estacaoObjeto = estacoesComPosicoes.find(
      (estacao) => estacao.estacaoPatio === objeto.estacaoPatio
    );
    if (estacaoObjeto) {
      return {
        ...estacaoObjeto,
        ...objeto,
        width: MAX_WIDTH_OBJ,
        positionY: 100,
      };
    }
    return null;
  });
};

const atualizaPositionYObjetos = (objetoAtual, indexObjetoAtual, objetos) => {
  const estacoesObjetoOcupa = Math.ceil(
    objetoAtual.width / DISTANCIA_ENTRE_ESTACOES
  );

  let contador = indexObjetoAtual;
  while (contador < estacoesObjetoOcupa) {
    let corrente = objetos[contador];
    let proximo = objetos[contador + 1];
    if (proximo) {
      const diff = proximo.positionX - corrente.positionX;

      if (diff <= corrente.width) {
        proximo.positionY = corrente.positionY + MAX_HEIGHT_OBJ + 10;
      }
    }
    contador++;
  }
};

export const calcPositionYObjetos = (objetos) => {
  return objetos
    .sort((a, b) => {
      if (a.estacaoId > b.estacaoId) {
        return 1;
      } else if (a.estacaoId < b.estacaoId) {
        return -1;
      }
      return -0;
    })
    .map((objeto, idx, self) => {
      atualizaPositionYObjetos(objeto, idx, self);
      return objeto;
    });
};
