import InfoUser from "./infouser";

export default function Panel() {
  return (
    <section className='mx-3 bg-slate-700 rounded-2xl py-3 max-w-screen-md'>
      <InfoUser />
      <hr className='border-white mx-10' />
    </section>
  );
}
