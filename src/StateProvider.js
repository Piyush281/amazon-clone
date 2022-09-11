import React, {createContext, useContext, useReducer} from 'react';

// we need to prepare the data layer 
export const StateContext = createContext();

// wrap the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is used for pull the information from the data layer
export const useStateValue = () =>useContext(StateContext);

