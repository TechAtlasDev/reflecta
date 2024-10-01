// Obteniendo las coordenadas del Landsat9

export default async function GetCordinates() {
  const response = await fetch(
    "https://reflecta-backend.vercel.app/api/landsat/landsat-coordinates"
  );
  const data = await response.json();
  return data;
}
