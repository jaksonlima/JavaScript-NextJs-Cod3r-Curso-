function api(request, response) {
  response.status(200).json({
    method: request.method,
  });
}

export default api;