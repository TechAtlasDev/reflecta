import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Carrusel() {
  const images = [
    {
      nameBanda: "Coste 1 (Azul)",
      description:
        "Sensitive to water depth, clouds and aerosols. Used to identify areas of water contamination.",
      code: "B1",
      color: "to-blue-500",
    },
    {
      nameBanda: "Coste 2 (Verde)",
      description:
        "Sensitive to vegetation, chlorophyll and plant health. Used for vegetation mapping and agriculture.",
      code: "B2",
      color: "to-green-500",
    },
    {
      nameBanda: "Coste 3 (Rojo)",
      description:
        "Sensitive to vegetation, chlorophyll and plant health. Used to detect the presence of forest fires.",
      code: "B3",
      color: "to-red-500",
    },
    {
      nameBanda: "Coste 4 (Infrarrojo cercano)",
      description:
        "Sensible a la vegetación, la humedad del suelo y la presencia de nubes. Se utiliza para mapear la vegetación, la agricultura y la humedad del suelo.",
      code: "B4",
      color: "to-orange-500",
    },
    {
      nameBanda: "Coste 5 (Infrarrojo cercano)",
      description:
        "Sensible a la vegetación, la humedad del suelo y la presencia de nubes. Se utiliza para detectar la presencia de agua.",
      code: "B5",
      color: "to-yellow-500",
    },
    {
      nameBanda: "Coste 6 (Infrarrojo de onda corta)",
      description:
        "Sensible a la humedad del suelo, la cobertura de nubes y la presencia de agua. Se utiliza para mapear la humedad del suelo y la cobertura de nubes.",
      code: "B6",
      color: "to-stone-500",
    },
    {
      nameBanda: "Coste 7 (Infrarrojo de onda corta)",
      description:
        "Sensible a la humedad del suelo, la cobertura de nubes y la presencia de agua. Se utiliza para detectar la presencia de nieve y hielo.",
      code: "B7",
      color: "to-gray-500",
    },
    {
      nameBanda: "Coste 8 (Infrarrojo de onda corta)",
      description:
        "Sensible a la humedad del suelo, la cobertura de nubes y la presencia de agua. Se utiliza para mapear la humedad del suelo y la cobertura de nubes.",
      code: "B8",
      color: "to-purple-500",
    },
    {
      nameBanda: "Coste 9 (Infrarrojo de onda corta)",
      description:
        "Sensible a la humedad del suelo, la cobertura de nubes y la presencia de agua. Se utiliza para detectar la presencia de nieve y hielo.",
      code: "B9",
      color: "to-pink-500",
    },
    {
      nameBanda: "Coste 10 (Infrarrojo térmico)",
      description:
        "Sensible a la temperatura de la superficie. Se utiliza para mapear la temperatura de la superficie, lo que es útil para aplicaciones como el monitoreo de incendios forestales, la gestión de recursos hídricos y el seguimiento de la contaminación.",
      code: "B10",
      color: "to-fuchsia-500",
    },
    {
      nameBanda: "Coste 11 (Infrarrojo térmico)",
      description:
        "Sensible a la temperatura de la superficie. Se utiliza para mapear la temperatura de la superficie, lo que es útil para aplicaciones como el monitoreo de incendios forestales, la gestión de recursos hídricos y el seguimiento de la contaminación.",
      code: "B11",
      color: "to-cyan-500",
    },
  ];

  return (
    <Carousel className='w-11/12 min-h-52 flex flex-row items-center mb-10'>
      <CarouselContent className='flex flex-row gap-x-3'>
        {images.map((banda) => {
          // Define la clase color aquí antes del retorno del componente
          return (
            <CarouselItem
              className='w-fit basis-1/1 md:basis-1/2 lg:basis-1/3'
              key={banda.code}
            >
              <Card
                className={`min-h-80 bg-gradient-to-b from-transparent via-transparent ${banda.color} flex flex-col justify-end`}
              >
                <CardHeader>
                  <CardTitle className='text-white text-2xl font-bold'>
                    {banda.nameBanda}
                  </CardTitle>
                  <CardDescription className='text-slate-300 text-md'>
                    {banda.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
