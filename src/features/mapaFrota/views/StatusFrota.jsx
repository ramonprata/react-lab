import React from 'react';

const StatusFrota = () => {
  const { gridStatus, contentStatus } = getStyles();
  const renderStatus = (status) => {
    return (
      <div style={contentStatus}>
        <span>{status}</span>
      </div>
    );
  };

  return (
    <div style={gridStatus}>
      {renderStatus('Vazios')}
      {renderStatus('Carregados')}
    </div>
  );
};

const getStyles = () => {
  return {
    gridStatus: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '300px 300px',
    },
    contentStatus: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textOrientation: 'mixed',
      writingMode: 'vertical-rl',
      color: '#aaa',
      transform: 'rotate(180deg)',
    },
  };
};
export default StatusFrota;
