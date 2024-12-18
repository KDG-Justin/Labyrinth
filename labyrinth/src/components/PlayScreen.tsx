import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import NameContext from '../context/NameContext'

export function PlayScreen() {
    const { name, setName } = useContext(NameContext)
    const [inputValue, setInputValue] = useState(name)

    const handleSaveName = () => {
        setName(inputValue)
    }

    return (
        <div
            className="container-fluid"
            style={{ background: 'black', color: 'white', minHeight: '100vh', padding: 0, overflow: 'hidden' }}
        >
            <div className="row justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <h1 style={{ color: 'white', fontSize: '64px', marginBottom: '130px' }}>Name</h1>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter name"
                        style={{
                            padding: '10px',
                            fontSize: '18px',
                            borderRadius: '5px',
                            border: '1px solid #fff',
                            marginBottom: '20px',
                            width: '250px',
                            textAlign: 'center',
                        }}
                    />

                    <button
                        onClick={handleSaveName}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: 'darkgreen',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Save
                    </button>
                    {name && <p style={{ marginTop: '20px', fontSize: '24px', color: 'green' }}>You ar ready, {name}!</p>}
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <div className="">
                        <h1 style={{ color: 'white', fontSize: '64px', marginBottom: '100px' }}>Difficulty</h1>
                    </div>
                    <div className="d-flex flex-column">
                        <Link to={'/play/easy'} style={{ textDecoration: 'none' }}>
                            <h4
                                className="mt-4 mb-4"
                                style={{ color: 'darkgreen' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)'
                                }}
                            >
                                Easy
                            </h4>
                        </Link>
                        <h4
                            className="mt-4 mb-4"
                            style={{ color: 'orange' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)'
                            }}
                        >
                            Medium
                        </h4>
                        <h4
                            className="mt-4 mb-4"
                            style={{ color: 'darkred' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)'
                            }}
                        >
                            Hard
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
