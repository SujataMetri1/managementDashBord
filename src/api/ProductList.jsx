import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ onSelect }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://dummyjson.com/products?limit=20");
      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <>
        <p>Error: {error}</p>
        <button onClick={fetchProducts}>Retry</button>
      </>
    );

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onClick={() => onSelect(p.id)} />
      ))}
    </div>
  );
}