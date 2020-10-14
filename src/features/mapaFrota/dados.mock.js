export const trens = [
  {
    LocalidadeAtual: 'EYH',
    Codigo: 'J782',
    Vagoes: [
      {
        QuantidadeVagoes: 40,
        Destino: 'ZOP',
      },
      {
        QuantidadeVagoes: 40,
        Destino: 'ZZB',
      },
    ],
  },
  {
    LocalidadeAtual: 'EPO',
    Codigo: 'J782',
    Vagoes: [
      {
        QuantidadeVagoes: 40,
        Destino: 'ZOP',
      },
      {
        QuantidadeVagoes: 40,
        Destino: 'ZZB',
      },
    ],
  },
  {
    LocalidadeAtual: 'EYG',
    Codigo: 'J782',
    Vagoes: [
      {
        QuantidadeVagoes: 40,
        Destino: 'ZOP',
      },
      {
        QuantidadeVagoes: 40,
        Destino: 'ZZB',
      },
    ],
  },
  {
    LocalidadeAtual: 'ZCB',
    Codigo: 'J782',
    Vagoes: [
      {
        QuantidadeVagoes: 40,
        Destino: 'ZOP',
      },
    ],
  },
];

export const vagoes = [
  {
    LocalidadeAtual: 'EPO',
    Situacao: 'Carregado',
    TempoPermanencia: 3,
    QuantidadeVagoes: 53,
  },
  {
    LocalidadeAtual: 'EGN',
    Situacao: 'Carregado',
    TempoPermanencia: 3,
    QuantidadeVagoes: 53,
  },
  {
    LocalidadeAtual: 'EYG',
    Situacao: 'Carregado',
    TempoPermanencia: 3,
    QuantidadeVagoes: 53,
  },
  // {
  //   LocalidadeAtual: 'EYG',
  //   Situacao: 'Carregado',
  //   TempoPermanencia: 3,
  //   QuantidadeVagoes: 53,
  // },
  // {
  //   LocalidadeAtual: 'EYG',
  //   Situacao: 'Carregado',
  //   TempoPermanencia: 3,
  //   QuantidadeVagoes: 53,
  // },
];

export const mapaEstacoesGraoDictionaty = {
  EOO: {
    estacaoPatio: 'EOO',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', '', '', ''],
  },
  EPY: {
    estacaoPatio: 'EPY',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  EBZ: {
    estacaoPatio: 'EBZ',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  EBU: {
    estacaoPatio: 'EBU',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  EPO: {
    estacaoPatio: 'EPO',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['EVV', 'EGN', 'EYG', 'EYH'],
  },
  EBJ: {
    estacaoPatio: 'EBJ',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  // EAU: {
  //   estacaoPatio: 'EAU',
  //   marco: true,
  //   carregamento: false,
  //   descarregamento: false,
  //   proximos: ['ZPR', 'ZHF', 'ZUL', 'ZHU', 'ZYE'],
  // }
  ZZB: {
    estacaoPatio: 'ZZB',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['ZNI', 'ZDW', 'ZKJ', 'ZMN'],
  },
  ZUB: {
    estacaoPatio: 'ZUB',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: [
      'ZOQ',
      'ZVF',
      'ZWA',
      'ZBC',
      'ZYW',
      'ZGU',
      'ZG2',
      'ZPE',
      'ZHB',
      'ZKR',
      'ZJN',
    ],
  },
  ZRP: {
    estacaoPatio: 'ZRP',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: [
      'ZEG',
      'ZEK',
      'ZCE',
      'ZHI',
      'ZHM',
      'ZTD',
      'ZCB',
      'ZLB',
      'ZAI',
      'ZMQ',
      'ZEA',
      'ZMG',
      'ZMM',
      'ZXD',
      'ZJJ',
      'ZZZ',
      'ZZQ',
    ],
  },
  ZOP: {
    estacaoPatio: 'ZOP',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  ZBL: {
    estacaoPatio: 'ZBL',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: [
      'ZQB',
      'ZDS',
      'ZVK',
      'ZIC',
      'ZXI',
      'ZST',
      'ZYU',
      'ZFY',
      'ZXP',
      'ZDY',
      'ZDI',
      'ZER',
      'ZCX',
      'ZXY',
      'ZPS',
    ],
  },
  ZKE: {
    estacaoPatio: 'ZKE',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: [
      'ZWW',
      'ZKW',
      'ZLU',
      'ZWI',
      'ZYQ',
      'ZEM',
      'ZMS',
      'ZEJ',
      'ZRB',
      'ZEV',
      'ZEZ',
      'ZXW',
      '95',
      'ZGP',
      'ZWU',
    ],
  },
  ZPT: {
    estacaoPatio: 'ZPT',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  ZGM: {
    estacaoPatio: 'ZGM',
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  ZPG: {
    estacaoPatio: 'ZPG',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  ISN: {
    estacaoPatio: 'ISN',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  IAA: {
    estacaoPatio: 'IAA',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  ICZ: {
    estacaoPatio: 'ICZ',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  IUF: {
    estacaoPatio: 'IUF',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
  IFA: {
    estacaoPatio: 'IFA',
    marco: true,
    carregamento: false,
    descarregamento: false,
    proximos: ['', ''],
  },
};

// {​​​​​​​​
// Trens:
//    [{​​​​​​​​
// Codigo: 'J782',
// Destino: {​​​​​​​​
// QuantidadeVagoes: 40
// Local: ZOP
// }​​​​​​​​,

// Destino: {​​​​​​​​
// QuantidadeVagoes: 30
// Local: ZZB
// }​​​​​​​​,

// Situacao: 'Carregado'
// LocalidadeAtual: 'ZBL' (pode ser patio ou Estacao)
// }​​​​​​​​,

// ]
// Vagoes: [
// {​​​​​​​​
//  LocalidadeAtual: 'PAT1',
//  Situacao: 'Carregado'
//  TempoPermanencia: 3 (estagios)
//  Vagoes: {​​​​​​​​
//   QuantidadeTotal: 53,

//   Destinos: [

// {​​​​​​​​

// QuantidadeVagoesRetidos: 23,
// QuantidadeVagoesNaoRetidos: 10,

// Local: ZZL,
//  }​​​​​​​​,

// {​​​​​​​​

// QuantidadeVagoesRetidos: 30,
// QuantidadeVagoesNaoRetidos: 15

// Local: ZBL
//}​​​​​​​​

// ]

// }​​​​​​​​

// }​​​​​​​​,

// {​​​​​​​​
//  LocalidadeAtual: 'PAT2',
//  Situacao: 'Descarregado'
//  TempoPermanencia: 3 (estagios)
//  Vagoes: {​​​​​​​​
//   QuantidadeTotal: 33,

//   QuantidadeVagoesRetidos: 23,
//   QuantidadeVagoesNaoRetidos: 10 }​​​​​​​​,

//}​​​​​​​​

// ]

// }​​​​​​​​

// }​​​​​​​​,

// ],
// Ativos: {​​​​​​​​
//     Total: 2500,
//     Disponivel: 1200,
//     Retido: 300,
//     EmTrem: {​​​​​​​​
//    SubindoVazio: 100,
//    DescendoCarregado: 250
//     }​​​​​​​​,
//     Desanexados: {​​​​​​​​
//   Carregados: 260,
//   Vazios: 300
//     }​​​​​​​​,
//     Percentuais:
//     DataAtualizacaoDado: '2020-10-02 15:30:00'
// }​​​​​​​​
