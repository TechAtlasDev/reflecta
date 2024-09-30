import ephem

# Definir el satélite Landsat 9 con sus TLE actualizados
landsat_9 = ephem.readtle(
    'Landsat 9',
    '1 49260U 21088A   24273.75483892  .00001457  00000-0  33357-3 0  9995',
    '2 49260  98.2226 342.0491 0001388  92.6026 267.5331 14.57094968159926'
)

# Establecer el tiempo actual
landsat_9.compute()

# Obtener las coordenadas
lat = landsat_9.sublat  # Latitud
lon = landsat_9.sublong  # Longitud

print(f"Coordenadas actuales de Landsat 9: \nLatitud: {lat}, Longitud: {lon}")
