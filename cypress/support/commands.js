Cypress.Commands.add('preencheDataNascimento', (data) =>
    {
    cy.get('#today_Day_ID').select(data.dia)
    cy.get('#today_Month_ID').select(data.mes)
    cy.get('#today_Year_ID').clear().type(data.ano)
    cy.get('input[type="submit"]').contains('Calculate').click()
})

Cypress.Commands.add('preencheDataDesejada', (data) =>
    {
    cy.get('#ageat_Day_ID').select(data.dia)
    cy.get('#ageat_Month_ID').select(data.mes)
    cy.get('#ageat_Year_ID').clear().type(data.ano)
    cy.get('input[type="submit"]').contains('Calculate').click()
})