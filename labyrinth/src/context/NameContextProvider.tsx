import { ReactElement } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import NameContext from './NameContext'

export interface WithChildren {
    children: ReactElement | ReactElement[]
}

export default function NameContextProvider({ children }: WithChildren) {
    const [name, setName] = useLocalStorage('name', '')

    const createName = () => setName('')

    return <NameContext.Provider value={{ name, setName, createName }}>{children}</NameContext.Provider>
}
