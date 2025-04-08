////uma api é basiacmente uma interface programavavel das aplicacoes
////ela é basicamente uma estrutura que é de facil leitura para scripts , codigos e possiveis alteracoes

///requeste faz a requisicao
///response e a resposta da requisicao
///valor 200 significa que aconteceu tudo bem

function status(request, response) {
  response.status(200).json({ chave: "Apenas um teste" });
  /////ultilizando o json pois ele aceita o charseat utf=8
}

export default status;
