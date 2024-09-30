import { useState } from "react";

export default function Interfaz() {
  const [decoracion, setDecoracion] = useState(true);
  const [nubes, setNubes] = useState(40);

  return (
    <div className='relative bg-transparent flex flex-col items-start justify-between px-5 h-screen py-10 xl:py-5'>
      {decoracion ? (
        <>
          <div className='absolute inset-0 bg-gradient-to-t xl:bg-gradient-to-l from-indigo-950 via-30% xl:via-20% via-transparent rounded-lg pointer-events-none z-0'></div>
          <div className='hidden lg:block absolute inset-0 bg-gradient-to-r from-indigo-950 via-30% xl:via-20% via-transparent rounded-lg pointer-events-none z-0'></div>
        </>
      ) : (
        <></>
      )}

      {/* Sección principal con contenido interactivo */}
      <section className='relative pointer-events-auto bg-slate-900 flex flex-col items-start gap-3 px-3 py-5 rounded-xl z-10'>
        <span className='absolute text-[blue] loading loading-ring loading-lg -right-4 -top-4'></span>
        <h1 className='font-bold text-2xl  font-mono'>Reflecta</h1>
        <hr className='border w-1/2' />
        <div className='flex flex-col gap-2'>
          <article className='flex flex-row items-center justify-between gap-2'>
            <span>
              <strong>Decoraciones</strong>
            </span>
            <input
              type='checkbox'
              className=' toggle toggle-sm toggle-success'
              checked={decoracion} // Vincula el estado con el valor del checkbox
              onChange={() => {
                setDecoracion(!decoracion);
              }}
            />
          </article>
          <article className='flex flex-row items-center justify-between gap-2'>
            <span>
              <strong>Nubes</strong>
            </span>
            <input
              type='range'
              min='0'
              max='100'
              value={nubes}
              onChange={(e) => {
                setNubes(e.target.value);
              }}
              step='1'
              class='range range-success range-xs'
            />
          </article>
        </div>
      </section>

      <section className='relative flex flex-row justify-between items-end gap-3 px-3 py-5 w-full z-10'>
        <div className='flex flex-col gap-2'>
          <button className='font-extrabold text-xl btn pointer-events-auto'>
            +
          </button>
          <button className='font-extrabold text-xl btn pointer-events-auto'>
            -
          </button>
        </div>
        <a
          href='/dashboard'
          className='pointer-events-auto btn flex flex-row items-center justify-center'
        >
          <svg
            className='size-5'
            data-slot='icon'
            fill='none'
            stroke-width='1.5'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
            ></path>
          </svg>
          Panel
        </a>
      </section>
    </div>
  );
}
