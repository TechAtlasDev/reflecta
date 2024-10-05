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
      nameBanda: "Band 1 (Blue)",
      description: "Ideal for identifying areas of water pollution.",
      code: "B1",
      color: "to-blue-500",
    },
    {
      nameBanda: "Band 2 (Green)",
      description: "Ideal for mapping vegetation and agriculture.",
      code: "B2",
      color: "to-green-500",
    },
    {
      nameBanda: "Band 3 (Red)",
      description: "Ideal for detecting the presence of wildfires.",
      code: "B3",
      color: "to-red-500",
    },
    {
      nameBanda: "Band 4 (Near-Infrared)",
      description: "Ideal for mapping vegetation and soil moisture.",
      code: "B4",
      color: "to-orange-500",
    },
    {
      nameBanda: "Band 5 (Near-Infrared)",
      description: "Ideal for detecting the presence of water.",
      code: "B5",
      color: "to-yellow-500",
    },
    {
      nameBanda: "Band 6 (Shortwave Infrared)",
      description:
        "Ideal for mapping soil moisture and cloud cover.",
      code: "B6",
      color: "to-stone-500",
    },
    {
      nameBanda: "Band 7 (Shortwave Infrared)",
      description: "Ideal for detecting the presence of snow and ice.",
      code: "B7",
      color: "to-gray-500",
    },
    {
      nameBanda: "Band 8 (Shortwave Infrared)",
      description: "Ideal for mapping soil moisture.",
      code: "B8",
      color: "to-purple-500",
    },
    {
      nameBanda: "Band 9 (Shortwave Infrared)",
      description: "Ideal for detecting the presence of snow and ice.",
      code: "B9",
      color: "to-pink-500",
    },
    {
      nameBanda: "Band 10 (Thermal Infrared)",
      description: "Ideal for mapping surface temperature.",
      code: "B10",
      color: "to-fuchsia-500",
    },
    {
      nameBanda: "Band 11 (Thermal Infrared)",
      description: "Ideal for monitoring surface temperature.",
      code: "B11",
      color: "to-cyan-500",
    },
  ];

  return (
    <article className=''>
      <h2 className='text-2xl text-white font-bold'>⚙️ Settings</h2>
      <p>
        Here you can choose from all the options offered by Landsat9!
      </p>
      <div className='mx-14 my-5 xl:mx-20 xl:my-10'>
        <Carousel className='w-11/12 min-h-52 flex flex-row items-center mb-10'>
          <CarouselContent className='flex flex-row gap-x-3'>
            {images.map((banda) => {
              // Define the color class here before the component returns
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
          <strong>Clouds</strong>
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
