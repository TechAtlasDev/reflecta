import { urlAPI } from "@/components/variables";

export async function login(username, password) {
  const url = `${urlAPI}/users/login/`;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json", // Agregar encabezado para JSON
    },
  });

  if (!response.ok) {
    return false;
  } else {
    const data = await response.json();
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    localStorage.setItem("username", data.username);
    return true;
  }
}
