import config from "../config.json";

const func = config.baseURL + "signup";
export default async function logar(user, password, email, name, matricula, curso, ano, carga_horaria_opt, carga_horaria_comp, carga_horaria_obg, coef, url) {
  var body = {
    user,
    password,
    email,
    name,
    matricula,
    curso,
    ano,
    carga_horaria_opt,
    carga_horaria_comp,
    carga_horaria_obg,
    coef,
    url
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
