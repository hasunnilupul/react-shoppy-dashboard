import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initailState = {
    chat: false,
    cart: false,
    useProfile: false,
    notification: false
};

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initailState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked(prevState => ({...prevState, [clicked]: !prevState[clicked]}));
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                screenSize,
                setScreenSize,
                handleClick
            }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
