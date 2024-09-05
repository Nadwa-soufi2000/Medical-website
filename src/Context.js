import { useState } from "react";
import { createContext } from "react";

export const Person = createContext({});

export default function Context({children}) 
{
    const[auth , setAuth] = useState({});
    return <Person.Provider value={{auth, setAuth}}>{children}</Person.Provider>;
}