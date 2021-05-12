const H = document.querySelector("#element_1");
const He = document.querySelector("#element_2");
const Li = document.querySelector("#element_3");
const Be = document.querySelector("#element_4");
const B = document.querySelector("#element_5");



const informacoes = document.querySelector("#informacoes-tabela")
const detalhes = document.querySelector("#detalhes");
const distr = document.querySelector(".subtitle");
const aparencia = document.querySelector('#aparencia');
const nome_do_elemento = document.querySelector('.title');
const ponto_de_fusao = document.querySelector('#ponto_de_fusao');
const img = document.getElementsByClassName(".image is-4by4");
const eletronegatividade = document.getElementById("eletronegatividade")
const ano_descoberta = document.getElementById("ano_descoberta")
const amostra_texto = document.getElementById("amostra-texto")

/*  
passo 1:

const [simbolo elemento] = document.querySelector("#element_[x]")




passo 2:
var element_1 = {
    nome: "[nome do elemento]",
    massa_atomica: "[massa atomica com 4 casas decimais]",
    ponto_de_fusao: "[temperatura K com 2 casas decimais (temperatura com até duas casas °C)]", 
    ponto_de_ebulicao: "[temperatura K com 2 casas decimais (temperatura com até duas casas °C)]",
    de: "[distribuição eletronica]" (atenção) usar <sup>número</sup> pra colocar um numero superescrito
    aparencia: "[aparencia, se for gás, incluir (na CNTP)]",
    img_atom: "C:/Users/Thierry/Documents/GitHub/PPI/Imgs/Atomo/H.png",
    serie_quimica: "[grupo do elemento]",
    eletronegatividade: "[eletroneagtividade dele]",
    ano_descoberta: "[ano de descoberta]",
    amostra_texto: "<p>[texto breve]</p>"

}




*/
var element_1 = {
    nome: "Hidrogênio",
    massa_atomica: 1.0008,
    ponto_de_fusao: "14,025 K (-259,2°C)",
    ponto_de_ebulicao: "20,28 K (-252,87°C)",
    de: "1s<sup>1</sup>",
    aparencia: "Gás incolor (nas CNTP)",
    img_atom: "C:/Users/Thierry/Documents/GitHub/PPI/Imgs/Atomo/H.png",
    serie_quimica: "Não-metal",
    eletronegatividade: "2,2",
    ano_descoberta: "1781",
    amostra_texto: "<p>O gás hidrogênio, composto, em seu isótopo mais simples, de um eletrón e um próton, foi o primeiro elemento a aparecer na origem do Universo, foi também o primeiro produzido artificialmente (em sua forma molecular H<sub>2</sub>) e formalmente descrito por Paracelso. <a>Ler mais...</a></p>"

}

var element_2 = {
    nome: "Hélio",
    massa_atomica: "4,002602",
    ponto_de_fusao: "0,95 K (-272.2)",
    ponto_de_ebulicao: "4,22 K (-268,93",
    serie_quimica: "Gases Nobres",
    de: "1s<sup>2</sup>", //  <sup>número</sup>
    aparencia: "Gás incolor (nas CNTP)",
    img_atom: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Helium-Bohr.svg/220px-Helium-Bohr.svg.png",
    amostra_texto: "<p>O Hélio, conhecido por, quando aspirado por uma pessoa, afinar a sua voz, também tem usos medicinais, é usado para explorar o oceano, resfriar reatores nucleares e animar festas de aniversário. Este gás nobre tem densidade menor que o ar atmosférico, e não é inflámavel! <a>Ler mais...</a></p>",
    eletronegatividade: "-",
    ano_descoberta: "1868"
}
var element_3 = {
    nome: "Lítio",
    massa_atomica: "6,941",
    ponto_de_fusao: "0)",
    ponto_de_ebulicao: "203123,28 K (-312387°C)",
    de: "1s<sup>2</sup>2s<sup>2",
    aparencia: "Gás inc323olor (na CNTP)",
    img_atom: "/Imgs/Tabela/Lítio.png"
}

var element_4 = {
    nome: "Berílio", //nome do elemento
    massa_atomica: "9,012182", //massa atomica dentro de aspas, e com , 
    ponto_de_fusao: "1560 K (1286,85°C)", //Temperatura em Kelvin e dps em Celsius
    ponto_de_ebulicao: "2754 K (2480,85°C)", //Temperatura em Kelvin e dps em Celsius
    de: "1s<sup>2</sup>2s<sup>2</sup>", //<sup>número</sup> para colocar o numero superescrito
    aparencia: "Sólido, Cinza Metálico", // aparencia na CNTP
    img_tabela: "/Imgs/Tabela/Berílio.png"

}
var element_5 = {
    nome: "Boro",
    massa_atomica: "18,8",
    ponto_de_fusao: "2348 K (2704,85°C)",
    ponto_de_ebulicao: "4273 K (3999,85°C)",
    de: "1s<sup>2</sup>2s<sup>2</sup>2p<sup>1</sup>",
    aparencia: "Sólido, Marrom/Preto",
    img_tabela: "/Imgs/Tabela/Boro.png"

}


H.addEventListener("click", function() {
    FazerTudo(element_1);
})
He.addEventListener("click", function() {
    FazerTudo(element_2);
})
Li.addEventListener("click", function() {
    FazerTudo(element_3);
})
Be.addEventListener("click", function() {
    FazerTudo(element_4);
})
B.addEventListener("click", function() {
    FazerTudo(element_5);
})

var ClearTable = function() {
    aparencia.innerHTML = "";
    massa_atomica.innerHTML = "";
    ponto_de_fusao.innerHTML = "";
    ponto_de_ebulicao.innerHTML = "";
    serie_quimica.innerHTML = "";
    distr.innerHTML = "";
    nome_do_elemento.innerHTML = "";
    amostra_texto.innerHTML = "";
    eletronegatividade.innerHTML = "";
    ano_descoberta.innerHTML = "";
    document.getElementById('imagem-informacoes').innerHTML = "";
}

var FazerTudo = function(element) {
    detalhes.classList.remove("n-display");
    ClearTable()
    aparencia.insertAdjacentText("afterbegin", element.aparencia);
    massa_atomica.insertAdjacentText("afterbegin", element.massa_atomica);
    ponto_de_fusao.insertAdjacentText("afterbegin", element.ponto_de_fusao);
    ponto_de_ebulicao.insertAdjacentText("afterbegin", element.ponto_de_ebulicao);
    serie_quimica.insertAdjacentText("afterbegin", element.serie_quimica);
    distr.insertAdjacentHTML("afterbegin", element.de);
    nome_do_elemento.insertAdjacentText("afterbegin", element.nome);
    eletronegatividade.insertAdjacentText("afterbegin", element.eletronegatividade);
    ano_descoberta.insertAdjacentText("afterbegin", element.ano_descoberta);

    amostra_texto.insertAdjacentHTML("afterbegin", element.amostra_texto);

    var img = document.createElement("IMG");
    img.src = element.img_atom;
    document.getElementById('imagem-informacoes').appendChild(img);
    informacoes.classList.remove("n-display");

};