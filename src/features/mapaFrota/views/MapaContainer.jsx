import React from 'react';
import MapaFrota from './MapaFrota';
import { getEstacoes } from '../utils';
import { trens, vagoes } from '../dados.mock';

const MapaContainer = (props) => {
  const { mapaSelecionado } = props;

  return (
    <MapaFrota
      estacoesComPosicoes={getEstacoes(mapaSelecionado)}
      trens={trens}
      vagoes={vagoes}
    />
  );
};

MapaContainer.defaultProps = {
  mapaSelecionado: 'grao',
};

export default MapaContainer;
