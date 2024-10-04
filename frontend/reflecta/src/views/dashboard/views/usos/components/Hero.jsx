import Title from "@/components/Title";
import Gradientwrapper from "@/components/GradientWrapper";

import GridIntegrations from "@/views/dashboard/components/GridIntegrations";
import ItemIntegrations from "@/views/dashboard/components/ItemIntegrations";

export default function Hero() {
  const usosLandsat9 = [
    {
      title: "Agricultura Inteligente",
      description:
        "Cultivemos un futuro más verde con Landsat 9. El Landsat 9 permite monitorear cultivos de manera precisa, ayudando a optimizar la producción y garantizar cosechas más saludables.",
      colSpan: "md:col-span-5",
      image:
        "https://image.slidesdocs.com/responsive-images/background/tree-flowers-and-trees-leaves-branch-plants-branches-powerpoint-background_f9fc69ec94__960_540.jpg",
    },
    {
      title: "Gestión de los Recursos Hídricos",
      description:
        "Con el poder del Landsat 9 podremos gestionar los recursos de agua de nuestro planeta. Rastrear la disponibilidad de agua, calidad de ríos y prevenir inundaciones son solo algunas de sus aplicaciones.",
      colSpan: "md:col-span-3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBc3BdOsDVVwqfAj8qsq-DQ2BIQIpGespgQ&s",
    },
    {
      title: "Conservación del Medio Ambiente",
      description:
        "Proteger nuestro planeta es más fácil cuando lo vemos desde el espacio. Landsat 9 nos ayuda a vigilar áreas naturales y sus cambios, actuando como un guardián del planeta.",
      colSpan: "md:col-span-4",
      image:
        "https://img.freepik.com/vector-gratis/fondo-plano-dia-tierra_23-2149318686.jpg",
    },
    {
      title: "Planificación Urbana Sostenible",
      description:
        "Ciudades inteligentes para un futuro sostenible con Landsat 9. Ayuda a urbanistas a visualizar el crecimiento de las ciudades y diseñar infraestructuras más eficientes.",
      colSpan: "md:col-span-4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSplzt61BWXGQchzBe1TGAbw8mrleaD71sw&s",
    },
    {
      title: "Monitoreo de Desastres Naturales",
      description:
        "Estemos preparados para lo inesperado con Landsat 9. Desde prevenir incendios hasta detectar terremotos, es una herramienta poderosa para salvar vidas y proteger nuestro entorno.",
      colSpan: "md:col-span-3",
      image:
        "https://media.istockphoto.com/id/1333043586/es/foto/tornado-en-paisaje-tormentoso-concepto-de-cambio-clim%C3%A1tico-y-desastre-natural.jpg?s=612x612&w=0&k=20&c=sHGLIIjUT5IwCxM5KfvEcZiUGq5vteucuUNg27bb-_o=",
    },
    {
      title: "Reforestación y Restauración de Ecosistemas",
      description:
        "Cada árbol cuenta, y Landsat 9 los cuenta a todos. Facilita la gestión de proyectos de reforestación y recuperación de áreas degradadas, asegurando que el planeta sigue respirando.",
      colSpan: "md:col-span-5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeBAI3kBVp9xpggU74U9pcYcase6P8aYolQ&s",
    },
    {
      title: "Estudios Científicos y Análisis de la Tierra",
      description:
        "Explorando los secretos del planeta desde el espacio. Landsat 9 permite estudiar la geología de la Tierra, analizar suelos y descubrir patrones invisibles para el ojo humano.",
      colSpan: "md:col-span-4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHi6kbBxfAK9lSDsXJXTj-DXhFQk9XQa0g9emA1o3bLO9jpxbD3QAR9nsXzWcJwAXR3c8&usqp=CAU",
    },
    {
      title: "Minería y Exploración de Recursos",
      description:
        "Extrayendo conocimiento para un uso más responsable de los recursos. Ayuda a identificar zonas de extracción y monitorear el impacto de las operaciones.",
      colSpan: "md:col-span-4",
      image:
        "https://wallpapers.com/images/featured/fondos-de-mineria-fhudc9kf01icybea.jpg",
    },
  ];

  return (
    <section className='flex flex-col items-center gap-10 mb-20'>
      <Gradientwrapper
        className='mt-10'
        wrapperClassName='max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]'
      >
        <Title text='⚒️ Sus usos' />
      </Gradientwrapper>

      <GridIntegrations>
        {usosLandsat9.map((uso, index) => (
          <ItemIntegrations
            size={uso.colSpan}
            title={uso.title}
            key={index}
            image={uso.image}
          >
            <p className='text-sm'>{uso.description}</p>
          </ItemIntegrations>
        ))}
      </GridIntegrations>
    </section>
  );
}
