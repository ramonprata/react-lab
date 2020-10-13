export const STATUS_FROTA = { vazios: 'Vazios', carregados: 'Carregados' };
export const FLUXOS_FROTA = { subindo: 'Subindo', descendo: 'Descendo' };

export const MAX_HEIGHT_OBJ = 24;
export const DISTANCIA_ENTRE_ESTACOES = 16;
export const TREM_WIDTH = 64;
export const VAGAO_ACOPLADO_WIDTH = 72;
export const VAGAO_DESACOPLADO_WIDTH = 34;
export const TAMANHO_PONTO_ESTACAO = 8;
const DEFAULT_POSITION_Y = 120;

export const getPositionX = (idx = 0) => {
  return idx > 0 ? idx * DISTANCIA_ENTRE_ESTACOES : 0;
};

export const objetoNasProximasEstacoes = (objeto, estacaoTrem) => {
  let indexEstacaoEntreMarcos =
    estacaoTrem.proximos &&
    estacaoTrem.proximos.findIndex((e) => e === objeto.Patio);

  return {
    estacaoEncontrada: Boolean(indexEstacaoEntreMarcos >= 0),
    indexEstacaoEntreMarcos,
  };
};

export const calcPercentualPosicaObjeto = (idx, posicaoMarco) => {
  const newPosition = posicaoMarco + (idx * 16 + 8);
  return newPosition;
};

const getTamanhoTrem = (trem) => {
  if (trem && trem.Vagoes) {
    return TREM_WIDTH + trem.Vagoes.length * VAGAO_ACOPLADO_WIDTH;
  }
  return 0;
};

const buscaEstacaoObjetoEntreMarcos = (mapaEstacoes, objeto) => {
  for (let estacao of mapaEstacoes) {
    if (estacao.proximos) {
      const indexEstacaoObjeto = estacao.proximos.indexOf(
        objeto.LocalidadeAtual
      );
      if (indexEstacaoObjeto >= 0) {
        const positionX = calcPercentualPosicaObjeto(
          indexEstacaoObjeto,
          estacao.positionX
        );
        return {
          ...objeto,
          positionX,
          positionY: DEFAULT_POSITION_Y, // TODO: deve ser diferente para trem e vagão solto
        };
      }
    }
  }
  return null;
};

export const getTremNaEstacao = (objeto, mapaComPosicoes, tipo = 'trem') => {
  const isTrem = tipo === 'trem';
  const estacaoTrem = mapaComPosicoes.find(
    (estacao) => estacao.estacaoPatio === objeto.LocalidadeAtual
  );
  if (estacaoTrem) {
    const positionX = TAMANHO_PONTO_ESTACAO / 2 + estacaoTrem.positionX;
    return {
      ...objeto,
      positionX,
      positionY: isTrem ? DEFAULT_POSITION_Y : DEFAULT_POSITION_Y * 0.6,
      width: tipo === 'trem' ? getTamanhoTrem(objeto) : VAGAO_DESACOPLADO_WIDTH,
      tipo,
    };
  } else {
    const resultado = {
      ...buscaEstacaoObjetoEntreMarcos(mapaComPosicoes, objeto),
      positionY: isTrem ? DEFAULT_POSITION_Y : DEFAULT_POSITION_Y / 2,
      width: tipo === 'trem' ? getTamanhoTrem(objeto) : VAGAO_DESACOPLADO_WIDTH,
      tipo,
    };
    return resultado;
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

export const atualizaPositionYObjetos = (
  objetoAtual,
  indexObjetoAtual,
  objetos
) => {
  const estacoesObjetoOcupa = Math.ceil(
    objetoAtual.width / DISTANCIA_ENTRE_ESTACOES
  );

  let contador = indexObjetoAtual;
  while (contador < estacoesObjetoOcupa) {
    let corrente = objetos[contador];
    let proximo = objetos[contador + 1];
    if (proximo) {
      const diffWidth = proximo.positionX - corrente.positionX;
      const diffHeight = proximo.positionY === corrente.positionY;

      if (diffWidth <= corrente.width &&  diffHeight) {
        proximo.positionY = corrente.positionY + MAX_HEIGHT_OBJ + 10;
      }
    }
    contador++;
  }
};

export const calcPositionYObjetos = (objetos) => {
  return objetos.map((objeto, idx, self) => {
    atualizaPositionYObjetos(objeto, idx, self);
    return objeto;
  });
};

export const getMaximoTamanhoMapa = (estacoesComPosicoes) => {
  if (estacoesComPosicoes) {
    return estacoesComPosicoes.length * 16;
  } else {
    return '100vw';
  }
};

export const isFluxoSubindo = (sentido) => {
  return sentido === FLUXOS_FROTA.subindo;
};
