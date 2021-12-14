import React from 'react';
/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
export function createContext<A extends {} | null>() {
  const context = React.createContext<A | undefined>(undefined);
  function useContext() {
    const c = React.useContext(context);
    if (c === undefined)
      throw new Error('useContext must be inside a Provider with a value');
    return c;
  }
  return [useContext, context] as const; // 'as const' makes TypeScript infer a tuple
}
