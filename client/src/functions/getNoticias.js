import config from "../config.json";

const func = config.baseURL + "noticias";
export default async function get() {
  let todasAsNoticias = [];
  let myRequest = new Request(func);
  await fetch(myRequest, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
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
      todasAsNoticias = json;
    })
    .catch((error) => {
      console.error(error);
      todasAsNoticias = [];
    });
  return todasAsNoticias;
}
