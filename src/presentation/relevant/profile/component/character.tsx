import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Character } from "@/infra/graphql/generated/graphql";
import { Icon } from "@/presentation/primitive/component/icon/icon.presenter";

export type CharacterType = {
	name: string | undefined,
	character: Character | undefined
};

const CharacterComponets: FC<{ data: CharacterType }> = ({ data }) =>
(
	<div className="w-full">
		<div className={twMerge(" justify-center bg-gradient-to-r h-[300px]",
			data.character === Character.Cat && 'from-character-cat-g1 to-character-cat-g2',
			data.character === Character.Fox && 'from-character-fox-g1 to-character-fox-g2',
			data.character === Character.Goku && 'from-character-goku-g1 to-character-goku-g2',
			data.character === Character.Pudding && 'from-character-pudding-g1 to-character-pudding-g2',
			data.character === Character.Reaper && 'from-character-reaper-g1 to-character-reaper-g2',
			data.character === Character.Tree && 'from-character-tree-g1 to-character-tree-g2',
		)}>
			<div className="flex">
				<Icon src={`/icons/${data.character?.toLocaleLowerCase()}.png`} className="ml-[20px] h-[150px] w-[150px] translate-y-[200px] p-10 md:ml-[60px]" />
				<div className="ml-[20px] translate-y-[230px] text-5xl font-bold text-white">{data.name}</div>
			</div>
		</div>
	</div>
)




export default CharacterComponets;