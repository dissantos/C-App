import config from "../config.json";

const func = config.baseURL + "mensagens";
export default async function get(id_topico) {  
  let mensagens = [];
  var body = {
    id_topic: `${id_topico}`
  }
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
        mensagens = json;
    })
    .catch((error) => {
      console.error(error);
      mensagens = []
    });
  return mensagens;
}