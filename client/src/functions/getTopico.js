import config from "../config.json";

const func = config.baseURL + "topicos";
export default async function get(id_topico_user) {  
  let topicos = [];
  let myRequest = new Request(func);
  var body = {
    id_topic_user: `${id_topico_user}`
  }
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
        topicos = json;
    })
    .catch((error) => {
      console.error(error);
      topicos = []
    });
  return topicos;
}