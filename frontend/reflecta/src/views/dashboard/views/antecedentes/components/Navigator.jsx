import { useState, useEffect } from "react";

export default function Navbar() {
  const [username, setUsername] = useState("Profile");

  function getUsername() {
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
    }
  }

  useEffect(() => {
    getUsername();
  });

  return (
    <nav class='navbar bg-slate-950'>
      <div class='flex-1'>
        <a href='/' class='btn btn-ghost text-lg font-normal font-mono'>
          Reflecta
        </a>
      </div>
      <div class='flex-none'>
        <ul class='menu menu-horizontal px-1 flex flex-row justify-center gap-3'>
          <li>
            <a href='/dashboard' className='btn'>
              Landsat 9
            </a>
          </li>
          <li>
            <a href='/profile' className='btn btn-outline btn-secondary'>
              {username}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
