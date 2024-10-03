import { pinIcon } from "../components/icons";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import { useState, useRef } from "react";

export function HandlerMap() {
  const [clickedPosition, setClickedPosition] = useState(null);
  const markerRef = useRef(null); // Referencia para el marcador

  // Registrar el evento de clic en el mapa
  useMapEvents({
    click: (event) => {
      setClickedPosition(event.latlng); // Guarda la latitud y longitud del clic

      // Si el marcador ya está creado, abrir automáticamente el popup
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    },
  });

  return clickedPosition === null ? null : (
    // Si hay una posición de clic, muestra un marcador con el popup abierto automáticamente
    <Marker position={clickedPosition} ref={markerRef} icon={pinIcon}>
      <Popup autoPan={false}>
        <button
          className='btn btn-xs btn-outline btn-success'
          onClick={() => alert("Botón presionado")}
        >
          Notificar cuando Landsat pase aquí
        </button>
        <button
          className='btn btn-xs btn-outline btn-primary'
          onClick={() => alert("Botón presionado")}
        >
          Mostrar metadatos
        </button>
      </Popup>
    </Marker>
  );
}
