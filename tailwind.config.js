/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const config = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Inter', '"Noto Sans JP"', 'sans-serif'],
      pixel: ['"Press Start 2P"', 'DotGothic16', 'cursive'],
      branding: ['Oxygen', '"Noto Sans JP"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          900: '#5d0f38',
          800: '#821550',
          700: '#a81e69',
          600: '#d02883',
          500: '#f23099',
          DEFAULT: '#f23099',
          400: '#f777b1',
          300: '#f9a2c6',
          200: '#f8c9db',
          100: '#fbedf2',
          g1: '#FE53E3', // グラデーションの始点用
          g2: '#EA2252', // グラデーションの終点用
        },
        secondary: {
          900: '#213435',
          800: '#314a4b',
          700: '#3b6264',
          600: '#52797b',
          500: '#6a9293',
          400: '#82abac',
          300: '#9bc4c6',
          200: '#b4dee0',
          100: '#e5feff',
          DEFAULT: '#e5feff',
        },
        neutral: {
          900: '#080f16',
          800: '#434648',
          700: '#585c60',
          600: '#6e7379',
          500: '#858b92',
          DEFAULT: '#858b92',
          400: '#9fa3a9',
          300: '#babdc0',
          200: '#d5d6d8',
          100: '#f0f1f2',
        },
        success: {
          900: '#01390f',
          800: '#005118',
          700: '#006b22',
          600: '#01852c',
          500: '#01a037',
          DEFAULT: '#01a037',
          400: '#02bc42',
          300: '#01d94d',
          200: '#40fb68',
          100: '#d0fccf',
        },
        warning: {
          900: '#3f2d00',
          800: '#5a4100',
          700: '#755500',
          600: '#926b00',
          500: '#af8100',
          DEFAULT: '#af8100',
          400: '#ce9900',
          300: '#eeb101',
          200: '#ffbf18',
          100: '#fcefd9',
        },
        error: {
          900: '#620b14',
          800: '#890e1f',
          700: '#b2152a',
          600: '#db1d37',
          500: '#f9404b',
          DEFAULT: '#f9404b',
          400: '#fa7b74',
          300: '#fba59d',
          200: '#facac5',
          100: '#fbeeec',
        },
        info: {
          900: '#0f2e6b',
          800: '#134397',
          700: '#1c58c2',
          600: '#246ae7',
          500: '#6186f8',
          DEFAULT: '#6186f8',
          400: '#8c9ff9',
          300: '#afb9fb',
          200: '#d0d4f9',
          100: '#eff0fb',
        },
        white: '#ffffff',
        key: '#080f16', // 文字の色
        gold: '#f2a612',
        silver: '#96baef',
        bronze: '#e17648',
        twitter: {
          DEFAULT: '#1DA1F2',
          g1: '#1D7FF2',
          g2: '#1DBFF2',
        },
        window: {
          g1: '#F1F1F6',
          g2: '#DEDEEF',
        },
        hamburger: {
          g1: '#FE53E3',
          g2: '#EA2252',
        },
        ranking: {
          g1: '#F35D66',
          g2: '#D84AD2',
        },
        exchange: {
          g1: '#1D80F2',
          DEFAULT: '#8E7898',
          g2: '#EB623C',
        },
        game: {
          g1: '#845DF3',
          g2: '#D86C4A',
          coindrop: {
            g1: '#56E1FF',
            g2: '#2E67D6',
          },
          xeno: {
            g1: '#DE5CFF',
            g2: '#CB3598',
          },
          iceraze: {
            g1: '#5CFFE2',
            g2: '#35B0CB',
          },
          president: {
            // 大富豪の英語訳に決定的なものが見つからなかったので、ローマ字表記を使用する
            g1: '#FF5C5C',
            g2: '#CB8F35',
          },
          poker: {
            g1: '#FF5CA1',
            g2: '#CB3535',
          },
          playtest: {
            // wedidnttestplayだと長過ぎるので...
            g1: '#B5B5C9',
            g2: '#333356',
          },
        },
        character: {
          fox: {
            g1: '#F3A55D',
            g2: '#D84A4A',
          },
          goku: {
            g1: '#F35D5D',
            g2: '#D84A9F',
          },
          tree: {
            g1: '#5DF36C',
            g2: '#D89F4A',
          },
          pudding: {
            g1: '#F3E45D',
            g2: '#D87D4A',
          },
          cat: {
            g1: '#F3A55D',
            g2: '#804AD8',
          },
          reaper: {
            g1: '#9F5DF3',
            g2: '#D84A4A',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    // グラデーションの始点と終点の色を同時に指定するユーティリティクラス.gradient-*を追加する
    plugin(({ addUtilities }) => {
      const gradientColorNames = [
        // 追加するもととなる色の名前
        'primary',
        'twitter',
        'hamburger',
        'window',
        'ranking',
        'exchange',
        'game',
        'character-fox',
        'character-tree',
        'character-pudding',
        'character-cat',
        'character-reaper',
        'character-goku',
        'game-xeno',
        'game-iceraze',
        'game-daifugo',
        'game-poker',
        'game-notestplay',
        'game-coindrop',
      ];
      const resolveColorObjectByName = (name) => name.split('-').reduce((acc, current) => acc[current] || undefined, config.theme.extend.colors);
      const newUtilities = Object.fromEntries(
        gradientColorNames
          .map((name) => {
            return { name, obj: resolveColorObjectByName(name) };
          })
          .filter(({ obj }) => !!obj)
          .map(({ name, obj }) => [
            `.gradient-${name}`,
            {
              '--tw-gradient-from': `${obj.g1}`,
              '--tw-gradient-to': `${obj.g2}`,
              '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to)`,
            },
          ]),
      );
      addUtilities(newUtilities, {
        variants: ['responsive', 'hover', 'focus', 'active', 'disabled', 'visited'],
      });
    }),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        shikosai32: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#f23099',
          secondary: '#e5feff',
          background: '#e5feff',
          info: '#6186f8',
          success: '#01a037',
          warning: '#af8100',
          error: '#f9404b',
          '--rounded-box': '1.5rem', // Figmaでの指定 25px に近い 1.5rem (rounded-3xl) を指定
          '--rounded-btn': '1.5rem',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: 'daisy-',
  },
};

module.exports = config;
