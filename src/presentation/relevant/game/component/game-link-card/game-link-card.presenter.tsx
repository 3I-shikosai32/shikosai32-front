import type { FC, ComponentPropsWithoutRef, ReactNode } from 'react';
import type { UserBio } from '@/model/user/user-bio.model';
import { Icon } from '@/presentation/primitive/component/icon/icon.presenter';
import { MotionLink } from '@/presentation/primitive/component/link/link.presenter';
import twMerge from '@/presentation/style/twmerge';

// 3i-shikosai32/shikosai32-server
// src/module/user/domain/model/game-attenders.model.ts を参照

export type GameLinkCardProps = Omit<ComponentPropsWithoutRef<typeof MotionLink>, 'children'> & {
  children: ReactNode; // リンクカードの名前として表示される子要素を指定
  maxAttenders: number;
  attenders: Array<Pick<UserBio, 'iconUrl' | 'id'>>;
};

export const GameLinkCard: FC<GameLinkCardProps> = ({ children, maxAttenders, attenders, className, ...props }) => (
  <MotionLink
    whileHover={{
      scale: 1.025,
      transition: { duration: 0.1 },
    }}
    whileTap={{ scale: 0.975 }}
    className={twMerge(
      'group hover:shadow-z24 duration-100 p-8 rounded-base shadow-z16 items-start drop-shadow-none hover:no-underline flex flex-col justify-center bg-gradient-to-br gradient-primary relative gap-0 h-40 w-full max-w-sm text-white',
      className,
    )}
    {...props}
  >
    <p className="fixed top-4 right-4 text-right font-normal">{`(${attenders.length}/${maxAttenders})`}</p>
    <h2 className="text-4xl">{children}</h2>
    <div className="fixed bottom-4 right-4 flex flex-1 flex-row-reverse items-end justify-start gap-0">
      {attenders.map(({ iconUrl, id }) => (
        <Icon key={id} src={iconUrl} className="ml-[-0.5rem] h-6" />
      ))}
    </div>
  </MotionLink>
);
