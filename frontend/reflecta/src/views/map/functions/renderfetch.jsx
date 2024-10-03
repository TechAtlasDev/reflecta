/**
 * Función para consumir el endpoint de la API de Google Earth Engine usando `fetch`.
 * @param {number} zoom - Nivel de zoom en el mapa.
 * @param {number} x - Coordenada X de la cuadrícula.
 * @param {number} y - Coordenada Y de la cuadrícula.
 * @returns {Promise<string>} - Devuelve la URL del tile.
 */
export async function getTileFromEarthEngine(zoom, x, y) {
  const urlBase =
    "https://earthengine.googleapis.com/v1/projects/earthengine-legacy/maps/5fed6e90c68f6df50245fd839dc2e589-6aeab44bfdcab094b64b647091f90ae5/tiles/{z}/{x}/{y}";

  try {
    // Arma la URL del tile usando los parámetros de zoom, x, y.
    const tileUrl = urlBase
      .replace("{z}", zoom)
      .replace("{x}", x)
      .replace("{y}", y);

    // Realiza la solicitud GET al endpoint del tile usando `fetch`
    const response = await fetch(tileUrl);

    if (!response.ok) {
      throw new Error(`Error al obtener el tile: ${response.statusText}`);
    }

    // Devuelve la URL del tile si la solicitud es exitosa
    return tileUrl;
  } catch (error) {
    console.error("Error al obtener el tile:", error);
    throw error; // Propaga el error
  }
}
