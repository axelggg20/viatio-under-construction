import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Incluye todos los archivos dentro de 'app'
    "./components/**/*.{js,ts,jsx,tsx}", // Incluye componentes si los tienes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
