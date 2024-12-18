import { createContext } from "react"


export interface NameContext {
    name: string;
    setName: (newName: string) => void;
    createName: () => void;
}

export default createContext<NameContext>({
    name: "",
    setName: () => {},
    createName: () => {}
})