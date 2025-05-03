module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        keyframes: {
          navAnimation: {
            '0%': {
              transform: 'rotateX(90deg)',
              opacity: '0',
            },
            '100%': {
              transform: 'rotateX(0)',
              opacity: '1',
            },
          },
        },
        animation: {
          navAnimation: 'navAnimation 4s ease forwards',
        },
      },
    },
    plugins: [],
  };
  