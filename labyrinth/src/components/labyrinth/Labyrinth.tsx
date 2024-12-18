import { useContext, useEffect, useState } from 'react'
import './Labyrinth.css'
import { addPlayer, updateLabyrinth } from '../../services/LabyrinthService'
import { WinModal } from './WinModal'
import { getClassName } from '../../util/Utils'
import NameContext from '../../context/NameContext'
import { usePlayer } from '../../hooks/usePlayer'

interface LabyrinthProps {
    level: string[][]
}

export function LabyrinthComponent({ level }: LabyrinthProps) {
    const {players} = usePlayer();
    const {name} = useContext(NameContext);
    const [labyrinth, setLabyrinth] = useState<string[][]>(level);
    const [endGame, setEndGame] = useState<boolean>();
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [playerPosition, setPlayerPosition] = useState<[number, number]>(() => {
        // Zoek de startpositie van de speler
        for (let row = 0; row < level.length; row++) {
            for (let col = 0; col < level[row].length; col++) {
                if (level[row][col] === 'PL') {
                    return [row, col]
                }
            }
        }
        return [1, 1] // default player position
    });

    const resetPlayerToStart = () => {
        const startRow = 1
        const startCol = 1

        // Update het labyrinth om de speler naar de startpositie te verplaatsen
        const resetLabyrinth = labyrinth.map((row, rowIndex) =>
            row.map((cell, colIndex) =>
                rowIndex === playerPosition[0] && colIndex === playerPosition[1]
                    ? 'E' // Oude positie wordt leeg
                    : rowIndex === startRow && colIndex === startCol
                      ? 'PL' // Nieuwe startpositie
                      : cell
            )
        )

        setLabyrinth(resetLabyrinth)
        setPlayerPosition([startRow, startCol])

        // Update het JSON bestand
        updateLabyrinth(resetLabyrinth)
    }

    const handleEndTimer = () => {
        addPlayer(minutes.toString(), seconds.toString(), name, players!.length + 1);
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
      };

    const movePlayer = (direction: string) => {
        const [currentRow, currentCol] = playerPosition
        let newRow = currentRow
        let newCol = currentCol

        switch (direction) {
            case 'ArrowUp':
                newRow = currentRow - 1
                break
            case 'ArrowDown':
                newRow = currentRow + 1
                break
            case 'ArrowLeft':
                newCol = currentCol - 1
                break
            case 'ArrowRight':
                newCol = currentCol + 1
                break
            default:
                return
        }
        if (newRow >= 0 && newRow < labyrinth.length && newCol >= 0 && newCol < labyrinth[newRow].length) {
            if (labyrinth[newRow][newCol] === 'W') {
                resetPlayerToStart()
            } else if (labyrinth[newRow][newCol] === 'P') {
            } else if (labyrinth[newRow][newCol] === 'X') {
                setEndGame(true);
                resetPlayerToStart();
                handleEndTimer();
            } else {
                // update labyrinth array
                const updatedLabyrinth = labyrinth.map((row, rowIndex) =>
                    row.map((cell, colIndex) =>
                        rowIndex === currentRow && colIndex === currentCol
                            ? 'E' // old position becomes E
                            : rowIndex === newRow && colIndex === newCol
                              ? 'PL' // new position becoms PL
                              : cell
                    )
                )

                // Update the state
                setLabyrinth(updatedLabyrinth)
                setPlayerPosition([newRow, newCol])

                // Update json
                updateLabyrinth(updatedLabyrinth)
            }
        }
    }

    // listen to key arrows
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            movePlayer(event.key)
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [playerPosition, labyrinth])

    // change timer
    useEffect(() => {
        let timer: number
        if (isRunning) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 59) {
                        setMinutes((prevMinutes) => prevMinutes + 1)
                        return 0
                    }
                    return prevSeconds + 1
                })
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [isRunning])

    return (
        <div
            className="conatiner text-center labyrinth"
            style={{
                background: 'black',
                color: 'white',
                minHeight: '100vh',
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <WinModal show={endGame} />
            <div
                className="row justify-content-center"
                style={{ display: 'flex', width: '1200px', marginBottom: '50px' }}
            >
                <div className="col">{name}</div>
                <div className="col">
                    <span style={{ fontSize: '' }}>
                        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                    </span>
                </div>
            </div>
            {level.map((row, rowIndex) => (
                <div className="row justify-content-center" style={{ maxWidth: '1000px' }} key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className={`cell ${getClassName(cell)}`}></div>
                    ))}
                </div>
            ))}
        </div>
    )
}
