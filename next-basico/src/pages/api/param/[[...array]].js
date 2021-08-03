export default function api(request, reponse) {
  reponse
  .status(200)
  .json(request.query);
}
