angular.module("Filmes").controller("FilmesController", function($scope){
	$scope.titulo = "Lançamentos 2017";

	$scope.filmes = [
		
		{
			id: 01,
			titulo: "Logan",
			ano: 2017,
			estudio: "Twentieth Century Fox",
			duracao: 135 ,
			sinopse: "Em 2029, Logan (Hugh Jackman) ganha a vida como chofer de limousine para cuidar do nonagenário Charles Xavier (Patrick Stewart). Debilitado fisicamente e esgotado emocionalmente, ele é procurado por Gabriela (Elizabeth Rodriguez), uma mexicana que precisa da ajuda do ex-X-Men para defender a pequena Laura Kinney / X-23 (Dafne Keen). Ao mesmo tempo em que se recusa a voltar à ativa, Logan é perseguido pelo mercenário Donald Pierce (Boyd Holbrook), interessado na menina.",
			cartaz: "http://www.zeronave.com/attachments/6717c24362d29b207f6f336031974d26f6c942e8/store/94d1cb5a4f3ac40d529bc1d9a35208d2d1440db5f12588abcb0bf917a795/poster_image.jpg"
		},
		{
			id: 02,
			titulo: "GUARDIÕES DA GALÁXIA VOL. 2",
			ano: 2017,
			estudio: "Walt Disney Pictures, Marvel Studios",
			duracao: 136,
			sinopse: "Os Guardiões precisam lutar para manter sua recém descoberta família unida, enquanto descobrem os mistérios sobre o verdadeiro pai de Peter Quill. Antigos inimigos se tornam aliados e personagens conhecidos e amados dos quadrinhos virão ao auxílio dos nossos heróis, enquanto o Universo Cinematográfico da Marvel continua se expandindo.",
			cartaz: "http://www.zeronave.com/attachments/a5abcffcef69e6d9f0b36373a3ce8c1c8e654a7f/store/f0e9a6f8b548d50bc1759d7d74d88128becb42208e54cbbdbfb36aefeb3f/poster_image.jpg"
		},
		{
			id: 03,
			titulo: "MULHER-MARAVILHA",
			ano: 2017,
			estudio: "Warner Bros, DC Entertainment",
			duracao: 141,
			sinopse: "Antes de ser Mulher-Maravilha, ela era Diana, princesa das Amazonas, treinada para ser uma guerreira imbatível. Criada numa ilha paraíso protegida e escondida, tudo muda quando um piloto americano chega em seu território e avisa sobre um grande conflito tomando forma no mundo. Diana deixa seu lar convencida de que pode impedir a ameaça crescente. Lutando ao lado dos homens em uma guerra para dar fim a todas as outras, Diana descobre seus poderes… e seu destino.",
			cartaz: "http://www.zeronave.com/attachments/ac77c2caa209f40e43c02db5f5f8b381cf577081/store/2419620424030b12f2d8d28ffd538a8152d561db173b75046aa11571c0dc/poster_image.jpg"	
		},
		{
			id: 04,
			titulo: "Homem-Aranha de Volta ao Lar",
			ano: 2015,
			estudio: "Columbia Pictures, Marvel Studios",
			duracao: 133,
			sinopse: "O jovem Peter Parker (Tom Holland), que fez sua estreia sensacional em 'Capitão América: Guerra Civil', começa a lidar com a sua recém-descoberta identidade como super-herói em 'Homem-Aranha: De Volta ao Lar'. Empolgado por sua experiência com os Vingadores e sob o olhar atento de seu novo mentor, Tony Stark (Robert Downey Jr.), Peter retorna à casa onde vivia com sua Tia May (Marisa Tomei). Distraído por pensamentos de provar ser mais do que apenas o herói amigo da vizinhança, ele tenta se readaptar à sua rotina diária. Mas quando o Abutre (Michael Keaton) emerge como um novo vilão, tudo o que Peter considera mais importante em sua vida será ameaçado.",
			cartaz: "http://www.zeronave.com/attachments/ea8615c578c73da06ae782f0266d2ab634351039/store/713bdad4ae3c0e78c1e9d1108b560b517206b04e68f0e2c48b464bec3d21/poster_image.jpg" 
		},
		{
			id: 05,
			titulo: "IT A COISA",
			ano: 2017,
			estudio: "New Line Cinema, Vertigo Entertainment",
			duracao: 135,
			sinopse: "Um grupo de sete adolescentes de Derry, uma cidade no Maine, formam o auto-intitulado Losers Club - o clube dos perdedores. A pacata rotina da cidade é abalada quando crianças começam a desaparecer e tudo o que pode ser encontrado delas são partes de seus corpos. Logo, os integrantes do Losers Club acabam ficando face a face com o responsável pelos crimes: o terrível palhaço Pennywise.",
			cartaz: "http://www.zeronave.com/attachments/fb917be48a89f69227289c2c97c97e8495f8e1f5/store/e05b1d90cfef1ef0cbe6476bece4cd9c4f71da23b3a9077a4b2fde47a9ff/poster_image.jpg"
		}
	];

	$scope.novoFilme = {};


	$scope.removerFilme= function(id){
		angular.forEach($scope.filmes, function(filme, i){
			if(filme.id === id){
				$scope.filmes.splice(i, 1);
			}
		});
	}

	$scope.adicionarFilme = function(){
		var filme = angular.copy($scope.novoFilme);
		filme.id = Date.now();
		$scope.filmes.push(filme);

		$scope.novoFilme = {};
	};
});