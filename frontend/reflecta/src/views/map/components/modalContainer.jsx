import { useState } from "react";

import RangeData from "./rangedata";

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

export default function Content() {
  const [nubes, setNubes] = useState(40);

  const images = [
    {
      nameBanda: "Banda 1 (Azul)",
      description: "Ideal para identificar áreas de contaminación del agua.",
      code: "B1",
      color: "to-blue-500",
    },
    {
      nameBanda: "Banda 2 (Verde)",
      description: "Ideal para mapear la vegetación y la agricultura.",
      code: "B2",
      color: "to-green-500",
    },
    {
      nameBanda: "Banda 3 (Rojo)",
      description: "Ideal para detectar la presencia de incendios forestales.",
      code: "B3",
      color: "to-red-500",
    },
    {
      nameBanda: "Banda 4 (Infrarrojo cercano)",
      description: "Ideal para mapear la vegetación y la humedad del suelo.",
      code: "B4",
      color: "to-orange-500",
    },
    {
      nameBanda: "Banda 5 (Infrarrojo cercano)",
      description: "Ideal para detectar la presencia de agua.",
      code: "B5",
      color: "to-yellow-500",
    },
    {
      nameBanda: "Banda 6 (Infrarrojo de onda corta)",
      description:
        "Ideal para mapear la humedad del suelo y la cobertura de nubes.",
      code: "B6",
      color: "to-stone-500",
    },
    {
      nameBanda: "Banda 7 (Infrarrojo de onda corta)",
      description: "Ideal para detectar la presencia de nieve y hielo.",
      code: "B7",
      color: "to-gray-500",
    },
    {
      nameBanda: "Banda 8 (Infrarrojo de onda corta)",
      description: "Ideal para mapear la humedad del suelo.",
      code: "B8",
      color: "to-purple-500",
    },
    {
      nameBanda: "Banda 9 (Infrarrojo de onda corta)",
      description: "Ideal para detectar la presencia de nieve y hielo.",
      code: "B9",
      color: "to-pink-500",
    },
    {
      nameBanda: "Banda 10 (Infrarrojo térmico)",
      description: "Ideal para mapear la temperatura de la superficie.",
      code: "B10",
      color: "to-fuchsia-500",
    },
    {
      nameBanda: "Banda 11 (Infrarrojo térmico)",
      description: "Ideal para monitoreo de temperatura de la superficie.",
      code: "B11",
      color: "to-cyan-500",
    },
  ];

  return (
    <article className=''>
      <h2 className='text-2xl text-white font-bold'>⚙️ Ajustes</h2>
      <p>
        Acá puedes escoger entre todas las opciones que ofrece el Landsat9!.
      </p>
      <div className='mx-14 my-5 xl:mx-20 xl:my-10'>
        <Carousel className='w-11/12 min-h-52 flex flex-row items-center mb-10'>
          <CarouselContent className='flex flex-row gap-x-3'>
            {images.map((banda) => {
              // Define la clase color aquí antes del retorno del componente
              return (
                <CarouselItem className='w-fit basis-1/1' key={banda.code}>
                  <button
                    onClick={() => {
                      alert(banda.code);
                    }}
                  >
                    <Card
                      className={`border-1 border-slate-200 min-h-52 bg-gradient-to-t from-transparent via-transparent ${banda.color} flex flex-col justify-end`}
                    >
                      <CardHeader>
                        <CardTitle className='text-white text-lg font-bold'>
                          {banda.nameBanda}
                        </CardTitle>
                        <CardDescription className='text-slate-300 text-sm'>
                          {banda.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <article className='flex flex-row items-center justify-between gap-2'>
        <span>
          <strong>Nubes</strong>
        </span>
        <input
          type='range'
          min='0'
          max='100'
          value={nubes}
          onChange={(e) => {
            setNubes(e.target.value);
          }}
          step='1'
          class='range range-success range-xs'
        />
        <span>{nubes}%</span>
      </article>
      <RangeData />
    </article>
  );
}
