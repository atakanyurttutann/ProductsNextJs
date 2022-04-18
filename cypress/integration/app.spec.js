describe('Navigation', () => {

    context('720p resolution', () => {
        beforeEach(() => {
            cy.viewport(1280, 720)
        })
        it('displays full ', () => {
            cy.visit('http://localhost:3000/')
            cy.get("#newToOld",).click();
            cy.get('.productsAddCard').each(($el, index, $list) => {
                cy.wrap($el).click()
            })
            cy.get("[data-cy=increase]").first().click();
            cy.get("[data-cy=decrease]").first().click();
            cy.get("[data-cy=decrease]").first().click();

            cy.get('ul>li').each(($el, index, $list) => {
                if (index == 2) {
                    cy.wrap($el).click()
                }
            })
            cy.get('ul>li').first().click();
            cy.get('[type="checkbox"]').first().click();
            cy.get('[type="checkbox"]').last().click();
            cy.get(".productsAddCard",).first().click();
            cy.get(".productListCard",).first().click();
            cy.get("[data-cy=productAddBasket]").first().click();
            cy.get("[data-cy=productAddBasket]").first().click();


        })
    })
    context('iphone-7 resolution', () => {
        beforeEach(() => {
            cy.viewport('iphone-7')
        })
        it('displays mobile ', () => {
            cy.visit('http://localhost:3000/')
            cy.get('.productsAddCard').each(($el, index, $list) => {
                cy.wrap($el).click()
            })
            cy.get("[data-cy=basketOpen]").first().click();
            cy.get("[data-cy=increase]").first().click();
            cy.get("[data-cy=decrease]").first().click();
            cy.get("[data-cy=decrease]").first().click();
            cy.get("[data-cy=basketClose]").first().click();
            cy.get('ul>li').last().click();
            cy.get('ul>li').each(($el, index, $list) => {
                if (index == 1) {
                    cy.wrap($el).click()
                }
            })
            cy.get("[data-cy=filterOpen]").first().click();
            cy.get("#newToOld",).click();
            cy.get('[type="checkbox"]').first().click();
            cy.get('[type="checkbox"]').last().click();
            cy.get("[data-cy=filterClose]").first().click();
            cy.get(".productsAddCard",).first().click();
            cy.get(".productListCard",).first().click();
            cy.get("[data-cy=productAddBasket]").first().click();
            cy.get("[data-cy=productAddBasket]").first().click();
            cy.get("[data-cy=basketOpen]").first().click();
            cy.get("[data-cy=basketClose]").first().click();

        })
    })



})