import Image from 'next/image';

const Top = () => (
  <div>
    <div className="flex justify-center">
      <div>
        <Image src="/logos/header.png" alt="Logo" width={150} height={150} />
      </div>
    </div>
    <div className="flex justify-center">
      <div className='font-branding text-4xl'>Welcom!</div>
    </div>
  </div>
);

export default Top;
