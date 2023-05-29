import React, { useTransition } from "react";

function TabButton({ children, onClick, isActive }) {
  const [isPending, startTransition] = useTransition();

  if (isPending) {
    return <span style={{color: "red"}}>{children}</span>;
  }

  if (isActive) {
    return <b>{children}</b>;
  }
  return (
    <button
      onClick={() => {
        startTransition(() => {
            onClick();
        })        
      }}
    >
      {children}
    </button>
  );
}

export default TabButton;
