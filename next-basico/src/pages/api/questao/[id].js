function api(request, response) {
 if (request.method === 'GET') {
   get(request, response)
 } else {
   response.status(405).send()
 }
}

function get(request, response) {
  const id = request.query.id
  
   response.status(200).json({
    id,
    enunciado: 'Qual é a sua cor preferida?',
    respostas: [
      'Branca', 'Vermelha', 'Amarela', 'Verde'
    ]
  })
}

export default api;