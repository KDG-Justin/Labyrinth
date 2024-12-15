import { Link } from 'react-router-dom'
import flightGif from '../../assets/img/flight.gif'

interface winModalProps{
    show: boolean
}
export function WinModal({show} : winModalProps) {
    if(!show) return null; 
    return (
        <div className="container">
    <div
        className="modal show"
        id="exampleModal"
        style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Verduistering van achtergrond
            height: "100vh",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <div
            className="modal-dialog"
            style={{
                maxWidth: "500px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
            }}
        >
            <div
                className="modal-content"
                style={{
                    backgroundColor: "#4a4a4a", // Grijze achtergrond
                    color: "white", // Witte tekst
                }}
            >
                <div
                    className="modal-header"
                    style={{
                        backgroundColor: "#333",
                        borderBottom: "1px solid #666",
                        padding: "20px",
                        textAlign: "center",
                    }}
                >
                    <h1
                        className="modal-title fs-5"
                        id="exampleModalLabel"
                        style={{ fontSize: "24px", fontWeight: "bold" }}
                    >
                        Congratulations!!!
                    </h1>
                </div>
                <div
                    className="modal-body"
                    style={{
                        padding: "20px",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={flightGif}
                        alt="flight"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "5px",
                        }}
                    />
                </div>
                <div
                    className="modal-footer"
                    style={{
                        justifyContent: "center",
                        padding: "20px",
                        backgroundColor: "#333",
                        borderTop: "1px solid #666",
                    }}
                >
                    <Link to={`/`}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{
                                backgroundColor: "#ff9800",
                                borderColor: "#ff9800",
                                color: "#fff",
                                padding: "10px 20px",
                                fontSize: "16px",
                                fontWeight: "bold",
                                borderRadius: "5px",
                            }}
                        >
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
