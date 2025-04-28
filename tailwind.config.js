module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0f1a',
        card: '#101624',
        accent: '#1de9b6',
        accent2: '#00bfae',
        accent3: '#ffc400',
        accent4: '#ff5252',
        border: '#232b3a',
        text: '#b0b8c1',
        heading: '#fff',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Orbitron', 'Share Tech Mono', 'monospace'],
        body: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
        audiowide: ['"Audiowide"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(16,22,36,0.12)',
      },
      borderRadius: {
        xl: '1rem',
        lg: '0.75rem',
      },
    },
  },
  plugins: [],
}; 