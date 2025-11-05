// DB Fake
const animais = [
  {
    id: 1,
    nome: 'Rex',
    especie: 'Cachorro',
    raca: 'Labrador',
    dataNascimento: '2020-05-15',
    pesoKg: 30.5,
    observacoes: 'Dócil, adora brinquedos de corda.',
  },
  {
    id: 2,
    nome: 'Mimi',
    especie: 'Gato',
    raca: 'Siamês',
    dataNascimento: '2021-08-20',
    pesoKg: 4.2,
    observacoes: 'Independente, não gosta de banho.',
  },
  {
    id: 3,
    nome: 'Bart',
    especie: 'Pássaro',
    raca: 'Calopsita',
    dataNascimento: '2022-03-01',
    pesoKg: 0.1,
    observacoes: 'Canta alto pela manhã.',
  },
  {
    id: 4,
    nome: 'Flash',
    especie: 'Roedor',
    raca: 'Hamster Sírio',
    dataNascimento: '2023-01-10',
    pesoKg: 0.2,
    observacoes: 'Muito ativo à noite.',
  },
  {
    id: 5,
    nome: 'Nemo',
    especie: 'Peixe',
    raca: 'Peixe Betta',
    dataNascimento: '2023-09-01',
    pesoKg: 0.01,
    observacoes: 'Aquário de 5 litros.',
  },
];

let nextId = animais.reduce((max, animal) => (animal.id > max ? animal.id : max), 0) + 1;

exports.listarAnimais = (req, res) => {
  /* 
    #swagger.tags = ['Animais']
    #swagger.summary = 'Lista todos os animais cadastrados'
    #swagger.description = 'Retorna um array com todos os objetos de animais.'
    #swagger.responses[200] = { 
      schema: { $ref: "#/definitions/ListaAnimaisResponse" },
      description: 'Lista de animais obtida com sucesso.' 
    }
  */
  res.status(200).json({
    message: 'Animais listados com sucesso.',
    data: animais,
  });
}

exports.criarAnimal = (req, res) => {
  /* 
    #swagger.tags = ['Animais']
    #swagger.summary = 'Cria um novo animal'
    #swagger.description = 'Adiciona um novo animal à lista com um ID gerado automaticamente.'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados do animal a ser criado (ID é ignorado).',
      required: true,
      schema: { $ref: "#/definitions/Animal" }
    }
    #swagger.responses[201] = { 
      schema: { $ref: "#/definitions/AnimalResponse" },
      description: 'Animal criado com sucesso.' 
    }
    #swagger.responses[400] = { 
      schema: { $ref: "#/definitions/ErrorResponse" },
      description: 'Requisição inválida (campos faltando).' 
    }
  */
  const novoAnimal = { id: nextId++, ...req.body };
  animais.push(novoAnimal);

  res.status(201).json({
    message: 'Animal criado com sucesso',
    data: novoAnimal
  });
}

exports.buscarAnimal = (req, res) => {
  /* #swagger.tags = ['Animais']
    #swagger.summary = 'Busca um animal por ID'
    #swagger.description = 'Retorna o objeto de um animal específico usando seu ID.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do animal.',
        required: true,
        type: 'integer'
    }
    #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/AnimalResponse" },
        description: 'Animal encontrado com sucesso.' 
    }
    #swagger.responses[404] = { 
        schema: { $ref: "#/definitions/ErrorResponse" },
        description: 'Animal não encontrado.' 
    }
  */
  const animal = animais.find((a) => a.id === Number(req.params.id));

  if (animal) {
    res.status(200).json({
      message: 'Animal encontrado com sucesso.',
      data: animal,
    });
  } else {
    res.status(404).json({ message: 'Animal não encontrado' });
  }
};

exports.atualizarAnimalCompleto = (req, res) => {
  /* #swagger.tags = ['Animais']
    #swagger.summary = 'Atualiza (Substitui) um animal por ID (PUT)'
    #swagger.description = 'Substitui o objeto inteiro do animal. Todos os campos do payload são obrigatórios.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do animal a ser substituído.',
        required: true,
        type: 'integer'
    }
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados completos do animal para substituição.',
        required: true,
        schema: { $ref: "#/definitions/Animal" }
    }
    #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/AnimalResponse" },
        description: 'Animal substituído com sucesso.' 
    }
    #swagger.responses[201] = { 
        schema: { $ref: "#/definitions/AnimalResponse" },
        description: 'Recurso criado (upsert) com sucesso.' 
    }
  */
  const id = Number(req.params.id);
  const index = animais.findIndex((a) => a.id === id);

  if (index !== -1) {
    animais[index] = { id, ...req.body };
    res.status(200).json({
      message: 'Animal substituído com sucesso (PUT).',
      data: animais[index],
    });
  } else {
    const novoAnimal = { id, ...req.body };
    animais.push(novoAnimal);
    res.status(201).json({
      message: 'Novo animal criado com sucesso (PUT).',
      data: novoAnimal,
    });
  }
};

exports.atualizarAnimalParcial = (req, res) => {
  /* #swagger.tags = ['Animais']
    #swagger.summary = 'Atualiza (Parcialmente) um animal por ID (PATCH)'
    #swagger.description = 'Atualiza um ou mais campos do animal sem substituir o objeto inteiro.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do animal a ser atualizado.',
        required: true,
        type: 'integer'
    }
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados parciais do animal para atualização.',
        required: true,
        schema: { 
            "pesoKg": 32.0,
            "observacoes": "Precisa de tosa."
        }
    }
    #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/AnimalResponse" },
        description: 'Animal atualizado parcialmente com sucesso.' 
    }
    #swagger.responses[404] = { 
        schema: { $ref: "#/definitions/ErrorResponse" },
        description: 'Animal não encontrado.' 
    }
  */
  const id = Number(req.params.id);
  const index = animais.findIndex((a) => a.id === id);

  if (index !== -1) {
    // Mescla os dados existentes com os novos (PATCH)
    animais[index] = { ...animais[index], ...req.body };
    res.status(200).json({
      message: 'Animal atualizado parcialmente com sucesso (PATCH).',
      data: animais[index],
    });
  } else {
    res.status(404).json({ message: 'Animal não encontrado' });
  }
};

exports.deletarAnimal = (req, res) => {
  /* #swagger.tags = ['Animais']
    #swagger.summary = 'Deleta um animal por ID'
    #swagger.description = 'Remove permanentemente o animal da lista.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do animal a ser deletado.',
        required: true,
        type: 'integer'
    }
    #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/DeleteResponse" },
        description: 'Animal deletado com sucesso.' 
    }
    #swagger.responses[404] = { 
        schema: { $ref: "#/definitions/ErrorResponse" },
        description: 'Animal não encontrado.' 
    }
  */
  const id = Number(req.params.id);
  const initialLength = animais.length;

  // Filtra e mantém apenas os animais com ID diferente
  animais.splice(0, animais.length, ...animais.filter((a) => a.id !== id));

  if (animais.length < initialLength) {
    // ATENÇÃO: Mudamos de 204 (No Content) para 200 (OK)
    // Um status 204 NÃO PODE ter corpo de resposta.
    // Para enviar uma mensagem de sucesso, usamos o 200.
    res.status(200).json({
      message: 'Animal deletado com sucesso.',
    });
  } else {
    res.status(404).json({ message: 'Animal não encontrado' });
  }
};
