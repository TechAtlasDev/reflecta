import L from "leaflet"; // Importando Leaflet para crear el icono personalizado

// Define el icono personalizado
export const landsatIcon = L.icon({
  iconUrl: "/icons/landsat.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const markerIcon = L.icon({
  iconUrl: "/icons/marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const pinIcon = L.icon({
  iconUrl: "/icons/pin.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
