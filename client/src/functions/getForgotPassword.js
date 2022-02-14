import config from "../config.json";

const func = config.baseURL + "forgotPassword";
export default async function get(email) {
  var body = {
    email
  };
  let users = '';
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
      users = json;
    })
    .catch((error) => {
      users = false;
    });
  return users;
}
