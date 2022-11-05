// import { Button, ButtonGroup } from "react-bootstrap";

export default function Loading({ children, loading, error }) {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p colSpan={3}>{error}</p>
      ) : (
        children
      )}
    </>
  );
}
