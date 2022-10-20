import type { FC } from 'react';
import CharacterComponets, { CharacterType } from './component/character';
import Congrat from './component/congrat';
import Item from './component/item'
import Point from './component/point';
import Ranking from './component/ranking';
import useGetUser from './hooks/useGetUser';
import { Character } from '@/infra/graphql/generated/graphql';
import { Layout } from '@/presentation/layout/layout.container';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';

// eslint-disable-next-line @typescript-eslint/naming-convention
const character_state: CharacterType = {
	name: "hoge",
	character: Character.Cat,
}

const Profile: FC = () => {
	const uid = useCurrentUserIdUseCase()
	const { name, character, fetching, error } = useGetUser(uid);
	return (
		<Layout>
			<CharacterComponets data={character_state}/>
			<Congrat />
			<Ranking />
			<Point />
			<Item />
		</Layout>
	)
}


export default Profile;

