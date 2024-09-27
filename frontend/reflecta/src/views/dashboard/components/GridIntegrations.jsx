export default function GridIntegrations({ children }) {
  return (
    <section className='grid grid-cols-8 gap-x-3 gap-y-5 lg:gap-y-3 px-10 xl:my-10 lg:px-40 w-full'>
      {children}
    </section>
  );
}
