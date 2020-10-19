import React from 'react';
import { MAX_HEIGHT_OBJ, TREM_WIDTH } from '../utils';
import './Mapa.css';

const Trem = (props) => {
  const { subindo, trem, plotarObjetoNoMapa, onHover, onClick } = props;
  const { tremContent } = getStyles(subindo);

  const handleHover = () => {
    if (onHover) {
      onHover({
        subindo,
        ...trem,
      });
    }
  };
  const handleClick = () => {
    if (onClick) {
      onClick({
        subindo,
        ...trem,
      });
    }
  };

  return (
    <div
      onMouseOver={handleHover}
      onClick={handleClick}
      style={tremContent}
      className={subindo ? 'trem-descendo' : 'trem-subindo'}
    >
      <span>{trem.Codigo}</span>
    </div>
  );
};

const getStyles = (subindo) => {
  return {
    tremContent: {
      width: TREM_WIDTH,
      padding: '0 8px',
      height: MAX_HEIGHT_OBJ,
      backgroundColor: '#166188',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: subindo ? 'flex-end' : 'flex-start',
      alignItems: 'center',
      border: '1px solid white',
      cursor: 'pointer',
    },
  };
};

export default Trem;
