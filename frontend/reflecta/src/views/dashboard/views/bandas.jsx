import Carrusel from "../components/Carrusel";
import Navbar from "../components/navbar";
import Title from "@/components/Title";

export default function BandasPage() {
  return (
    <main className='flex flex-col items-center px-10 overflow-x-hidden gap-y-5'>
      <Navbar />
      <Title text='📡 Bandas' />
      <p className='md:px-10 text-lg'>
        Las bandas espectrales son rangos específicos del espectro
        electromagnético que permiten capturar información detallada sobre la
        superficie terrestre y la atmósfera. Cada banda es sensible a diferentes
        longitudes de onda de la luz, lo que permite detectar características
        específicas del entorno, como la vegetación, el agua, las nubes, los
        aerosoles y la temperatura del suelo.
        <br />
        <br />
        Por ejemplo, las bandas en la región visible del espectro (como el azul,
        verde y rojo) son útiles para monitorear la salud de las plantas y la
        calidad del agua, mientras que las bandas del infrarrojo cercano y
        térmico permiten analizar la humedad del suelo, la detección de
        incendios y el seguimiento de cambios en la temperatura de la
        superficie. Al combinar diferentes bandas, los científicos y expertos
        pueden obtener una visión más completa y precisa del estado de los
        ecosistemas, ayudando en la gestión de recursos naturales y en la
        evaluación de fenómenos ambientales.
      </p>
      <section className='mt-10 flex flex-col items-center max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full px-5'>
        <Carrusel />
      </section>
    </main>
  );
}
