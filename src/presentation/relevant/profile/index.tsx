import type { FC } from 'react';
import CharacterComponets, { CharacterType } from './component/character';
import Congrat from './component/congrat';
import Point from './component/point';
import Ranking, { RankingType } from './component/ranking';
import useConsumablePoint from './hook/useConsumablePoint';
import useFindRanking from './hook/useFindRanking';
import useGetObtainmentStatuses from './hook/useGetObtainment';
import useGetTotalPoint from './hook/useGetTotalPoint'
import useGetUser from './hook/useGetUser';
import useGetUserQuantity from './hook/useGetUserQuantity';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';

const Profile: FC = () => {
	const uid = useCurrentUserIdUseCase();
	const user = useGetUser(uid);
	const rank = useFindRanking(uid);
	const obtainmentStatuses = useGetObtainmentStatuses(uid);
	const consumablePoint = useConsumablePoint(uid);
	const totalpoint = useGetTotalPoint(uid);
	const itemQuantity = obtainmentStatuses?.filter((status) => status.obtained).length;
	const userQuantity = useGetUserQuantity();

	const characterState: CharacterType = {
		name: user.name,
		character: user.character
	}

	const rankingState: RankingType = {
		name: user.name,
		rank,
		character: user.character,
		quantitiy: userQuantity,
		point: totalpoint
	}
	return (
		<>
			<CharacterComponets data={characterState} />
			{
				itemQuantity === 4 && <Congrat />
			}
			<Ranking data={rankingState} />
			<Point point={consumablePoint} />
		</>
	)
}


export default Profile;

