import GridIntegrations from "./GridIntegrations";
import ItemIntegrations from "./ItemIntegrations";

("use client");
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./Lamp";

export default function Hero() {
  return (
    <section className='flex flex-col items-center mt-10 gap-10'>
      <h2 className='bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight'>
        Landsat 9
      </h2>

      <GridIntegrations>
        <ItemIntegrations
          to='/'
          size='md:col-span-5'
          title='Descubre lo Invisible'
          image='public/ondas.jpeg'
        >
          Con la avanzada tecnología del <strong>satélite Landsat 9</strong> y
          sus cámaras especializadas, ahora es posible observar fenómenos
          invisibles al ojo humano, revelando{" "}
          <strong>misterios fascinantes</strong> ocultos en nuestro entorno.
        </ItemIntegrations>

        <ItemIntegrations
          size='md:col-span-3'
          title='Galería de Imágenes'
          image='https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg'
        >
          Sumérgete en una <strong>inspiradora galería</strong> de imágenes que
          capturan la esencia del <strong>Landsat 9</strong> en todo su
          esplendor. Descubre la{" "}
          <strong>magia de la observación terrestre</strong> y sé testigo del{" "}
          <strong>impacto transformador</strong> que estas imágenes pueden tener
          en nuestra comprensión del planeta.
        </ItemIntegrations>

        <ItemIntegrations
          size='md:col-span-8'
          title='Aprende y Descubre el Futuro'
          image='https://www.laprensagrafica.com/__export/1696698829952/sites/prensagrafica/img/2023/10/07/64b05f3c80d5d.jpeg_1758632411.jpeg'
        >
          Descubre por qué el <strong>satélite Landsat 9</strong> es uno de los
          más revolucionarios de nuestra era y cómo su tecnología puede
          transformar nuestra vida cotidiana.
        </ItemIntegrations>
      </GridIntegrations>
    </section>
  );
}
