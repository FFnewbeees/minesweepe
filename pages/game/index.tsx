import Link from "next/link";
import Board from "./components/Board";

export default function Game() {

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Game Board
                    </p>
                    <Board />
                    <h1 className="text-base font-semibold leading-7 text-indigo-600">
                        <Link href="/">
                            Back to Home
                        </Link>
                    </h1>
                    <h1 className="text-base font-semibold leading-7 text-indigo-600">
                        Restart Game
                    </h1>
                </div>
            </div >
        </div >
    );
}  