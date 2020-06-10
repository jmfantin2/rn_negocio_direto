import React, { createContext, useState, useContext } from "react";

const SubmitionContext = createContext();

export default function SubmitionProvider({ children }) {
  const [submitAllowed, allowSubmit] = useState(false);

  return (
    <SubmitionContext.Provider
      value={{
        submitAllowed,
        allowSubmit,
      }}
    >
      {children}
    </SubmitionContext.Provider>
  );
}

export function useSubmition() {
  const context = useContext(SubmitionContext);
  if (!context)
    throw new Error("useSubmition must be used within a SubmitionProvider");
  const { submitAllowed, allowSubmit } = context;
  return { submitAllowed, allowSubmit };
}
