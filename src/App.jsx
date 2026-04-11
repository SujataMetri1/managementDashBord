import { useState } from "react";
import ProductCard from "./api/ProductCard";
import ProductDetail from "./api/ProductDetails";
import ProductList from "./api/ProductList";
import SearchBar from "./api/SearchBar";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div>
      <SearchBar onResults={setSearchResults} />

      <ProductList
        key={searchResults ? "search" : "default"}
        onSelect={setSelectedId}
        productsOverride={searchResults}
      />

      {selectedId && (
        <ProductDetail id={selectedId} onClose={() => setSelectedId(null)} />
      )}
    </div>
  );
}

export default App;