import Image from 'next/image';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { Button, ButtonIcon } from '@/presentation/primitive/component/button/button.presenter';
import { Link } from '@/presentation/primitive/component/link/link.presenter';
import { LiveCharacter } from '@/presentation/primitive/component/live-character/live-character.presenter';
import { Separator } from '@/presentation/primitive/component/sepatator/separator.presenter';
import twMerge from '@/presentation/style/twmerge';
//
// `@/presentation/http-error/component/http-error`からのコピペだけど、仮のLP用だから許して🥲
//

export type TemporalIndexProps = ComponentPropsWithoutRef<'div'>;
export const TemporalIndex: FC<TemporalIndexProps> = ({ className, ...props }) => (
  <div className={twMerge('flex flex-col items-center justify-start p-8 pt-0 gap-6 lg:flex-row lg:justify-center lg:gap-12', className)} {...props}>
    {/* グラデーションをよりきれいなものにするために、`primary-100`とほぼ同等だけれど、より若干明るく鮮やかな色を指定する！ */}
    <div className="fixed top-0 -z-10 flex h-80 w-full origin-top flex-col items-center justify-center bg-gradient-to-b from-[#FEECFE] to-secondary-100/0" />
    <figure className="grid max-w-md flex-none select-none grid-cols-1 grid-rows-1">
      <div className="relative col-span-full row-span-full">
        <Image src="/heroes/concept.png" className="select-none" width={1176} height={1342} alt="OZ at 3Iのロゴ画像" />
      </div>
    </figure>
    <div className="hidden h-60 items-center justify-center lg:flex">
      <Separator orientation="vertical" />
    </div>
    <div className="flex flex-col items-center justify-start gap-6 p-0">
      <div className="text-center font-pixel shadow-neutral-900 drop-shadow-lg ">
        <div className="bg-gradient-to-br bg-clip-text p-0 py-2 font-pixel-latin text-4xl text-transparent gradient-primary md:text-5xl">
          <h1>
            <span>Welcome to</span> <span>✨OZ✨</span>
          </h1>
        </div>
        <div className="px-4">
          <p className="text-lg">
            <br />
            10月22日~23日の第32回茨香祭で開催中！
            <br />
            <span className="my-2 block italic text-primary">
              現地でレクリエーションをして、その結果をサイトが集計しランキングに反映。
              <br />
              たくさん遊んでポイントを貯めて、豪華景品と交換する新感覚的出し物。
              <br />
            </span>
            ポーカー、大富豪、水中コイン落としなどの定番の遊びから、
            <br />
            「XENO」、「ICE RAZE」, 「テストプレイなんてしてないよ」といった目新しい遊びまで取り揃えています！
            <br />
            あなたの参加を <i>1号館 2階 マルチメディア教室</i> にてお待ちしております✨
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-4">
          <Link href="/games" className="drop-shadow-none hover:no-underline">
            <Button className="bg-gradient-to-br gradient-primary">リアルタイムの参加者数をみてみよう</Button>
          </Link>
          <Link href="https://twitter.com/3i_shikosai32" className="drop-shadow-none hover:no-underline">
            <Button outlined>
              <ButtonIcon>
                <FaTwitter className="text-twitter" />
              </ButtonIcon>
              Twitterで最新情報を見る
            </Button>
          </Link>
        </div>
        <LiveCharacter
          images={[
            '/character/fox/base.png',
            '/character/fox/item1.png',
            '/character/fox/item2.png',
            '/character/fox/item3.png',
            '/character/fox/item4.png',
          ]}
          name="きてね！"
        />
      </div>
    </div>
  </div>
);
