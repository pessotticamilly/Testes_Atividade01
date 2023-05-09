// describe("Verificar valores", () => {
//     it("Valor certo", () => {
//         cy.request("GET", "localhost:8086/girlsbank/pessoa/testeNumeroInteiro").as("TodoRequest");
//         cy.get("@TodoRequest").then(response => {
//             expect(response.body).to.eq(10);
//         });
//     });

//     it("Valor errado", () => {
//         cy.request("GET", "localhost:8086/girlsbank/pessoa/testeNumeroInteiro").as("TodoRequest");
//         cy.get("@TodoRequest").then(response => {
//             expect(response.body).to.not.eq(8);
//         });
//     });
// });

// describe("Acesso às páginas", () => {
//     it("Landing Page", () => {
//         cy.visit("localhost:8081/");
//     });

//     it("Login", () => {
//         cy.visit("localhost:8081/login");
//     });

//     it("Cadastro", () => {
//         cy.visit("localhost:8081/cadastro");
//     });
// });

// describe("CRUD Pessoa", () => {

    // it("Cadastrar", () => {
    //     var pessoaCadastrar = require("../../fixtures/pessoaCadastrar.json");

    //     cy.request("POST", "localhost:8086/girlsbank/pessoa/cadastrar", pessoaCadastrar).as("TodoRequest");
    //     cy.get("@TodoRequest").then(response => {
    //         console.log(response);
    //         expect(response.body).to.eq("Pessoa cadastrada com sucesso");
    //     });
    // });

    // it("Listar tudo", () => {
    //     cy.request("GET", "localhost:8086/girlsbank/pessoa/listar").as("TodoRequest");
    //     cy.get("@TodoRequest").then(response => {
    //         expect(response.body).to.not.null;
    //     });
    // });

    // it("Listar um", () => {
    //     cy.request("GET", "localhost:8086/girlsbank/pessoa/listar/1").as("TodoRequest");
    //     cy.get("@TodoRequest").then(response => {
    //         expect(response.body).to.not.eq("Não foi encontrado nenhuma pessoa com o ID informado");
    //     });
    // });

    // it("Login", () => {
    //     var pessoaLogin = require("../../fixtures/pessoaLogin.json");

    //     cy.request("POST", "localhost:8086/girlsbank/pessoa/login", pessoaLogin).as("TodoRequest");
    //     cy.get("@TodoRequest").then(response => {
    //         expect(response.body).to.not.eq("Não existe nenhuma pessoa com este CPF ou senha!");
    //     });
    // });

    // it("Editar", () => {
    //     var pessoaEditar = require("../../fixtures/pessoaEditar.json");

    //     cy.request("PUT", "localhost:8086/girlsbank/pessoa/editar/1", pessoaEditar).as("TodoRequest");
    //     cy.get("@TodoRequest").then(response => {
    //         expect(response.body).to.eq("Pessoa editada com sucesso");
    //     });
    // });

//     it("Excluir", () => {
//         cy.request("DELETE", "localhost:8086/girlsbank/pessoa/excluir/1").as("TodoRequest");
//         cy.get("@TodoRequest").then(response => {
//             expect(response.body).to.eq("Pessoa deletada com sucesso");
//         });
//     });

// });

describe("CRUD Conta", () => {

    it("Cadastrar", () => {
        var contaCadastrar = require("../../fixtures/contaCadastrar.json");

        cy.request("POST", "localhost:8086/girlsbank/conta/cadastrar", contaCadastrar).as("TodoRequest");
        cy.get("@TodoRequest").then(response => {
            expect(response.body).to.eq("Conta cadastrada com sucesso");
        });
    });

    // it("Listar tudo", () => {
    //     cy.request("GET", "localhost:8086/girlsbank/conta/listar").as("TodoRequest");
    //     cy.get("@TodoRequest").then(response => {
    //         expect(response.body).to.not.null;
    //     });
    // });

    // it("Listar um", () => {
    //     cy.request("GET", "localhost:8086/girlsbank/conta/listar/1").as("TodoRequest");
    //     cy.get("@TodoRequest").then(response => {
    //         expect(response.body).to.not.eq("Não foi encontrado nenhuma conta com o número informado");
    //     });
    // });

    // it("Editar", () => {
    //     var contaEditar = require("../../fixtures/contaEditar.json");

    //     cy.request("PUT", "localhost:8086/girlsbank/conta/editar/1", contaEditar).as("TodoRequest");
    //     cy.get("@TodoRequest").then(response => {
    //         expect(response.body).to.eq("Conta editada com sucesso");
    //     });
    // });

    // it("Excluir", () => {
    //     cy.request("DELETE", "localhost:8086/girlsbank/conta/excluir/1").as("TodoRequest");
    //     cy.get("@TodoRequest").then(response => {
    //         expect(response.body).to.eq("Conta deletada com sucesso");
    //     });
    // });
    
});
