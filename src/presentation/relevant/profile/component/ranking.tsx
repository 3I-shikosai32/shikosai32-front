import type { FC } from "react";
import { TwitterShareButton, TwitterIcon } from "react-share"
import type { Character } from "@/infra/graphql/generated/graphql";
import { Icon } from "@/presentation/primitive/component/icon/icon.presenter";
import twMerge from "@/presentation/style/twmerge";

export type RankingType = {
	name: string | undefined,
	rank: number | undefined,
	character: Character | undefined,
	quantitiy: number | undefined
}
const Ranking: FC<{ data: RankingType }> = ({ data }) => {
	const shareUrl = 'http://github.com';
	const title = 'GitHub';
	return (
		<div className="mx-[15px] mt-[25px] w-[90%]">
			<div className="rounded-3xl bg-white px-[20px] pt-[15px] shadow-xl">
				<div>
					<div className="flex translate-y-[-20px] justify-center pt-[30px]">
						<div>
							<div className="text-center font-body text-[40px] font-bold">あなたの順位</div>
							<div className="text-center text-sm ">全参加者{data.quantitiy}人の中で...</div>
							<div className="mb-[30px] flex translate-y-[-20px] justify-center">
								<div className={twMerge("mr-[10px] translate-y-[55px] text-5xl", data.rank === 1 && "text-gold", data.rank === 2 && "text-silver", data.rank === 3 && "text-[#d8b041]")}>#{data.rank}</div>
								<Icon src={`/icons/${data.character?.toLocaleLowerCase()}.png`} className="h-[10px] w-[20px] translate-y-10 p-10" />
								<div className="ml-[10px] translate-y-[40px] text-center">
									<div>57Ptをわが物とし栄冠を載するのは...</div>
									<div className="font-body text-3xl font-bold">{data.name}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-[10px] flex translate-y-[-20px] justify-center">
					<TwitterShareButton
						url={shareUrl}
						title={title}
					>
						<TwitterIcon className="h-[100px]" round />
					</TwitterShareButton>
				</div>
			</div>
		</div>
	)
}
export default Ranking