/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          /* Hide scrollbar for WebKit browsers like Chrome, Safari */
          "-ms-overflow-style": "none" /* IE 11 */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* Hide scrollbar in WebKit browsers */,
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
