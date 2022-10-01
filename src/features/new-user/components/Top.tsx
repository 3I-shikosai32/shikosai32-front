import Image from 'next/image';

const Top = () => (
  <div>
    <div className="flex justify-center">
      <div>
        <Image src="/logos/new-user.png" alt="Logo" width={100} height={150} />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="font-branding text-4xl font-bold">Welcom!</div>
    </div>
  </div>
);

export default Top;
