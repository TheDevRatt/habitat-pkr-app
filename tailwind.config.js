/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  assets: ["./assets/fonts"],
  theme: {
    extend: {
      fontFamily: {
        Karla_200ExtraLight: ["Karla_200ExtraLight"],
        Karla_300Light: ["Karla_300Light"],
        Karla_400Regular: ["Karla_400Regular"],
        Karla_500Medium: ["Karla_500Medium"],
        Karla_600SemiBold: ["Karla_600SemiBold"],
        Karla_700Bold: ["Karla_700Bold"],
        Karla_800ExtraBold: ["Karla_800ExtraBold"],
        Karla_200ExtraLight_Italic: ["Karla_200ExtraLight_Italic"],
        Karla_300Light_Italic: ["Karla_300Light_Italic"],
        Karla_400Regular_Italic: ["Karla_400Regular_Italic"],
        Karla_500Medium_Italic: ["Karla_500Medium_Italic"],
        Karla_600SemiBold_Italic: ["Karla_600SemiBold_Italic"],
        Karla_700Bold_Italic: ["Karla_700Bold_Italic"],
        Karla_800ExtraBold_Italic: ["Karla_800ExtraBold_Italic"],
      },
      colors: {
        'primary-blue': '#0099CC',
        'primary-orange': '#E55D25',
        'link-blue':'#00126D'
      },
    },
  },
  plugins: [],
};
