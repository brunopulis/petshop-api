const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/swagger_output.json';
const endpointsFiles = [
  './src/routes/index.js', 
];

const doc = {
  info: {
    version: '1.0.0',
    title: 'Petshop API - Treinamento QA',
    description:
      'Documentação da API de Petshop para treinamento de Testes de API.',
  },
  host: 'localhost:3000',
  basePath: '/api/v1',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Animais',
      description: 'Endpoints para a gestão de animais.',
    },
    // (Podemos adicionar 'Produtos' e 'Servicos' aqui depois)
  ],
  // Definições de modelos (Schemas)
  definitions: {
    // Schema do Animal (para o 'data')
    Animal: {
      id: 1,
      nome: 'Rex',
      especie: 'Cachorro',
      raca: 'Labrador',
      dataNascimento: '2020-05-15',
      pesoKg: 30.5,
      observacoes: 'Dócil, adora brinquedos de corda.',
    },
    // Schema para Lista de Animais (Resposta do GET /animais)
    ListaAnimaisResponse: {
      message: 'Animais listados com sucesso.',
      data: [
        {
          $ref: '#/definitions/Animal', // Referencia o schema de Animal
        },
      ],
    },
    // Schema para Animal Único (Resposta do GET /animais/:id, POST, PUT, PATCH)
    AnimalResponse: {
      message: 'Animal encontrado com sucesso.',
      data: {
        $ref: '#/definitions/Animal', // Referencia o schema de Animal
      },
    },
    // Schema para Erros (404, 400, etc.)
    ErrorResponse: {
      message: 'Animal não encontrado',
    },
    // Schema para Sucesso no Delete
    DeleteResponse: {
      message: 'Animal deletado com sucesso.',
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Documentação do Swagger gerada com sucesso.');
});
