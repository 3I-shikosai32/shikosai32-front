import type { FC } from 'react';
import { FaCrown } from 'react-icons/fa';
import { resolveDescription } from './resolveDescription';
import { UserItem, UserItemIcon, UserItemBio, UserItemName, UserItemDescription } from '@/components/UserItem';
import type { UserItemProps, UserItemData } from '@/components/UserItem';
import twMerge from '@/utils/twmerge';

export type RankedUserItemData = UserItemData & {
  place: number; // 順位
  point: number;
};

export type RankedUserItemProps = Omit<UserItemProps, 'children'> & RankedUserItemData;

export const RankedUserItem: FC<RankedUserItemProps> = ({ id, name, iconUrl, place, point, className, ...props }) => {
  const isTopThree = place === 1 || place === 2 || place === 3;
  const description = resolveDescription({ place, point });
  return (
    <UserItem key={id} className={twMerge('px-3 py-2', isTopThree && 'py-4', className)} {...props}>
      <div
        aria-label="順位"
        className={twMerge(
          'flex flex-row gap-2 justify-start items-center min-w-[2rem] font-branding font-bold mr-2 text-neutral-500',
          place === 1 && 'text-gold text-5xl',
          place === 2 && 'text-silver text-4xl',
          place === 3 && 'text-bronze text-4xl',
        )}
      >
        {isTopThree && <FaCrown className="text-2xl" />}#{place}
      </div>
      <UserItemIcon iconUrl={iconUrl} name={name} />
      <UserItemBio className={twMerge(isTopThree && 'flex-col-reverse')}>
        <UserItemName className="text-neutral-900">{name}</UserItemName>
        <UserItemDescription
          className={twMerge('text-xs font-bold', place === 1 && 'text-gold', place === 2 && 'text-silver', place === 3 && 'text-bronze')}
        >
          {description}
        </UserItemDescription>
      </UserItemBio>
    </UserItem>
  );
};
