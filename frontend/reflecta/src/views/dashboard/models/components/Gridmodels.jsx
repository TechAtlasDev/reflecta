import Modelcard from "./Modelcard";

export default function GridModels() {
  const listModels = [
    {
      title: "Forest fires",
      description:
        "Prediction of fires using satellite images, temperature data, and vegetation cover.",
      image:
        "https://images.theconversation.com/files/603674/original/file-20240626-19-edcvz.jpg?ixlib=rb-4.1.0&rect=0%2C8%2C5547%2C3678&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
      to: "/models/incendios-forestales",
    },
    {
      title: "Forest cover changes",
      description:
        "Monitoring and predicting deforestation and natural area regeneration.",
      image:
        "https://appliedecologistsblog.com/wp-content/uploads/2021/09/am-banner.jpg?w=1299&h=768&crop=1",
      to: "/models/cobertura-forestal",
    },
    {
      title: "Droughts",
      description:
        "Prediction of agricultural droughts using vegetation and temperature indices.",
      image:
        "https://www.bbva.com/wp-content/uploads/2023/05/que-es-la-sequia-sostenibilidad-bbva-2.jpg",
      to: "/models/sequias",
    },
    {
      title: "Urban growth",
      description:
        "Prediction of urban area expansion using spatial analysis and historical data.",
      image:
        "https://es.shiftcities.org/sites/default/files/styles/16_9_extra_large/public/2023-09/Accommodating%20Urban%20Growth%20copy.jpg?itok=kNSUAgAV",
      to: "/models/crecimiento-urbano",
    },
    {
      title: "Agricultural yields",
      description:
        "Prediction of agricultural yield based on crop health and weather conditions.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiXf8-rkTP9CN0fCjKPz4LhraZDDqbYZaqg&s",
      to: "/models/rendimientos-agricolas",
    },
    {
      title: "Soil erosion",
      description:
        "Prediction of erosion based on vegetation cover, slope, and rainfall.",
      image:
        "https://eldespertardelcampo.com.mx/wp-content/uploads/2024/01/142.6.MINI_.jpeg",
      to: "/models/erosion-del-suelo",
    },
    {
      title: "Water quality",
      description:
        "Monitoring of water bodies and prediction of water quality using satellite images.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLB106Os3xPO91csm9eHE9Y4ksJUEQpJU-Q&s",
      to: "/models/calidad-del-agua",
    },
    {
      title: "Natural disasters",
      description:
        "Prediction of floods and landslides through geospatial analysis and precipitation data.",
      image:
        "https://okdiario.com/img/2023/06/08/los-desastres-naturales-mas-destacados-de-la-historia.jpg",
      to: "/models/desastres-naturales",
    },
    {
      title: "Biodiversity and conservation",
      description:
        "Monitoring and prediction of biodiversity changes for habitat conservation.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPznSLU8PDkzGYqSF30WVQex09Xln3Wz5yg&s",
      to: "/models/biodiversidad",
    },
    {
      title: "Fire risk in infrastructure",
      description:
        "Assessment of fire risks near critical infrastructure.",
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
