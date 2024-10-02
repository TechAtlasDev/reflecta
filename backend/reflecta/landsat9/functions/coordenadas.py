from datetime import datetime, timedelta
import ephem

def getCoordenadas():
  ephem.now()  # Actualizar la fecha y hora actual

  # Definir el satélite Landsat 9 con sus TLE actualizados
  landsat_9 = ephem.readtle(
      'Landsat 9',
      '1 49260U 21088A   24274.23553067  .00001568  00000-0  35814-3 0  9994',
      '2 49260  98.2225 342.5236 0001395  92.4131 267.7227 14.57097040159986',
  )

  # Establecer el tiempo actual
  landsat_9.compute()

  # Obtener las coordenadas
  lat = landsat_9.sublat  # Latitud
  lon = landsat_9.sublong  # Longitud

  # Convertir a grados decimales
  lat = lat * (180.0 / 3.141592653589793)
  lon = lon * (180.0 / 3.141592653589793)

  # Serializar la respuesta
  data = {
      'latitude': lat,
      'longitude': lon
  }

  return data

def futurasCoordenadas(steps, interval):
    landsat_9 = ephem.readtle(
        'Landsat 9',
        '1 49260U 21088A   24273.75483892  .00001457  00000-0  33357-3 0  9995',
        '2 49260  98.2226 342.0491 0001388  92.6026 267.5331 14.57094968159926'
    )

    # Lista para almacenar las coordenadas futuras
    future_coordinates = []

    # Establecer el tiempo inicial (actual)
    current_time = datetime.utcnow()

    for i in range(steps):
        # Calcular la posición en el tiempo actual
        landsat_9.compute(current_time)

        # Obtener las coordenadas
        lat = landsat_9.sublat  # Latitud
        lon = landsat_9.sublong  # Longitud

        # Agregar a la lista
        future_coordinates.append({
            'timestamp': current_time.isoformat(),
            'latitude': lat,
            'longitude': lon
        })

        # Aumentar el tiempo
        current_time += timedelta(minutes=interval)

    return future_coordinates

def pasaraEn(lat, lon):
    landsat_9 = ephem.readtle(
        'Landsat 9',
        '1 49260U 21088A   24273.75483892  .00001457  00000-0  33357-3 0  9995',
        '2 49260  98.2226 342.0491 0001388  92.6026 267.5331 14.57094968159926'
    )

    # Establecer el tiempo inicial (actual)
    current_time = datetime.utcnow()

    # Inicializar una lista para almacenar los tiempos de paso
    pass_times = []

    # Buscar los próximos pasos durante los próximos 16 días
    for _ in range(2304):  # 16 días * 144 (cada 10 minutos)
        landsat_9.compute(current_time)

        # Comprobar si el satélite está sobre las coordenadas proporcionadas
        if (landsat_9.sublat - lat) ** 2 + (landsat_9.sublong - lon) ** 2 < 0.01:  # ajuste el umbral según sea necesario
            pass_times.append(current_time.isoformat())

        # Aumentar el tiempo
        current_time += timedelta(minutes=10)  # comprobar cada 10 minutos

    return pass_times