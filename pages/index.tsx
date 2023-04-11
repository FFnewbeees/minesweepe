import Link from "next/link"
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { saveNewGameInfoToStorage, readCurrentGameInfoFromStorage } from '../utils/currentGameInfo'

export default function Index() {

  const [boardHeight, setBoardHeight] = useState(0);
  const [boardWidth, setBoardWidth] = useState(0);
  const [numOfMine, setNumOfMine] = useState(0);

  const router = useRouter()

  useEffect(() => {
    // Check if there is a game in progress
    const hasGameInProgress = readCurrentGameInfoFromStorage()

    if (hasGameInProgress) {
      router.push('/game');
    }

  }, [])

  const handleStartGame = () => {


    const newGameInfo = {
      boardWidth,
      boardHeight,
      numOfMine
    }

    // Store game set up info into LocalStorage to keep state persistent
    saveNewGameInfoToStorage(newGameInfo);
  }

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-10">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Minesweeper
          </h2>
        </div>


        <div className="mb-1">
          <label className="sr-only">
            Height of the board
          </label>
          <input
            id="height"
            name="height"
            type="number"
            required
            className="relative block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Height of the board"
            onChange={(e) => setBoardHeight(Number(e.target.value))}
            value={boardHeight}
          />
        </div>

        <div className="mb-1" >
          <label className="sr-only">
            Width of the board
          </label>
          <input
            id="width"
            name="width"
            type="number"
            required
            className="relative block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Width of the board"
            onChange={(e) => setBoardWidth(Number(e.target.value))}
            value={boardWidth}
          />
        </div>

        <div className="mb-1">
          <label className="sr-only">
            Number of mines
          </label>
          <input
            id="number-of-mines"
            name="number-of-mines"
            type="number"
            required
            className="relative block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Number of mines"
            onChange={(e) => setNumOfMine(Number(e.target.value))}
            value={numOfMine}
          />
        </div>


        <div>
          <button
            type="submit"
            onClick={handleStartGame}
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link href="/game">Start Game</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
