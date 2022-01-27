// Exercício 6: Objeto
// Crie um objeto que receba ao menos três propriedades sobre você.

let perfil= {
    nome: "Matheus",
    signo: "Aquário",
    asc: "Leão",
    lua: "Aquário",
}
console.log(perfil)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

perfil.mercury = "Aquário"
console.log(perfil.nome , perfil.signo)
// Remova uma propriedade desse objeto.

delete perfil.asc

//Mostre no console todas as propriedades desse objeto.

console.log(perfil)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = {
    bbb22Apresentador: "Tadeu",
    participantes: [
        {
    nome: "Linna",
    idade: 30,
    telefone: "9988-7766",
    amigos: ["Jade" , "Arthur" , "Nathalia" , "Rodrigo"],
} , {
    nome: "Maria",
    idade: 24,
    telefone: "8877-6655",
    amigos: ["Paulo" , "Barbara" , "Linna" , "Nathalia"],
} , {
    nome: "Douglas",
    idade: "34",
    telefone: "7766-5544",
    amigos: ["Scooby" , "Paulo" , "Abravanel" , "Jade"],
} , {
    nome: "Abrava",
    idade: "31",
    telefone: "6655-4433",
    amigos: ["Douglas" , "Scooby" , "Paulo" , "Linna"],
} , {
    nome: "Nathalia",
    idade: "28",
    telefone: "5544-3322",
    amigos: ["Rodrigo" , "Lucas" , "Jess" , "Vinny"],
}
    ]
}
// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro.participantes[0].amigos[2] , cadastro.participantes[1].amigos[2] , cadastro.participantes[2].amigos[0] , cadastro.participantes[3].amigos[3] , cadastro.participantes[4].amigos[3])