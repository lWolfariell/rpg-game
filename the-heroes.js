class hero { 

    constructor (nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe
        this.golpes = {
            guerreiro: ['Golpe Fuminante','Corter do Luar','Pisada' ],
            mago: ['Bola de Fogo', 'Toque Elétrico', 'Nevasca'],
            monge: ['Mil Palmas', 'Voadora Ascendente', 'Punho Flamejante']
        }
    }
    apresentacao() {  
          console.log(`Novo Herói acaba de chegar!\n
          ###### ${this.nome} ######\n
          ###### ${this.idade} anos######\n
          ###### ${this.classe} ######\n          
          ${this.nome}, encontra-se em uma cidade à beira de uma misteriosa calamidade. Um culto sombrio emerge das sombras, trazendo consigo criaturas das profundezas e perturbando o equilíbrio entre a magia natural e as forças arcanas. Guidado pelo destino, você foi chamado(a) a desvendar os segredos por trás dessa ameaça iminente, sem demora você confronta essas criatuaras:
          `)   

    }

    atacar() {
        const golpesDaClasse = this.golpes[this.classe]
        const indiceGolpe = Math.floor(Math.random() * golpesDaClasse.length)
        const golpeEscolhido = golpesDaClasse[indiceGolpe]

        console.log(`O(a) ${this.classe} ${this.nome} atacou usando ${golpeEscolhido}!\n`)

        
    }
}

let thalita = new hero ('Dualmistic', 30, 'mago')
let vitor = new hero ('Wolfariel', 44, 'guerreiro')
let miguel = new hero ('Angelus', 20, 'monge')



vitor.apresentacao();
vitor.atacar();