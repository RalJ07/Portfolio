/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroe':"url('assets/works/heroes-app.jpg')",
        'mapas':"url('assets/works/mapas-app.jpg')",
        'rym':"url('assets/works/rym-app.jpg')",
        'pokemon':"url('assets/works/poke-app.jpg')",
        'wiki':"url('assets/works/wiki-app.jpg')",
        'gif':"url('assets/works/gifs-app.jpg')",
      }
    },
  },
  plugins: [],
}

