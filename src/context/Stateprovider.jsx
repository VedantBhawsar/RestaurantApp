import React, { createContext, useReducer, useContext } from "react";
import { useInRouterContext } from "react-router-dom";


export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);