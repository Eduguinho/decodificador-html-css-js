let imagem = document.getElementById("imagem"); // Obtém a referência ao elemento HTML com o id "imagem".
let titulo = document.getElementById("titulo"); // Obtém a referência ao elemento HTML com o id "titulo".
let resultadoTexto = document.getElementById("resultado_texto"); // Obtém a referência ao elemento HTML com o id "resultado_texto".
let resultado = document.querySelector(".resultado"); // Obtém a referência ao primeiro elemento HTML com a classe "resultado".
let botao = document.createElement("button"); // Cria um novo elemento HTML <button>.
let texto = document.getElementById("texto"); // Obtém a referência ao elemento HTML com o id "texto".

function criarBotao() { // Define uma função chamada criarBotao.
  botao.innerHTML = "Copiar"; // Define o texto dentro do botão como "Copiar".
  botao.className = "conteudo_botoes_secundario"; // Define a classe CSS do botão como "conteudo_botoes_secundario".
  resultado.appendChild(botao); // Adiciona o botão como filho do elemento referenciado pela variável resultado.
  botao.addEventListener("click", () => { // Adiciona um ouvinte de evento de clique ao botão. Quando clicado, 
    navigator.clipboard.writeText(resultadoTexto.innerHTML); // executa a função de callback, que copia o texto 
  }); // contido em resultadoTexto para a área de transferência do sistema.
}

function limparTela() { // Define uma função chamada limparTela.
  imagem.style.display = "none"; // Esconde o elemento referenciado pela variável imagem (provavelmente uma imagem) alterando seu estilo para display: none.
  titulo.style.display = "none"; // Esconde o elemento referenciado pela variável titulo (provavelmente um título) alterando seu estilo para display: none.
}

function criptografar() {
  if (!texto.value) { // Verifica se o campo de texto está vazio
    alert("Favor Digitar seu texto!"); // Exibe um alerta se estiver vazio
    location.reload(); // Recarrega a página
  } else {
    if (
      /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇáéíóúàèìòùâêîôûãõäëïöü~^´`¨]/g.test(texto.value)
    ) { // Verifica se o texto contém letras maiúsculas ou acentos
      resultadoTexto.innerHTML =
        "Erro: O texto não deve conter letras maiúsculas ou acentos."; // Define uma mensagem de erro
      resultadoTexto.style.color = "red"; // Define a cor do texto para vermelho
    } else { // Se não houver letras maiúsculas ou acentos no texto
      let textoCriptografado = texto.value
        .replace(/e/g, "enter") // Substitui 'e' por 'enter'
        .replace(/i/g, "imes") // Substitui 'i' por 'imes'
        .replace(/a/g, "ai") // Substitui 'a' por 'ai'
        .replace(/o/g, "ober") // Substitui 'o' por 'ober'
        .replace(/u/g, "ufat"); // Substitui 'u' por 'ufat'
      limparTela(); // Chama a função para limpar a tela
      resultadoTexto.innerHTML = textoCriptografado; // Define o texto criptografado no elemento HTML
      resultadoTexto.style.color = "#000"; // Define a cor do texto para preto
      criarBotao(); // Chama a função para criar o botão de cópia
    }
  }
}


function descriptografar() {
  if (!texto.value) { // Verifica se o campo de texto está vazio
    alert("Favor Digitar seu texto!"); // Exibe um alerta se estiver vazio
    location.reload(); // Recarrega a página
  } else {
    if (
      /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇáéíóúàèìòùâêîôûãõäëïöü~^´`¨]/g.test(texto.value)
    ) { // Verifica se o texto contém letras maiúsculas ou acentos
      resultadoTexto.innerHTML =
        "Erro: O texto não deve conter letras maiúsculas ou acentos."; // Define uma mensagem de erro
    } else { // Se não houver letras maiúsculas ou acentos no texto
      let textoCriptografado = texto.value
        .replace(/enter/g, "e") // Substitui 'enter' por 'e'
        .replace(/imes/g, "i") // Substitui 'imes' por 'i'
        .replace(/ai/g, "a") // Substitui 'ai' por 'a'
        .replace(/ober/g, "o") // Substitui 'ober' por 'o'
        .replace(/ufat/g, "u"); // Substitui 'ufat' por 'u'
      limparTela(); // Chama a função para limpar a tela
      resultadoTexto.innerHTML = textoCriptografado; // Define o texto descriptografado no elemento HTML
      criarBotao(); // Chama a função para criar o botão de cópia
    }
  }
}