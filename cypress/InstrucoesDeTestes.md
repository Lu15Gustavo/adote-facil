# Como Executar os Testes Automatizados (Cypress)

Este projeto utiliza o Cypress para testes automatizados de aceitação/end-to-end.

## Pré-requisitos
- Node.js instalado (recomendado: versão 18 ou superior)
- npm instalado
- Backend e frontend do projeto rodando (pode ser via Docker ou manualmente)

## Instalação das dependências
Na raiz do projeto, execute:

```
npm install
```

Isso irá instalar o Cypress e todas as dependências necessárias.

## Estrutura dos testes
- Os testes Cypress estão localizados em: `cypress/tests/`
- As fixtures (imagens e arquivos de apoio) ficam em: `cypress/fixtures/`

## Como rodar os testes

### 1. Certifique-se de que o backend e frontend estão rodando
- O frontend deve estar disponível em `http://localhost:3000` (ajuste o `baseUrl` em `cypress.config.js` se necessário).


### 2. Execute os testes em modo interativo (interface gráfica)

```
npx cypress open
```

Na interface,selecione o chrome e selecione o teste desejado para rodar.


```

## Observações
- Se precisar adicionar arquivos de upload, coloque-os em `cypress/fixtures/`.
- O arquivo de configuração do Cypress é `cypress.config.js`.

---
