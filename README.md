# Plan2Go

## Cores

### Primária

* Base: #1ed2fb - rgb(30, 210, 251)
* Texto acessível: #303030 - rgb(48, 48, 48) - https://webaim.org/resources/contrastchecker/?fcolor=303030&bcolor=1ED2FB
* Variações - https://superdevresources.com/tools/color-shades#c3d91e

![primary](design/primary.png)

### Secundária

* Base: #cfe335 - rgb(207, 227, 53)
* Texto acessível: #303030 - rgb(48, 48, 48) - https://webaim.org/resources/contrastchecker/?fcolor=303030&bcolor=CFE335
* Variações - https://superdevresources.com/tools/color-shades#04b2d9

![secondary](design/secondary.png)

## Tipografia

### Títulos

* Quicksand
* Peso 600 (seminegrito)
* https://fonts.google.com/specimen/Quicksand?query=quic&preview.text=Plan2Go&preview.text_type=custom&selection.family=Quicksand:wght@600&sidebar.open

![title](design/title.png)

### Texto

* Roboto
* Peso 400 (regular)
* https://fonts.google.com/specimen/Roboto?query=roboto&preview.text_type=custom&selection.family=Roboto&sidebar.open

![text](design/text.png)

## Ilustrações

Para telas de carregamento, slides, páginas de apresentação...

![illustration1](design/illustration1.png)

## Sombras

Tons de cinza, três níveis:
 * 1px 1px 2px rgba(130, 130, 130, 0.2)
 * 1px 2px 5px rgba(130, 130, 130, 0.3)
 * 1px 4px 7px rgba(130, 130, 130, 0.2)


## Bordas

Arredondadas com 6px, sem níveis, sem largura.

# Padrões de código

## Geral

 * Evitar abreviações em tudo
 * Indentação: 2 espaços
 * UTF-8

## Idiomas

 * Português - telas, mensagens ao usuário, commits, documentação e comentários
 * Inglês - branches, variáveis, constantes, funções, classes, nomes de arquivos

## Case

 * lowerCamelCase - funções (quando não são componentes), variáveis, constantes, nomes de arquivos, propriedades, chaves
 * PascalCase - nomes de componentes, nomes de interface
 * snake_case - tabela de banco de dados, colunas de banco de dados
 * dash-case - rotas, classes CSS

## Pluralidade

 * Singular - tabelas de banco, queries (chave de nome, caminho), resolvers, packages
 * Plural - nome de array (variável, constante), funções que retornam arrays, título de query

## Organização de pastas

 * Na raiz da pasta `packages`, devem estar os arquivos de índice, por exemplo `routes.tsx` e `resolvers.ts`
 * Para arquivos não-genéricos seguir o esquema: `packages/entidade/operação/entidadeOperação.tipo.extensão`, por exemplo, `packages/user/create/userCreate.screen.tsx`
 * Para arquivos utilitários como funções genéricas, usar a pasta `utils` na raiz
 * Para componentes genéricos, reutilizáveis em qualquer tela, usar a pasta `components` na raiz
 * Para hooks genéricos, reutilizáveis em qualquer tela, usar a pasta `hooks` na raiz
 * Para assets genéricos, como logos, manifestos e outras mídias, usar a pasta `meta` na raiz


