import GridIntegrations from "./GridIntegrations";
import ItemIntegrations from "./ItemIntegrations";
import Title from "@/components/Title";

import { SparklesCore } from "@/components/Sparkletitle";

export default function Hero() {
  return (
    <section className='flex flex-col items-center mt-10 gap-10 w-full'>
      <div className='w-full my-10 flex flex-col items-center justify-center overflow-hidden rounded-md'>
        <h1 className='md:text-7xl text-7xl lg:text-9xl font-bold text-center text-white relative z-20'>
          Landsat 9
        </h1>
        <div className='w-[40rem] h-40 relative'>
          {/* Gradients */}
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

          {/* Core component */}
          <SparklesCore
            background='transparent'
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className='w-full h-full'
            particleColor='#fff'
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className='absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_10%,white)]'></div>
        </div>
      </div>

      <GridIntegrations>
        <ItemIntegrations
          to='/dashboard/usos'
          size='md:col-span-5'
          title='Sus usos'
          image='/ondas.jpeg'
        >
          With the advanced technology of the <strong>Landsat 9</strong> satellite and its specialized cameras, it is now possible to observe phenomena invisible to the human eye, revealing{" "}
          <strong>fascinating mysteries</strong> hidden in our environment.
        </ItemIntegrations>

        <ItemIntegrations
          to='/dashboard/noticias'
          size='md:col-span-3'
          title='Noticias más recientes'
          image='https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg'
        >
          Dive into an <strong>inspiring gallery</strong> of images that capture the essence of <strong>Landsat 9</strong> in all its glory. Discover the{" "} <strong>magic of Earth observation</strong> and witness the{" "} <strong>transformative impact</strong> these images can have on our understanding of the planet.
        </ItemIntegrations>

        <ItemIntegrations
          to='/dashboard/antecedentes'
          size='md:col-span-3'
          title='Proyectos anteriores al Landsat 9'
          image='https://www.laprensagrafica.com/__export/1696698829952/sites/prensagrafica/img/2023/10/07/64b05f3c80d5d.jpeg_1758632411.jpeg'
        >
          Discover why <strong>Landsat 9</strong> is one of the most revolutionary satellites of our time and how its technology can transform our daily lives.
        </ItemIntegrations>

        <ItemIntegrations
          to='/dashboard/landsat9'
          size='md:col-span-5'
          title='Más del Landsat 9'
          image='https://www.laprensagrafica.com/__export/1696698829952/sites/prensagrafica/img/2023/10/07/64b05f3c80d5d.jpeg_1758632411.jpeg'
        >
          Discover why <strong>Landsat 9</strong> is one of the most revolutionary satellites of our time and how its technology can transform our daily lives.
        </ItemIntegrations>
      </GridIntegrations>
    </section>
  );
}
