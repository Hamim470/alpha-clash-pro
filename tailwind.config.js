// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths to your project structure
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4F46E5', // Example custom color
          secondary: '#06B6D4',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Example custom font
        },
      },
    },
    plugins: [],
  };