aulaSemestre = [
    { id: 1, nomeDisciplina: "Matemática Discreta", nomeProfessor: "Prof. Carlos Souza", objetivo: "Introduzir conceitos fundamentais de matemática discreta.", ementa: "Conjuntos, funções, relações, lógica, grafos.", criteriosAvaliacao: "Provas, trabalhos e participação.", horario:"17h20", nota:10.0 },

    { id: 2, nomeDisciplina: "Programação I", nomeProfessor: "Prof. Ana Lima", objetivo: "Ensinar os conceitos básicos de programação.", ementa: "Variáveis, estruturas de controle, funções, arrays.", criteriosAvaliacao: "Provas práticas e teóricas.", horario:"19h00", nota:9.1 },

    { id: 3, nomeDisciplina: "Algoritmos", nomeProfessor: "Prof. João Mendes", objetivo: "Desenvolver o raciocínio lógico para resolver problemas computacionais.", ementa: "Algoritmos, pseudocódigo, estruturas de dados.", criteriosAvaliacao: "Provas e projetos.", horario:"20h50", nota:9.9 },

    { id: 4, nomeDisciplina: "Estruturas de Dados", nomeProfessor: "Prof. Maria Clara", objetivo: "Introduzir conceitos de bancos de dados relacionais.", ementa: "Modelagem de dados, SQL, normalização.", criteriosAvaliacao: "Trabalhos práticos e provas.", horario:"19h00", nota:8.8 },

    { id: 5, nomeDisciplina: "Sistemas de Informação I", nomeProfessor: "Prof. Anna Maria", objetivo: "Introduzir conceitos de bancos de dados relacionais.", ementa: "Modelagem de dados, SQL, normalização.", criteriosAvaliacao: "Trabalhos práticos e provas.", horario:"20h50", nota:9.5},

    { id: 6, nomeDisciplina: "Inteligência Artificial", nomeProfessor: "Prof. João Roberto", objetivo: "Desenvolver o raciocínio lógico para resolver problemas computacionais.", ementa: "Algoritmos, pseudocódigo, estruturas de dados.", criteriosAvaliacao: "Provas e projetos.", horario:"17h20", nota:6.60 },

    { id: 7, nomeDisciplina: "Banco de Dados I", nomeProfessor: "Prof. Clara Mendes", objetivo: "Introduzir conceitos de bancos de dados relacionais.", ementa: "Modelagem de dados, SQL, normalização.", criteriosAvaliacao: "Trabalhos práticos e provas.", horario:"19h00", nota:7.1 },

    { id: 8, nomeDisciplina: "Linguagem de Programação", nomeProfessor: "Prof. José Silva", objetivo: "Desenvolver o raciocínio lógico para resolver problemas computacionais.", ementa: "Algoritmos, pseudocódigo, estruturas de dados.", criteriosAvaliacao: "Provas e projetos.", horario:"20h50", nota:9.10 },

    { id: 9, nomeDisciplina: "Sistemas Distribuídos", nomeProfessor: "Prof. Maria Clara", objetivo: "Introduzir conceitos de bancos de dados relacionais.", ementa: "Modelagem de dados, SQL, normalização.", criteriosAvaliacao: "Trabalhos práticos e provas.", horario:"19h00", nota:8.80 },

    { id: 10, nomeDisciplina: "Redes de Computadores", nomeProfessor: "Prof. Maria Clara", objetivo: "Introduzir conceitos de bancos de dados relacionais.", ementa: "Modelagem de dados, SQL, normalização.", criteriosAvaliacao: "Trabalhos práticos e provas.", horario:"20h50", nota:7.9 },

    { id: 11, nomeDisciplina: "Internet", nomeProfessor: "Prof. Roberto Andrade", objetivo: "Introduzir conceitos de bancos de dados relacionais.", ementa: "Modelagem de dados, SQL, normalização.", criteriosAvaliacao: "Trabalhos práticos e provas.", horario:"19h00", nota:8.6 },

    { id: 12, nomeDisciplina: "Engenharia de SW", nomeProfessor: "Prof. Lucas Martins", objetivo: "Introduzir conceitos de bancos de dados relacionais.", ementa: "Modelagem de dados, SQL, normalização.", criteriosAvaliacao: "Trabalhos práticos e provas.", horario:"20h50", nota:9.50 },

]
export default aulaSemestre

