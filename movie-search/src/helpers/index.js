function modifyRequestText(request) {
  return request
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim().split(' ')
    .join('+');
}


function sendRequest(url) {
  return fetch(url)
    .then((response) => response.json());
}

export { modifyRequestText, sendRequest };
