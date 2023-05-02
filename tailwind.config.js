/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4C40F7',
        'custom-green': '#34c759',
        'custom-red': '#ff3b30',
      },
        boxShadow: {
        'custom-box-shadow-service': '-10px 30px 70px rgba(76, 64, 247, 0.5) ',
        'custom-box-shadow-customer': '0px 25px 100px rgba(76, 64, 247, 0.08);',
        'custom-box-shadow-testimonial': '-15px 20px 70px rgba(76, 64, 247, 0.2)',
        'logo' : '-5px 10px 30px rgba(76, 64, 247, 0.5)'
      },
       
      
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}
