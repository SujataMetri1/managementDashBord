import { useEffect, useMemo, useState } from "react";

export default function ProductDetail({ id, onClose }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const discountedPrice = useMemo(() => {
    if (!product) return 0;
    return product.price * (1 - product.discountPercentage / 100);
  }, [product]);

  const stockStatus = useMemo(() => {
    if (!product) return "";

    if (product.stock === 0) return "Out of Stock";
    if (product.stock < 10) return "Low Stock";
    return "In Stock";
  }, [product]);

  if (!product) return null;

  return (
    <div className="detail">
      <button onClick={onClose}>Close</button>
      <h2>{product.title}</h2>
      <p>Original: ${product.price}</p>
      <p>Discounted: ${discountedPrice.toFixed(2)}</p>
      <p>Status: {stockStatus}</p>
      <p>{product.description}</p>
    </div>
  );
}