import React from 'react';
import { MAX_HEIGHT_OBJ } from '../utils';

const ObjetoEstacaoWrapper = (props) => {
  const { tremVagao, fluxoSubindo, plotarObjetoNoMapa } = props;
  const { objetoContainer } = getStyles(
    tremVagao,
    fluxoSubindo,
    plotarObjetoNoMapa
  );

  return <div style={objetoContainer}>{props.children}</div>;
};

const getStyles = (tremVagao, fluxoSubindo, plotarObjetoNoMapa) => {
  return {
    objetoContainer: {
      height: MAX_HEIGHT_OBJ,
      zIndex: 1,
      display: 'flex',
      position: plotarObjetoNoMapa ? 'absolute' : 'relative',
      left: tremVagao.positionX - tremVagao.width / 2,
      bottom: !fluxoSubindo ? tremVagao.positionY : 'unset',
      top: fluxoSubindo ? tremVagao.positionY : 'unset',
      flexDirection: fluxoSubindo ? 'row' : 'row-reverse',
      maxWidth: tremVagao.width,
      justifyContent: fluxoSubindo ? 'flex-start' : 'flex-end',
    },
  };
};

export default ObjetoEstacaoWrapper;
