import React, { createContext } from "react";

// context
export const AppContext = createContext();

//context provider
function AppProvider(props) {

    let data = {
        x: 12,
        y: 20,
        title: "welcome to string title"
    }
    
  // props.children -> all components we need to pass as a child components
  return <AppContext.Provider value={{}}>
    { props.children }
  </AppContext.Provider>;
}

export default AppProvider;
                      