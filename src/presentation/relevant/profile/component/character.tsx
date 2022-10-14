import type { FC } from "react";
import { Icon } from "@/presentation/primitive/component/icon/icon.presenter";

const Character: FC = () => (
	<div className="w-full">
		<div className="flex justify-center bg-gradient-to-r from-character-fox-g1 to-character-fox-g2">
			<Icon src="/icons/cat.png" className="h-[150px] w-[150px] translate-y-10 p-10" />
			<div className="ml-[20px] translate-y-[70px] text-6xl text-white">Dino3161</div>
		</div>
	</div>
)
export default Character