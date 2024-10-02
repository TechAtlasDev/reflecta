import { Sparkles } from "../../../components/Sparkles";

export default function Hero() {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <div className='mx-auto mt-32 w-screen max-w-2xl'>
        <div className='text-center text-3xl text-white'>
          <span className='text-indigo-200 font-bold text-6xl font-mono'>
            Reflecta
          </span>

          <br />

          <span className='bg-clip-text text-transparent text-center bg-gradient-to-b from-purple-100 to-purple-500 text-xl md:text-xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight'>
            Refleja tu inspiración
          </span>
        </div>

        <div className='mt-14 flex flex-row justify-center'>
          <img
            className='col-span-1 size-40'
            alt='Logo de la NASA'
            src='/logos/nasa.png'
          />
          <img
            className='col-span-1 size-40'
            alt='Logo del equipo'
            src='/logos/team.png'
          />
        </div>
      </div>

      <div className='relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900'>
        <Sparkles
          density={1200}
          className='absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]'
        />
      </div>
    </div>
  );
}
