import React from "react";

export const overlay: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  backdropFilter: "blur(4px)",
  position: "fixed",
  zIndex: "1000",
  transition: "all 500ms ease-in-out",
};
export const content: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  boxSizing: "border-box",
  background: "rgb(64,59,112)",
  maxWidth: "300px",
  height: "85%",
  padding: 0,
  transition: "all 500ms ease-in-out",
};
