// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MarkdownPost from "./MarkdownPost"; // Asegúrate de importar el componente

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      {/* Aquí empiezan las rutas */}
      <nav>
        <ul>
          <li>
            <Link to='/posts/post1'>Post 1</Link>
          </li>
          <li>
            <Link to='/posts/post2'>Post 2</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/posts/:postName' element={<MarkdownPost />} />
        {/* Puedes añadir más rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
}

export default App;
