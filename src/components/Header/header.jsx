import React, { useState } from "react";
import obrasArte from "../data";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredDescriptions, setFilteredDescriptions] = useState([]);

  const handleSearch = () => {
    const searchTerms = searchTerm.toLowerCase();

    const filteredProducts = obrasArte.filter((obra) =>
      obra.name.toLowerCase().startsWith(searchTerms)
    );
    const filteredDescriptions = obrasArte.filter((obra) =>
      obra.description.toLowerCase().startsWith(searchTerms)
    );

    setFilteredProducts(filteredProducts);
    setFilteredDescriptions(filteredDescriptions);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar obras de arte"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>

      {filteredProducts.map((obra) => (
        <div key={obra.id}>
          <h2>{obra.name}</h2>
          <img src={obra.image} alt={obra.name} />
          <p>Descrição: {obra.description}</p>
          <p>Preço: ${obra.price}</p>
        </div>
      ))}

      {filteredDescriptions.map((obra) => (
        <div key={obra.id}>
          <h2>{obra.name}</h2>
          <img src={obra.image} alt={obra.name} />
          <p>Descrição: {obra.description}</p>
          <p>Preço: ${obra.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Header;
