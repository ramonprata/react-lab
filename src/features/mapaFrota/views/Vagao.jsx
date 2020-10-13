import React from 'react';
import {
  MAX_HEIGHT_OBJ,
  VAGAO_ACOPLADO_WIDTH,
  VAGAO_DESACOPLADO_WIDTH,
} from '../utils';
import './Mapa.css';

const Vagao = (props) => {
  const { subindo, acoplado, vagao } = props;
  console.log('vagao :>> ', vagao);
  const { vagaoContent } = getStyles(acoplado);
  return (
    <div style={vagaoContent}>
      <span>
        {acoplado && `${vagao.Destino}-`}
        {vagao.QuantidadeVagoes}
      </span>
    </div>
  );
};

const getStyles = (acoplado) => {
  return {
    vagaoContent: {
      width: acoplado ? VAGAO_ACOPLADO_WIDTH : VAGAO_DESACOPLADO_WIDTH,
      padding: '0 4px',
      height: MAX_HEIGHT_OBJ,
      backgroundColor: '#166188',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid white',
    },
  };
};

export default Vagao;
