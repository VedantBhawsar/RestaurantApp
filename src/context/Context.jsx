import { createContext, useReducer, useState } from 'react'
import initialState from './initialState.js'
import reducer from './reducer.js'


const INITIAL_STATE = initialState;

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state])

    return (
        <Context.Provider
            value={{ state, dispatch }}
        >
            {children}
        </Context.Provider>
    )
}