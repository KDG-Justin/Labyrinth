import { Link } from "react-router-dom";


export function PlayScreen(){
    return (
    <div className="container-fluid" style={{background: 'black', color: 'white', minHeight: '100vh', padding: 0, overflow: 'hidden'}}>        
        <div className="row justify-content-center" style={{minHeight: '100vh'}}>
            <div className="col d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column">
                        <Link to={'/play/easy'} style={{textDecoration: 'none'}}>
                        <h4 className="mt-4 mb-4" style={{color: 'darkgreen'}}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >Easy</h4>
                        </Link>
                
                        
                </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
                <h1 style={{color: 'white', fontSize: '64px', marginBottom: '320px'}}>Difficulty</h1>
            </div>
        </div>
    </div>
)
}