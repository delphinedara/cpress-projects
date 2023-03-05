///<reference types ="Cypress"/>

describe('First test suite', function (){
  it('First test case', function(){

  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
  cy.get('.search-keyword').type('ca')
  cy.wait(2000)
  cy.get('.product:visible').should('have.length',4)

  // PARENT CHILD CHAINING 
  cy.get('.products').as('productLocator')
  cy.get('@productLocator').find('.product').should('have.length', 4)
  cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(()=>{
    console.log('sf')//this execute after resolving premise in line 19
  
  })
  cy.get(':nth-child(3) > .product-action > button') //similar to the line above 

  cy.get('@productLocator').find('.product').each(($el, index, list)=>{
   const textVeg=  $el.find('h4-product-name').text()
   if(textVeg.includes('cashews')){
     cy.wrap($el).find('button').click()
   }
  })
  
  //assert if logo text is correctly displayed
  cy.get('.brand').should('have.text', 'GREENKART')

  //to print in logs
  cy.get('.brand').then((logoelement)=> {
    cy.log(logoelement.text())
  })

})
  
} )