//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo(){
  let amigos = document.querySelector('input').value;
  if(amigos == ""){
    alert('Por favor, insira um nome');
  }else{
    listaAmigos.push(amigos);
    adicionarAmigoLista();
  }
  limparCampo();
  console.log(listaAmigos);
}

function limparCampo(){
  amigos = document.querySelector('input');
  amigos.value = '';
}

function adicionarAmigoLista(){
  let elementoLista = document.getElementById('listaAmigos');
    elementoLista.innerHTML = "";
    for(let i=0; i < listaAmigos.length; i++){
      let itemlista = document.createElement('li');
      itemlista.textContent = listaAmigos[i];
      elementoLista.appendChild(itemlista);
    }
    console.log(elementoLista);
}

function sortearAmigo(){
  if (listaAmigos != ''){
    let numeroLimite = listaAmigos.length;
    let numeroIndice = parseInt(Math.floor((Math.random()*numeroLimite)));
    let nomeSorteado = listaAmigos[numeroIndice];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = nomeSorteado;
    console.log(numeroIndice);
  }
}
