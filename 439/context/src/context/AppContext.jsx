import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);
    const toggleMode = () => { setIsDark(!isDark) }

    return (
        <AppContext.Provider value={{ isDark, toggleMode }}>
            {children}
        </AppContext.Provider>
    );
};


export { AppContext, AppProvider }


// login page
// register page
// all tasks page
// done Tasks page
// inProgress Tasks page