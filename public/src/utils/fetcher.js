export async function apiGet(url, param) {
  return await (await fetch(url, param)).json();
}


export function apiPost(url, body) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
}
