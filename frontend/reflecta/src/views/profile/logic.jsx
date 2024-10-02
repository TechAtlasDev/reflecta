import { urlAPI } from "@/components/variables";

export async function isAuthorized() {
  const token = localStorage.getItem("access"); // Usar getItem para obtener el token

  if (!token) {
    return false; // Si no hay token, devuelve false
  }

  const response = await fetch(`${urlAPI}/users/profile/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data; // Devuelve los datos si la respuesta es exitosa
  } else {
    return false; // Si falla, devuelve false
  }
}
