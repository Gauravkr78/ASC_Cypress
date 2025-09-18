// require('cypress-xpath');
// describe('Cypress core commands',()=>{
//     before(()=>{
//         cy.log('Starting Cypress Core Commands Test Suite');
//         cy.visit('https://www.saucedemo.com/');
 
//     })
 
//     after(()=>{
//         cy.log('Completed the core commands test suite');
//     })
 
//     it('core commands',function(){
//         cy.get('[data-test="username"]').clear().type('standard_user').should('have.value', 'standard_user');
//         cy.get('[data-test="password"]').clear().type('secret_sauce');
//         cy.wait(500); // Wait before clicking login
//         cy.get('[data-test="login-button"]').click();
//         cy.wait(1000);
 
//         //clicking on the cart icon (navigation and control)
//         cy.log('checking navigation and control')
//         cy.get('.shopping_cart_link').click();
//         cy.wait(1000);
//         cy.go('back');
//         cy.wait(1000);
//         cy.viewport(1200,800);
//         cy.viewport(800,500);
 
//         //Querying and finding elements
//         cy.log('Querying and finding elements')
//         cy.get('.bm-menu-wrap').should('exist');
//         cy.xpath('//*[@id="item_4_title_link"]/div').contains('Sauce Labs');
//         cy.get('#item_4_title_link').find('.inventory_item_name ');
//         cy.get('[data-test="inventory-item-name"]').first();
//         cy.get('[data-test="inventory-item-name"]').last();
 
//         //User actions
//         cy.log('Checking User Actions')
//         cy.get('.product_sort_container').select('Price (low to high)');
//         cy.xpath('//*[@id="item_1_title_link"]/div').trigger('mouseover');
       
//        // Network requrest and data and fixtures combined
//         cy.fixture('postData.json').then((mockData) => {
//             cy.intercept('GET', 'https://dummyjson.com/posts/1', {
//                 statusCode: 200,
//                 body: mockData
//             }).as('mockedPost');
//         });
 
 
//         //Command chaining and control flow
//         cy.log('Command chaining and control flow')
//         cy.xpath('//*[@id="item_4_title_link"]/div').then(($element) => {
//         const productName = $element.text();
//         cy.log('Product name is: ' + productName);
 
       
//         expect(productName).contains('Sauce Labs Backpack');
//         cy.xpath('//*[@id="item_4_title_link"]/div').as('productItem'); //aliasing example
//         cy.get('@productItem').should('be.visible');
 
//         });
 
       
//         cy.get('#item_4_title_link').within(() => {
//         cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
//         }); //withing example
 
 
 
//     })
// })