// const aulasSemestre = [
//   {
//     "segunda-feira": {
//       diaDaSemanaAbreviado: "S",
//       disciplinas: [
//         {
//           nomeDisciplina: "Matemática Discreta",
//           nomeProfessor: "Prof. Carlos Souza",
//           objetivo: "Introduzir conceitos fundamentais de matemática discreta.",
//           ementa: "Conjuntos, funções, relações, lógica, grafos.",
//           criteriosAvaliacao: "Provas, trabalhos e participação.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Introdução a conjuntos.",
//             },
//             {
//               numero: 2,
//               conteudo: "Funções e relações.",
//             },
//           ],
//         },
//         {
//           nomeDisciplina: "Programação I",
//           nomeProfessor: "Prof. Ana Lima",
//           objetivo: "Ensinar os conceitos básicos de programação.",
//           ementa: "Variáveis, estruturas de controle, funções, arrays.",
//           criteriosAvaliacao: "Provas práticas e teóricas.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Introdução à programação.",
//             },
//             {
//               numero: 2,
//               conteudo: "Variáveis e tipos de dados.",
//             },
//           ],
//         },
//       ],
//     },
//   },
//   {
//     "terca-feira": {
//       diaDaSemanaAbreviado: "T",
//       disciplinas: [
//         {
//           nomeDisciplina: "Algoritmos",
//           nomeProfessor: "Prof. João Mendes",
//           objetivo:
//             "Desenvolver o raciocínio lógico para resolver problemas computacionais.",
//           ementa: "Algoritmos, pseudocódigo, estruturas de dados.",
//           criteriosAvaliacao: "Provas e projetos.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Introdução a algoritmos.",
//             },
//             {
//               numero: 2,
//               conteudo: "Estruturas de controle.",
//             },
//           ],
//         },
//         {
//           nomeDisciplina: "Banco de Dados I",
//           nomeProfessor: "Prof. Maria Clara",
//           objetivo: "Introduzir conceitos de bancos de dados relacionais.",
//           ementa: "Modelagem de dados, SQL, normalização.",
//           criteriosAvaliacao: "Trabalhos práticos e provas.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Introdução a bancos de dados.",
//             },
//             {
//               numero: 2,
//               conteudo: "Modelagem de dados.",
//             },
//           ],
//         },
//       ],
//     },
//   },
//   {
//     "quarta-feira": {
//       diaDaSemanaAbreviado: "Q",
//       disciplinas: [
//         {
//           nomeDisciplina: "Engenharia de Software",
//           nomeProfessor: "Prof. Roberto Andrade",
//           objetivo:
//             "Apresentar os processos e metodologias de desenvolvimento de software.",
//           ementa:
//             "Processos de software, metodologias ágeis, gerenciamento de projetos.",
//           criteriosAvaliacao: "Projetos e provas.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Introdução à engenharia de software.",
//             },
//             {
//               numero: 2,
//               conteudo: "Metodologias de desenvolvimento.",
//             },
//           ],
//         },
//         {
//           nomeDisciplina: "Sistemas Operacionais",
//           nomeProfessor: "Prof. Lucas Martins",
//           objetivo: "Estudar os fundamentos dos sistemas operacionais.",
//           ementa:
//             "Processos, threads, gerenciamento de memória, sistemas de arquivos.",
//           criteriosAvaliacao: "Provas teóricas e práticas.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Conceitos de sistemas operacionais.",
//             },
//             {
//               numero: 2,
//               conteudo: "Gerenciamento de processos.",
//             },
//           ],
//         },
//       ],
//     },
//   },
//   {
//     "quinta-feira": {
//       diaDaSemanaAbreviado: "Q",
//       disciplinas: [
//         {
//           nomeDisciplina: "Redes de Computadores",
//           nomeProfessor: "Prof. Sandra Ribeiro",
//           objetivo: "Ensinar os princípios de redes de computadores.",
//           ementa: "Arquitetura de redes, protocolos, segurança.",
//           criteriosAvaliacao: "Provas e trabalhos práticos.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Introdução a redes de computadores.",
//             },
//             {
//               numero: 2,
//               conteudo: "Modelos de referência OSI e TCP/IP.",
//             },
//           ],
//         },
//         {
//           nomeDisciplina: "Interação Humano-Computador",
//           nomeProfessor: "Prof. Paula Ferreira",
//           objetivo:
//             "Estudar a interação entre humanos e sistemas computacionais.",
//           ementa: "Princípios de design, usabilidade, acessibilidade.",
//           criteriosAvaliacao: "Projetos e avaliações práticas.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Fundamentos de IHC.",
//             },
//             {
//               numero: 2,
//               conteudo: "Princípios de design.",
//             },
//           ],
//         },
//       ],
//     },
//   },
//   {
//     "sexta-feira": {
//       diaDaSemanaAbreviado: "S",
//       disciplinas: [
//         {
//           nomeDisciplina: "Desenvolvimento Web",
//           nomeProfessor: "Prof. André Silva",
//           objetivo: "Ensinar o desenvolvimento de aplicações web.",
//           ementa: "HTML, CSS, JavaScript, frameworks.",
//           criteriosAvaliacao: "Projetos e provas práticas.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Introdução ao desenvolvimento web.",
//             },
//             {
//               numero: 2,
//               conteudo: "HTML e CSS básicos.",
//             },
//           ],
//         },
//         {
//           nomeDisciplina: "Qualidade de Software",
//           nomeProfessor: "Prof. Bianca Costa",
//           objetivo:
//             "Estudar as técnicas e processos para garantir a qualidade do software.",
//           ementa: "Testes de software, métricas, garantia de qualidade.",
//           criteriosAvaliacao: "Trabalhos e provas.",
//           aulasDadas: [
//             {
//               numero: 1,
//               conteudo: "Introdução à qualidade de software.",
//             },
//             {
//               numero: 2,
//               conteudo: "Planejamento de testes.",
//             },
//           ],
//         },
//       ],
//     },
//   },
// ];
