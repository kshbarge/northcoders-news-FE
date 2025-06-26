import { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const loggedInUser = { username: 'weegembump' };

  return (
    <UserContext.Provider value={{loggedInUser}}>
      {children}
    </UserContext.Provider>
  )
}