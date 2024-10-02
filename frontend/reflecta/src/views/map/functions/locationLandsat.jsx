// Obteniendo las coordenadas del Landsat9
import { urlAPI } from "@/components/variables";

export default async function GetCordinates() {
  const response = await fetch(`${urlAPI}/landsat9/coordinates/`);
  const data = await response.json();
  return data;
}
