// atualizador de tamanho
var altura = 0
var largura = 0
var vidas = 0
var tempo = 15
var criaMosquitoTempo = 1500


var dificuldade = window.location.search 
dificuldade = dificuldade.replace('?', '')

if (dificuldade === 'normal'){
    criaMosquitoTempo = 1500

} else if (dificuldade === 'dificil'){
    criaMosquitoTempo = 1000

} else if (dificuldade === 'darksouls'){
    criaMosquitoTempo = 500
}


function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustaTamanho()
 


//definindo uma posição randomica e criando o mosquito nessa posição
function posicaoRandomica(){
    
    // removendo a mosca antes de aparecer outra
    if (document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        vidas++

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 110
    var posicaoy = Math.floor(Math.random() * altura) - 110

                          //se sim se não
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaoX, posicaoy)

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoy + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosca)
   
}



// definindo um tamanho randomico
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito0' 
        case 1:
            return 'mosquito1' 
        case 2:
            return 'mosquito3' 
        case 4:
            return 'mosquito4' 
    } 
}


// modificando o lado
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoB' 
        case 1:
            return 'ladoA'  
    } 
}


// cronometro

var cronometro = setInterval(function(){
    tempo--
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
        alert('vitória')
    } else{
    document.getElementById('cronometro').innerHTML = (tempo + 1)
}
    
}, 1000)


function iniciarJogo(){
    var nivel = document.getElementById('nivel').value
    if (nivel === '-- selecionar o nivel --'){
        alert('selecione uma opção válida')
    } 
    
    else {
        alert(document.getElementById('nivel').value)
        window.location.href = ('game.html?' + nivel)
    }
    
}