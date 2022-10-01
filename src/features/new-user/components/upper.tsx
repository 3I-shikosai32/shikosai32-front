import Image from 'next/image';
import type { FC } from 'react';

const Upper: FC = () => (
  <div>
    <div className="flex justify-center">
      <div>
        <Image src="/logos/new-user.png" alt="Logo" width={100} height={180} />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="font-branding text-4xl font-bold">Welcom!</div>
    </div>
  </div>
);

export default Upper;
