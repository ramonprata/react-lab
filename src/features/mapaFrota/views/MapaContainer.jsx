import React from 'react';
import MapaFrota from './MapaFrota';
import { mapaEstacoesGraoDictionaty } from '../dados.mock';
import { getEstacoesComPosicoes } from '../utils';

const MapaContainer = () => {
  let estacoesComProximos = [];

  Object.values(mapaEstacoesGraoDictionaty).forEach((estacao) => {
    const proximosPontos = estacao.proximos
      ? estacao.proximos.slice(0, Math.ceil(0.7 * estacao.proximos.length))
      : [];
    estacoesComProximos.push(estacao, ...proximosPontos);
  });

  const trens = [{ Patio: 'ZBL' }, { Patio: 'EYH' }];

  const estacoesComPosicoes = getEstacoesComPosicoes(estacoesComProximos);

  return <MapaFrota estacoesComPosicoes={estacoesComPosicoes} trens={trens} />;
};

export default MapaContainer;
