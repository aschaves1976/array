const quaseArray ={0: 'Lucas', 1: 'Fernanda', 2: 'Alessandro'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])
const meuArray =['Lucas', 'Fernanda', 'Alessandro']
console.log(quaseArray.toString(), meuArray)