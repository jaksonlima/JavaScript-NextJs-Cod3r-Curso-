export const usuarioDb = []

export default function api(request, response) {
  if (request.method === 'POST') {
    post(request, response)
  } else {
    response
    .status(200)
    .json(usuarioDb)
  }
 }
 
 function post(request, response) {
  const usuarios = JSON.parse(request.body);
  usuarioDb.push(usuarios)

  response
  .status(200)
  .send();

 }