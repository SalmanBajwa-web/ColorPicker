import React, { useContext, useEffect, useState, useReducer, useCallback } from 'react';

import Values from 'values.js'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    // ############### state
    const [color, setColor] = useState('#ff0000');
    const [countBox, setCountBox] = useState(6);
    const [colorArr, SetColorArr] = useState(new Values('red').all(6));
    
  

    // ############func
    function generateRandomColor(){
        let maxVal = 0xFFFFFF; // 16777215.
        let randomNumber = Math. random() * maxVal;
        randomNumber = Math. floor(randomNumber);
        randomNumber = randomNumber. toString(16);
        let randColor = randomNumber. padStart(6, 0);
         setColor(`#${randColor. toUpperCase()}`);
        }
    // ###########effect
    useEffect(() => {
        SetColorArr(new Values(color).all(parseInt(countBox)));
    }, [countBox,color])
    

    return (
        <AppContext.Provider value={{
            colorArr,
            color, setColor,
            countBox, setCountBox,
            generateRandomColor,
        }}>

            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}