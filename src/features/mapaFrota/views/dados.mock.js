export const objetosNasEstacoes = [
  {
    trem:'A1',
    estacaoPatio: 'EPO',
  },
  {
    trem:'A2',
    estacaoPatio: 'EJB',
  },
  {
    trem:'A3',
    estacaoPatio: 'EBY1',
  },
  {
    trem:'A4',
    estacaoPatio: 'EJB4',
  },
];

export const estacoesPatios = [
  {
    nomeEstacao: 'ECO',
  },
  {
    nomeEstacao: 'EBY',
  },
  {
    nomeEstacao: 'EJB',
  },
  {
    nomeEstacao: 'EPO',
  },
  {
    nomeEstacao: 'ECO1',
  },
  {
    nomeEstacao: 'EBY1',
  },
  {
    nomeEstacao: 'EJB1',
  },
  {
    nomeEstacao: 'EPO1',
  },
  {
    nomeEstacao: 'ECO2',
  },
  {
    nomeEstacao: 'EBY2',
  },
  {
    nomeEstacao: 'EJB2',
  },
  {
    nomeEstacao: 'EPO2',
  },
  {
    nomeEstacao: 'ECO3',
  },
  {
    nomeEstacao: 'EBY3',
  },
  {
    nomeEstacao: 'EJB3',
  },
  {
    nomeEstacao: 'EPO3',
  },
  {
    nomeEstacao: 'ECO4',
  },
  {
    nomeEstacao: 'EBY4',
  },
  {
    nomeEstacao: 'EJB4',
  },
  {
    nomeEstacao: 'EPO4',
  },
].map((estacao, idx) => ({...estacao, estacaoId: idx}));
