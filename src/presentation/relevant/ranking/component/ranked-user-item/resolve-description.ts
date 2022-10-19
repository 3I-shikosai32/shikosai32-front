import type { RankedUserBio } from '@/model/user/ranked-user-bio.model';

type ResolveDescriptionProps = Pick<RankedUserBio, 'place' | 'point'>;

type Resolver = (point: ResolveDescriptionProps['point']) => string | null;
const firstPlaceResolver: Resolver = (point) => (point ? `${point} Pt を我が物とし栄冠を戴くのは...` : `栄冠を戴くのは...`);
const secondPlaceResolver: Resolver = (point) => (point ? `${point} Pt を勝ち取り、異彩を解き放つ！` : `異彩を解き放つ！`);
const thirdPlaceResolver: Resolver = (point) => (point ? `${point} Pt を集めた遊びの達人` : `遊びの達人`);
const defaultResolver: Resolver = (point) => (point ? `${point} Pt` : null);

export const resolveDescription = ({ place, point }: ResolveDescriptionProps): string | null => {
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
