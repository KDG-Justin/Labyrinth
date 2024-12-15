import { useQuery } from "@tanstack/react-query";
import { Labyrinth } from "../model/Labyrinth";
import { getLabyrinth } from "../services/LabyrinthService";


export function useLabyrinth(){
    const {data: labyrinth, isError, isLoading} = useQuery<Labyrinth>(
        ["labyrinth"],
        () => getLabyrinth(),
        {refetchInterval: 100}
    )

    return {labyrinth, isError, isLoading}
}