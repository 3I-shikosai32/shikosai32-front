import Image from "next/image";
import type { FC } from "react";
import { useEffect, useState } from 'react'
import type { GetObtainmentStatusesResult } from '../hook/useGetObtainment';
import { Character } from "@/infra/graphql/generated/graphql";

export type ItemType = {
	name: string | undefined,
	url: string | undefined,
	quantity: number | undefined,
	obtainmentStatuses: GetObtainmentStatusesResult,
	character: Character | undefined,
};

const Item: FC<{ data: ItemType }> = ({ data }) => {
	const [name, setName] = useState<string>("");
	useEffect(() => {
		switch (data.character) {
			case Character.Fox:
				setName('きゅうびさん');
				break;
			case Character.Cat:
				setName('ねこさん');
				break;
			case Character.Pudding:
				setName('あらもーちゃん');
				break;
			case Character.Reaper:
				setName('りっぱーさん');
				break;
			case Character.Tree:
				setName('おおもりさん');
				break;
			case Character.Goku:
				setName('ごくうさん');
				break;
			default:
				break;
		}
	}, [data.character]);
	return (
		<div className="mx-[10px] mt-[25px] mb-[50px] w-[90%]">
			<div className="flex justify-center rounded-3xl bg-white px-[20px] shadow-xl">
				<div>
					<div className="text-center text-[40px] font-bold">アイテム獲得状況</div>
					<div className="mt-[10px] text-center">あなたが持っている{name}のアイテムは</div>
					<div className="mt-[30px] text-center font-pixel text-[30px] text-primary-700">{data.quantity ? data.quantity : 0}つ獲得済み!</div>
					<div className="flex justify-center ">
						<div className="mb-0 h-[200px] w-[250px] translate-y-[-20px]">
							<Image src={data.url ? data.url : ""} width={250} height={200} alt="My icon" layout="responsive" />
						</div>
					</div>
					<div className="translate-y-[-50px] text-center text-[30px] font-bold">
						{data.name}
					</div>
					<div className="mb-[30px] grid grid-cols-4 gap-6">
						{
							data.obtainmentStatuses?.map((status, index) => (
								// eslint-disable-next-line react/no-array-index-key
								<div key={index}>
									<Image src={status.iconUrl} width={100} height={100} alt="character item" layout="responsive" />
								</div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}


export default Item;