/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (opcional)
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          primary: "#5b17d1",
          secondary: "#1728d1",
        },
      },
    ],
    darkTheme: "night", // Nombre del tema que deseas usar para el modo oscuro
    base: true, // Aplica color de fondo y primer plano por defecto al elemento raíz
    styled: true, // Incluye colores y decisiones de diseño de DaisyUI para todos los componentes
    utils: true, // Agrega clases utilitarias responsivas y de modificadores
    prefix: "", // Prefijo para los nombres de clase de DaisyUI
    logs: true, // Muestra información sobre la versión de DaisyUI y la configuración utilizada en la consola al compilar CSS
    themeRoot: ":root", // Elemento que recibe las variables CSS del color del tema
  },
};
