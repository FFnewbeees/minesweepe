import React, { useState, useEffect } from 'react';
import { readCurrentGameInfoFromStorage, removeCurrentGameInfoFromStorage } from '../../../../utils/currentGameInfo';
import { useRouter } from 'next/router'

const Board: React.FC = () => {

    const router = useRouter();

    const [currentGameInfo, setCurrentGameInfo] = useState(false);

    useEffect(() => {
        const currentGameInfo = readCurrentGameInfoFromStorage();
        if (currentGameInfo) setCurrentGameInfo(currentGameInfo);
    }, [])

    const generateBoard = () => {
        // Generate an initial board with user inputed mines, width and height.
        const { boardHeight, boardWidth, numOfMine } = currentGameInfo;
    }

    const handleClick = (row: number, col: number) => {
        // Handle the cell click event.
    };

    const handleRightClick = (row: number, col: number, e: React.MouseEvent) => {
        // Handle the cell right-click event.
    };

    const handleRestartGame = () => {
        // The player should also be able to start a new game if they haven’t finished their current game 

        // Remove current game info from LocalStorage
        removeCurrentGameInfoFromStorage();

        // Go back to home for setup again
        router.push('/');
    }

    return (
        <div>
            {/* TODO: create board */}
            <button
                className="text-base font-semibold leading-7 text-indigo-600"
                onClick={handleRestartGame}
            >
                Restart Game
            </button>
        </div>
    );
};

export default Board;