export default function handler(req, res) {
  res.status(200)
    .json([
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
    ])
}