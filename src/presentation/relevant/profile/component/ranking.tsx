import type { FC } from "react";
import { RiTwitterLine } from "react-icons/ri";
import { TwitterShareButton } from "react-share"
import type { Character } from "@/infra/graphql/generated/graphql";
import { Button, ButtonIcon } from "@/presentation/primitive/component/button/button.presenter";
import { Icon } from "@/presentation/primitive/component/icon/icon.presenter";
import twMerge from "@/presentation/style/twmerge";

export type RankingType = {
	name: string,
	rank: number,
	character: Character | null,
}
const Ranking: FC<{ data: RankingType }> = ({ data }) => {
	const shareUrl = 'http://github.com';
	const title = 'GitHub';
	return (
		<div className="mx-[15px] mt-[25px] w-[90%]">
			<div className="rounded-3xl bg-white px-[20px] pt-[15px] pb-[5px] shadow-xl">
				<div className="">
					<div className="text-center font-body text-[40px] font-bold">あなたの順位</div>
					<div className="text-center text-sm ">全参加者128人の中で...</div>
					<div className="mb-[50px] flex translate-y-[-20px] justify-center">
						<div className={twMerge("mr-[10px] translate-y-[55px] text-5xl", data.rank === 1 && "text-gold", data.rank === 2 && "text-silver", data.rank === 3 && "text-[#d8b041]")}>#{data.rank}</div>
						<Icon src={`/icons/${data.character?.toLocaleLowerCase()}.png`} className="h-[10px] w-[20px] translate-y-10 p-10" />
					</div>
				</div>
				<div className="my-[10px] flex justify-center">
					<TwitterShareButton
						url={shareUrl}
						title={title}
					>
						<Button className="bg-gradient-to-r from-twitter-g1 to-twitter-g2">
							<ButtonIcon>
								<RiTwitterLine />
							</ButtonIcon>
							<i>
								ツイートする
							</i>
						</Button>
					</TwitterShareButton>
				</div>
			</div>
		</div>
	)
}
export default Ranking