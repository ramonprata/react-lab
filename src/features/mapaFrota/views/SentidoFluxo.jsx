import React from 'react';
import { ReactComponent as Arrow } from '../assets/arrow-svg.svg';

const SentidoFluxo = (props) => {
  const { sentido } = props;
  const { sentidoInvertido, fluxoSentidoContent } = getStyles();

  const fluxoSubindo = sentido === 'Subindo';

  return (
    <div style={fluxoSentidoContent}>
      {fluxoSubindo && <Arrow />}
      <span>{sentido}</span>
      {!fluxoSubindo && <Arrow style={sentidoInvertido} />}
    </div>
  );
};

const getStyles = () => {
  return {
    fluxoSentidoContent: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: '#aaa',
      width: 110,
      height: 40,
    },
    sentidoInvertido: {
      transform: 'rotate(180deg)',
    },
  };
};

export default SentidoFluxo;
