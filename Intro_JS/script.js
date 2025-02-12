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