module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-header': "url('/background-header.svg')"
      },
      colors: {
        'pooch-blue-1': '#ebfdff',
        'pooch-blue-2': '#077997',
        'pooch-blue-3': '#e7f0fd',
        'pooch-blue-4': '#f3f8ff',
        'pooch-blue-5': '#85d8e7',
        'pooch-gray-1': '#666666',
        'pooch-gray-2': '#909294',
        'pooch-black-1': '#333333'
        
      },
      fontFamily: {
        'Museo-Sans-Rounded-300': ['MuseoSansRounded-300'],
        'Museo-Sans-Rounded-500': ['MuseoSansRounded-500'],
        'Museo-Sans-Rounded-700': ['MuseoSansRounded-700'],
        'Museo-Sans-Rounded-900': ['MuseoSansRounded-900'],
      },
    },
  },
  plugins: [],
}
