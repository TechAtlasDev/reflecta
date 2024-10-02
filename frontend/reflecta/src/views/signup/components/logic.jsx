import { urlAPI } from "@/components/variables";

export async function RegisterUserData(names, username, password, email) {
  const url = `${urlAPI}/users/signup/`;
  const user = {
    first_name: names,
    username: username,
    password: password,
    email: email,
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Ahora verifica la respuesta
  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("username", data.username);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    return true;
  } else {
    return false;
  }
}
