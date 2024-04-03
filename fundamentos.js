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

console.table(array)

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

const nam = 'Lucas do Espirito Santo'
let qtd = 5
const isApproved = false
let LastName = null
let age
const languages = ['JavaScript', 'PHP', 'Python']
const user = { email: 'paulo@teste.com', password: 'senha456'}

console.log(nam)
console.log(typeof nam)
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

if (typeof nam === 'string'){
    console.log('aprovado')
} else{
    console.log('reprovado')
}

const number = [1,2,3,4]
const objetos = [{name: 'Paulo', id: 1234},
                 {name: 'Samuel', id: 2001}]

console.log(objetos[0])

// métodos de array
const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length, 'array')
console.log(list[4])

list[5] = 'f'
console.log(list, 'oi')

list.push('g')   //adiciona um item no final
console.log(list, 'push')

const sub = list.length - 5
console.log(sub, list.length, 'sub')

console.log(list[list.length - 5], 'aqui')

list.pop()  // remove o último
console.log(list, 'pop')

list.shift()      // remove o primeiro
console.log(list, 'shift')

list.unshift('a')  // adiciona o dado apagado
console.log(list,'unshift')

// start Slice = valor do lenght anterior
// end = valor do real
console.log(list.slice(1,4))

const product = {     // CHAVE -> NAME    VALOR -> 'Regata'
    name: 'Regata',
    price: 49.99,
    inStock: true,
    sizes: ['P', 'M', 'G', 'GG', ],
}

// para trazer o valor do meu objeto eu preciso nomear o objeto e em seguida . e o nome da chave
console.log(product.name,product.price,product.inStock,product.sizes)

//destructuring
const { inStock, price} = product

console.log(inStock)

// JSON
const dog = {
    name: 'Tiba',
    age: 5,
    breed:'Boder Colie'
}

// const jsonP = JSON.parse(dog)
const jsonSt = JSON.stringify(dog)    // Transforma um objeto comum em JSON
const jsonReset = JSON.parse(jsonSt)  // Transforma em JSON em objeto 

console.log(jsonSt)
console.log(jsonReset)


//teste da net
const teste = '{"name":true, "count":42}'
const obj = JSON.parse(teste)
console.log(obj.name)
console.log(obj.count)

const caqui = 10.988
console.log(caqui.toFixed(1))

// Date
const data = new Date()
console.log(data)

// operadores

const a = 20
const b = 2

const soma = a + b
const subt = a - b
const multi = a * b
const divi = a / b
const por = a % b

console.log(soma, subt, multi, divi, por, "ari")

//incremento e decremento

const aa = a+1
console.log(aa)


