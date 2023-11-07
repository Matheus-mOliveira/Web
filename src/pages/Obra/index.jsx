import React from "react";

const Obra = ({ obra }) => {
  return (
    <div>
      <h2>{obra.name}</h2>
      <img src={obra.image} alt={obra.name} />
      <p>Descrição: {obra.description}</p>
      <p>Preço: ${obra.price}</p>
    </div>
  );
};

export default Obra;
