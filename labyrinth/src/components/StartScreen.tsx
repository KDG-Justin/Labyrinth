import { Link } from "react-router-dom";



export default function StartScreen(){
    return (
        <div className="container-fluid" style={{background: 'black', color: 'white', minHeight: '100vh', padding: 0, overflow: 'hidden'}}>
  <div className="row justify-content-center" style={{minHeight: '100vh'}}>
    <div className="col d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column">
        <Link to={'/play'} style={{textDecoration: 'none'}}>
        <h4 className="mt-4 mb-4" style={{color: 'white'}}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)'; // Vergroot de tekst bij hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Herstel de tekstgrootte
          }}
        >Play</h4>
        </Link>

        <Link to={'/leaderboard'} style={{textDecoration: 'none'}}>
        <h4 className="mt-4 mb-4" style={{color: 'white'}}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >Leaderboard</h4>
        </Link>


        <Link to={'/not'} style={{textDecoration: 'none'}}>
        <h4 className="mt-4 mb-4" style={{color: 'white'}}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >DO NOT CLICK</h4>
        </Link>
      </div>
    </div>
    <div className="col d-flex justify-content-center align-items-center">
      <h1 style={{color: 'darkred', fontSize: '64px'}}>Labyrinth</h1>
    </div>
  </div>
</div>
    )
}