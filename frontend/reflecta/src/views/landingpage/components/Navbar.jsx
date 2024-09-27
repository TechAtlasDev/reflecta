export default function Navbar() {
  return (
    <div className='flex flex-row justify-end navbar bg-base-100 py-5 px-5'>
      <a
        href='/login'
        className='btn btn-outline btn-primary text-lg font-normal'
      >
        Despegar
      </a>
    </div>
  );
}
