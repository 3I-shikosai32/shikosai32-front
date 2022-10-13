import type { FC } from "react";
import { Button } from "@/presentation/primitive/component/button/button.presenter";

const Point: FC = () => (
	<div className="mx-[10px] mt-[25px] w-[95%] bg-white shadow-xl">
		<div className="flex justify-center rounded-lg px-[20px] ">
			<div>
				<div className="text-center text-3xl ">残り消費Pt</div>
				<div className="text-center text-3xl">
					<span className="text-5xl">34</span>
					<span>pt</span>
				</div>
			</div>
		</div>
		<div className="my-[10px] flex justify-center"><Button className="bg-gradient-to-r from-twitter-g1 to-twitter-g2">景品を交換する</Button></div>
	</div>
)
export default Point