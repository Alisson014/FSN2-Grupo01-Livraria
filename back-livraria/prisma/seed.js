// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const c1 = await prisma.cliente.create({
    data: {
        nome: 'João Alberto',
        email: 'joao@gmail.com',
        idade: 21,
        telefone: '88 9123-4567',
        endereco: '12345-000',
        senha: 'joal',
    },
  });
  const c2 = await prisma.cliente.create({
    data: {
        nome: 'Analícia Chaves',
        email: 'analich@gmail.com',
        idade: 21,
        telefone: '88 9123-4567',
        endereco: '12345-000',
        senha: 'anch',
    },
  });
  const c3 = await prisma.cliente.create({
    data: {
        nome: 'Emanuel Marques',
        email: 'emanuel@gmail.com',
        idade: 21,
        telefone: '88 9123-4567',
        endereco: '12345-000',
        senha: 'emma',
    },
  });
  const livros = [
    {

      titulo: 'Harry Potter 4',
      autor: 'J.K. Rowling',
      preco: 44,
      quantidade_estoque: 44,
      descricao: 'Estranhamente Harry participará do torneio tribruxo, mas sobreviver a ele não será seu maior medo',
      resumo: 'Nesta aventura, o feiticeiro cresceu e está com 14 anos. O início do ano letivo de Harry Potter reserva muitas emoções, mágicas, e acontecimentos inesperados, além de um novo torneio em que os alunos de Hogwarts terão de demonstrar todas as habilidade mágicas e nãomágicas que vêm adquirindo ao longo de suas vidas. Harry é escolhido pelo Cálice de Fogo para competir como um dos campeões de Hogwarts, tendo ao lado seus fiéis amigos. Muitos desafios, feitiços, poções e confusões estão reservados para Harry. Além disso, ele terá que lidar ainda com os problemas comuns da adolescência amor, amizade, aceitação e rejeição.',
      categoria: 'Fantasia',
      data_publicacao: '2000-07-08T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/wxngj63D/L08.png',

    },
    {

      titulo: 'Harry Potter 5',
      autor: 'J.K. Rowling',
      preco: 50,
      quantidade_estoque: 20,
      descricao: 'O mal retornou e a ordem da fenix se ergue para defender Harry e o mundo das trevas',
      resumo: 'Neste quinto livro da saga, o protagonista, numa crise típica da adolescência, tem ataques de mau humor com a perseguição da imprensa, que o segue por todos os lugares e chega a inventar declarações que nunca deu. Harry vai enfrentar as investidas de Voldemort sem a proteção de Dumbledore, já que o diretor de Hogwarts é afastado da escola. E vai ser sem a ajuda de seu protetor que o jovem herói enfrentará descobertas sobre a personalidade controversa de seu pai, Tiago Potter, e a morte de alguém muito próximo.',
      categoria: 'Fantasia',
      data_publicacao: '2003-06-21T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/65Rw7DGg/L09.png',

    },
    {

      titulo: 'Harry Potter 6',
      autor: 'J.K. Rowling',
      preco: 44.99,
      quantidade_estoque: 41,
      descricao: 'Talvez os pedaços do que já foi uma alma sejam a única chance de defesa.',
      resumo: 'Harry, longe de ser aquele menino magricela que vivia no quarto debaixo da escada na casa dos tios trouxas, é um dos principais nomes entre aqueles que lutam contra Voldemort, e se vê cada vez mais isolado à medida que os rumores de que ele é O Eleito o único capaz de derrotar o Lorde das Trevas, se espalham pelo mundo dos bruxos. Dois atentados contra a vida de estudantes, a certeza de Harry quanto ao envolvimento de Draco Malfoy com os Comensais da Morte e o comportamento de Snape, suspeito como sempre, adicionam ainda mais tensão ao já inquietante período.',
      categoria: 'Fantasia',
      data_publicacao: '2005-07-16T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/NjctRp6M/L10.png',

    },
    {

      titulo: 'O Senhor dos Anéis 3',
      autor: 'J.R.R Tolkien',
      preco: 50,
      quantidade_estoque: 40,
      descricao: 'Será que Frodo e seus amigos finalmentes destruíram o maldito anel?',
      resumo: 'A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis. As batalhas grandiosas que estão prestes a acontecer, no entanto, são apenas o pano de fundo para o verdadeiro drama: a missão quase suicida dos hobbits Frodo e Sam, que tentam destruir o Um Anel, fonte do poder de Sauron, infiltrando-se no coração do território do Inimigo. Em O Retorno do Rei, acompanhamos o mago Gandalf e o hobbit Pippin em sua visita à a majestosa cidade de Minas Tirith, que já foi o principal baluarte dos Homens contra a ameaça de Sauron, mas que está prestes a sucumbir diante da força avassaladora do Senhor Sombrio.',
      categoria: 'Fantasia',
      data_publicacao: '1954-07-29T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/7L9WGNVp/L02.png',

    },
    {

      titulo: 'The Hobbit',
      autor: 'J.R.R Tolkien',
      preco: 40,
      quantidade_estoque: 40,
      descricao: 'Uma jornada inesperado pelo universo de Tolkien, junte-se a Bilbo e à compania.',
      resumo: 'O livro segue a busca do hobbit caseiro Bilbo Bolseiro para conquistar uma parte do tesouro guardado pelo dragão Smaug. A jornada de Bilbo o leva de um ambiente rural alegre a um território mais sinistro. A história é contada na forma de uma busca episódica, e a maioria dos capítulos apresenta uma criatura específica, ou um tipo de criatura, das \Terras Ermas\ de Tolkien. Ao aceitar o lado desonroso, romântico, feérico e aventureiro de sua natureza e aplicar sua inteligência e senso comum, Bilbo ganha um novo nível de competência, maturidade e sabedoria. A história atinge o seu clímax na Batalha dos Cinco Exércitos, onde muitos dos personagens e criaturas dos capítulos anteriores reemergem para se envolver no conflito.',
      categoria: 'Fantasia',
      data_publicacao: '1937-09-21T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/PJ9cfr4J/L01.png',

    },
    {

      titulo: 'Harry Potter 1',
      autor: 'J.K. Rowling',
      preco: 39.99,
      quantidade_estoque: 50,
      descricao: 'O início de uma das sagas mais aplaudidas do mundo fantástico.',
      resumo: 'Quando virou o envelope, com a mão trêmula, Harry viu um lacre de cera púrpura com um brasão; um leão, uma águia, um texugo e uma cobra circulando uma grande letra \H\. Harry Potter nunca havia ouvido falar de Hogwarts quando as cartas começaram a aparecer no capacho da Rua dos Alfeneiros, nº 4. Escritos a tinta verde-esmeralda em pergaminho amarelado com um lacre de cera púrpura, as cartas eram rapidamente confiscadas por seus pavorosos tio e tia. Então, no aniversário de onze anos de Harry, um gigante com olhos que luziam como besouros negros chamado Rúbeo Hagrid surge com notícias surpreendentes: Harry Potter é um bruxo e tem uma vaga na Escola de Magia e Bruxaria de Hogwarts. Uma incrível aventura está para começar!',
      categoria: 'Fantasia',
      data_publicacao: '1997-06-26T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/rmpYStZz/L03.png',

    },
    {

      titulo: 'Harry Potter 2',
      autor: 'J.K. Rowling',
      preco: 45,
      quantidade_estoque: 35,
      descricao: 'Que perigos aguardam Harry e seus amigos para o segundo ano letivo?',
      resumo: 'Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranquilidade dos membros de Hogwarts.',
      categoria: 'Fantasia',
      data_publicacao: '1998-07-02T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/pT1ckX3C/L04.png',

    },
    {

      titulo: 'As Táticas do Amor',
      autor: 'Sarah Adams',
      preco: 20,
      quantidade_estoque: 15,
      descricao: 'Um pequeno romance adolescente que lhe comoverá até os menores sentimentos',
      resumo: 'Bree Camden está totalmente apaixonada por seu amigo de longa data, a lenda do futebol americano Nathan Donelson. O único problema é que ela não pode revelar seus sentimentos, porque ele claramente a enxerga apenas como sua melhor amiga, sem nenhum potencial para algo mais. Mas tudo bem: a última coisa que Bree deseja é arruinar a relação dos dois.',
      categoria: 'Romance',
      data_publicacao: '2018-03-11T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/BvndCyXq/LR01.png',

    },
    {

      titulo: 'Harry Potter 3',
      autor: 'J.K. Rowling',
      preco: 39.99,
      quantidade_estoque: 39,
      descricao: 'Harry entra em contato com o passado de sua família, mas não é o que ele esperava.',
      resumo: 'Por longos doze anos, a temível prisão de Azkaban abrigou um prisioneiro infame de nome Sirius Black. Condenado por matar treze pessoas com uma única maldição, dizia-se que ele era um seguidor dedicado do Lorde das Trevas, Voldemort. Agora, ele fugiu. E os guardas de Azkaban ouviram Black resmungar enquanto dormia: “Ele está em Hogwarts... ele está em Hogwarts.” Estaria procurando por Harry? Harry Potter não está em segurança nem mesmo cercado pelas paredes de sua escola de magia, rodeado de amigos. Porque, além de tudo isso, pode existir um traidor entre eles.',
      categoria: 'Fantasia',
      data_publicacao: '1999-07-08T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/J0f6VYrB/L05.png',

    },
    {

      titulo: 'O Fantasma da Opera',
      autor: 'Gaston Leroux',
      preco: 34,
      quantidade_estoque: 35,
      descricao: 'Um romance misterioso e contagiante, mistério e espectativa se condensam',
      resumo: 'Com mais de um século de existência, “O Fantasma da Ópera” é uma obra que ultrapassou gerações e ainda é capaz de envolver o leitor em sua trama intensa e emocionante. Com sua escrita elegante e rica em detalhes, Gaston Leroux nos conduz pelos labirintos da Ópera de Paris, onde o misterioso Fantasma espalha o terror entre os seus habitantes.',
      categoria: 'Romance',
      data_publicacao: '1984-10-14T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/tgv8v5xF/LR02.png',

    },
    {

      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      preco: 40,
      quantidade_estoque: 40,
      descricao: 'Conheça uma das maiores histórias de um dos maiores escritores do Brasil',
      resumo: ' Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.',
      categoria: 'Romance',
      data_publicacao: '1887-01-10T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/fL6pDR5L/LR03.png',

    },
    {

      titulo: 'Memórias Póstumas de Brás Cubas',
      autor: 'Machado de Assis',
      preco: 45,
      quantidade_estoque: 35,
      descricao: 'Os póstumos relatos de um defunto autor',
      resumo: 'Neste romance repleto de digressões filosóficas, o escritor se vale da posição privilegiada de Brás Cubas, que, como defunto autor, narra as suas desventuras e revela as contradições da sociedade brasileira do século XIX, por meio de uma análise aprofundada de seus personagens.',
      categoria: 'Romance',
      data_publicacao: '1874-12-08T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/c1nPTf48/LR04.jpg',

    },
    {

      titulo: 'O Pequeno Príncipe',
      autor: 'Antoine de Saint-Exupéry',
      preco: 29.99,
      quantidade_estoque: 40,
      descricao: 'Um dos maiores e mais memoráveis clássicos da literatura humana',
      resumo:' \O Pequeno Príncipe\, escrito por Antoine de Saint-Exupéry, narra a história de um príncipe que deixa seu minúsculo planeta e viaja pelo universo. Durante sua jornada, ele encontra várias personagens que representam diferentes aspectos da natureza humana. Na Terra, ele conhece um aviador perdido no deserto e uma raposa que lhe ensina valiosas lições sobre amor e amizade.',
      categoria: 'Romance',
      data_publicacao: '1963-05-25T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/BQfkztX7/LR05.png',

    },
    {

      titulo: 'A Marca do Zorro',
      autor: 'Johnston',
      preco: 14,
      quantidade_estoque: 30,
      descricao: 'A velha lenda de um dos maiores espadachins da ficção e dos livros de aventura',
      resumo: 'O jovem fidalgo Don Diego de la Vega assume a identidade secreta de \El Zorro\ (\a raposa\) para defender o povo explorando pelos soldados espanhóis que dominam a região de San Juan Capistrano, no México. O cavaleiro mascarado enfrenta os homens do Sargento Gonzales e cruza sua espada com o capitão Ramón na disputa pelo coração de bela Lolita Pulido. A marca do Zorro é um clássico da literatura que deu origem a um dos heróis mais famosos de todos os tempos.',
      categoria: 'Romance',
      data_publicacao: '1976-11-02T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/C5kt1p64/LR06.webp',

    },
    {

      titulo: 'Percy Jackson e os Deuses Gregos',
      autor: 'John Rocco',
      preco: 37,
      quantidade_estoque: 30,
      descricao: 'Os filhos podem não ser iguais aos pais, mas a aventura não faz essa distinção.',
      resumo: 'Chegou a hora de conhecer com detalhes as histórias dos doze principais deuses gregos, contadas por ninguém menos que o próprio Percy. Em Percy Jackson e os deuses gregos nosso querido semideus explica a versão da mitologia grega para a criação do mundo e dá aos leitores sua visão pessoal sobre quem é quem na Grécia Antiga, de Apollo a Zeus.',
      categoria: 'Aventura',
      data_publicacao: '2004-06-14T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/rmK2qbkh/L14.png',

    },
    {

      titulo: 'O Portal do Dragão',
      autor: 'Barry Wolverton',
      preco: 28,
      quantidade_estoque: 31,
      descricao: 'Descubra o destino de Bren e Mouse e os perigos que eles enfrentaram daqui a frente',
      resumo: 'Uma pedra mágica e um mapa esculpido em osso podem ser as chaves para um mistério ainda maior. Depois de enfrentar os sete mares para encontrar o tesouro da Ilha Perdida, Mouse está decidida a chegar ao Portal do Dragão, convencida de que lá encontrará a explicação de sua origem e de seus poderes. Bren, por sua vez, acredita que já viveu aventuras suficientes, e só deseja voltar para sua família. Mas nada segue de acordo com o plano quando os sobreviventes do Albatroz são resgatados por Lady Jean Barret.',
      categoria: 'Aventura',
      data_publicacao: '2013-09-19T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/pT4brZVP/LA01.png',

    },
    {

      titulo: 'A Ilha Perdida',
      autor: 'Barry Wolverton',
      preco: 35,
      quantidade_estoque: 28,
      descricao: 'Mergulhe em mais um dos clássicos da saga As Crônicas da Tulipa Negra',
      resumo: '1599, a Era dos Descobrimentos na Europa. Para Bren Owen, porém, crescer na cidadezinha de Map na costa da Bretanha, significa tudo menos aventura. Enfeitiçado pelas histórias que os marinheiros trazem de suas viagens, e inspirado pelos mapas enigmáticos criados pelo pai cartógrafo para o cruel e carismático navegador Rand McNally, Bren está convencido de que a fama e a fortuna esperam mundo afora.',
      categoria: 'Aventura',
      data_publicacao: '2012-01-08T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/7hzv22b0/LA02.png',

    },
    {

      titulo: '20000 Léguas Submarinas',
      autor: 'Júlio Verne',
      preco: 42,
      quantidade_estoque: 10,
      descricao: 'Um dos mais fantásticos clássicos da literatura de Júlio Verne',
      resumo: 'Nesta aventura, Verne constrói um submarino ultramoderno para a época (1866), o Náutilus. Nele, o capitão Nemo e sua tripulação cortam relações com a humidade e partem para uma aventura marítima, já que para a sobrevivência precisam apenas da eletricidade obtida na imensidade do mar.',
      categoria: 'Aventura',
      data_publicacao: '1937-04-17T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/c1tGjVTC/LA03.png',

    },
    {

      titulo: 'As Crônicas de Spiderwick',
      autor: ' Holly Black e Tony DiTerlizzi',
      preco: 50,
      quantidade_estoque: 25,
      descricao: 'Um nova casa mais que conturbada, mais que misteriosa, mais que fantástica.',
      resumo: 'Tudo começou quando a família Grace se mudou para a propriedade dos Spiderwick e Jared Grace encontrou um livro misterioso, cheio de relatos e ilustrações, sobre um mundo mágico e perigoso que se esconde bem à vista. Agora, ele e seus irmãos, Simon e Mallory, vão embarcar em uma aventura com goblins, duendes e várias outras criaturas fantásticas!',
      categoria: 'Fantasia',
      data_publicacao: '2008-05-18T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/NfhvwpP4/LA04.png',

    },
    {

      titulo: 'Harry Potter 7',
      autor: 'J.K. Rowling',
      preco: 44.99,
      quantidade_estoque: 40,
      descricao: 'O confronto final se armou, Horgwards se ergue perante as forças malígnas',
      resumo: 'Harry Potter e as relíquias da morte, de J.K. Rowling, é o sétimo e último livro da série. Voldemorte está cada vez mais forte e Harry Potter precisa encontrar e aniquilar as Horcruxes para enfraquecer o lorde e poder enfrentálo. Nessa busca desenfreada, contando apenas com os amigos Rony e Hermione, Harry descobre as Relíquias da Morte, que serão úteis na batalha do bem contra o mal.',
      categoria: 'Fantasia',
      data_publicacao: '2007-07-21T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/rwNkjxj9/L11.png',

    },
    {

      titulo: 'O Senhor dos Anéis 2',
      autor: 'J.R.R Tolkien',
      preco: 39.99,
      quantidade_estoque: 40,
      descricao: 'A incrível jornada dos pequenos hobbits pode ser perigosa demais',
      resumo: 'Um ataque-surpresa pôs fim à jornada conjunta da Sociedade do Anel. De um lado, o trio formado pelo elfo Legolas, pelo anão Gimli e por Aragorn, herdeiro da realeza dos Homens, tenta resgatar os jovens hobbits Merry e Pippin, capturados por guerreiros-órquicos. A busca pelos companheiros perdidos levará os três a confrontar os cavaleiros do reino de Rohan e o mago renegado Saruman, que também deseja o Um Anel para si.',
      categoria: 'Fantasia',
      data_publicacao: '1945-10-30T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/0N5qBjH1/L12.png',

    },
    {

      titulo: 'O Senhor dos Anéis 1',
      autor: 'J.R.R Tolkien',
      preco: 39.99,
      quantidade_estoque: 40,
      descricao: 'Acompanhe o início de uma das jornadas mais famosas dos últimos séculos.',
      resumo: 'A Sociedade do Anel começa no Condado, a região rural do oeste da Terra-média onde vivem os diminutos e pacatos hobbits. Bilbo Bolseiro, um dos raros aventureiros desse povo, cujas peripécias foram contadas em O Hobbit, resolve ir embora do Condado e deixa sua considerável herança nas mãos de seu jovem parente Frodo.',
      categoria: 'Fantasia',
      data_publicacao: '1943-01-31T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/QM6rGDR9/L13.png',

    },
    {

      titulo: 'O Príncipe Cruel',
      autor: 'Holly Black',
      preco: 50,
      quantidade_estoque: 40,
      descricao: 'Acompenha a aventura de Jude através de sua nada voluntária entrada no reino das fadas.',
      resumo: 'Jude tinha apenas sete anos quando seus pais foram brutalmente assasinados e ela e as irmãs levadas para viver no traiçoeiro Reino das Fadas. Dez anos depois, tudo o que Jude quer é se encaixar, mesmo sendo uma garota mortal. Mas todos os feéricos parecem desprezar os humanos... Especialmente o príncipe Cardan, o mais jovem e mais perverso dos filhos do Grande Rei de Elfhame.',
      categoria: 'Fantasia',
      data_publicacao: '2019-11-27T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/h4XKnJ4S/L07.png',

    },
    {

      titulo: 'Duna',
      autor: 'Frank Herbert',
      preco: 60,
      quantidade_estoque: 20,
      descricao: 'Aproveite também as páginas de um dos grandes sucessos da atualidade',
      resumo: 'Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049.',
      categoria: 'Aventura',
      data_publicacao: '2018-12-29T00:00:00.000Z',
      imagem_capa: 'https://i.postimg.cc/hP9W4Tkq/LA05.png',

    }
  ]

  const comentatios =  [
    {
      "id": 6,
      "nome": "Analícia Chaves",
      "comentario": "Muito bom que os livros de Machado sempre tem alguma coisa inusitada e que sempre prende a nossa atenção. Esperando pela próxima promoção para pegar um novo livro kk",
      "id_cliente": 1
    },
    {
      "id": 7,
      "nome": "João SIlveira",
      "comentario": "Sempre incrível a escrita machadiana, muito legal e sempre com aquele ar de surpresa.",
      "id_cliente": 1
    },
  ]

  livros.forEach(async l => {
    await prisma.livros.create({
      data: l,
    });
  });
  comentatios.forEach(async c => {
    await prisma.comentarios.create({
      data: c,
    });
  });
  

  // console.log('Comentários inseridos com sucesso:', { c1, });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

/*
{
        
    },
    {
        id: 1,
        nome: João Silveira,
        coment: Sempre incrível a escrita machadiana, muito legal e sempre com aquele ar de surpresa.
    },
    {
        id: 2,
        nome: Maria,
        coment: A promoção do mês passado foi muito sensacional! Li muito e consegui exemplares que estava esperando a tempos
    },
*/