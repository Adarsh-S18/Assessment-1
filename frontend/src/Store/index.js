import react, { createContext, useState } from 'react'


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [state, setState] = useState({})
    const addMovies = async () => {

    }
    const deleteMovies = async () => {

    }

    return <AppContext.Provider value={{ addMovies, deleteMovies ,state}}>
        {children}
    </AppContext.Provider>
}