import type { FC } from 'react';
import { useEffect, useState } from 'react'
import { RiTwitterLine } from 'react-icons/ri';
import { TwitterShareButton } from 'react-share';
import type { Character } from '@/infra/graphql/generated/graphql';
import { Icon } from '@/presentation/primitive/component/icon/icon.presenter';
import twMerge from '@/presentation/style/twmerge';

export type RankingType = {
	name: string | undefined,
	rank: number | undefined,
	character: Character | undefined,
	quantitiy: number | undefined,
	point: number | undefined,
};

const Ranking: FC<{ data: RankingType }> = ({ data }) => {
	const [point, setPoint] = useState<number | undefined>(0);
	const [quantitiy, setQuantity] = useState<number | undefined>(0);
	const shareUrl = 'https://3i.shikosai.net/';
	const title = 'ぜひ3Iのブースにきてね';
	useEffect(() => {
		setPoint(data.point);
		setQuantity(data.quantitiy);
	}, [data.point, data.quantitiy]);
	return (
		<div className='mx-[15px] mt-[60px] w-[90%]'>
			<div className='rounded-3xl bg-white px-[20px] pt-[15px] shadow-xl'>
				<div>
					<div className='flex translate-y-[-20px] justify-center pt-[30px]'>
						<div>
							<div className='text-center font-body text-[40px] font-bold'>あなたの順位</div>
							<div className='text-center text-sm '>全参加者{quantitiy}人の中で...</div>
							<div className='mb-[30px] flex translate-y-[-20px] justify-center'>
								<div className={twMerge('mr-[15px] translate-y-[55px] text-5xl', data.rank === 1 && 'text-gold', data.rank === 2 && 'text-silver', data.rank === 3 && 'text-[#d8b041]')}>#{data.rank}</div>
								<Icon src={`/icons/${data.character?.toLocaleLowerCase()}.png`} className='h-[10px] w-[20px] translate-y-10 p-10' />
								<div className='ml-[20px] translate-y-[40px] text-start'>
									<div>
										<span>{point}</span>
										<span>Ptをわが物とし栄冠を載するのは...</span>
									</div>
									<div className='font-body text-3xl font-bold'>{data.name}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='mb-[10px] flex translate-y-[-20px] justify-center'>
					<TwitterShareButton
						url={shareUrl}
						title={title}
					>
						<div className='my-[20px] flex w-[200px] rounded-full bg-gradient-to-r from-twitter-g1 to-twitter-g2 py-[7px] font-body text-[20px] font-bold text-white shadow-xl transition duration-300 hover:scale-105 active:scale-95'>
							<div className='translate-x-[15px]'>
								<RiTwitterLine size={30} />
							</div>
							<div className='translate-x-[25px]'>ツイートする</div>
						</div>
					</TwitterShareButton>
				</div>
			</div>
		</div>
	)
}
export default Ranking;