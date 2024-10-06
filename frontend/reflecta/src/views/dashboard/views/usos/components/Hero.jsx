import Title from "@/components/Title";

import GridIntegrations from "@/views/dashboard/components/GridIntegrations";
import ItemIntegrations from "@/views/dashboard/components/ItemIntegrations";

export default function Hero() {
  const usosLandsat9 = [
    {
      to: "/usos/agriculture",
      title: "Smart Agriculture",
      description:
        "Let's cultivate a greener future with Landsat 9. Landsat 9 allows precise crop monitoring, helping optimize production and ensure healthier harvests.",
      colSpan: "md:col-span-5",
      image:
        "https://image.slidesdocs.com/responsive-images/background/tree-flowers-and-trees-leaves-branch-plants-branches-powerpoint-background_f9fc69ec94__960_540.jpg",
    },
    {
      title: "Water Resources Management",
      description:
        "With the power of Landsat 9, we can manage the planet's water resources. Tracking water availability, river quality, and flood prevention are just some of its applications.",
      colSpan: "md:col-span-3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBc3BdOsDVVwqfAj8qsq-DQ2BIQIpGespgQ&s",
    },
    {
      title: "Environmental Conservation",
      description:
        "Protecting our planet is easier when seen from space. Landsat 9 helps monitor natural areas and their changes, acting as a guardian of the Earth.",
      colSpan: "md:col-span-4",
      image:
        "https://img.freepik.com/vector-gratis/fondo-plano-dia-tierra_23-2149318686.jpg",
    },
    {
      title: "Sustainable Urban Planning",
      description:
        "Smart cities for a sustainable future with Landsat 9. It helps urban planners visualize city growth and design more efficient infrastructures.",
      colSpan: "md:col-span-4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSplzt61BWXGQchzBe1TGAbw8mrleaD71sw&s",
    },
    {
      title: "Natural Disaster Monitoring",
      description:
        "Be prepared for the unexpected with Landsat 9. From fire prevention to detecting earthquakes, it is a powerful tool to save lives and protect our environment.",
      colSpan: "md:col-span-3",
      image:
        "https://media.istockphoto.com/id/1333043586/es/foto/tornado-en-paisaje-tormentoso-concepto-de-cambio-clim%C3%A1tico-y-desastre-natural.jpg?s=612x612&w=0&k=20&c=sHGLIIjUT5IwCxM5KfvEcZiUGq5vteucuUNg27bb-_o=",
    },
    {
      title: "Reforestation and Ecosystem Restoration",
      description:
        "Every tree counts, and Landsat 9 counts them all. It facilitates the management of reforestation projects and recovery of degraded areas, ensuring the planet keeps breathing.",
      colSpan: "md:col-span-5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeBAI3kBVp9xpggU74U9pcYcase6P8aYolQ&s",
    },
    {
      title: "Scientific Research and Earth Analysis",
      description:
        "Exploring the planet's secrets from space. Landsat 9 allows studying Earth's geology, analyzing soils, and discovering patterns invisible to the human eye.",
      colSpan: "md:col-span-4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHi6kbBxfAK9lSDsXJXTj-DXhFQk9XQa0g9emA1o3bLO9jpxbD3QAR9nsXzWcJwAXR3c8&usqp=CAU",
    },
    {
      title: "Mining and Resource Exploration",
      description:
        "Extracting knowledge for a more responsible use of resources. It helps identify extraction zones and monitor the impact of operations.",
      colSpan: "md:col-span-4",
      image:
        "https://wallpapers.com/images/featured/fondos-de-mineria-fhudc9kf01icybea.jpg",
    },
  ];

  return (
    <section className='flex flex-col items-center gap-10 mb-20'>
      <Title text='⚒️ Utilities' />

      <GridIntegrations>
        {usosLandsat9.map((uso, index) => (
          <ItemIntegrations
            size={uso.colSpan}
            title={uso.title}
            key={index}
            image={uso.image}
            to={uso.to}
          >
            <p className='text-sm'>{uso.description}</p>
          </ItemIntegrations>
        ))}
      </GridIntegrations>
    </section>
  );
}