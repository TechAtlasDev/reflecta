// Obteniendo las coordenadas del Landsat9
import { urlAPI } from "@/components/variables";

export default async function GetCordinates() {
  const response = await fetch(`${urlAPI}/landsat9/coordinates/`);
  const data = await response.json();
  return data;
}

export async function fetchCoordinates(coordinates) {
  const url = `${urlAPI}/landsat9/landsat-pass-time?lat=${coordinates.lat}&lon=${coordinates.lon}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    const data = await response.json();

    const responseData = data.coordinates;

    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
