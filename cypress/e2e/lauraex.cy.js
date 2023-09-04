describe('meu primeiro describe', ()=>{
    context('meu primeiro contexto', ()=>{
        it('meu primeiro teste', ()=>{
         
            cy.login(Cypress.env('user_login'), Cypress.env('user_senha') ) 
        

        })  


    })
    context('meu segundo contexto', ()=>{
        it('meu segundo teste', ()=>{


            
        })


    })

})
