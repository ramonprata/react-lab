export const STATUS_FROTA = { vazios: 'Vazios', carregados: 'Carregados' };
export const FLUXOS_FROTA = { subindo: 'Subindo', descendo: 'Descendo' };

export const MAX_HEIGHT_OBJ = 24;
export const DISTANCIA_ENTRE_ESTACOES = 16;
export const TREM_WIDTH = 56;
export const VAGAO_ACOPLADO_WIDTH = 72;
export const VAGAO_DESACOPLADO_WIDTH = 34;
export const TAMANHO_PONTO_ESTACAO = 8;
const DEFAULT_POSITION_Y = 140;

export const getPositionX = (idx = 0) => {
  return idx > 0 ? idx * DISTANCIA_ENTRE_ESTACOES : 0;
};

export const objetoNasProximasEstacoes = (objeto, estacaoTrem) => {
  let indexEstacaoEntreMarcos =
    estacaoTrem.proximos &&
    estacaoTrem.proximos.findIndex((e) => e === objeto.LocalidadeAtual);

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

export const getObjetoNaEstacao = (objeto, mapaComPosicoes, tipo = 'trem') => {
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

export const atualizaPosicaoYObjetos = (
  objetoRenderizar,
  indexObjetoAtual,
  objetos,
  alturaMinimaPlotarObjetos = 0
) => {
  const estacoesObjetoOcupa = Math.ceil(
    objetoRenderizar.width / DISTANCIA_ENTRE_ESTACOES
  );

  const anterioresAfetados = Math.ceil(estacoesObjetoOcupa / 2);
  let indexObjetoAtualizar = indexObjetoAtual - anterioresAfetados;
  const larguraObjetoAtual = objetoRenderizar.width;
  const inicioObjetoAtual = objetoRenderizar.positionX - larguraObjetoAtual / 2;

  while (indexObjetoAtualizar < indexObjetoAtual) {
    const objetoCorrente = objetos[indexObjetoAtualizar];
    if (objetoCorrente) {
      const fimObjetoCorrente =
        objetoCorrente.positionX + objetoCorrente.width / 2;

      if (inicioObjetoAtual <= fimObjetoCorrente) {
        const alturaMinima =
          indexObjetoAtual === 0 ? alturaMinimaPlotarObjetos : 0;
        objetoRenderizar.positionY =
          alturaMinima + objetoCorrente.positionY + MAX_HEIGHT_OBJ + 10;
      }
    }
    indexObjetoAtualizar++;
  }
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

const ordenaObjetosPorKey = (objetosPlotar, key) => {
  return objetosPlotar.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    } else if (a[key] < b[key]) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const ordenaObjetosPosicaoY = (objetosPlotar) => {
  return ordenaObjetosPorKey(objetosPlotar, 'positionY');
};

export const ordenaObjetosLocalidade = (objetosPlotar) => {
  return ordenaObjetosPorKey(objetosPlotar, 'LocalidadeAtual');
};
