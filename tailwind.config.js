export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 25px 80px rgba(16, 185, 129, 0.15)"
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(16, 185, 129, 0.2), transparent 35%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.2), transparent 30%)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
