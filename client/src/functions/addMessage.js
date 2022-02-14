import config from "../config.json";

const func = config.baseURL + "mensagens/add";
export default async function get(id, nome_autor, conteudo, data, id_topico, id_mensagem) {  
  let mensagens = [];
  var body = {
    id:  `${id}`,
    nome_autor: `${nome_autor}`,
    conteudo: `${conteudo}`,
    data: `${data}`,
    id_topic: `${id_topico}`,
    id_mensagem: `${id_mensagem}`
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