export default function InfoUser({ data }) {
  return (
    <section className='w-full min-h-52 flex flex-col items-center gap-3 my-10 px-5'>
      <div className='skeleton w-52 h-52 rounded-full'></div>
      <div>
        <article className='text-slate-300 font-bold text-center text-3xl'>
          {data.user.first_name}
        </article>
        <article className='text-slate-500 text-right'>
          @{data.user.username}
        </article>
        <article className='text-slate-300 text-xl font-bold'>
          Edad: <span className='font-normal'>18</span>
        </article>
        <article className='text-slate-300 text-xl font-bold'>
          Oficio: <span className='font-normal'>Estudiante</span>
        </article>
        <article className='text-slate-300 text-xl font-bold'>
          Bio:{" "}
          <span className='font-normal'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            tempora a ut deserunt quaerat sit nisi, vitae ad eligendi rem ullam
            officiis expedita illo labore, blanditiis consequatur. Ex, ab
            repellendus.
          </span>
        </article>
      </div>
    </section>
  );
}
