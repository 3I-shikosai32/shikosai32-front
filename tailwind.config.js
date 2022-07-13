module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fef08a',
        secondary: '#22d3ee',
        accent: '#fb7185',
        neutral: '#374151',
        base: '#FFFFFF',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#F87272',
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        disappear: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0)' },
        },
      },
      animation: {
        appear: 'appear 0.3s',
        disappear: 'disappear 0.3s',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        'shikosai32': {
          primary: '#fef08a',
          secondary: '#22d3ee',
          accent: '#fb7185',
          neutral: '#374151',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      'dark',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: 'daisy-',
    darkTheme: 'dark',
  },
};
