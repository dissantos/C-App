import config from "../config.json";

const func = config.baseURL + "login";
export default async function logar(username, pass) {
  var body = {
    nome: `${username}`,
    senha: `${pass}`,
  };
  let login = '';
  let myRequest = new Request(func);
  await fetch(myRequest, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return "error";
      }
    })
    .then((json) => {
      login = json;
    })
    .catch((error) => {
      login = false;
    });
  return login;
}
