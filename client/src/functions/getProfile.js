import config from "../config.json";

const func = config.baseURL + "profile";
export default async function get(matricula) {
  var body = {
    matricula
  };
  let user = '';
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
      user = json;
    })
    .catch((error) => {
      user = false;
    });
  return user;
}
