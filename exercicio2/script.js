const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️
console.log(filme.elenco[0])

// queria fazer com length -1, mas nao deu certo
console.log(filme.elenco[3]) 

console.log(filme.transmissoesHoje)

// nao sei se esta certo
console.log(filme.transmissoesHoje[1])


