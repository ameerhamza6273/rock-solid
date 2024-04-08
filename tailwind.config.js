module.exports = {
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
  ],
  theme: {
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans'],
    },
    extend: {
      colors: {
        primary: "#FF6C2B",
        secondary: "#2F6CC8",
        tertiary: "#40A2E3",
        black: "#0E203C",

        textGray1: "#8c8f95",
        textGray2: "#576A89",
        textGray3: "#454545",
        textGray4: "#D7D6D6",

        borderColor: "#D9D9D9",

        bgColor: "#2F6CC8",
        bgGray: "#F6F7FA",

        icon: "#8C8C8C",
        text1: "#404040",
        text2: "#262626",
        text3: "#C6C6C6",
        text4: "#CCCCCC",
      },
    },
  },
};
