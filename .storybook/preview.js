import * as NextImage from 'next/image';
// next v12以上の場合の`import`元。参照: https://www.npmjs.com/package/storybook-addon-next-router
import { RouterContext } from 'next/dist/shared/lib/router-context';
import 'tailwindcss/tailwind.css';
import '../src/presentation/style/stylesheet/storybook.scss';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { urqlDecorator } from '@urql/storybook-addon';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

addDecorator(urqlDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      iphone: {
        name: 'iPhone 13',
        styles: {
          width: '390px',
          height: '844px',
        },
      },
    },
  },
};
