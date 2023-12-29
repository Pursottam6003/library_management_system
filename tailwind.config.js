/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        GilroyLight: ["GilroyLight"],
        GilroyExtraBold: ["GilroyExtraBold"],
        WigglyCurvesRegular: ["WigglyCurvesRegular"],
        BoncheLight: ["BoncheLight"],
        EdensorFree: ["EdensorFree"],
        SimpleDaily: ["SimpleDaily"],
        Calisga: ["Calisga"],
        PoppinsMedium: ["PoppinsMedium"],
        PoppinsRegular: ["PoppinsRegular"],
        PoppinsBold: ["PoppinsBold"],
        PoppinsLight: ["PoppinsLight"],
        PoppinsExtraLight: ["PoppinsExtraLight"],
      }
    },
  },
  plugins: [],
}

