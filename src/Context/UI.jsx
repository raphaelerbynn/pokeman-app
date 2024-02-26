import { createContext, useState } from "react";

export const UiContext = createContext(null)

// eslint-disable-next-line react/prop-types
export const UiProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useState("#E85382")

    const contextVals = {
        themeColor, setThemeColor
    }

    return (
        <UiContext.Provider value={contextVals}>{children}</UiContext.Provider>
      );
};

