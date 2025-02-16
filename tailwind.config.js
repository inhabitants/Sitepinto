module.exports = {
  theme: {
    extend: {
      // ... outras configurações ...
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'html': { 
          scrollBehavior: 'smooth',
          scrollPaddingTop: '100px',
        },
      })
    },
  ],
} 