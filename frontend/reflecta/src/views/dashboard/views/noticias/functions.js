import { urlAPI } from "@/components/variables";

export default async function fetchData() {
  const url = `${urlAPI}/landsat9/news`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    const data = await response.json();

    const responseData = data.news;

    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
