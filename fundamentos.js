var one = 1

console.log(one, 'estou aqui')  /* Esse é o método log */

console.warn('Esse é o método de aviso')  /* normalmente a aplicação avisa*/

console.error('Esse é o método de erro')  /* usado para identificar erro em API ou if/else  */


const array = [
    {id: 1 , message: 'oi'},
    {id: 1 , message: 'oi'},
    {id: 1 , message: 'oi'},
    {id: 1 , message: 'oi'}
]

console.table(array, 'apresenta os dados em tabela, use com map ')

console.info('essa é uma informação')

console.clear("Limpo")

/* Antigamente era usado o var   */
var chocolate
var nescau    /* Variáveis undefined */

var banana = 10  
let maça = 20
const uva = 30

console.log(banana)
console.log(maça)
console.log(uva)

// uva = 45

// console.log(uva)  Não posso alterar uma constante

/* Tipos de dados*/

const name = 'Lucas do Espirito Santo'
let qtd = 5
const isApproved = false
let LastName = null
let age
const languages = ['JavaScript', 'PHP', 'Python']
const user = { email: 'paulo@teste.com', password: 'senha456'}

console.log(name)
console.log(typeof name)
console.log(qtd)
console.log(typeof qtd)
console.log(isApproved)
console.log(typeof isApproved)
console.log(LastName)
console.log(typeof LastName)
console.log(age)
console.log(typeof age)
console.table(languages)
console.table(typeof languages)
console.log(user)
console.log(typeof user)

if (typeof name === 'string'){
    console.log('aprovado')
} else{
    console.log('reprovado')
}

const number = [1,2,3,4]
const objetos = [{name: 'Paulo', id: 1234},
                 {name: 'Samuel', id: 2001}]

console.log(objetos[0])