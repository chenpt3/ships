interface props {
  isOpen: boolean;
}

export default function SideMenu({ isOpen }: props) {
  return <aside className={`aside ${isOpen ? 'w-40' : 'w-0'}`}>menu</aside>;
}
