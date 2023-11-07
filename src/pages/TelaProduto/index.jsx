import React from "react";
import { Link, useParams } from "react-router-dom";
import obrasArte from "../../data";
import "./styles.css";

const TelaProduto = () => {
  const { id } = useParams();

  const obra = obrasArte.find((obra) => obra.id === Number(id));

  return (
    <div className="imgProduto">
      <h1>{obra.name}</h1>
      <img src={obra.image} alt={obra.name} />
      <p>Descrição: {obra.description}</p>
      <p>Preço: ${obra.price}</p>
      <Link to="/">Voltar para a lista de obras</Link>
    </div>
  );
};

export default TelaProduto;
