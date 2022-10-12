import Image from 'next/image';
import type { FC, ComponentPropsWithoutRef } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { MdFestival } from 'react-icons/md';
import { RiGlobalFill } from 'react-icons/ri';
import { Link, LinkIcon } from '@/presentation/primitive/component/link/link.presenter';
import twMerge from '@/presentation/style/twmerge';

export type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'children'>;

export const Footer: FC<FooterProps> = ({ className, ...props }) => (
  <footer className={twMerge('bg-white w-full flex flex-col justify-center items-center p-6', className)} {...props}>
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-end md:gap-10">
      <figure className="min-h-16 relative w-48">
        <Image src="/logos/footer.png" layout="responsive" width={1522} height={999} alt="OZ at 3Iのロゴ画像" />
      </figure>
      <ul className="flex flex-col items-start justify-end gap-1">
        <li>
          <Link href="https://twitter.com/3i_shikosai32" className="gap-2 font-normal text-neutral-400 drop-shadow-none">
            <LinkIcon className="text-neutral-200">
              <FaTwitter />
            </LinkIcon>
            Twitter
          </Link>
        </li>
        <li>
          <Link href="https://www.shikosai.net/" className="gap-2 font-normal text-neutral-400 drop-shadow-none">
            <LinkIcon className="text-neutral-200">
              <MdFestival />
            </LinkIcon>
            Shikosai 32
          </Link>
        </li>
        <li>
          <Link href="https://www.ibaraki-ct.ac.jp/" className="gap-2 font-normal text-neutral-400 drop-shadow-none">
            <LinkIcon className="text-neutral-200">
              <RiGlobalFill />
            </LinkIcon>
            NITIC
          </Link>
        </li>
      </ul>
    </div>
    <p className="mt-4  text-center text-xs text-neutral-300">
      <small>
        Ideas inspired by OZ in{' '}
        <Link className="drop-shadow-none" href="https://s-wars.jp/">
          Summer Wars
        </Link>
        ,
        <br />
        Copyright © 2022 - NITIC 3I Devs Partial* Rights Reserved except the OZ* derivatives.
      </small>
    </p>
  </footer>
);
