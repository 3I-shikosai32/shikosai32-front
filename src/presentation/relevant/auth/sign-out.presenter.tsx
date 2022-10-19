import Image from 'next/image';
import type { FC } from 'react';
import { Button } from '@/presentation/primitive/component/button/button.presenter';
import { Link } from '@/presentation/primitive/component/link/link.presenter';
import { Separator } from '@/presentation/primitive/component/sepatator/separator.presenter';

//
// TODO: http-errorとほぼ共通のUIを持つので、`priimtive/component`に共通部分を移動する
//

export const SignOut: FC = () => (
  <div className="flex flex-col items-center justify-start gap-6 p-4 pt-0 lg:flex-row lg:justify-center lg:gap-12">
    {/* グラデーションをよりきれいなものにするために、`primary-100`とほぼ同等だけれど、より若干明るく鮮やかな色を指定する！ */}
    <div className="fixed top-0 -z-10 flex h-80 w-full origin-top flex-col items-center justify-center bg-gradient-to-b from-[#FEECFE] to-secondary-100/0" />
    <figure className="grid max-w-md flex-none select-none grid-cols-1 grid-rows-1">
      <div className="relative col-span-full row-span-full">
        <Image src="/heroes/concept.png" className="select-none" width={1176} height={1342} alt="OZ at 3Iのロゴ画像" />
      </div>
      <div className="col-span-full row-span-full flex items-center justify-center">
        <div className="relative z-10 bg-gradient-to-br from-primary-400/75 to-secondary-400/75 p-6 text-center font-pixel-latin text-white backdrop-blur-md">
          May We
          <br />
          Meet Again!
        </div>
      </div>
    </figure>
    <div className="hidden h-60 items-center justify-center lg:flex">
      <Separator orientation="vertical" />
    </div>
    <div className="flex flex-col items-center justify-start gap-6 p-0">
      <div className="text-center font-pixel-latin shadow-neutral-900 drop-shadow-lg ">
        <div className="bg-gradient-to-br bg-clip-text p-0 text-5xl text-transparent gradient-primary">
          <h1>SIGNOUT</h1>
        </div>
        <p>THANK YOU FOR PLAYING!</p>
      </div>
      <span>OZで遊んでくれてありがとう！またお会いしましょう。</span>
      <span className="text-xs text-neutral-500">数秒後に自動でトップページにリダイレクトされます</span>
      <Link href="/" className="drop-shadow-none hover:no-underline">
        <Button outlined>トップページへ戻る</Button>
      </Link>
    </div>
  </div>
);
