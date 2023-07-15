const personagens = document.querySelectorAll('.personagem');
personagens. forEach((personagem) =>{
    // adicionar a classe selecionado no personagem quando  passar o mouse por ele
     personagem.addEventListener('mouseenter', () =>{
        //personagem.classList.add('selecionado');
        
        //verificar se ja tem um personagem selecionado, se sim removeer a seleção  dele
        
        //const personagemSelecionado = document.querySelector('.selecionado');
        
       //personagemSelecionado.classList.remove('selecionado');
        
        //personagem.classList.add('selecionado');
        // quando passar o mouse na listagem trocar o nome, a imagem e a descrição do personagem
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        // alterar a imagem do personagem gramde
        
       const idPersonagem = personagem.attributes.id.value;
       imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
    
       // alterar o nome do personagem grande
        
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
    
        //alterar a descrição do personagem
        
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})