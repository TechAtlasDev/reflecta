// Obteniendo las coordenadas del Landsat9

export default async function GetCordinates() {
  const response = await fetch(
    "http://localhost:8000/api/landsat/landsat-coordinates"
  );
  const data = await response.json();
  return data;
}
