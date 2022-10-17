import type { FC } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { TwitterShareButton } from 'react-share';
import { RankedUserItem } from '../ranked-user-item/ranked-user-item.presenter';
import type { RankedUserBio } from '@/model/user/ranked-user-bio.model';
import { Button, ButtonIcon } from '@/presentation/primitive/component/button/button.presenter';
import { Card } from '@/presentation/primitive/component/card/card.presenter';
import type { CardProps } from '@/presentation/primitive/component/card/card.presenter';
import twMerge from '@/presentation/style/twmerge';

export type RankShareCardProps = Omit<CardProps, 'children'> & RankedUserBio;

export const RankShareCard: FC<RankShareCardProps> = ({ id, name, iconUrl, place, point, className, ...props }) => (
  <Card className={twMerge('items-center text-center', className)} {...props}>
    <h2 className="font-branding text-3xl font-bold ">あなたの順位</h2>
    <RankedUserItem forceEmphasizedRank {...{ id, name, iconUrl, place, point }} />
    <TwitterShareButton
      url="https://3i.shikosai.net"
      title={`"${name}"がOZで ✨${place}位✨ の座を手にしました！\nきみはこの ✨${point}Pt✨ の記録を超えることができるかな？OZでチャレンジしてみよう！`}
      related={['3i_shikosai32']}
      hashtags={['茨香祭32', 'shikosai32', 'OZat3I']} // TODO: OZ固有のハッシュタグをちゃんと考える！
    >
      <Button className="bg-gradient-to-br gradient-twitter">
        <ButtonIcon>
          <FaTwitter />
        </ButtonIcon>
        Twitterで共有する
      </Button>
    </TwitterShareButton>
  </Card>
);
