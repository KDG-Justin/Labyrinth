import axios from "axios"
import { Labyrinth } from "../model/Labyrinth"


export async function getLabyrinth() {
    console.log("Getting labyrinth...");
    const response = await axios.get<Labyrinth>(`/labyrinth`);
    return response.data;
}

export async function updateLabyrinth(labyrinth : string[][]){
    console.log("Updating labyrinth...")
    let updatedLabyrinth: Labyrinth = {
        easy: labyrinth
    }
    await axios.put<Labyrinth>(`/labyrinth`, updatedLabyrinth);
}