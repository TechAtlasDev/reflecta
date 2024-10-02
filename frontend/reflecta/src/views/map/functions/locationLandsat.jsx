// Obteniendo las coordenadas del Landsat9
import { urlAPI } from "@/lib/vars";

export default async function GetCordinates() {
  const response = await fetch(`${urlAPI}/landsat9/coordinates/`);
  const data = await response.json();
  return data;
}
