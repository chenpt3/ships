import ScreenManager from '@/components/game_screens/screenManager';
export default function Home() {
  const mgr = new ScreenManager('start');
  return <>{mgr.returnCurrentScreen}</>;
}
