import { cloneElement } from "react";

export default function Loading({ children, loading, error }) {
  const elementType = children?.type?.render?.displayName;
  const renderHandler = () => {
    if (elementType === "Button") {
      const cloneButton = cloneElement(
        children,
        { disabled: true },
        "Loading..."
      );
      return (
        <>
          {loading ? (
            cloneButton
          ) : error ? (
            <>
            {children}
            <p>{error}</p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {loading ? (
          <p>loading please wait...</p>
        ) : error ? (
          <p colSpan={3}>{error}</p>
        ) : (
          children
        )}
      </>
    );
  };
  return renderHandler();
}
