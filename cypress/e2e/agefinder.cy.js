describe('Age Calculator', () => {
  const dataNascimento = {
    dia: "7",
    mes: "Feb",
    ano: "2002"
  }
  const dataDesejada = {
    dia: "7",
    mes: "Feb",
    ano: "2026"
  } 
  const saidaEsperada = "24 years"
  // a depender das datas informadas e do dia atual, o conteúdo irá mudar, será necessário alterar a saída esperada
  beforeEach(()=>
  {
    cy.visit('https://www.calculator.net/age-calculator.html')
  })
  it('testando com meu dia de nascimento', () => {
    cy.preencheDataNascimento(dataNascimento)
    cy.get('.verybigtext').should('contain',saidaEsperada)
  })

  it('testando com meu dia de nascimento maior que "age at"', () => {
    cy.preencheDataNascimento(dataDesejada)
    cy.get('#content').should('contain','Date of birth needs to be earlier than the age at date.')
  })

  it('testando com as datas iguais (Nascimento/Dia) (default do site)', () =>
  {
    cy.get('input[type="submit"]').contains('Calculate').click()
    cy.get('.verybigtext').should('contain',"0 days")
  })

  it('testando com os parâmetros de nascimento e "age at"', () =>
  {
    cy.preencheDataNascimento(dataNascimento)
    cy.preencheDataDesejada(dataDesejada)
    cy.get('.verybigtext').should('contain',saidaEsperada)
    
  })
})