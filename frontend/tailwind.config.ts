import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

// Tailwind CSS configuration
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      animation: {
        scrollX: "scrollX 30s linear infinite",
        "scrollX-reverse": "scrollX-reverse 30s linear infinite",
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "scrollX-reverse": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    addVariablesForColors, // Add the plugin to create CSS variables
  ],
};

// This plugin adds specified Tailwind colors as global CSS variables
function addVariablesForColors({ addBase }: any) {
  const colorsToAdd = {
    gray: colors.gray,
    red: colors.red,
    green: colors.green,
    blue: colors.blue,
    // Add any other colors you want to include
  };

  const newVars = Object.fromEntries(
    Object.entries(colorsToAdd).flatMap(([key, value]) =>
      Object.entries(value).map(([shade, color]) => [
        `--${key}-${shade}`,
        color,
      ])
    )
  );

  addBase({
    ":root": newVars, // Add the new variables to the root
  });
}

export default config;
