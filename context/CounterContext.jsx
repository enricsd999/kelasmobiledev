import { createContext, useState } from 'react';

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const tambah = () => setCount(count + 1);
  const kurang = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, tambah, kurang, reset }}>
      {children}
    </CounterContext.Provider>
  );
}
