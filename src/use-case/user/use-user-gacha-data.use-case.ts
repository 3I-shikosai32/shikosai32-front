import { useCallback } from 'react';
import { useFindUserGachaDataQuery } from '@/infra/graphql/generated/graphql';
import type { Item } from '@/model/item/item.model';
import type { UserBio } from '@/model/user/user-bio.model';
import type { UserCharacterStatus } from '@/model/user/user-character-status.model';
import type { User } from '@/model/user/user.model';

export type UseFindUserMetaDataUseCaseProps = Partial<Pick<User, 'id'>>;

export type UseUserGachaDataUseCaseResult = {
  userGachaData:
    | (UserBio &
        Pick<User, 'pullableGachaTimes'> & {
          images: Array<UserCharacterStatus['avaterUrl'] | Item['layerUrl']>;
          itemIconUrls: Array<Item['iconUrl']>;
        })
    | undefined
    | null;
  refetch: () => void;
};

export const useUserGachaDataUseCase = ({ id }: UseFindUserMetaDataUseCaseProps): UseUserGachaDataUseCaseResult => {
  const [{ data, fetching, error }, reexecuteQuery] = useFindUserGachaDataQuery({
    variables: { id: id || '**idが未指定のときはQueryは送られません**' },
    pause: !id,
    requestPolicy: 'cache-and-network',
  });
  const refetch = useCallback(() => reexecuteQuery(), [reexecuteQuery]);
  if (fetching || !data || !data.findUser)
    return {
      userGachaData: undefined,
      refetch,
    };
  if (error)
    return {
      userGachaData: null,
      refetch,
    };
  return {
    userGachaData: {
      id: data.findUser.authId,
      name: data.findUser.name,
      pullableGachaTimes: data.findUser.pullableGachaTimes,
      iconUrl: data.findUser.characterStatus.iconUrl,
      images: [
        data.findUser.characterStatus.avatarUrl,
        ...data.findUser.characterStatus.items.sort((item1, item2) => item1.layer - item2.layer).map((item) => item.layerUrl),
      ],
      itemIconUrls: data.findUser.characterStatus.items.map((item) => item.iconUrl),
    },
    refetch,
  };
};
