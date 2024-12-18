import { useParams } from "react-router-dom";
import { useLabyrinth } from "../hooks/useLabyrinth";
import { LabyrinthComponent } from "./labyrinth/Labyrinth";


export function GameScreen(){
   const {id} = useParams();
  const {labyrinth} = useLabyrinth(id!); 


    if (!labyrinth?.level) {
        return <div>Loading...</div>;
      }
    
      return <LabyrinthComponent id={id!} level={labyrinth.level} />;
}