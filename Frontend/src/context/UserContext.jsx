import { Children, createContext, useContext, useState } from 'react';

const userContext = createContext

export const userProvider =({Children}) =>{
    const [usename , setUsername] = useState(null)
    return(
        <useContext.Provider  value={{ username , setUsername}}>
           
           { Children}
          
        </useContext.Provider>
      
    )
}