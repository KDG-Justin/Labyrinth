import axios from "axios"
import { Labyrinth } from "../model/Labyrinth"
import { Player } from "../model/Player";


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

export async function getPlayers(){
    console.log("Getting players...");
    const response = await axios.get<Player[]>(`/player`);
    return response.data;
}

export async function addPlayer(minutes: string, seconds: string, name: string, id: number){
    console.log("Saving time...");
    let player: Player = {
        id: id.toString(),
        name: name,
        time: {
            seconds: seconds,
            minutes: minutes
        }

    }
    await axios.post<Player>(`/player`, player);
}