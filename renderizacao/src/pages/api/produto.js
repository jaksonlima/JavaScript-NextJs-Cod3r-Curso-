// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorios(min = 1, max = 1000) {
  return parseInt((Math.random() * (max - min) + min))
}

export default function handler(req, res) {
  res.status(200)
    .json([
      {
        id: numeroAleatorios(),
        nome: 'Caneta',
        preco: 5.60
      },
      {
        id: numeroAleatorios(),
        nome: 'Caderno',
        preco: 15.6
      },
      {
        id: numeroAleatorios(),
        nome: 'Borracha',
        preco: 7.30
      },
      {
        id: numeroAleatorios(),
        nome: 'Tesoura',
        preco: 21.60
      },
    ])
}
