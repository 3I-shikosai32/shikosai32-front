import type { FC } from 'react';
import Character from './component/character';
import Congrat from './component/congrat';
import Item from './component/item'
import Point from './component/point';
import Ranking from './component/ranking';
import { Layout } from '@/presentation/layout/layout.container';

const Profile: FC = () => (
	<Layout>
		<Character />
		<Congrat />
		<Ranking />
		<Point />
		<Item />
	</Layout>
)

export default Profile;
