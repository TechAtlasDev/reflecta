import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import GetCordinates from "./functions/locationLandsat";
import { landsatIcon, markerIcon } from "./components/icons";
import Interfaz from "./interfaz";

function Map() {
  const [landsatCoordinates, setLandsatCoordinates] = useState(null);
  const [userCoordinates, setUserCoordinates] = useState(null);

  // Función para obtener las coordenadas del usuario
  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserCoordinates({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  async function DrawLandsat() {
    try {
      const response = await GetCordinates();
      setLandsatCoordinates(response);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  }

  useEffect(() => {
    DrawLandsat();
    getUserLocation(); // Obtener la ubicación del usuario
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <main className='relative w-screen h-screen overflow-hidden'>
      <MapContainer
        center={[0, 0]} // Coordenadas iniciales
        zoom={2} // Nivel de zoom inicial
        className='w-screen h-screen absolute z-0'
        zoomControl={false}
      >
        <TileLayer
          url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGVjaGF0bGFzZGV2IiwiYSI6ImNtMWw2anpnZTAyZG8ybm9rYjdsdmI0a2IifQ.e3n0BC8mLsl5rYgx9mBQKQ'
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        {landsatImageUrl && (
          <TileLayer
            url={landsatImageUrl} // Añade la capa de imagen Landsat
            attribution="&copy; <a href='https://earthengine.google.com/'>Earth Engine</a>"
          />
        )}
        <MapEventsHandler />{" "}
        {/* Componente para manejar los eventos de movimiento del mapa */}
        {landsatCoordinates && (
          <Marker
            alt='Landsat9'
            icon={landsatIcon}
            position={[
              landsatCoordinates.latitude,
              landsatCoordinates.longitude,
            ]}
          >
            <Popup>
              <b>¡El Landsat 9 se encuentra aquí!</b>
              <br /> Coordenadas: {landsatCoordinates.latitude},{" "}
              {landsatCoordinates.longitude}
            </Popup>
          </Marker>
        )}
        {userCoordinates && (
          <Marker
            position={[userCoordinates.latitude, userCoordinates.longitude]}
            icon={markerIcon}
          >
            <Popup>
              Tu ubicación: {userCoordinates.latitude},{" "}
              {userCoordinates.longitude}
              <button
                className='btn btn-xs btn-outline btn-success'
                onClick={() => alert("Botón presionado")}
              >
                Notificar cuando Landsat pase aquí
              </button>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      <section className='w-screen absolute z-10 pointer-events-none'>
        <Interfaz />
      </section>

      {/* Mostrar información adicional de la imagen de Landsat */}
      {landsatImageUrl && (
        <div className='absolute top-0 left-0 bg-white p-4 z-20'>
          <p>
            <b>Imagen de Landsat:</b>
          </p>
          <p>Fecha: {imageDate}</p>
          <p>Cobertura de nubes: {cloudCover}%</p>
        </div>
      )}
    </main>
  );
}

export default Map;
