import { Link } from 'react-router-dom'
import flightGif from '../assets/img/flight.gif'

export default function DoNotClickScreen() {
    return (
        <div
            className="container-fluid"
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
            <img src={flightGif} alt="flight"></img>
            <Link to={`/`}>
                <button type="button" className="btn btn-primary">
                    Go Home
                </button>
            </Link>
        </div>
    )
}
