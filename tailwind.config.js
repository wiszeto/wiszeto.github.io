/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arco: ['Arco', 'sans-serif'], 
        // This key "arco" matches the class "font-arco"
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          /* 
            You can rename "mytheme" to any name you'd like,
            then enable it in your DaisyUI config or via data-theme="mytheme".
          */

          // Primary brand color (pastel lavender)
          "primary": "#CABFFA",
          "primary-content": "#ffffff",

          // Secondary brand color (soft sky blue)
          "secondary": "#C9F9FF",
          "secondary-content": "#1D2B35",

          // Accent color (light pink)
          "accent": "#FFB2F6",
          "accent-content": "#37243B",

          // Neutral (background for cards or sections)
          "neutral": "#F2EEFB",
          "neutral-content": "#291751",

          // Base background colors
          "base-100": "#FDF9FF",  // Lightest background
          "base-200": "#F2E8FF",  // Slightly darker pastel
          "base-300": "#EAD9FF",  // Even deeper pastel
          "base-content": "#262055",

          // Info (pastel blue)
          "info": "#95CCF4",
          "info-content": "#0B2339",

          // Success (pastel mint)
          "success": "#BBF1C8",
          "success-content": "#032B20",

          // Warning (pastel yellow)
          "warning": "#FFEAB6",
          "warning-content": "#443216",

          // Error (pastel red)
          "error": "#FFB1B9",
          "error-content": "#3B060B",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
