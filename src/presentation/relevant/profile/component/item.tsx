import type { FC } from "react";

const Item: FC = () => (
	<div className="mx-[10px] mt-[25px] w-[95%]">
		<div className="flex justify-center rounded-lg bg-white px-[20px] shadow-xl">
			<div>
				<div className="text-center text-3xl ">アイテム獲得状況</div>
				<div className="mt-[10px]">4つの着せ替えアイテムを集めたあなたは、特別に缶バッジを受け取ることが出来ます。景品受取所でこの画面を見せて、缶バッジをもらおう</div>
			</div>
		</div>
	</div>
)
export default Item