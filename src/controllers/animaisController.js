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
  res.status(200).json(animais);
}
