import type { FC } from 'react';
import CharacterComponets, { CharacterType } from './component/character';
import Congrat from './component/congrat';
import Item, { ItemType } from './component/item'
import Point from './component/point';
import Ranking, { RankingType } from './component/ranking';
import useGetUser from './hooks/useGetUser';
import { Character } from '@/infra/graphql/generated/graphql';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';



// eslint-disable-next-line @typescript-eslint/naming-convention
const characterState: CharacterType = {
	name: "hoge",
	character: Character.Cat,
}

const rankingState: RankingType = {
	name: "hoge",
	rank: 3,
	character: Character.Cat,
	point: 5,
}

const itemState: ItemType = {
	name: "hoge"
}

const Profile: FC = () => {
	const uid = useCurrentUserIdUseCase()
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

