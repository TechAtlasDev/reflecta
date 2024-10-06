import Modelcard from "./Modelcard";

export default function GridModels() {
  const listModels = [
    {
      title: "Incendios forestales",
      description:
        "Predicción de incendios usando imágenes satelitales, datos de temperatura y cobertura vegetal.",
      image:
        "https://images.theconversation.com/files/603674/original/file-20240626-19-edcvz.jpg?ixlib=rb-4.1.0&rect=0%2C8%2C5547%2C3678&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
      to: "/models/incendios-forestales",
    },
    {
      title: "Cambios en la cobertura forestal",
      description:
        "Monitoreo y predicción de deforestación y regeneración de áreas naturales.",
      image:
        "https://appliedecologistsblog.com/wp-content/uploads/2021/09/am-banner.jpg?w=1299&h=768&crop=1",
      to: "/models/cobertura-forestal",
    },
    {
      title: "Sequías",
      description:
        "Predicción de sequías agrícolas mediante índices de vegetación y temperatura.",
      image:
        "https://www.bbva.com/wp-content/uploads/2023/05/que-es-la-sequia-sostenibilidad-bbva-2.jpg",
      to: "/models/sequias",
    },
    {
      title: "Crecimiento urbano",
      description:
        "Predicción de expansión de zonas urbanas mediante análisis espacial y datos históricos.",
      image:
        "https://es.shiftcities.org/sites/default/files/styles/16_9_extra_large/public/2023-09/Accommodating%20Urban%20Growth%20copy.jpg?itok=kNSUAgAV",
      to: "/models/crecimiento-urbano",
    },
    {
      title: "Rendimientos agrícolas",
      description:
        "Predicción del rendimiento agrícola basándose en salud de cultivos y condiciones climáticas.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiXf8-rkTP9CN0fCjKPz4LhraZDDqbYZaqg&s",
      to: "/models/rendimientos-agricolas",
    },
    {
      title: "Erosión del suelo",
      description:
        "Predicción de erosión en función de la cobertura vegetal, pendiente y precipitaciones.",
      image:
        "https://eldespertardelcampo.com.mx/wp-content/uploads/2024/01/142.6.MINI_.jpeg",
      to: "/models/erosion-del-suelo",
    },
    {
      title: "Calidad del agua",
      description:
        "Monitoreo de cuerpos de agua y predicción de calidad del agua usando imágenes satelitales.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLB106Os3xPO91csm9eHE9Y4ksJUEQpJU-Q&s",
      to: "/models/calidad-del-agua",
    },
    {
      title: "Desastres naturales",
      description:
        "Predicción de inundaciones y deslizamientos mediante análisis geoespacial y datos de precipitaciones.",
      image:
        "https://okdiario.com/img/2023/06/08/los-desastres-naturales-mas-destacados-de-la-historia.jpg",
      to: "/models/desastres-naturales",
    },
    {
      title: "Biodiversidad y conservación",
      description:
        "Monitoreo y predicción de cambios en biodiversidad para conservación de hábitats.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPznSLU8PDkzGYqSF30WVQex09Xln3Wz5yg&s",
      to: "/models/biodiversidad",
    },
    {
      title: "Riesgo de incendios en infraestructura",
      description:
        "Evaluación de riesgos de incendios cerca de infraestructuras críticas.",
      image:
        "https://img.freepik.com/fotos-premium/intenso-incendio-consume-plataforma-petrolera-costa-envuelve-infraestructura-petrolera-llamas_864588-38551.jpg",
      to: "/models/riesgo-incendios-infraestructura",
    },
  ];

  return (
    <section className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-10 my-10 gap-x-5 gap-y-10'>
      {listModels.map((model, index) => (
        <Modelcard
          key={index}
          title={model.title}
          description={model.description}
          image={model.image}
          to={model.to}
        />
      ))}
    </section>
  );
}
