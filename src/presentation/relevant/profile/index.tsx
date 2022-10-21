import type { FC } from 'react';
import CharacterComponets, { CharacterType } from './component/character';
import Congrat from './component/congrat';
import Item, { ItemType } from './component/item'
import Point from './component/point';
import Ranking, { RankingType } from './component/ranking';
import useFindRanking from './hooks/useFindRanking';
import useGetUser from './hooks/useGetUser';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';


const Profile: FC = () => {
	const uid = useCurrentUserIdUseCase()
	const { name, character, url } = useGetUser(uid);
	const { rank } = useFindRanking(uid);

	const characterState: CharacterType = {
		name,
		character
	}

	const rankingState: RankingType = {
		name,
		rank,
		character
	}

	const itemState: ItemType = {
		name,
		url
	}
	return (
		<>
			<CharacterComponets data={characterState} />
			<Congrat />
			<Ranking data={rankingState} />
			<Point />
			<Item data={itemState} />
		</>
	)
}


export default Profile;

