# Testes de Cálculo de Idade com Cypress 📅

Este projeto tem como objetivo demonstrar testes automatizados utilizando **Cypress**, com foco na validação do **cálculo de idade** (*Age Calculator*) a partir da **data de nascimento** e/ou do parâmetro **"Age at"**.

Os testes utilizam como base o site público  
👉 [calculator.net/age-calculator.html](https://www.calculator.net/age-calculator.html)

Foram implementados **4 cenários de teste**, cobrindo casos válidos, inválidos e comportamento padrão da aplicação.

---

## 🧪 Cenários de Teste

Os cenários foram descritos utilizando **Gherkin (BDD)** para facilitar a leitura e o entendimento do comportamento testado:

```gherkin
Scenario: Calcular idade informando apenas a data de nascimento
Dado que o usuário acessa a página do Age Calculator
Quando ele informa sua data de nascimento
E realiza o cálculo
Então a idade calculada deve ser exibida corretamente
```
```gherkin
Scenario: Informar data de nascimento maior que a data "age at"
Dado que o usuário acessa a página do Age Calculator
Quando ele informa uma data de nascimento posterior à data "age at"
E realiza o cálculo
Então o sistema deve exibir uma mensagem de erro informando que a data é inválida
```
```gherkin
Scenario: Calcular idade utilizando as datas padrão do site (dia atual)
Dado que o usuário acessa a página do Age Calculator
Quando ele realiza o cálculo sem alterar os parâmetros padrão
Então a idade calculada deve ser de 0 dias
```
```gherkin
Scenario: Calcular idade informando data de nascimento e parâmetro "age at"
Dado que o usuário acessa a página do Age Calculator
Quando ele informa a data de nascimento
E informa a data desejada no campo "age at"
Então a idade calculada deve ser exibida corretamente
```

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- JavaScript

---

## ✅ Observações

- Os testes foram desenvolvidos apenas para fins de estudo e demonstração

- É fortemente recomendado validar e ajustar (se necessário) as constantes dataNascimento, dataDesejada e saidaEsperada, visto que impactarão diretamente nos resultados dos testes

- O site utilizado é público e pode sofrer alterações que impactem os seletores, como também os testes

- Recomenda-se utilizar seletores estáveis sempre que possível

---
## Autor

[![GitHub](https://img.shields.io/badge/GitHub-lucasisquerdo-181717?logo=github)](https://github.com/lucasisquerdo)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/lucas-isquerdo/)

**Lucas Isquerdo Acosta**
