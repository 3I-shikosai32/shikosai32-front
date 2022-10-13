// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { DiProvider, injectable } from 'react-magnetic-di';

import { GameIndex } from './game-index.page';
import { useRealtimeGameAttendersUseCase } from '@/use-case/game/use-realtime-game-attenders.use-case';

type Story = ComponentStoryObj<typeof GameIndex>;

const injectedHooks = [
  injectable(useRealtimeGameAttendersUseCase, () => ({
    attenders: [
      {
        id: '1',
        iconUrl: '/icons/fox.png',
      },
      {
        id: '2',
        iconUrl: '/icons/pudding.png',
      },
    ],
  })),
];

const meta: ComponentMeta<typeof GameIndex> = {
  component: GameIndex,
  decorators: [(story) => <DiProvider use={injectedHooks}>{story()}</DiProvider>],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

export const Default: Story = {};
