/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        "slow-spin": "slow-spin 15s linear infinite",
        typewriter: "typewriter 2s steps(40) 1s forwards",
        blink: "blink 1s steps(1) infinite",
        "bounce-slow": "bounce 3s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(66, 153, 225, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(66, 153, 225, 0.8)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#edfaff",
          100: "#d6f2ff",
          200: "#b5eaff",
          300: "#83dfff",
          400: "#48cbff",
          500: "#1eafff",
          600: "#0091ff",
          700: "#0077e6",
          800: "#0062ba",
          900: "#085494",
          950: "#06325c",
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(66, 153, 225, 0.5)",
        "glow-lg": "0 0 25px rgba(66, 153, 225, 0.6)",
      },
    },
  },
  plugins: [],
};
