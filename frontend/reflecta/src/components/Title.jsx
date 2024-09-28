export default function Title(props) {
  return (
    <h2 className='bg-clip-text text-transparent text-center bg-gradient-to-b from-slate-600 to-slate-300 text-7xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight'>
        {props.text}
    </h2>
  )
}