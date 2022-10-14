import Image from "next/image";
import type { FC } from "react";

const Item: FC = () => (
	<div className="mx-[10px] mt-[25px] w-[95%]">
		<div className="flex justify-center rounded-3xl bg-white px-[20px] shadow-xl">
			<div>
				<div className="text-center text-[40px] font-bold">アイテム獲得状況</div>
				<div className="mt-[10px] text-center">あなたが持っているきゅうびさんおアイテムは</div>
				<div className="mt-[30px] text-center font-pixel text-[30px] text-primary-700">4つ獲得済み!</div>
				<div className="flex justify-center ">
					<div className="mb-0 h-[200px] w-[250px] translate-y-[-20px]">
						<Image src="/character/fox/base.png" width={250} height={200} alt="My icon" layout="responsive" />
					</div>
				</div>
				<div className="translate-y-[-50px] text-center text-[30px] font-bold">
					Dino316
				</div>
				<div className="mb-[100px] grid grid-cols-4 gap-4">
					<div className="rounded-3xl bg-gray-200">
						<Image src="/character/fox/item2.png" width={100} height={100} alt="My icon" />
					</div>
					<div className="rounded-3xl bg-gray-200">
						<Image src="/character/fox/item1.png" width={90} height={90} alt="My icon" />
					</div>
					<div className="rounded-3xl bg-gray-200">
						<Image src="/character/fox/item1.png" width={90} height={90} alt="My icon" />
					</div>
					<div className="rounded-3xl bg-gray-200">
						<Image src="/character/fox/item1.png" width={90} height={90} alt="My icon" />
					</div>
				</div>
			</div>
		</div>
	</div>
)
export default Item