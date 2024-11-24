'use client'; // Required for client-side context usage

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context's data
interface GlobalContextType {
  user: string | null; // Example: current user
  setUser: (user: string | null) => void; // Function to update user
  counter: number; // Example: counter state
  incrementCounter: () => void; // Function to increment counter
}

// Create the context with default values
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [counter, setCounter] = useState<number>(0);

  // Function to increment the counter
  const incrementCounter = () => setCounter((prev) => prev + 1);

  return (
    <GlobalContext.Provider value={{ user, setUser, counter, incrementCounter }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
