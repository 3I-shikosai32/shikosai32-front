import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import type { Character } from "@/infra/graphql/generated/graphql";
import { Icon } from "@/presentation/primitive/component/icon/icon.presenter";

export type CharacterType = {
	name: string | null,
	character: Character | null
}
const CharacterComponets: FC<{ data: CharacterType }> = ({ data }) => (
	<div className="w-full">
		<div className={twMerge("flex justify-center bg-gradient-to-r", `from-character-${data.character?.toLocaleLowerCase()}-g1`, `from-character-${data.character?.toLocaleLowerCase()}-g2`)}>
			<Icon src={`/icons/${data.character?.toLocaleLowerCase()}.png`} className="h-[150px] w-[150px] translate-y-10 p-10" />
			<div className="ml-[20px] translate-y-[70px] text-6xl text-white">{data.name}</div>
		</div>
	</div>
)

export default CharacterComponets