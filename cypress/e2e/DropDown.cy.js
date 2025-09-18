 
describe('Checking DropDown Elements',()=>{
    // it.skip("Checking DropDown Elements and fxns",() =>{

    //     cy.visit("https://www.zoho.com/commerce/free-demo.html")

    //     cy.get('#zcf_address_country')
    //     .select('India')
    //     .should('have.value','India')


    // })


    it("Checking DropDown Elements and fxns",() =>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.wait(10000)

        cy.get('#select2-billing_country-container').click();
        cy.wait(10000)
        cy.get('.select2-search__field').type("India").type('{enter}')

       
      

    })
})
