import type { FC } from 'react';
import  {BsArrowLeftCircle} from 'react-icons/bs'


const LayoutOnlyWithHeader: FC = () => (
  <main className="w-full bg-white p-1 shadow-lg">
	<BsArrowLeftCircle size={15}/>
  </main>
);

export default LayoutOnlyWithHeader;
