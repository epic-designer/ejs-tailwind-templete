/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./views/**/*.{html,js}"],
  // content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./views/**/*.{html,js.ejs}'],
  },
}