import config from "../config.json";

const func = config.baseURL + "noticia";
export default async function get(path) {
  var body = {
    path: `${path}`
  }
  let noticia = {};
  let myRequest = new Request(func);
  await fetch(myRequest, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body)
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log("Entrou");
        return response.json();
      } else {
        return "error";
      }
    })
    .then((json) => {
      console.log(json);
      noticia = json;
    })
    .catch((error) => {
      //console.error(error);
      noticia = {};
    });
  return noticia;
}
