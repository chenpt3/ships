import StartScreen from './start';
import TransitionScreen from './transition';
import Player1Setup from './player1Setup';
import Player2Setup from './player2Setup';
import Player1Board from './player1Board';
import Player2Board from './player2Board';
import End from './end';

export default class ScreenManager {
  currentScreen: string;

  constructor(current: string) {
    this.currentScreen = '';
    this.returnCurrentScreen(current);
  }

  returnCurrentScreen(current: string) {
    switch (current) {
      case 'start':
        this.currentScreen = current;
        return StartScreen;
      case 'transition':
        this.currentScreen = current;
        return TransitionScreen;
      case 'player1setup':
        this.currentScreen = current;
        return Player1Setup;
      case 'player2setup':
        this.currentScreen = current;
        return Player2Setup;
      case 'player1board':
        this.currentScreen = current;
        return Player1Board;
      case 'player2board':
        this.currentScreen = current;
        return Player2Board;
      case 'end':
        this.currentScreen = current;
        return End;
      default:
        return;
    }
  }
}
