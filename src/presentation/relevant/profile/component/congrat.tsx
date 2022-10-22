import type { FC } from "react";

const Congrat: FC = () => (
	<div className="mx-[10px] mt-[100px] w-[90%]">
		<div className="flex justify-center rounded-3xl border border-primary bg-primary-100 px-[20px]">
			<div className="font-pixel">
				<div className="text-center text-[54px]">おめでとう!</div>
				<div className="mt-[10px] text-[27px] text-primary-700">4つの着せ替えアイテムを集めたあなたは、特別に缶バッジを受け取ることが出来ます。景品受取所でこの画面を見せて、缶バッジをもらおう</div>
			</div>
		</div>
	</div>
)
export default Congrat;