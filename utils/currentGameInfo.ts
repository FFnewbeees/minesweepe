export const readCurrentGameInfoFromStorage = () => {
  // Read from localStorage to see if a current game is in progress
  let gameInfo: any = false;

  if (localStorage && localStorage.getItem("minesweeper-game-info")) {
    gameInfo = JSON.parse(
      localStorage.getItem("minesweeper-game-info") as string
    );
  }

  return gameInfo;
};

export const removeCurrentGameInfoFromStorage = () => {
  // Remove gameInfo from localStorage if a game is finished
  if (localStorage && localStorage.getItem("minesweeper-game-info")) {
    localStorage.removeItem("minesweeper-game-info");
  }
};

export const saveNewGameInfoToStorage = (newGameInfo: any) => {
  // The game state should be persistent on the client so refreshing the page or navigating
  // away / back does not lose the current game
  localStorage.setItem("minesweeper-game-info", JSON.stringify(newGameInfo));
};
