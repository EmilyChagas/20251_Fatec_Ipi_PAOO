//declarando constantes
//const nome = 'Jose'
//console.log(nome) 
//nome = 'Pedro'
//console.log(nome)

//Declarando variaveis
//var b = 2
//let a = 2
//console.log(b)
//a = 3
//console.log(a)

//Pq não usar var
//var linguagem = 'JS'
//console.log("Aprendendo " + linguagem)
//var linguagem = 'Java'
//console.log("Aprendendo " + linguagem)
// Var permite que duas variaveis tenha o mesmo nome, o que pode dar comflito
// Var não se restrige a bloco de condicionais, ou seja uma varival var declarada num if pode aparecer fora dele

//coerção
const n1 = 2
const n2 = '3'
const n3 = n1 + n2
console.log(n3)
const n4 = n1 + Number(n2)
console.log(n4)

// comparação com == e ===
// == leva em conta os valores envolvidos, mesmo que sejam tipo diferentes, ocorre um coersão implicita, ou seja ele pode ver uma string como um number, se tiver semelhanças
// === compara os tipos, logo não tem coersão, ou seja mesmo que o valor contido seja semelhantes, ele não compara string com number
console.log( 1 === 1) // true
console.log(1 == '1') // true
console.log(1 === '1') // false
console.log(true == 1) // true
console.log(true == '1') // true
console.log(true == '2') //false
console.log( 1 == [1]) // true
console.log(null == undefined) // true

//declaração de vetores
v1 = []
v1 [0] = 3.4
console.log(v1.length)
v1[10] = 2
console.log(v1.length)
v1[2] = 'abc'
console.log(v1.length)
console.log(v1)

//funções
//definição
function hello(){
    console.log("oi")
}
//chamada
hello()

function hello(nome){
    console.log("oi," + nome);
}
hello('Pedro')

const triplo = function( n = 5){
    return n * 3
}
console.log(triplo())
console.log(triplo(4))

//Arrow Function -> nome = valor => returno
const t3 = () => 2 + 2
console.log(t3())
const t2 = (a) => {console.log('Sou a t2' + a)}
t2(1)
const t1 = n => {console.log(n)}
t1(1)
const dobro = valor => valor * 2
console.log(dobro(7))
// Colocar chave quando tem intenção de ter mais de uma linha de comando na função

//Closures - é um função interna com variaveis externas

function f(funcao){ // funcao de alta ordem -> highest order function
    funcao()
}

function g(){ //Funcao que devolve funcao
    //1. definir a funcao
    function outraFuncao (){
        console.log("Fui criada por g")
    }
    //2. Devolver a funcao
    return outraFuncao
}

f(function(){
    console.log("Sendo passada para f")
})

const resultadoDaG = g()
resultadoDaG()

function ola(){
    let nome = "Joao"
    return function(){
        console.log('Ola, ' + nome)
    }
}

const nomes = ['Ana Paula','Antonio','rodrigo','Alex','Cristina']
const resultante = nomes.filter(function(nome){return nome[0] === 'A'|| nome[0] === 'a'})
console.log(resultante)

const valores = [1, 2, 3, 4]
const res = valores.reduce((ac, v) => ac + v)
console.log(res)
 