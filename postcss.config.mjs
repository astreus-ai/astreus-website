import typography from '@tailwindcss/typography';

/** @type {import('postcss').ConfigJS} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/fumadocs-ui/dist/**/*.js',
      ],
      theme: {
        extend: {},
      },
      plugins: [
        typography,
      ],
      darkMode: 'class',
    },
    autoprefixer: {},
  },
};

export default config;
