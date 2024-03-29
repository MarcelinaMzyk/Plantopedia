import React, { useReducer } from "react";
import { context } from "./Context.js";

export const ContextProvider = (props) => {
    const initialState = {
        visibleSection: null,
        plantInf: [],
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_VISIBLE_SECTION": {
                return { ...state, visibleSection: action.payload };
            }
            case "SET_PLANT_INFORMATION": {
                return { ...state, plantInf: action.payload };
            }
            default: {
                return state;
            }
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <context.Provider value={{ state, dispatch }}>
            {props.children}
        </context.Provider>
    );
};
