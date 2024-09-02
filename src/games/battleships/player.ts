import board from '@/games/battleships/gameboard';

class Player {
  board: board;
  type: 'bot' | 'player';

  constructor(type: 'bot' | 'player' = 'player') {
    this.type = type;
    this.board = new board();
  }
}

export default Player;
