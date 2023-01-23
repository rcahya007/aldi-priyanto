/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "eaopobbe-background":
          "linear-gradient(to right,#ffffff66,#ffffff66),url('../src/assets/img/organizationMedia/eaopobbe/background.png')",
        "workmotion-background":
          "url('../src/assets/img/organizationMedia/workmotion/background.png')",
        "nowdots-background":
          "url('../src/assets/img/organizationMedia/nowdots/background.png')",
        "footer-background":
          "url('../src/assets/img/organizationMedia/footer/background.png')",
        "lebanese-background":
          "url('../src/assets/img/ui-ux-design/lebanese/background.png')",
      },
    },
  },
  plugins: [],
};
