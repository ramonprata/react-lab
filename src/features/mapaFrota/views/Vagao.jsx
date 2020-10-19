import React from 'react';
import {
  MAX_HEIGHT_OBJ,
  VAGAO_ACOPLADO_WIDTH,
  VAGAO_DESACOPLADO_WIDTH,
} from '../utils';
import PropTypes from 'prop-types';
import './Mapa.css';

const Vagao = (props) => {
  const { acoplado, vagao, tremInfo, onHover, onClick } = props;
  const { vagaoContent, tempoPermanenciaCor } = getStyles(acoplado);
  const corVagao = !acoplado
    ? tempoPermanenciaCor[vagao.TempoPermanencia]
    : vagaoContent.backgroundColor;

  const handleHover = () => {
    if (onHover) {
      onHover({
        acoplado,
        ...vagao,
        tremInfo,
      });
    }
  };
  const handleClick = () => {
    if (onClick) {
      onClick({
        acoplado,
        ...vagao,
        tremInfo,
      });
    }
  };

  return (
    <div
      onMouseOver={handleHover}
      onClick={handleClick}
      style={{ ...vagaoContent, backgroundColor: corVagao }}
    >
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
      cursor: 'pointer',
      borderRadius: 4,
    },
    tempoPermanenciaCor: {
      1: '#27752D',
      2: '#946300',
      3: '#AF1D1E',
      4: '#000',
    },
  };
};

Vagao.propTypes = {
  acoplado: PropTypes.bool,
  vagao: PropTypes.shape({
    LocalidadeAtual: PropTypes.string,
    Carregado: PropTypes.bool,
    TempoPermanencia: PropTypes.number,
    Destino: PropTypes.string,
    QuantidadeVagoes: PropTypes.number,
    VagoesDisponiveis: PropTypes.number,
    VagoesRetidos: PropTypes.number,
  }),
};

export default Vagao;
