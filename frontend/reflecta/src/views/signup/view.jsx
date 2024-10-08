import Formulario from "./components/Formulario";

export default function Signup() {
  return (
    <main className='flex flex-col items-center px-10 py-20'>
      <a href='/' className='text-4xl font-bold mb-10 font-mono'>
        Reflecta
      </a>
      <Formulario />
    </main>
  );
}
