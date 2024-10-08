import Carrusel from "../components/Carrusel";
import Navbar from "../components/navbar";
import Title from "@/components/Title";

export default function BandasPage() {
  return (
    <main className='flex flex-col items-center px-10 overflow-x-hidden gap-y-5'>
      <Navbar />
      <Title text='📡 Bands' />
      <p className='md:px-10 text-lg'>
        Spectral bands are specific ranges of the electromagnetic spectrum that
        allow capturing detailed information about the Earth's surface and the
        atmosphere. Each band is sensitive to different wavelengths of light,
        enabling the detection of specific environmental characteristics such
        as vegetation, water, clouds, aerosols, and soil temperature.
        <br />
        <br />
        For example, bands in the visible spectrum region (like blue, green, and
        red) are useful for monitoring plant health and water quality, while
        near-infrared and thermal bands allow analyzing soil moisture, detecting
        fires, and tracking changes in surface temperature. By combining
        different bands, scientists and experts can obtain a more comprehensive
        and accurate view of ecosystem conditions, aiding in the management of
        natural resources and the assessment of environmental phenomena.
      </p>
      <section className='mt-10 flex flex-col items-center max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full px-5'>
        <Carrusel />
      </section>
    </main>
  );
}