import Image from 'next/image';
import type { FC, ComponentPropsWithoutRef } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { MdFestival } from 'react-icons/md';
import { RiGlobalFill } from 'react-icons/ri';
import { Link, LinkIcon } from '@/components/Link';
import twMerge from '@/libs/twmerge';

export type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'children'>;

export const Footer: FC<FooterProps> = ({ className, ...props }) => (
  <footer className={twMerge('bg-white w-full flex flex-col justify-center items-center p-6', className)} {...props}>
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-end md:gap-10">
      <figure className="min-h-16 relative w-48">
        <Image src="/logos/footer.png" layout="responsive" width={1522} height={999} alt="OZ at 3Iのロゴ画像" />
      </figure>
      <ul className="flex flex-col items-start justify-end gap-1">
        <li>
          <Link href="https://example.com" className="gap-2 font-normal text-neutral-400 drop-shadow-none">
            <LinkIcon className="text-neutral-200">
              <FaTwitter />
            </LinkIcon>
            Twitter
          </Link>
        </li>
        <li>
          <Link href="https://example.com" className="gap-2 font-normal text-neutral-400 drop-shadow-none">
            <LinkIcon className="text-neutral-200">
              <MdFestival />
            </LinkIcon>
            Shikosai 32
          </Link>
        </li>
        <li>
          <Link href="https://example.com" className="gap-2 font-normal text-neutral-400 drop-shadow-none">
            <LinkIcon className="text-neutral-200">
              <RiGlobalFill />
            </LinkIcon>
            NITIC
          </Link>
        </li>
      </ul>
    </div>
    <p className="mt-4  text-center text-xs text-neutral-300">
      <small>Copyright © 2022 - NITIC 3I Shikosai32 Devs All Rights Reserved.</small>
    </p>
  </footer>
);