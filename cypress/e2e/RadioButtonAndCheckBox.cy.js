/// reference types="cypress" />
// describe('Checking Radio buttons', () => {
//  it('should successfully load the homepage and verify its title', () => {

//     cy.visit("https://testautomationpractice.blogspot.com/")

//     //visibility of radio button and checkbox
//     cy.get("input#male").should('be.visible')
//     cy.get("input#female").should('be.visible')

//     //selecting radio buttons
    
//     cy.get("input#male").check().should('be.checked')
//     cy.get("input#female").should('not.be.checked')

//     cy.get("input#female").check().should('be.checked')
//     cy.get("input#male").should('not.be.checked')


// // })



// // it('Checking CheckBoxes', () => {

// //     cy.visit("https://testautomationpractice.blogspot.com/")

// //     //visibility of CheckBox button  
// //     cy.get("input#sunday").should('be.visible')
    

// //     //selecting CheckBox monday
// //     cy.get("input#sunday").check().should('be.checked')

// //     cy.get("input#sunday").uncheck().should('not.be.checked')
    


// })
// })

describe('Checking Radio buttons and UI Elements',()=>{
    // it("Checking Radio buttons and checkbox",() =>{

    //     // visting on the site
    //     cy.visit('https://testautomationpractice.blogspot.com/')

    //     //visibility of radio buttons
    //     cy.get("input#male").should('be.visible')
    //     cy.get("input#female").should('be.visible')

    //     //selecting radio buttons
    //     cy.get('input#male').check().should('be.checked');
    //     cy.get('input#female').should('not.be.checked');

    //      cy.get('input#female').check().should('be.checked');
    //      cy.get('input#male').should('not.be.checked');

        

    // })


     it("Checking checkbox",() =>{

        // visting on the site
        cy.visit('https://testautomationpractice.blogspot.com/')

        //visibility of elements  of checkbox
        cy.get("input#sunday").should('be.visible')
       


        //selected the checkbox
        cy.get("input#sunday").check().should('be.checked')
        cy.get('input#sunday').uncheck().should('not.be.checked');  //Unselected the checkbox
       
        //selected the checkbox
        cy.get("input#monday").check().should('be.checked')
        cy.get("input#monday").uncheck().should('not.be.checked');//Unselected the checkbox
         //selected the checkbox
        cy.get("input#tuesday").check().should('be.checked')
        cy.get("input#tuesday").uncheck().should('not.be.checked');//Unselected the checkbox


       // selectoing all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')



        // check first cheackbox and last 
          cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
          cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
 

        

        

    })
})