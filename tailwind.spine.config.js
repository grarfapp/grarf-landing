/** Tailwind scan — Desktop Games Spine components + webapp spine mount */
export default {
  content: [
    "../grarf/desktop/src/**/*.{tsx,ts}",
    "./webapp/spine-entry.tsx",
  ],
  theme: {
    extend: {
      colors: {
        panel: "#050808",
        panel2: "#091010",
        line: "#1b2b2b",
        redsys: "#ff3b30",
        ambersys: "#ffb020",
        greensys: "#37ff8b",
        cyansys: "#56f7ff",
        textdim: "#6f8585",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      keyframes: {
        "live-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(255, 59, 48, 0.35)",
            opacity: "1",
          },
          "50%": {
            boxShadow: "0 0 14px 2px rgba(255, 59, 48, 0.45)",
            opacity: "0.92",
          },
        },
      },
      animation: {
        "live-pulse": "live-pulse 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
