## Comandos para Instalação

```bash
# Criar o projeto
mkdir petshop-api
cd petshop-api
npm init -y

# Instalar dependências
npm install express cors swagger-ui-express swagger-jsdoc

# Instalar dependências de desenvolvimento
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier nodemon
```

## Configurar ESLint

```bash
npx eslint --init
```

Selecione as opções:
- To check syntax, find problems, and enforce code style
- CommonJS (require/exports)
- None of these
- No TypeScript
- Node
- Use a popular style guide → Standard
- JSON