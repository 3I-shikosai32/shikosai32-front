import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import { FaCrown } from 'react-icons/fa';
import { resolveDescription } from './resolve-description';
import type { RankedUserBio } from '@/model/user/ranked-user-bio.model';
import {
  UserItem,
  UserItemIcon,
  UserItemBio,
  UserItemName,
  UserItemDescription,
} from '@/presentation/primitive/component/user-item/user-item.presenter';
import type { UserItemProps } from '@/presentation/primitive/component/user-item/user-item.presenter';
import twMerge from '@/presentation/style/twmerge';

export type RankedUserItemProps = Omit<UserItemProps, 'children'> & RankedUserBio;

export const RankedUserItem = forwardRef<HTMLDivElement, RankedUserItemProps>(({ id, name, iconUrl, place, point, className, ...props }, ref) => {
  const isTopThree = place === 1 || place === 2 || place === 3;
  const description = resolveDescription({ place, point });
  return (
    <UserItem ref={ref} key={id} className={twMerge('px-3 py-2', className)} {...props}>
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
});
RankedUserItem.displayName = 'RankedUserItem';

export type MotionRankedUserItemProps = MotionProps & RankedUserItemProps;
export const MotionRankedUserItem = motion(RankedUserItem);
