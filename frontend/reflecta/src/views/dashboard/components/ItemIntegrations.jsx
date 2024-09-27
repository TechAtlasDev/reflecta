export default function ItemIntegrations(props) {
  const { title, image, size, children, to } = props;
  const imageURL = image || "public/image.png";

  return (
    <a
      href={to}
      className={`relative hover:scale-110 overflow-hidden transition-all flex flex-col justify-end col-span-8 ${size} min-h-80 rounded-xl hover:z-50 hover:shadow-lg hover:shadow-black`}
    >
      <div
        className='absolute bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black/90 bg-cover bg-center opacity-50'
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className='absolute bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent via-black/10 to-slate-950/90'></div>

      <div className='absolute px-5 py-4'>
        <h2 className='font-bold text-xl text-slate-100'>{title}</h2>
        <p className='text-slate-300'>{children}</p>
      </div>
    </a>
  );
}
