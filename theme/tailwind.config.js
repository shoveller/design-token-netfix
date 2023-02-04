/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html","./src/**/*.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#010101",
        red: {
          100: "#faced0",
          200: "#f59da1",
          300: "#ef6b72",
          400: "#ea3a43",
          500: "#e50914",
          600: "#b70710",
          700: "#89050c",
          800: "#5c0408",
          900: "#2e0204"
        },
        blue: {
          100: "#cce3fb",
          200: "#99c6f7",
          300: "#66aaf3",
          400: "#338def",
          500: "#0071eb",
          600: "#005abc",
          700: "#00448d",
          800: "#002d5e",
          900: "#00172f"
        },
        green: {
          100: "#d5f8e3",
          200: "#acf2c8",
          300: "#82ebac",
          400: "#58e590",
          500: "#2ede75",
          600: "#25b25d",
          700: "#1c8546",
          800: "#13592f",
          900: "#092c17"
        },
        gray: {
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#acacac",
          400: "#919191",
          500: "#757575",
          600: "#5e5e5e",
          700: "#464646",
          800: "#2f2f2f",
          900: "#171717"
        },
        gradients: {
          100: "linear-gradient(180deg, #000000 0%, #00000000 100%)"
        }
      },
      textShadowParagraph: {
        color: "#0000008c",
        type: "dropShadow",
        x: 0,
        y: 2,
        blur: 6,
        spread: 0
      },
      fontFamilies: {
        spoqahansans: "SpoqaHanSans"
      },
      lineHeights: {
        0: "120%",
        1: "130%",
        2: "135%",
        3: "150%"
      },
      fontWeights: {
    "spoqahansans_0": "Bold",
    "spoqahansans_1": "Regular"
      },
      fontSize: {
        0: 12,
        1: 13,
        2: 14,
        3: 15,
        4: 16,
        5: 18,
        6: 20,
        7: 22,
        8: 24,
        9: 28,
        10: 30,
        11: 34,
        12: 48,
        13: 60
      },
      letterSpacing: {
        0: "0%",
        1: "-0.05%"
      },
      paragraphSpacing: {
        0: 0,
        1: 18,
        2: 21,
        3: 24,
        4: 27,
        5: 30
      },
      bigTitleMobile: {
        fontFamily: "SpoqaHanSans",
        fontWeight: "Bold",
        lineHeight: "120%",
        fontSize: 30,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
      bigTitleDesktop: {
        fontFamily: "SpoqaHanSans",
        fontWeight: "Bold",
        lineHeight: "120%",
        fontSize: 60,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
      descriptionBoldMobile: {
        fontFamily: "SpoqaHanSans",
        fontWeight: "Bold",
        lineHeight: "130%",
        fontSize: 15,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
      descriptionMobile: {
        fontFamily: "SpoqaHanSans",
        fontWeight: "Regular",
        lineHeight: "135%",
        fontSize: 13,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
      text: {
        xSmall: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Regular",
          lineHeight: "150%",
          fontSize: 12,
          letterSpacing: "-0.05%",
          paragraphSpacing: 18,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        small: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Regular",
          lineHeight: "150%",
          fontSize: 14,
          letterSpacing: "-0.05%",
          paragraphSpacing: 21,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        normal: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Regular",
          lineHeight: "150%",
          fontSize: 16,
          letterSpacing: "-0.05%",
          paragraphSpacing: 24,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        large: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Regular",
          lineHeight: "150%",
          fontSize: 18,
          letterSpacing: "-0.05%",
          paragraphSpacing: 27,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xLarge: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Regular",
          lineHeight: "150%",
          fontSize: 20,
          letterSpacing: "-0.05%",
          paragraphSpacing: 30,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xSmallBold: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "150%",
          fontSize: 12,
          letterSpacing: "-0.05%",
          paragraphSpacing: 18,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        smallBold: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "150%",
          fontSize: 14,
          letterSpacing: "-0.05%",
          paragraphSpacing: 21,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        normalBold: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "150%",
          fontSize: 16,
          letterSpacing: "-0.05%",
          paragraphSpacing: 24,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        largeBold: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "150%",
          fontSize: 18,
          letterSpacing: "-0.05%",
          paragraphSpacing: 27,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xLargeBold: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "150%",
          fontSize: 20,
          letterSpacing: "-0.05%",
          paragraphSpacing: 30,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        }
      },
      title: {
        xSmall: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "120%",
          fontSize: 22,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        small: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "120%",
          fontSize: 24,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        normal: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "120%",
          fontSize: 28,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        large: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "120%",
          fontSize: 34,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
        xLarge: {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "120%",
          fontSize: 48,
          letterSpacing: "-0.05%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "2xLarge": {
          fontFamily: "SpoqaHanSans",
          fontWeight: "Bold",
          lineHeight: "120%",
          fontSize: 60,
          letterSpacing: "-0.05%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        }
      },
      textCase: {
        none: "none"
      },
      textDecoration: {
        none: "none"
      },
      paragraphIndent: {
        0: "0px"
      }
    },
  },
}