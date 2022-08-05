module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-header': "url('/background-header.svg')",
        'sidebar-background': "url('/src/assessts/images/sidebar-bg.png')",
      },
      colors: {
        white: '#FFFFFF',
        gray: '#666666',
        dark: '#333333',
        black: '#000000',

        primary: '#077997',
        'blue-light-500': '#95e8f7',
        'blue-light-300': '#E0F4FA',

        'pooch-blue-1': '#ebfdff',
        'pooch-blue-2': '#077997',
        'pooch-blue-3': '#e7f0fd',
        'pooch-blue-4': '#f3f8ff',
        'pooch-blue-5': '#85d8e7',
        'pooch-blue-6': '#95e8f7',
        'pooch-gray-1': '#666666',
        'pooch-gray-2': '#909294',
        'pooch-black-1': '#333333',
        'toggle-green': '#c5e9a0',
        'disabled-gray': '#abafb4',
        'calendar-gray': '#f4f4f4',
      },
      boxShadow: {
        primary: '0px 15px 20px #00a3ce26 !important',
      },
      fontFamily: {
        'Museo-Sans-Rounded-300': ['MuseoSansRounded-300'],
        'Museo-Sans-Rounded-500': ['MuseoSansRounded-500'],
        'Museo-Sans-Rounded-700': ['MuseoSansRounded-700'],
        'Museo-Sans-Rounded-900': ['MuseoSansRounded-900'],
      },
      spacing: {
        '103': '30rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
