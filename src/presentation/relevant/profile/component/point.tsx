/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import type { FC } from "react";
import { BsFillGiftFill } from 'react-icons/bs';

const Point: FC<{ point: number | null | undefined }> = ({ point }) => {
	const router = useRouter();
	return (
		<div className='mx-[10px] mt-[25px] w-[90%] rounded-3xl bg-white pt-[20px] shadow-xl'>
			<div className='flex justify-center px-[20px]'>
				<div>
					<div className='text-center text-[40px] font-bold'>残り消費Pt</div>
					<div className='text-center text-3xl'>
						<span className='text-5xl'>{point || 0}pt</span>
						<span>pt</span>
					</div>
				</div>
			</div>
			<div className='my-[10px] flex justify-center'>
				<div role='button' onClick={() => router.push("/exchange")} className='my-[20px] flex w-[200px] rounded-full bg-gradient-to-r from-[#E07272] to-[#FFB661] py-[7px] font-body text-[20px] font-bold text-white shadow-xl transition duration-300 hover:scale-105 active:scale-95'>
					<div className='translate-x-[15px]'>
						<BsFillGiftFill size={30} />
					</div>
					<div className='translate-x-[25px]'>景品交換する</div>
				</div>
			</div>
		</div>
	)
}

export default Point;