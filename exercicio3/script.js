const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a)
const pokemon2 = {
    ...pokemon1,
	nome: 'Squirtle',
	tipo: 'Água'
}

//b)
pokemon1.ataques = []

//c)
pokemon1.ataques.push({
	nome: "Investida",
	dano: 40,
	tipo: "Normal",
	precisao: 100
})

//d)
pokemon2.ataques = [...pokemon1.ataques]

//e)
pokemon1.ataques.push({
	nome: "Folha Navalha",
	dano: 45,
	tipo: "Grama",
	precisao: 100
})

//f)
pokemon2.ataques.push({
	nome: "Jato de Água",
	dano: 40,
	tipo: "Água",
	precisao: 100
})

//g)
console.log(pokemon1)
console.log(pokemon2)