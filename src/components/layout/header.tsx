import { HiMenu } from 'react-icons/hi';
import { HiOutlineCog } from 'react-icons/hi';

export default function Header() {
  return (
    <header className="bg-sky-200 dark:bg-slate-700 flex justify-between items-center p-2">
      <HiMenu className="w-6 h-6" />
      <h2 className="text-xl">Battleships</h2>
      <HiOutlineCog className="w-6 h-6" />
    </header>
  );
}
