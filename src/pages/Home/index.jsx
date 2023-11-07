import React from "react";
import { Link } from "react-router-dom";
import obrasArte from "../../data";

const Home = () => {
  return (
    <div>
      <h1>O que esta procurando?</h1>
      <div className="lista-obras">
        {obrasArte.map((obra) => (
          <Link to={`/produtos/${obra.id}`} key={obra.id}>
            <h2>{obra.name}</h2>
            <img src={obra.image} alt={obra.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
