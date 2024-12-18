import { usePlayer } from "../hooks/usePlayer"

export function LeaderboardScreen() {
    const {players} = usePlayer();

    if (!players) return (<div>Loading...</div>)

    return (
        <div
            className="container-fluid text-center"
            style={{ background: 'black', color: 'white', minHeight: '100vh', padding: 0, overflow: 'hidden', alignItems: 'center'}}
        >
            <div className="col d-flex justify-content-end align-items-end">
      <h1 style={{color: 'darkred', fontSize: '64px'}}>Leaderboard</h1>
    </div>
            <div className="row justify-content-center" style={{ maxWidth: '1200px', display: 'flex', marginBottom: '60px', marginTop: '60px'}}>
                    <div className="col" style={{color: 'darkred', fontSize: '36px'}}>Name</div>
                    <div className="col" style={{color: 'darkred', fontSize: '36px'}}>Level</div>
                    <div className="col"style={{color: 'darkred', fontSize: '36px'}}>Time</div>
                </div>
            {players.map(({name, level,time}, index) => (
                <div className="row justify-content-center" style={{ maxWidth: '1200px', display: 'flex', marginBottom: '30px'}} key={index}>
                    <div className="col">{name}</div>
                    <div className="col">{level}</div>
                    <div className="col">
                    {String(time.minutes).padStart(2, '0')}:
                    {String(time.seconds).padStart(2, '0')}
                    </div>
                </div>
            ))}
            
        </div>
    )
}
