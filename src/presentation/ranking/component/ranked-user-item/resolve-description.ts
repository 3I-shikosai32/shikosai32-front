import type { RankedUserItemData } from './ranked-user-item.component';

type ResolveDescriptionProps = Pick<RankedUserItemData, 'place' | 'point'>;

type Resolver = (point: ResolveDescriptionProps['point']) => string;
const firstPlaceResolver: Resolver = (point) => `${point} Pt を我が物とし栄冠を戴くのは...`;
const secondPlaceResolver: Resolver = (point) => `${point} Pt を勝ち取り、異彩を解き放つ！`;
const thirdPlaceResolver: Resolver = (point) => `${point} Pt を集めた遊びの達人`;
const defaultResolver: Resolver = (point) => `${point} Pt`;

export const resolveDescription = ({ place, point }: ResolveDescriptionProps): string => {
  switch (place) {
    case 1:
      return firstPlaceResolver(point);
      break;
    case 2:
      return secondPlaceResolver(point);
      break;
    case 3:
      return thirdPlaceResolver(point);
      break;
    default:
      return defaultResolver(point);
      break;
  }
};
