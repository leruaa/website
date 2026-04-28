/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginBottom: "0em",
            },
            h2: {
              fontSize: "1.2em",
              marginTop: "1em",
              marginBottom: "0.5em",
            },
            h3: {
              marginTop: "0.8em",
              marginBottom: "0.4em",
            },
            h4: {
              marginTop: "0.6em",
              marginBottom: "0.3em",
            },
            dt: {
              marginTop: "0em",
            },
            ul: {
              marginBottom: "0.5em",
            },
            li: {
              marginTop: "0.2em",
              marginBottom: "0.2em",
            },
          },
        },
      },
    },
  },
};
