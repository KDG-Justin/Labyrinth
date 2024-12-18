import { useQuery } from "@tanstack/react-query"
import { Player } from "../model/Player"
import { getPlayers } from "../services/LabyrinthService"


export function usePlayer(){
    const {data: players, isError, isLoading} = useQuery<Player[]>(
            ["players"],
            () => getPlayers(),
            {refetchInterval: 1000}
        )
    
        return {players, isError, isLoading}
}