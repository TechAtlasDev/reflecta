import Navbar from "../dashboard/components/navbar";
import Panel from "./components/panel";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthorized } from "./logic";

export default function ProfilePage() {
  const [auth, setAuth] = useState(false);
  const [datauser, setDatauser] = useState({});

  const navigate = useNavigate();

  async function authenticated() {
    try {
      const isAuthorizado = await isAuthorized();
      if (isAuthorizado) {
        setAuth(true);
        setDatauser(isAuthorizado);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error durante la autenticación:", error);
      navigate("/login"); // Redirigir en caso de error
    }
  }

  useEffect(() => {
    let isMounted = true; // Bandera para saber si el componente está montado

    authenticated();

    // Función de limpieza (opcional en este caso)
    return () => {
      isMounted = false;
    };
  }, []);

  return auth ? (
    <main>
      <Navbar />
      <section className='flex flex-col items-center'>
        <Panel data={datauser} />
      </section>
    </main>
  ) : (
    <h1>Loading...</h1>
  );
}
