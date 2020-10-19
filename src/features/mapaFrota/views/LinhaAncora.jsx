import React from 'react';
import { MAX_HEIGHT_OBJ } from '../utils';

const LinhaAncora = (props) => {
  const { tremVagao, fluxoSubindo } = props;
  const { linha } = getStyles(tremVagao, fluxoSubindo);
  return <div style={linha} />;
};

const getStyles = (tremVagao, fluxoSubindo) => {
  return {
    linha: {
      backgroundColor: '#ddd',
      width: 2,
      position: 'absolute',
      height: tremVagao.posicaoY - MAX_HEIGHT_OBJ,
      left: tremVagao.posicaoX,
      bottom: !fluxoSubindo ? 42 : 'unset',
      top: fluxoSubindo ? 42 : 'unset',
    },
  };
};

export default LinhaAncora;
