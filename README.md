# cyber-glossary

Glossário de cibersegurança com foco prático em ofensiva, defesa, investigação e operações modernas.

## Estrutura atual

```text
.
|-- index.html
|-- assets/
|   |-- css/
|   |   -- styles.css
|   |-- js/
|       -- app.js
|-- README.md
```

## Como executar

Abra o arquivo index.html no navegador.

## Arquitetura rápida

- index.html: estrutura da página, barra de busca, filtros por categoria, área de conteúdo e paginação.
- assets/css/styles.css: tema visual, responsividade, estilos de tags e componentes da interface.
- assets/js/app.js: base de termos, lógica de busca, filtros, acordeão (1 card aberto por vez), paginação e ferramentas associadas.

## Como contribuir com novos termos

Para manter consistência e evitar regressão de interface, siga este fluxo.

### 1) Adicione o termo na base de dados

No arquivo assets/js/app.js, inclua um novo objeto dentro do array terms.

Formato esperado:

{ term: "Nome do termo", tag: "categoria", def: "Definição curta e objetiva." }

Regras:

- term: nome principal do conceito.
- tag: deve usar uma categoria existente.
- def: definição técnica curta, sem texto excessivo.

Categorias suportadas atualmente:

- pentest
- network
- web
- mobile
- malware
- crypto
- social
- defense
- forensics

### 2) Escolha a categoria correta

Use as categorias de forma consistente:

- pentest: testes ofensivos e exploração.
- network: protocolos, rede, tráfego.
- web: segurança de aplicações web/API.
- mobile: Android/iOS, MAST, MDM/MTD.
- malware: famílias, técnicas e evasão.
- crypto: criptografia, hash, chaves.
- social: fraude, phishing, engenharia social.
- defense: detecção, hardening, governança.
- forensics: DFIR, artefatos e investigação.

### 3) Ferramentas associadas (recomendado)

Se o termo tiver ferramentas conhecidas, atualize a função getRelatedTools em assets/js/app.js.

- Mapeamento específico: objeto exactTools.
- Fallback automático: heurísticas por palavra-chave e fallback por categoria.

Boa prática:

- Prefira 3 a 4 ferramentas por termo.
- Use ferramentas relevantes para estudo/defesa.

### 4) Quando criar nova categoria

Se for realmente necessário criar uma nova categoria:

- Adicione o botão de filtro em index.html.
- Adicione label da categoria em getTagLabel no assets/js/app.js.
- Adicione fallback em byTag no assets/js/app.js.
- Adicione estilo da tag no assets/css/styles.css (classe .tag-nova-categoria).

Sem esses pontos, o filtro e as tags podem quebrar ou ficar inconsistentes.

### 5) Validação antes de enviar

Checklist mínimo:

- Busca normal encontra o novo termo.
- Busca com opção -w funciona para o termo.
- Busca regex não quebra com seu termo.
- Filtro da categoria mostra o termo.
- Paginação continua funcionando.
- Card expande/recolhe corretamente.
- Ferramentas associadas aparecem no card.

## Boas práticas de conteúdo

- Evite duplicar termos com nomes muito parecidos.
- Mantenha nomenclatura padrão (sigla + nome completo quando útil).
- Definições objetivas, em linguagem técnica simples.
- Evite descrições com instruções ofensivas passo a passo.

## Ideias de contribuição

- Expandir trilhas de Mobile, DFIR e Identity Security.
- Incluir mais termos de detecção avançada e threat intelligence.
- Melhorar cobertura de ferramentas associadas por termo.
