/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D3E50', // Azul Oscuro
        'secondary': '#BDC3C7', // Gris Concreto
        'copper': '#F39C12', // Amarillo Cobre
        'success': '#27AE60', // Verde Industrial
        'warning': '#E74C3C', // Rojo Seguridad
        'background': '#ECF0F1', // Blanco Neutro
      },
      screens: {
        'xs': '480px', // Ejemplo de punto de interrupción personalizado
      },
    },
  },
  plugins: [],
}
