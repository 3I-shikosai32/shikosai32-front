import type { FC } from "react";
import { RiTwitterLine } from "react-icons/ri";
import { Button, ButtonIcon } from "@/presentation/primitive/component/button/button.presenter";
import { Icon } from "@/presentation/primitive/component/icon/icon.presenter";

const Ranking: FC = () => (
	<div className="mx-[15px] mt-[25px] w-[95%]">
		<div className="rounded-3xl bg-white px-[20px] pt-[15px] pb-[5px] shadow-xl">
			<div className="">
				<div className="text-center font-body text-[40px] font-bold">あなたの順位</div>
				<div className="text-center text-sm ">全参加者128人の中で...</div>
				<div className="mb-[50px] flex translate-y-[-20px] justify-center">
					<div className="mr-[10px] translate-y-[55px] text-5xl text-gold">#1</div>
					<Icon src="/icons/cat.png" className="h-[10px] w-[20px] translate-y-10 p-10" />
					<div className="ml-[10px] translate-y-[60px] text-center">
						<div>57Ptをわが物とし栄冠を載するのは...</div>
						<div className="text-3xl">Dino316</div>
					</div>
				</div>
			</div>
			<div className="my-[10px] flex justify-center">
				<Button className="bg-gradient-to-r from-twitter-g1 to-twitter-g2">
					<ButtonIcon>
						<RiTwitterLine />
					</ButtonIcon>
					<i>
						ツイートする
					</i>
				</Button>
			</div>
		</div>
	</div>
)
export default Ranking