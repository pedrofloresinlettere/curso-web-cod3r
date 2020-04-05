console.log(Math.ceil(6.1))  //Acesso de um objeto da própria API do Javascript (API = Estrutura de Dados em Javascript)

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome          // This. serve par tornar algo (funções) visivel para quem esta de fora do escopo
    this.exec = function () {   // This. atributos fora do escopo
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()