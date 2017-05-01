var game = function(name1, name2) {
  this.player = [name1, name2];
  this.board = this.initialize();
  this.currentPlayer = this.player[0];
  this.winner = '';
};

game.prototype.initialize = function() {
  //intialize 3 x 3 board
  //and prompt the players to enter their names
  let board = new Array(3).fill([0, 0, 0]);
  console.log('Game starts! ' + this.player[0] + ', ' + this.player[1] + ', get ready!');
  console.log(this.player[0] + 'goes first!');
  return board;
};
//got through the board to see if there are winning patterns
//if there are, declare the winner and end the game;
game.prototype.winDetection = function() {
  //return a boolean
  for(var i = 0; i < 3; i++) {
    if(this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][1] !== 0) {
      if(this.board[i][0] === 'x') {
        this.winner = this.player[0];
      } else {
        this.winner = this.player[1];
      }
      return true;
    }

    if(this.board[0][i] == this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[1][i] !== 0) {
      if(this.board[0][i] === 'x') {
        this.winner = this.player[0];
      } else {
        this.winner = this.player[1];
      }
      return true;
    }
  }
  if(this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0]) {
    if(this.board[0][0] === 'x') {
        this.winner = this.player[0];
      } else {
        this.winner = this.player[1];
      }
      return true;
  }

  if(this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2]) {
    if(this.board[0][2] === 'x') {
        this.winner = this.player[0];
      } else {
        this.winner = this.player[1];
      }
      return true;
  }
  //and define winner here: 
};

game.prototype.gameEnd = function() {
  for(var i = 0; i < this.board.length; i++) {
    for(var j = 0; j < this.board[i].length; j++) {
      if (!this.board[i][j]) {
        return false;
      }
    }
  }
  return true;
};

//symbol is x or o; and then position
game.prototype.playerMove = function(x, y){
  //after each playerMove should detect winning or if the board has been filled. if so declare the result of the game
  //can log the rules for the user
  //after the move, current player will be the next person.
  if(this.currentPlayer === this.player[0]) {
    //add x
    if(this.board[x][y]) {
      console.log('this spot is not available! Plz choose another spot');
    } else {
      this.board[x][y] = 'x';
      this.currentPlayer = this.player[1];
    }
  } else {
    //add o
    if(this.board[x][y]) {
      console.log('this spot is not available! Plz choose another spot');
    } else {
      this.board[x][y] = 'o';
      this.currentPlayer = this.player[0];
    }
  }
  if(this.winDetection()) {
    console.log('Game over! The winner is' + this.winner);
    this.board.initialize();
  }

  if(this.gameEnd()) {
    console.log('Game over. Draw~');
    this.board.initialize();
  }
};

module.exports = game;






























