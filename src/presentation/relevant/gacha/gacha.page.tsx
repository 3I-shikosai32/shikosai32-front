import Image from 'next/image';
import Router from 'next/router';
import { FC, useCallback, useEffect, useMemo } from 'react';
import { Gacha } from './gacha.presenter';
import { useCurrentUserAuthenticationStatusUseCase } from '@/use-case/user/use-current-user-authentication-status.use-case';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';
import { usePullGachaUseCase } from '@/use-case/user/use-pull-gacha.use-case';
import { useUserGachaDataUseCase } from '@/use-case/user/use-user-gacha-data.use-case';

export const GachaPage: FC = () => {
  const currentUser = useCurrentUserIdUseCase();
  const { hasUserAuthenticated, hasUserRegisteredInfo } = useCurrentUserAuthenticationStatusUseCase();

  useEffect(() => {
    if (hasUserRegisteredInfo === false) {
      Router.push('/');
    }
  }, [hasUserAuthenticated, hasUserRegisteredInfo]);

  const { refetch, userGachaData } = useUserGachaDataUseCase({
    id: currentUser?.id,
  });

  const { lootedItem, pullGacha } = usePullGachaUseCase();

  const onGachaPulledHandler = useCallback(async () => {
    if (userGachaData && userGachaData.pullableGachaTimes > 0) {
      await pullGacha({
        id: currentUser?.id,
      });
      refetch();
    }
  }, [pullGacha, currentUser, refetch, userGachaData]);

  const isLoading = useMemo(() => {
    if (hasUserAuthenticated === undefined || hasUserRegisteredInfo === undefined || userGachaData === undefined) return true;
    return false;
  }, [hasUserAuthenticated, hasUserRegisteredInfo, userGachaData]);

  return isLoading || !userGachaData ? (
    <figure className="grid max-w-md flex-none select-none grid-cols-1 grid-rows-1">
      <div className="relative col-span-full row-span-full">
        <Image src="/heroes/concept.png" className="select-none" width={1176} height={1342} alt="OZ at 3Iのロゴ画像" />
      </div>
      <div className="col-span-full row-span-full flex items-center justify-center">
        <div className="relative z-10 bg-neutral-900/75 p-6 text-center font-pixel-latin text-white backdrop-blur-md">Loading...</div>
      </div>
    </figure>
  ) : (
    <Gacha {...userGachaData} lootedItemIconUrl={lootedItem?.iconUrl} onGachaPulled={onGachaPulledHandler} />
  );
};
