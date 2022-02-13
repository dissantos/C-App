import config from "../config.json";

const func = config.baseURL + "home/atividades";
export default async function get() {  
  let atividades = [];
  let myRequest = new Request(func);
  var body = {
    matricula: '201612346789'
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
        console.log("Entrou")
        return response.json();
      } else {
        return "error";
      }
    })
    .then((json) => {
        atividades = json;
    })
    .catch((error) => {
      console.error(error);
      atividades = []
    });
  return atividades;
}