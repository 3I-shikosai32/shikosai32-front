import Image from "next/image";
import type { FC } from "react";

export type ItemType = {
	name: string | undefined,
	url: string | undefined
}

const Item: FC<{ data: ItemType }> = ({ data }) => (
	<div className="mx-[10px] mt-[25px] mb-[50px] w-[90%]">
		<div className="flex justify-center rounded-3xl bg-white px-[20px] shadow-xl">
			<div>
				<div className="text-center text-[40px] font-bold">アイテム獲得状況</div>
				<div className="mt-[10px] text-center">あなたが持っているきゅうびさんおアイテムは</div>
				<div className="mt-[30px] text-center font-pixel text-[30px] text-primary-700">4つ獲得済み!</div>
				<div className="flex justify-center ">
					<div className="mb-0 h-[200px] w-[250px] translate-y-[-20px]">
						<Image src={data.url ? data.url : ""} width={250} height={200} alt="My icon" layout="responsive" />
					</div>
				</div>
				<div className="translate-y-[-50px] text-center text-[30px] font-bold">
					{data.name}
				</div>
			</div>
		</div>
	</div>
)
export default Item