import axios from "axios"
import { Labyrinth } from "../model/Labyrinth"
import { Player } from "../model/Player";


export async function getLabyrinth(id: string) {
    console.log("Getting labyrinth...");
    const response = await axios.get<Labyrinth>(`/labyrinth/${id}`);
    return response.data;
}

export async function updateLabyrinth(id: string, labyrinth : string[][]){
    console.log("Updating labyrinth...")
    let updatedLabyrinth: Labyrinth = {
        id: id,
        level: labyrinth
    }
    await axios.put<Labyrinth>(`/labyrinth/${id}`, updatedLabyrinth);
}

export async function getPlayers(){
    console.log("Getting players...");
    const response = await axios.get<Player[]>(`/player`);
    return response.data;
}

export async function addPlayer(minutes: string, seconds: string, name: string, id: number, level: string){
    console.log("Saving time...");
    let player: Player = {
        id: id.toString(),
        name: name,
        time: {
            seconds: seconds,
            minutes: minutes
        },
        level: level

    }
    await axios.post<Player>(`/player`, player);
}