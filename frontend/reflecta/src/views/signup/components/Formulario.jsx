import { useState } from "react";
import { RegisterUserData } from "./logic";

import { useNavigate } from "react-router-dom";

export default function Formulario() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function registerUser() {
    const response = await RegisterUserData(name, username, password, email);
    if (response) {
      navigate("/profile");
    } else {
      alert("Error registering user");
    }
  }

  return (
    <section className='flex flex-col items-center px-10 shadow-2xl shadow-purple-900 py-10 gap-6'>
      <h1 className='font-bold text-4xl'>SignUp</h1>
      <form action='' method='post'>
        <article className='flex flex-col items-center gap-2'>
          <label class='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              class='h-4 w-4 opacity-70'
            >
              <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
              <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
            </svg>
            <input
              type='text'
              class='grow'
              placeholder='Email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label class='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              class='h-4 w-4 opacity-70'
            >
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
            </svg>
            <input
              type='text'
              class='grow'
              placeholder='Username'
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label class='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              class='h-4 w-4 opacity-70'
            >
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
            </svg>
            <input
              type='text'
              class='grow'
              placeholder='Tus nombres'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label class='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              class='h-4 w-4 opacity-70'
            >
              <path
                fill-rule='evenodd'
                d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                clip-rule='evenodd'
              />
            </svg>
            <input
              type='password'
              class='grow'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </article>
      </form>
      <article className='flex flex-col items-center gap-2 w-full'>
        <button
          className='w-full btn btn-secondary'
          onClick={() => {
            registerUser();
          }}
        >
          Sign in
        </button>
      </article>
    </section>
  );
}
