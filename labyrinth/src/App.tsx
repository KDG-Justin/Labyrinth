import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StartScreen from './components/StartScreen'
import DoNotClickScreen from './components/DoNotClickScreen'
import { PlayScreen } from './components/PlayScreen'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import 'bootstrap/dist/css/bootstrap.min.css';
import NameContextProvider from './context/NameContextProvider'
import { LeaderboardScreen } from './components/LeaderboardScreen'
import { GameScreen } from './components/GameScreen'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
const queryClient = new QueryClient()



function App() {

    return (
            <QueryClientProvider client={queryClient}>
                <NameContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<StartScreen />} />
                            <Route path="/not" element={<DoNotClickScreen />} />
                            <Route path="/play" element={<PlayScreen />} />
                            <Route path="/leaderboard" element={<LeaderboardScreen />} />
                            <Route path="/play/:id" element={<GameScreen />} />
                        </Routes>
                    </BrowserRouter>
                </NameContextProvider>
            </QueryClientProvider>
    )
}

export default App
