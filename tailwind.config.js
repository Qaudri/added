module.exports = {
  purge:  {
    enabled: false,
    content: [
      './pages/**/*.vue',
      './**/*.html',
      './*.html',
    ],
  },
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-90': '90vh',

      }),
      
      colors: {

        
        cyan: {
          '50': '#ecfeff',
          '100': '#cffafe',
          '200': '#a5f3fc',
          '300': '#67e8f9',
          '400': '#00BDFF',
          '500': '#06b6d4',
          '600': '#0891b2',
        }
        
      },

      zIndex: {
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        '110': 110,
        '120': 120,
        '130': 130,
        '140': 140,
        '150': 150,
        'auto': 'auto',
      },

      display: [
        "group-hover",
      ]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
