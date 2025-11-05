import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('eslint:recommended', 'plugin:prettier/recommended'),

  // 2. Configuração customizada do projeto
  {
    // Define quais arquivos este bloco de configuração se aplica
    files: ['src/**/*.js', 'swagger.js', 'eslint.config.js'],

    // Opções de Linguagem
    languageOptions: {
      globals: {
        ...globals.node,
      },

      // Garantimos o uso de ES módulos
      sourceType: 'module',
      ecmaVersion: 'latest',
    },

    // Regras específicas do projeto
    rules: {
      // Regras do Prettier (garantindo que erros do Prettier parem o build)
      'prettier/prettier': 'error',
      // no-unused-vars é uma regra recomendada, mas a rebaixamos para 'warn'
      'no-unused-vars': 'warn',
    },
  },
];
