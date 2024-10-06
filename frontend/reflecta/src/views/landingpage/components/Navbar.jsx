export default function Navbar() {
  return (
    <div className='absolute flex flex-row justify-end navbar bg-base-100 py-5 px-5'>
      <a
        href='/map'
        className='btn btn-outline btn-primary text-lg font-normal'
      >
        Take off
      </a>
    </div>
  );
}
