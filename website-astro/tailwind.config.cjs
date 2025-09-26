module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        'arkup-dark': '#0f1724',
        'arkup-teal': '#0ea5a4',
        'arkup-sand': '#f8f4ef',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
