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
      nameBanda: "Band 1 (Blue)",
      description:
        "Sensitive to water depth, clouds and aerosols. Used to identify areas of water contamination.",
      code: "B1",
      color: "to-blue-500",
    },
    {
      nameBanda: "Band 2 (Green)",
      description:
        "Sensitive to vegetation, chlorophyll and plant health. Used for vegetation mapping and agriculture.",
      code: "B2",
      color: "to-green-500",
    },
    {
      nameBanda: "Band 3 (Red)",
      description:
        "Sensitive to vegetation, chlorophyll and plant health. Used to detect the presence of forest fires.",
      code: "B3",
      color: "to-red-500",
    },
    {
      nameBanda: "Band 4 (Near infrared)",
      description:
        "Sensitive to vegetation, soil moisture and cloud presence. Used for mapping vegetation, agriculture and soil moisture.",
      code: "B4",
      color: "to-orange-500",
    },
    {
      nameBanda: "Band 5 (Near infrared)",
      description:
        "Sensitive to vegetation, soil moisture and cloud presence. Used to detect the presence of water.",
      code: "B5",
      color: "to-yellow-500",
    },
    {
      nameBanda: "Band 6 (Shortwave infrared)",
      description:
        "Sensitive to soil moisture, cloudiness and water presence. Used to map soil moisture and cloudiness.",
      code: "B6",
      color: "to-stone-500",
    },
    {
      nameBanda: "Band 7 (Shortwave infrared)",
      description:
        "Sensitive to soil moisture, cloud cover and the presence of water. Used to detect the presence of snow and ice.",
      code: "B7",
      color: "to-gray-500",
    },
    {
      nameBanda: "Band 8 (Shortwave infrared)",
      description:
        "Sensitive to soil moisture, cloudiness and water presence. Used to map soil moisture and cloudiness.",
      code: "B8",
      color: "to-purple-500",
    },
    {
      nameBanda: "Band 9 (Shortwave infrared)",
      description:
        "Sensitive to soil moisture, cloud cover and the presence of water. Used to detect the presence of snow and ice.",
      code: "B9",
      color: "to-pink-500",
    },
    {
      nameBanda: "Band 10 (Thermal infrared)",
      description:
        "Sensitive to surface temperature. Used to map surface temperature, which is useful for applications such as forest fire monitoring, water resource management, and pollution monitoring.",
      code: "B10",
      color: "to-fuchsia-500",
    },
    {
      nameBanda: "Band 11 (Thermal infrared)",
      description:
        "Sensitive to surface temperature. Used to map surface temperature, which is useful for applications such as forest fire monitoring, water resource management, and pollution monitoring..",
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
