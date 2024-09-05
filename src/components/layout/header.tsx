import { HiMenu } from 'react-icons/hi';
import { HiOutlineCog } from 'react-icons/hi';

interface props {
  toggle: () => void;
}

export default function Header({ toggle }: props) {
  return (
    <header className="flex justify-between items-center p-2 header-footer">
      <HiMenu className="w-6 h-6" onClick={toggle} />
      <h2 className="text-xl">Battleships</h2>
      <HiOutlineCog className="w-6 h-6" />
    </header>
  );
}
