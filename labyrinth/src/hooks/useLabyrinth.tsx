import { useQuery } from "@tanstack/react-query";
import { Labyrinth } from "../model/Labyrinth";
import { getLabyrinth } from "../services/LabyrinthService";


export function useLabyrinth(id: string){
    const {data: labyrinth, isError, isLoading} = useQuery<Labyrinth>(
        ["labyrinth"],
        () => getLabyrinth(id),
        {refetchInterval: 100}
    )

    return {labyrinth, isError, isLoading}
}