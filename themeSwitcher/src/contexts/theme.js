import { useContext , createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // We can variable values
    darkTheme : () => {}, // As well as we can give methods
    lightTheme : () => {},
});


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}
