module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a1623',
        card: '#101c2c',
        accent: '#1a2e4a',
        accent2: '#2b4a7a',
        accent3: '#fff86b',
        accent4: '#f8ff7a',
        border: '#22304a',
        text: '#eaeaea',
        heading: '#fff',
        primary: '#fff86b',
        secondary: '#2b4a7a',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Orbitron', 'Share Tech Mono', 'monospace'],
        body: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
        audiowide: ['"Audiowide"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(26,46,74,0.18)',
        glow: '0 0 32px 0 #1a2e4a',
      },
      borderRadius: {
        xl: '1rem',
        lg: '0.75rem',
      },
    },
  },
  plugins: [],
}; 