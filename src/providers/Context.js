import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

const initialState = {
  search: "all"
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'search':
      return {
        ...state,
        search: action.search
      };

    default:
      return state;
  }
};

export const StateProvider = ({children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);