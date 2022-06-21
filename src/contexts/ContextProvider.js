import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initailState = {
    chat: false, cart: false, useProfile: false, notification: false
};

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initailState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (evt) => {
        setCurrentMode(evt.target.value);
        localStorage.setItem('themeMode', evt.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setIsClicked(prevState => ({...prevState, [clicked]: !prevState[clicked]}));
    }

    return (<StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                themeSettings,
                setThemeSettings,
                setColor,
                setMode,
                handleClick
            }}>
            {children}
        </StateContext.Provider>);
}

export const useStateContext = () => useContext(StateContext);
