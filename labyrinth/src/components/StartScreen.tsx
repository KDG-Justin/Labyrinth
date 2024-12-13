

export function StartScreen(){
    return (
        <div className="container mt-5">
            <div className="row justify-content-evenly">
                <div className="col">
                    <div className="d-flex flex-column">
                    <h4 className="mt-4 mb-4 p2">Play</h4>
                    <h4 className="mt-4 mb-4 p2">Settings</h4>
                    <h4 className="mt-4 mb-4 p2">DO NOT CLICK</h4>
                    </div>
                </div>
                <div className="col">
                    <h1 style={{color: 'darkred', fontSize: '64px'}}>Labyrinth</h1>
                </div>
            </div>
        </div>
    )
}