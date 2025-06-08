import React from "react";

export const User = ({ id, name, comp,ids }) => {
  return (
    <div>
      <h3>{id}</h3>
      <h4>{name}</h4>
      <h5>{JSON.stringify(comp)}</h5>
      <h5>{ids}</h5>
    </div>
  );
};
