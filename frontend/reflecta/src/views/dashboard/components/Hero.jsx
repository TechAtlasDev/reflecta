import GridIntegrations from "./GridIntegrations";
import ItemIntegrations from "./ItemIntegrations";
import Title from "@/components/Title";

export default function Hero() {
  return (
    <section className='flex flex-col items-center mt-10 gap-10 my-20'>
      
      <Title text="Landsat 9"/>
      <GridIntegrations>
        <ItemIntegrations
          to='/dashboard/bandas'
          size='md:col-span-5'
          title='Descubre lo Invisible'
          image='/ondas.jpeg'
        >
          Con la avanzada tecnología del <strong>satélite Landsat 9</strong> y
          sus cámaras especializadas, ahora es posible observar fenómenos
          invisibles al ojo humano, revelando{" "}
          <strong>misterios fascinantes</strong> ocultos en nuestro entorno.
        </ItemIntegrations>

        <ItemIntegrations
          to="/dashboard/gallery"
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
          to="/dashboard/learn"
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
