"use client"
import { fetchCurrentUser } from '@/lib/appwrite/user';
import { createContext, useState, useEffect, useContext } from 'react';

// Create a context with default values for user and loading state
const UserContext = createContext({
  user: null,
  loading: true,
  setUser: () => {},
  setLoading: () => {}
});

// UserContext Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user with hardcoded data
  useEffect(() => {
    (async () => {
        try {
            
            const currentUser = await fetchCurrentUser();
            console.log('fetching user contet',currentUser);
            setUser(currentUser);
        } catch (error) {
            console.log('context Error',error.message);
            setUser(null)
        }
        finally {
            setLoading(false);
        }
    })()
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, setUser, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
