import { useLabyrinth } from "../hooks/useLabyrinth"
import { LabyrinthComponent } from "./labyrinth/Labyrinth";


export function GameScreen(){
    const {labyrinth} = useLabyrinth(); 


    if (!labyrinth?.easy) {
        return <div>Loading...</div>;
      }
    
      return <LabyrinthComponent level={labyrinth.easy} />;
}